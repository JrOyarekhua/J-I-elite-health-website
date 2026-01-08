'use client'
import React from "react";
import {Section, Typography} from '@/ui'
import { useRouter } from "next/navigation";
const Protocool = () => {
  const router = useRouter()
  return (
    <Section background="white" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <Typography variant="h2" className="mb-4">Healing With Grace™</Typography>
        <Typography variant="body" className="max-w-2xl mx-auto">
        A proprietary clinical protocol developed fusing advanced pelvic health 
        rehabilitation with the specific biomechanical needs of the 
        Nigerian woman.
        </Typography>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 relative">
           <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
           
           {[
             { num: '01', title: 'The Deep Dive', desc: 'We listen. We map your history to understand the root cause of the problem.' },
             { num: '02', title: 'Hands-On Restoration', desc: 'We use advanced hands-on treatments to physically release the "held" tension in your body.' },
             { num: '03', title: 'Nervous System Reset', desc: 'Guiding your body out of fight or flight so deep healing can begin.' },
             { num: '04', title: 'Functional Freedom', desc: 'Retraining your body for your actual life, whether that’s lifting a toddler, or sitting through a board meeting.' }
           ].map((step, idx) => (
             <div key={idx} className="bg-white p-6 flex flex-col items-center text-center group cursor-pointer hover:shadow-lg transition-all rounded-lg" onClick={() => router.push('/method')}>
               <div className="w-24 h-24 bg-[#FDFBF7] rounded-full border border-[#C5A059] flex items-center justify-center mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300 shadow-sm">
                 <span className="font-serif text-3xl">{step.num}</span>
               </div>
               <h3 className="font-serif text-xl mb-3">{step.title}</h3>
               <p className="text-sm text-gray-600">{step.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </Section>


  );
};

export default Protocool;
