'use client'
import React from "react";

import HeroBackground from "./HeroBackground";
import Section from "@/src/components/ui/Section";
import { Button, Typography } from "@/src/components/ui";
import { useRouter } from "next/navigation";


const Hero = () => {
    const router = useRouter()
  return (
    <Section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Column: Messaging */}
        <div className="space-y-8 animate-in slide-in-from-left-10 duration-700">
          <Typography variant="h4" className="text-accent">
            Welcome to the Sanctuary
          </Typography>
          <Typography variant="h1">
            The World-Class Care You Usually <span className="italic font-light">Travel For</span>. Now in Abuja.
          </Typography>
          <Typography variant="body" className="max-w-md">
            Global expertise. Private care. No visa required. Experience the pinnacle of pelvic health and wellness restoration.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" onClick={() => router.push('/consierge')}>Request Private Assessment</Button>
            <Button variant="secondary" onClick={() => router.push('/clinitians')}>For Medical Professionals</Button>
          </div>
        </div>

        {/* Right Column: Visual Placeholder */}
        <div className="hidden lg:flex justify-end animate-in fade-in duration-1000 delay-300">
          <div className="w-[400px] h-[500px] bg-[#E5E7EB] rounded-t-full relative overflow-hidden shadow-2xl">
            {/* The Image Area */}
            <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center text-center p-8 text-neutral-500">
              [Image: High-res portrait of a pensive, powerful African woman]
            </div>
            
            {/* The Quote Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A202C]/80 to-transparent p-8 text-white">
              <p className="font-serif italic text-lg">&quot;Finally, I don&apos;t have to fly to London.&quot;</p>
            </div>
          </div> 
        </div> 
      </div> 
    </Section>
  );
};

export default Hero;
