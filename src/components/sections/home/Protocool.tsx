import React from "react";
import {Section, Typography} from '@/ui'
const Protocool = () => {
  return (
    <Section background="white" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <Typography variant="h2" className="mb-4">The Healing With Grace™ Method</Typography>
        <Typography variant="body" className="max-w-2xl mx-auto">
          A proprietary clinical protocol fusing advanced pelvic rehabilitation with the specific biomechanical needs of the African woman.
        </Typography>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 relative">
           {/* Connector Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
           
           {[
             { num: '01', title: 'Deep Dive', desc: 'We map your history from boardroom stress to birth trauma.' },
             { num: '02', title: 'Hands-On', desc: 'Manual restoration. No machines. We release the tension.' },
             { num: '03', title: 'Nervous System', desc: 'Guiding your body out of fight-or-flight.' },
             { num: '04', title: 'Freedom', desc: 'Retraining your body for your actual life.' }
           ].map((step, idx) => (
             <div key={idx} className="bg-white p-6 flex flex-col items-center text-center group">
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
