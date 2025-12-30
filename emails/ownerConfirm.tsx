import { Html, Head, Body, Tailwind } from "@react-email/components";
import * as React from "react";
import { formData } from "@/src/types";


  interface OwnerConfirmProps {
    data: formData;
  }
  
export default function OwnerConfirmEmail({data} : OwnerConfirmProps) {

    // data = {
    //     fullName: "Aisha Mohammed",
    //     phoneNumber: "+2348031234567",
    //     primaryGoal: "executive_core_revival",
    //     contactOption: "WhatsApp",
    //     email: 'aisha@gmail.com',
    //     bookingType:'self'
    //   }
    console.log(`form details: ${data}`)
      
    const timestamp = new Date().toLocaleString('en-GB', { 
        timeZone: 'UTC',
        dateStyle: 'full',
        timeStyle: 'short' 
    });

    // Logic: Format the goal display
    const displayGoal = data.primaryGoal ? data.primaryGoal.replace(/_/g, ' ') : data.customGoal || "General Inquiry";

  return (
    <Html>
    <Tailwind>
    <Head />
      <Body>
      <div className="bg-[#FDFBF7] font-sans py-10 px-4 min-h-screen text-[#1A202C]">
      <div className="max-w-[600px] mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-[#1A202C] p-8 text-center">
          <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.25em] uppercase m-0 mb-2">
            J&I Elite
          </p>
          <h1 className="text-white text-2xl font-serif font-light m-0 tracking-tight">
            New Lead Notification
          </h1>
        </div>

        {/* Content Body */}
        <div className="p-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Dr. Ann, a new private assessment request has been submitted.
            <span className="block text-sm text-gray-400 mt-1 italic font-normal">
              Status: Awaiting Concierge Response
            </span>
          </p>

          {/* Lead Summary Card */}
          <div className="bg-[#FDFBF7] border border-gray-200 rounded-2xl p-6 mb-8 shadow-inner">
            <div className="mb-6">
              <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest mb-1">
                Client Identity
              </p>
              <p className="text-[#1A202C] text-xl font-serif m-0 border-b border-gray-200 pb-2">
                {data.fullName}
              </p>
            </div>

            <div className="flex w-full mb-6 gap-4">
              <div className="w-1/2">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter m-0">Inquiry Focus</p>
                <p className="text-[#1A202C] text-sm font-medium capitalize mt-1 leading-tight">{displayGoal}</p>
              </div>
              <div className="w-1/2">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter m-0">Contact Via</p>
                <p className="text-[#1A202C] text-sm font-medium mt-1">{data.contactOption || "WhatsApp"}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter m-0">Verified Phone</p>
              <p className="text-[#1A202C] text-lg font-bold font-mono mt-1 tracking-tight">{data.phoneNumber}</p>
            </div>
          </div>

          <div className="w-12 h-px bg-gray-200 mx-auto mb-8"></div>

          {/* Direct Response Actions */}
          <div className="text-center">
            <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-4">
              Immediate Response Actions
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${data.phoneNumber}`}
                className="bg-[#C5A059] text-white px-8 py-3 rounded-md font-bold text-xs uppercase tracking-widest no-underline transition-opacity hover:opacity-90 inline-block min-w-[160px]"
              >
                Call Lead
              </a>
              
              <a
                href={`https://wa.me/${data.phoneNumber.replace(/\D/g, '')}`}
                className="bg-[#25D366] text-white px-8 py-3 rounded-md font-bold text-xs uppercase tracking-widest no-underline transition-opacity hover:opacity-90 inline-block min-w-[160px]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Audit Footer */}
        <div className="bg-gray-50 p-8 text-center border-t border-gray-200">
          <p className="text-gray-400 text-[10px] m-0 leading-loose">
            RECORDED AT {timestamp} UTC <br />
            SOURCE: Concierge-V5-Contact-Form <br />
            <span className="text-[#C5A059] font-bold uppercase tracking-widest mt-2 block">
              Strictly Confidential • Internal Use Only
            </span>
          </p>
        </div>

      </div>
    </div>

      </Body>
    </Tailwind>
    </Html>
  );
}