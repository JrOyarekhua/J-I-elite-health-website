'use client'
import React from "react";
import { PROGRAMS } from "@/src/constants";
import {Section, Typography, Button} from "@/ui";
import { ArrowRight, Heart } from "lucide-react";
import { useRouter } from "next/navigation";


const Programs = () => {
  const router = useRouter();

  return (
  <Section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
         <div>
           <Typography variant="h4" color="text-accent" className="mb-2">The Pathways</Typography>
           <Typography variant="h2">Select Your Journey</Typography>
         </div>
         <Button variant="text" onClick={() => router.push('/programs')} className="hidden text-accent md:block">View Full Program Details <ArrowRight size={16} className="inline ml-1" /></Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PROGRAMS.map((prog) => (
           <div key={prog.id} className="group relative bg-white h-[320px] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer" onClick={() => router.push('/programs')}>
             {/* Default State */}
             <div className="absolute inset-0 p-8 flex flex-col justify-between transition-opacity duration-500 group-hover:opacity-0">
                <div>
                  <div className="w-12 h-1 bg-accent mb-6"></div>
                  <h3 className="font-serif text-2xl text-[#1A202C] mb-2">{prog.title}</h3>
                  <p className="text-sm text-gray-500">{prog.tagline}</p>
                </div>
                <span className="text-[#C5A059] text-sm uppercase tracking-widest flex items-center gap-2">Explore <ArrowRight size={14}/></span>
             </div>
             
             {/* Hover State (The Reveal) */}
             <div className="absolute inset-0 bg-main p-8 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Heart className="text-accent mb-4" size={32} />
                <p className="text-white font-serif text-xl mb-4 italic">{prog.outcome}</p>
                <Button variant="primary" className="text-xs px-4 py-2">Learn More</Button>
             </div>
           </div>
        ))}
      </div>
    </div>
    </Section>
);
};

export default Programs;
