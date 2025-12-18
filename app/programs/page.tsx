'use router'
import React from "react";
import { Section, Typography } from "@/src/components/ui";
import {ProgramGrid} from '@/src/components/sections/programs/ProgramGrid';

const Programs = () => {

  return   (
  <div className="animate-in fade-in duration-500">
  <Section background="white" className="py-20 text-center border-b border-gray-100">
    <div className="max-w-4xl mx-auto px-6">
      <Typography variant="h4" color="text-[#C5A059]" className="mb-4">Signature Programs</Typography>
      <Typography variant="h1" className="mb-6">Curated Clinical Pathways</Typography>
      <Typography variant="body">
        Each program is a 2-week intensive designed to deliver months of results in a condensed window.
      </Typography>
    </div>
    <ProgramGrid/>
  </Section>

  
</div>)
}

export default Programs;
