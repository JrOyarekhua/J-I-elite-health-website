import { Resend } from "resend";
import OwnerConfirmEmail from '@/emails/ownerConfirm';
import { formData } from "@/src/types";
import { render, pretty } from '@react-email/render';

export async function POST(req: Request) {

  const body: formData = await req.json();

  const resend = new Resend(`${process.env.RESEND_API_KEY}`);

  // Render the React Email component to HTML
  const html = await pretty(await render(<OwnerConfirmEmail data={body} />));
  
 

  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!fromEmail) throw new Error("RESEND_FROM_EMAIL is not set");


  try {
    console.log('sending email...')
    await resend.emails.send({
      from: fromEmail,
      to: 'gabriel.oyarekhua@gmail.com',
      subject: `New contact from ${body.fullName}`,
      html: html,
    });

    console.log('email sent !')

    return new Response(JSON.stringify({ success: true, message:'email succesfully sent' }), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
