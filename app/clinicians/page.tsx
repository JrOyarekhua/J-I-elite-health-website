'use client'

import React from "react";
import { Typography,Button,Section } from "@/src/components/ui";
import { Activity, Baby, CheckCircle2, Stethoscope, Heart, User, ChevronDown, FileText } from "lucide-react";
import { CLINICIAN_INDICATIONS, getWhatsAppLink } from "@/src/constants";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()
  return (
    (
        <div className="bg-white animate-in fade-in duration-500">
          {/* Clinical Hero */}
          <div className="bg-main text-white py-24">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-accent font-bold tracking-widest text-xs uppercase">
                  <Stethoscope size={16} /> Partner Portal
                </div>
                <Typography variant="h1" color="text-white">
                  Advanced Clinical Partnerships for Complex Recovery.
                </Typography>
                <Typography variant="body" color="text-gray-300">
                We serve as a specialized clinical extension of your practice, handling the time-intensive rehabilitation required to optimize your surgical results.
                </Typography>
                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" className=" text-main " onClick={() => window.open(getWhatsAppLink(),'_blank')}>Refer a Patient (WhatsApp)</Button>
                  <Button variant="secondary" className="border-gray-500 text-gray-300 hover:border-white"  onClick={() => router.push('/programs')}>View Clinical Pathways</Button>
                </div>
              </div>
              <div className="bg-white/10 p-8 rounded border border-white/20">
                 <h3 className="font-serif text-2xl mb-4 text-accent">Retain Global Excellence</h3>
                 <p className="text-gray-300">Keep your patients within a trusted care loop by providing international-standard rehabilitation, eliminating the need for medical travel and ensuring local clinical continuity.
                 </p>
              </div>
            </div>
          </div>
      
          {/* Value Props */}
          <Section background="white" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Reduce "Revolving Door" Visits', desc: 'Offload chronic pain patients who consume 30+ mins of clinic time without surgical resolution.' },
                  { title: 'Protect Surgical Repairs', desc: 'We mobilize scar tissue early to prevent adhesions, ensuring your hysterectomy yields long-term comfort.' },
                  { title: 'Patient Retention', desc: 'Stop capital flight. Keep patients in your care loop instead of losing them to London.' }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-8 border-t-4 border-main">
                    <h3 className="font-serif text-xl text-main mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
      
          {/* Indications */}
          <Section background="white" className="py-12 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
              <Typography variant="h2" className="text-center mb-12">Clinical Indications for Referral</Typography>
              <div className="space-y-4">
                {CLINICIAN_INDICATIONS.map((ind, i) => (
                  <details key={i} className="group border border-gray-200 rounded overflow-hidden">
                    <summary className="flex justify-between items-center p-5 cursor-pointer bg-white hover:bg-gray-50">
                       <span className="font-bold text-[#1A202C] flex items-center gap-3">
                        <FileText size={18} className="text-accent"/>
                         {ind.category}
                       </span>
                       <span className="text-[#C5A059] group-open:rotate-180 transition-transform"><ChevronDown /></span>
                    </summary>
                    <div className="p-5 bg-gray-50 text-gray-700 text-sm border-t border-gray-200">
                      <span className="font-bold text-[#1A202C] mr-2">Diagnoses:</span> {ind.details}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Section>
        </div>
  ));
};

export default Page;
