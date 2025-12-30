import { Section, Typography } from "@/src/components/ui";
import React from "react";
import Image from "next/image"
import { Plane } from "lucide-react";

const Insight = () => {
  return (
    <Section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
           <div className="aspect-[4/5] bg-neutral-200 rounded-lg overflow-hidden relative shadow-lg">
           <Image 
            src={'/images/home/Main_Page_Sofisticated_Woman_2.jpeg'}
            alt="Nigerian woman looking at window"
            fill={true}
             className="absolute inset-0 flex items-center justify-center text-center text-neutral-500  object-cover"/>
           </div>
           {/* Floating Stat Card */}
           <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl max-w-xs border-l-4 border-[#ab9c81]">
           <div className="flex items-center gap-3 mb-2">
                <Plane className="text-[#C5A059]" size={20} />
                <p className="font-serif text-xl text-[#1A202C]">$15,000</p>
            </div>
            <p className="text-sm text-gray-500">Average cost of medical travel saved per treatment cycle (Flights, Visa, Hotels).</p>
           </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <Typography variant="h4" color="text-accent">The Reality</Typography>
          <Typography variant="h2">You care for everyone else.</Typography>
          <Typography variant="body">
            You lead corporations, manage prominent households, and hold high-pressure roles. You are the definition of resilient.
          </Typography>
          <Typography variant="body">
            But for too long, resilience has meant <strong>suffering in silence</strong>. Your pain is not &quot;just age.&quot; It is real. 
            We pick up where acute medicine leaves off, providing the rigorous, hands-on restoration that busy hospitals simply 
            aren&apos;t set up to deliver.
          </Typography>
          <div className="pt-4 border-l-2 border-accent pl-4">
            <p className="font-serif italic text-lg text-gray-600">&quot;We don&apos;t replace your doctor; we act as a vital extension of their care.&quot;</p>
          </div>
        </div>
      </div>
    </Section>

);
};

export default Insight;
