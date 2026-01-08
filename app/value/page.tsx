'use client'

import React from "react";
import { Button, Section, Typography  } from "@/src/components/ui";
import { Activity, MapPin, Plane, User } from "lucide-react";
import { useRouter } from "next/navigation";

const ValuePage = () => {
  const router = useRouter();

  return (

  <div className="animate-in fade-in duration-500">
  <Section background="white" className="py-20 text-center border-b border-gray-100">
    <div className="max-w-4xl mx-auto px-6">
      <Typography variant="h4" color="text-[#C5A059]" className="mb-4">Our Value to You</Typography>
      <Typography variant="h1" className="mb-6">The J&I Advantage: Global Excellence, Local Comfort</Typography>
      <Typography variant="body">
        True healing requires more than a weekly appointment; it requires immersion. Our 20-Hour Intensive over a 2-week period is designed to bypass years of &quot;muscle guarding&quot; by providing concentrated, daily clinical care. By dedicating 10 days to your recovery, we move from managing symptoms to achieving a permanent structural reset.
      </Typography>
    </div>
  </Section>

  {/* Comparison Table Section */}
  <Section background="cream" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-3">
              
              {/* Headers */}
              <div className="hidden md:block p-8 bg-gray-50 border-r border-gray-100"></div>
              <div className="p-8 bg-gray-100 border-r border-gray-200 text-center">
                  <h4 className="font-serif text-xl text-gray-500">International (NYC/London)</h4>
              </div>
              <div className="p-8 bg-[#1A202C] text-white text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#C5A059] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest">Recommended</div>
                  <h4 className="font-serif text-xl">Healing With Grace™</h4>
              </div>

              {/* Row 1: Clinical Program Fee */}
              <div className="p-6 md:p-8 border-b border-gray-100 font-bold text-[#1A202C] flex items-center">
                  <Activity className="mr-3 text-[#C5A059]" size={20} /> Clinical Program Fee
              </div>
              <div className="p-6 md:p-8 border-b border-r border-gray-100 text-center text-gray-500 font-medium">
                  $8,500 - $10,000
              </div>
              <div className="p-6 md:p-8 border-b border-gray-100 text-center font-bold text-[#1A202C] bg-[#FDFBF7]">
                  $10,000
              </div>

              {/* Row 2: Flights */}
              <div className="p-6 md:p-8 border-b border-gray-100 font-bold text-[#1A202C] flex items-center">
                  <Plane className="mr-3 text-[#C5A059]" size={20} /> Business Class Flights
              </div>
              <div className="p-6 md:p-8 border-b border-r border-gray-100 text-center text-gray-500 font-medium">
                  $12,000 - $22,000
              </div>
              <div className="p-6 md:p-8 border-b border-gray-100 text-center font-bold text-[#C5A059] bg-[#FDFBF7]">
                  $0
              </div>

              {/* Row 3: Accommodation */}
              <div className="p-6 md:p-8 border-b border-gray-100 font-bold text-[#1A202C] flex items-center">
                  <MapPin className="mr-3 text-[#C5A059]" size={20} /> 5-Star Suite (14 Nights)
              </div>
              <div className="p-6 md:p-8 border-b border-r border-gray-100 text-center text-gray-500 font-medium">
                  $9,000 - $15,000
              </div>
              <div className="p-6 md:p-8 border-b border-gray-100 text-center font-bold text-[#C5A059] bg-[#FDFBF7]">
                  $0
              </div>

              {/* Row 4: Logistics */}
              <div className="p-6 md:p-8 border-b border-gray-100 font-bold text-[#1A202C] flex items-center">
                  <User className="mr-3 text-[#C5A059]" size={20} /> Staff & Logistics
              </div>
              <div className="p-6 md:p-8 border-b border-r border-gray-100 text-center text-gray-500 font-medium">
                  $3,000+
              </div>
              <div className="p-6 md:p-8 border-b border-gray-100 text-center font-bold text-[#C5A059] bg-[#FDFBF7]">
                  $0
              </div>

              {/* TOTAL */}
              <div className="p-8 font-serif text-xl text-[#1A202C] border-b border-gray-100 bg-gray-50">
                  TOTAL CASH OUTLAY
              </div>
              <div className="p-8 font-serif text-xl text-gray-500 text-center border-b border-r border-gray-100 bg-gray-50 line-through decoration-red-400 decoration-2">
                  $32,500 - $50,000+
              </div>
              <div className="p-8 font-serif text-3xl text-[#1A202C] text-center border-b border-gray-100 bg-[#FDFBF7]">
                  $10,000
              </div>

              {/* Hidden Cost */}
              <div className="p-6 md:p-8 font-bold text-[#1A202C] flex items-center bg-gray-50 italic">
                  The &quot;Hidden&quot; Cost
              </div>
              <div className="p-6 md:p-8 text-center text-gray-500 border-r border-gray-100 bg-gray-50 italic">
                  Jet lag, 12+ hours travel, away from family.
              </div>
              <div className="p-6 md:p-8 text-center font-bold text-[#1A202C] bg-[#C5A059]/10">
                  Recover in your own home.
              </div>
          </div>
      </div>
    </div>
  </Section>

  {/* Signature Program List */}
  <Section background="white" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
          <Typography variant="h2" className="mb-12 text-center">Signature Program Investment</Typography>
          <div className="grid gap-6">
              {[
                  { title: "The Executive Core Revival", desc: "For high-performing leaders looking to release the physical \"grip\" of stress and long-seated tension.", price: "$10,000" },
                  { title: "The Chronic Pelvic Pain Sanctuary", desc: "For women seeking a peaceful, permanent end to persistent pelvic discomfort and internal \"noise\".", price: "$10,000" },
                  { title: "The Birth Ready Protocol", desc: "For women who are preparing their bodies for a happy and healthy pregnancy and birth their babies with confidence.", price: "$10,000" },
                  { title: "The Postpartum Sanctuary", desc: "Total recovery for the new mother who wants her body back.", price: "$10,000" },
                  { title: "The Matriarch’s Restoration", desc: "For the woman ready to enjoy her finest years with total confidence whether it’s traveling, work, socialising, and keeping up with her older children without a second thought.", price: "$10,000" },
                  { title: "The Fertility Optimization Intensive", desc: "Women preparing for conception who want to nurture a warm, welcoming, and relaxed internal environment.", price: "$10,000" }
              ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-gray-200 hover:border-[#C5A059] transition-colors rounded-sm group">
                      <div className="mb-4 md:mb-0">
                          <h4 className="font-serif text-lg text-[#1A202C] group-hover:text-[#C5A059] transition-colors">{item.title}</h4>
                          <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                      </div>
                      <div className="shrink-0">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block text-right">Investment</span>
                          <span className="font-serif text-xl text-[#1A202C]">{item.price}</span>
                      </div>
                  </div>
              ))}
          </div>
          
          <div className="mt-16 text-center">
              <Button variant="primary" onClick={() => router.push('concierge')}>Secure Your Spot</Button>
          </div>
      </div>
  </Section>
</div>
  );
};

export default ValuePage;
