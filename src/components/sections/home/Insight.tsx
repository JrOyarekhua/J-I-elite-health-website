import { Section, Typography } from "@/src/components/ui";
import React from "react";

const Insight = () => {
  return (
    <Section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
           <div className="aspect-[4/5] bg-neutral-200 rounded-lg overflow-hidden relative shadow-lg">
             <div className="absolute inset-0 flex items-center justify-center text-neutral-500 p-8 text-center">
               [Image: Macro texture shot of hands resting calmly on fabric, or a woman looking out a window.]
             </div>
           </div>
           {/* Floating Stat Card */}
           <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl max-w-xs border-l-4 border-[#ab9c81]">
             <p className="font-serif text-xl mb-2 text-[#1A202C]">$15,000</p>
             <p className="text-sm text-gray-500">Average cost of medical travel saved per treatment cycle.</p>
           </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <Typography variant="h4" color="text-accent">The Reality</Typography>
          <Typography variant="h2">You care for everyone else.</Typography>
          <Typography variant="body">
            You lead corporations, manage prominent households, and hold high-pressure roles. 
            Until now, resilience meant suffering in silence—or booking a flight.
          </Typography>
          <Typography variant="body">
             Your pain is not &quot;just age.&quot; It is real. We brought the standard of care you seek abroad, right to your doorstep in Abuja.
          </Typography>
        </div>
      </div>
    </Section>

);
};

export default Insight;
