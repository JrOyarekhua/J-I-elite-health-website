'use client'
import React from "react";

import HeroBackground from "./HeroBackground";
import Section from "@/src/components/ui/Section";
import { Button, Typography } from "@/src/components/ui";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Hero = () => {
    const router = useRouter()
  return (
    <Section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Column: Messaging */}
        <div className="space-y-8 animate-in slide-in-from-left-10 duration-700">
          <Typography color="text-accent" variant="h4">
            You Deserve To Heal With Grace 
          </Typography>
          <Typography variant="h1">
            The World-Class Care You Usually <span className="italic font-light">Travel For</span>. Now in Abuja.
          </Typography>
          <Typography variant="body" className="max-w-md">
            Global expertise. Private care. No visa required. 
            <br/><br/>
            We brought the highest global standards of restorative care directly to you. Experience world-class clinical excellence and specialized care without leaving the country.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" onClick={() => router.push('/contact')}>Request Consultation</Button>
            <Button variant="secondary" onClick={() => router.push('/clinicians')}>For Medical Professionals</Button>
          </div>
        </div>

        {/* Right Column: Visual Placeholder */}
        <div className="hidden lg:flex justify-end animate-in fade-in duration-1000 delay-300">
          <div className="w-[400px] h-[500px] rounded-t-full relative overflow-hidden shadow-2xl">
            {/* The Image Area */}
            <Image 
            src={'/images/home/treating_executive.jpeg'}
            alt="Nigerian woman looking at window"
            fill={true}
             className="absolute inset-0 flex items-center justify-center text-center text-neutral-500  object-cover"/>
            
            {/* The Quote Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A202C]/80 to-transparent p-8 text-white">
              <p className="font-serif italic text-lg">&quot;Global clinical excellence has found a home in Abuja.&quot; </p>
            </div>
          </div> 
        </div> 
      </div> 
    </Section>
  );
};

export default Hero;
