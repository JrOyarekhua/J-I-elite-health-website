import { Resend } from "resend";
import OwnerConfirmEmail from "@/emails/ownerConfirm";
import ClientFollowUp from "@/emails/ClientFollowUp";
import { formData } from "@/src/types";
import { render, pretty } from "@react-email/render";

export async function POST(req: Request) {
  const body: formData = await req.json();

  const resend = new Resend(`${process.env.RESEND_API_KEY}`);

  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!fromEmail) throw new Error("RESEND_FROM_EMAIL is not set");

  const doctorHtml = await render(<OwnerConfirmEmail data={body}/>)
  const userHtml = await render(<ClientFollowUp data={body}/>)
  try {
    console.log("sending email...");

    const { data, error } = await resend.batch.send([
      // forwarding email to dr ann
      {
        from: "Dr.Ann <contact@jielitehealth.com>",
        to: "annudofia@gmail.com",
        subject: `New contact from ${body.fullName}`,
        html: doctorHtml,
      },
      {
        from: "Dr.Ann <contact@jielitehealth.com>",
        to: body.email,
        subject: `Your J&I Elite Inquiry: World-Class Care is Coming to You`,
        html: userHtml,
      }
      // sending conformation email to client (potentionally)
    ]);

    if (error) {
      console.log(error)
      return new Response(
        JSON.stringify({ message: "Error sending email", error: error }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ message: "email succesfully sent", data: data }),
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
