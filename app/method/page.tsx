'use client'
import { Section, Typography, Button } from "@/src/components/ui";
import React from "react";
import { useRouter } from "next/navigation";
import { Activity, Brain, CheckCircle2, Fingerprint, X , Zap} from "lucide-react";
import Image from "next/image";

const Page = () => {
    const router = useRouter()
  return (
  <div className="animate-in fade-in duration-500">
    {/* Method Hero */}
    <Section background="white" className="py-20 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <Typography variant="h4" color="text-[#C5A059]" className="mb-4">The Proprietary Protocol</Typography>
        <Typography variant="h1" className="mb-6">Healing With Grace™</Typography>
        <Typography variant="body" className="text-xl mb-4">
          Global Clinical Excellence. Specialized for the African Woman.
        </Typography>
        <Image alt="logo" src={'/images/transparent_logo.png'} width={220} height={75}/>
      </div>
    </Section>

    {/* The Diagnostic Gap */}
    <Section background="cream" className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <Typography variant="h2">The Diagnostic Gap</Typography>
          <div className="w-20 h-1 bg-accent"></div>
          <Typography variant="body" className="italic text-gray-600">
            &quot;You are often told you are &apos;fine&apos; just days after surgery or birth. But your pain is real.&quot;
          </Typography>
          <Typography variant="body">
            Many of our clients come to us frustrated by recurring intimate symptoms that have been treated repeatedly with medication, only to discover the true cause is a <strong>mechanical issue</strong> in the pelvic floor.
          </Typography>
          <ul className="space-y-4 pt-4">
            <li className="flex items-start gap-3">
              <X className="text-red-400 mt-1 shrink-0" size={20} />
              <span className="text-gray-600 text-sm">Treating &quot;infections&quot; that aren&apos;t infections.</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="text-red-400 mt-1 shrink-0" size={20} />
              <span className="text-gray-600 text-sm">Ignoring deep abdominal scarring from fibroids.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-accent mt-1 shrink-0" size={20} />
              <span className="text-main font-medium text-sm">We target the root mechanical cause.</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 shadow-xl border-l-4 border-main">
          <h3 className="font-serif text-2xl mb-4">The Founder&apos;s Edge</h3>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            This protocol was not built in a vacuum. It is the result of <strong>20 years and 50,000 clinical hours</strong>. Dr. Ann has decoded the physiological nuances of the African and Diaspora female body—understanding complexities (like hypertonic stress patterns and keloid scarring) that standard Western medicine often overlooks.
          </p>
          <Button variant="secondary" onClick={() => router.push('/founder')}>Meet Dr. Ann</Button>
        </div>
      </div>
    </Section>

    {/* The 4 Steps Detailed */}
    <Section background="white" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {[
            { 
              num: '01', 
              icon: <Fingerprint size={32} />, 
              title: 'The Deep Dive', 
              desc: "We don't just scan; we listen. We map your history from boardroom stress to birth trauma to find the root cause.",
              detail: "Includes comprehensive history mapping of all past health battles, surgeries, and stress loads."
            },
            { 
              num: '02', 
              icon: <Activity size={32} />, 
              title: 'Hands-On Restoration', 
              desc: "No machines. We use advanced manual therapy treatments to physically release the 'held' tension.",
              detail: "Targeting your scars, pelvis, spine, and deep abdominal tissues to restore mobility."
            },
            { 
              num: '03', 
              icon: <Brain size={32} />, 
              title: 'Nervous System Reset', 
              desc: "Guiding your body out of fight or flight so deep healing can begin.",
              detail: "Retraining your body for your actual life, whether that’s lifting a toddler or sitting through a board meeting."
            },
            { 
              num: '04', 
              icon: <Zap size={32} />, 
              title: 'Functional Freedom', 
              desc: "Retraining your body for your actual life, whether that’s lifting a toddler or sitting through a board meeting.",
              detail: "Biomechanics adapted for your real-world movements, ensuring the pain doesn't return."
            }
          ].map((step, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="shrink-0 flex flex-col items-center">
                <span className="text-4xl font-serif text-[#C5A059]/40 font-bold mb-4">{step.num}</span>
                <div className="w-12 h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center text-[#1A202C] border border-gray-200 group-hover:border-[#C5A059] group-hover:text-[#C5A059] transition-colors">
                  {step.icon}
                </div>
                <div className="h-full w-px bg-gray-100 mt-4"></div>
              </div>
              <div className="pt-2">
                <h3 className="font-serif text-2xl text-[#1A202C] mb-3">{step.title}</h3>
                <p className="text-[#1A202C] font-medium mb-2">{step.desc}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
    
    <Section background="cream" className="py-20 text-center">
       <Typography variant="h2" className="mb-8">Ready to start your journey?</Typography>
       <Button variant="primary" onClick={() => router.push('/contact')}>Request Assessment</Button>
    </Section>
  </div>
);
};

export default Page;
