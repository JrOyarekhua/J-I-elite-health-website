'use client'
import { PROGRAMS } from "@/src/constants";
import {Section, Typography, Button} from '@/ui';
import React from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image"

export const ProgramGrid = () => {
  const router = useRouter()
  return (
    <>
    {PROGRAMS.map((prog, idx) => (
        <Section key={prog.id} background={idx % 2 === 0 ? 'cream' : 'white'} className="py-24 border-b border-gray-100 last:border-0">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
            {/* Content Side */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[#C5A059] font-serif text-4xl opacity-50">0{idx + 1}</span>
                <Typography variant="h2">{prog.title}</Typography>
              </div>
              <p className="font-serif text-xl italic text-gray-600 border-l-2 border-[#C5A059] pl-4">
                {prog.tagline}
              </p>
              <div className="bg-white/50 p-6 rounded-lg border border-gray-100">
                 <h5 className="font-bold text-xs uppercase tracking-widest text-[#C5A059] mb-2">Who This Is For</h5>
                 <p className="text-gray-700">{prog.whoFor}</p>
              </div>
              <Typography variant="body" className="text-gray-600">
                {prog.description}
              </Typography>
              
              <div className="py-6">
                <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-[#1A202C]">Clinical Interventions</h4>
                <ul className="space-y-3">
                  {prog.interventions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 size={18} className="text-[#C5A059] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
    
              {/* Accordion Story */}
              <div className="border border-[#C5A059]/30 rounded-lg overflow-hidden bg-white/50">
                <details className="group">
                  <summary className="flex justify-between items-center p-4 cursor-pointer bg-[#FDFBF7] hover:bg-[#F3F4F6] transition-colors">
                    <span className="font-serif text-[#1A202C]">Patient Story: {prog.story.name}</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown size={20} className="text-[#C5A059]" />
                    </span>
                  </summary>
                  <div className="p-6 text-gray-600 italic border-t border-gray-100">
                    &quot;{prog.story.quote}&quot;
                  </div>
                </details>
              </div>
    
              <div className="pt-4">
                 <Button variant="primary" onClick={() => router.push('/contact')}>Book This Intensive</Button>
              </div>
            </div>
    
            {/* Visual Side */}
            <div className="md:col-span-5 relative hidden md:block">
              <div className="sticky top-32">
                <div className="aspect-[3/4] bg-neutral-200 rounded-sm shadow-xl relative overflow-hidden">
                  <Image
                  src={prog.image.url}
                  alt={prog.image.desc}
                  fill={true}
                  className={`absolute inset-0 object-cover`}/>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}
      </>
  );
};

