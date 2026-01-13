import { Html, Head, Body, Tailwind } from "@react-email/components";
import * as React from "react";
import { formData } from "@/src/types";

interface ClientFollowUpProps {
  data: formData;
}

export default function ClientFollowUp({ data }: ClientFollowUpProps) {
  const displayGoal = data.primaryGoal 
    ? data.primaryGoal.replace(/_/g, ' ') 
    : data.customGoal || "Executive Wellness";

  return (
    <Html>
      <Tailwind>
        <Head />
        <Body>
          <div className="bg-[#FDFBF7] font-sans py-10 px-4 min-h-screen text-[#1A202C]">
            <div className="max-w-[600px] mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              
              {/* Header Section */}
              <div className="bg-[#1A202C] p-10 text-center">
                <p className="text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase m-0 mb-3">
                  J&I Elite
                </p>
                <h1 className="text-white text-3xl font-serif font-light m-0 tracking-tight">
                  Request Received
                </h1>
                <p className="text-[#C5A059]/80 text-[11px] font-medium tracking-[0.15em] uppercase mt-3 italic">
                  World-class care you usually travel for
                </p>
              </div>

              {/* Content Body */}
              <div className="p-10 text-center">
                <p className="text-[#1A202C] text-xl font-serif mb-6">
                  Hello {data.fullName.split(' ')[0]},
                </p>
                
                <p className="text-gray-600 text-base leading-relaxed mb-8 px-4">
                  Your request for a private assessment regarding <span className="text-[#1A202C] font-semibold">{displayGoal}</span> has been successfully prioritized. We understand the level of discretion and excellence you require.
                </p>

                <div className="w-12 h-px bg-[#C5A059] mx-auto mb-8"></div>

                <div className="mb-10">
                  <p className="text-[#1A202C] text-lg font-serif mb-3">
                    Personal Consultation
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                    Dr. Ann has been personally notified. She is currently reviewing your inquiry and will be in contact with you shortly.
                  </p>
                </div>

                {/* Status Badge */}
                <div className="inline-block border border-[#C5A059]/20 bg-[#FDFBF7] px-8 py-3 rounded-sm">
                  <p className="text-[10px] text-[#C5A059] font-bold uppercase tracking-[0.2em] m-0">
                    Awaiting Dr. Ann’s Outreach
                  </p>
                </div>
              </div>

              {/* Summary Divider */}
              <div className="bg-gray-50 border-t border-b border-gray-100 p-8 flex justify-center gap-12">
                <div className="text-center">
                  <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest m-0 mb-1">Inquiry Focus</p>
                  <p className="text-[#1A202C] text-xs font-medium capitalize">{displayGoal}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-10 text-center">
                <p className="text-gray-400 text-[10px] m-0 leading-loose tracking-wide">
                  ESTABLISHED EXCELLENCE • J&I ELITE CONCIERGE <br />
                  <span className="text-[#1A202C] font-semibold mt-2 block">
                    CONFIDENTIALITY ASSURED
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