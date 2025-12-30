'use router'
import React from "react";
import { Section, Typography } from "@/src/components/ui";
import {ProgramGrid} from '@/src/components/sections/programs/ProgramGrid';
import { Download } from "lucide-react";
import Link from "next/link";

const Programs = () => {

  return   (
  <div className="animate-in fade-in duration-500">
  <Section background="white" className="py-20 text-center border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <Typography variant="h4" color="text-accent" className="mb-4">Signature Programs</Typography>
        <Typography variant="h1" className="mb-6">Curated Clinical Pathways</Typography>
        <Typography variant="body">
          Our <strong> 2-Week (12 session) Intensive Model</strong> is proven to deliver months of results in a condensed window. We heal the root cause so you don&apos;t have to keep coming back.
        </Typography>
        
        {/* BROCHURE Link button (change to download later) */}
        <div className="mt-8">
            <Link href={'/brocure'} target="_blank" className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 font-medium tracking-wide uppercase text-sm shadow-md">
                {/* <Download size={18} /> */}
                View Our Full Clinical Pathways Guide
            </Link>
        </div>
      </div>
    </Section>
  <Section>
    <ProgramGrid/>
  </Section>
</div>)
}

export default Programs;
