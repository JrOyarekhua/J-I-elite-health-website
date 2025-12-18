import React from 'react';
import { MapPin, Lock, CreditCard, ShieldCheck } from 'lucide-react';
import { Typography } from '@/ui';

// 1. Content Schema (Easy to edit later)
const FOOTER_DATA = {
  location: "Maitama & Asokoro, Abuja, FCT",
  trust: "Strictly Confidential. NDA Protocols Available.",
  copy: `© ${new Date().getFullYear()} J&I Elite Health & Wellness. All rights reserved.`
} as const;

const Footer = () => {
  return (
    <footer className="bg-main text-white py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <Typography variant="h3" color='text-white' className="tracking-widest">
            J&I <span className="text-white">ELITE</span>
          </Typography>
          <Typography variant="body" className="text-gray-400 leading-relaxed max-w-xs">
            The world-class care you usually travel for. Now in Abuja.
          </Typography>
        </div>

        {/* Column 2: Private Protocols */}
        <div className="space-y-4">
          <Typography variant="h4" color='text-accent' className="italic font-serif">
            Private Suites
          </Typography>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>{FOOTER_DATA.location}</span>
            </div>
            <div className="flex items-start gap-3 text-gray-400 text-sm italic">
              <Lock size={18} className="text-accent shrink-0" />
              <span>{FOOTER_DATA.trust}</span>
            </div>
          </div>
        </div>

        {/* Column 3: Trust & Payments */}
        <div className="space-y-4">
          <Typography variant="h4" color='text-accent' className="italic font-serif">
            Payment & Trust
          </Typography>
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CreditCard size={18} />
              <span>USD Cards</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              <span>NIP Transfers</span>
            </div>
          </div>
          <Typography variant="small" color='text-muted' className=" opacity-70">
            {FOOTER_DATA.copy}
          </Typography>
        </div>

      </div>
    </footer>
  );
};

export default Footer;