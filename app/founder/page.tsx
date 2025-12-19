'use client'
import React from "react";
import { Section, Typography, Button } from "@/src/components/ui";
import { Award, Clock, Globe } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
  return (
  <div className="animate-in fade-in duration-500">
  {/* Founder Hero */}
  <Section background="cream" className="py-24">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1 relative">
         <div className="aspect-[3/4] bg-neutral-300 rounded-sm shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 flex items-center justify-center text-center p-8 text-neutral-600 bg-neutral-200">
             [Image: Dr. Ann Nwabuebo. <br/>Professional Headshot. Warm, authoritative, refined.]
           </div>
           {/* Credential Badge */}
           <div className="absolute bottom-6 right-6 bg-main text-white p-4 max-w-[200px] text-xs leading-relaxed border-l-2 border-accent">
             US Board Certified Clinical Specialist (WCS)
           </div>
         </div>
      </div>
      
      <div className="order-1 md:order-2 space-y-8">
        <Typography variant="h4" color="text-[#C5A059]">The Visionary</Typography>
        <Typography variant="h1">Dr. Ann Nwabuebo</Typography>
        <div className="flex gap-4 text-sm font-bold tracking-widest text-gray-400 border-b border-gray-200 pb-4">
          <span>PT</span> <span>DPT</span> <span>WCS</span>
        </div>
        
        <Typography variant="body" className="font-serif italic text-xl text-gray-600">
          &quot;This protocol was not built in a vacuum. It is the result of 20 years and 50,000 clinical hours treating women across the globe.&quot;
        </Typography>
        
        <Typography variant="body">
          Dr. Ann Nwabuebo is a US-Board Certified Women’s Health Specialist—a distinction held by less than 1% of physical therapists globally. She has spent decades decoding the physiological nuances of the African and Diaspora female body.
        </Typography>
        
        <div className="grid grid-cols-2 gap-6 pt-4">
           <div className="flex items-start gap-3">
              <Globe className="text-accent shrink-0" size={24} />
              <div className="text-sm text-gray-600"><strong>Global Experience</strong><br/>Stanford, Kaiser, UPenn</div>
           </div>
           <div className="flex items-start gap-3">
              <Clock className="text-accent shrink-0" size={24} />
              <div className="text-sm text-gray-600"><strong>50,000+ Hours</strong><br/>Clinical mastery & refinement.</div>
           </div>
        </div>
        
        <div className="pt-6">
          <Button variant="primary" onClick={() => router.push('/concierge')}>Request Consultation</Button>
        </div>
      </div>
    </div>
  </Section>

  {/* The Founder's Edge */}
  <Section background="white" className="py-24">
    <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
       <div className="w-16 h-16 bg-[#FDFBF7] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#C5A059]">
         <Award className="text-[#C5A059]" size={32} />
       </div>
       <Typography variant="h2">The Founder&apos;s Edge</Typography>
       <Typography variant="body" className="leading-loose">
         &quot;By partnering with healthcare leaders in the most advanced medical environments—including 
         <strong>Stanford Health Care</strong>, 
         <strong>Kaiser Permanente</strong>, and <strong>University of Pennsylvania</strong>—
         I have designed a best-in-class protocol that brings the pinnacle of global innovation directly to Abuja. 
         We don&apos;t just treat the symptoms; we treat the story your body is telling.&quot;
       </Typography>
       
       <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale">
          {/* Logos Repeated for Context */}
          {['Stanford Health Care', 'Kaiser Permanente', 'UPenn Medicine', 'George Washington'].map((val,idx) =>(
            <div key={idx} className=" font-primary font-bold text-center">{val}</div>
          ))}
       </div>
    </div>
  </Section>
</div>
);
;
};

export default Page;
