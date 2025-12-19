'use client'
import React, { useState } from "react";
import {PageRoute} from '@/types';
import {Button} from '@/ui';
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Typography} from '@/ui';
import {X,Menu} from 'lucide-react';

const PAGE_ROUTES = {
    home: 'Home',
    programs: 'Programs',
    founder: 'Founder',
    method: 'Method',
    clinicians: 'Clinicians',
    concierge: 'Concierge',
} as const satisfies Record<PageRoute, string>;



const MobileNav = ({isOpen,setIsOpen}: {isOpen: boolean, setIsOpen:(x: boolean) => void }) => (
    <> {/* <-- Add this Fragment wrap */}
    {isOpen && (
      <div className="lg:hidden bg-white absolute top-full left-0 w-full border-b border-gray-100 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
        {(Object.entries(PAGE_ROUTES) as [PageRoute, string][]).map(([route, label]) => (
          <Link 
            key={route}
            href={route === 'home' ? '/' : `/${route}`}
            onClick={() => setIsOpen(false)}
            className="text-lg font-serif border-b border-gray-50 pb-2 text-main hover:text-accent"
          >
            {label}
          </Link>
        ))}
      </div>
    )}
  </>
)

//desktop nav
const DesktopNav = ({ pathname }: { pathname: string }) => (
    <div className="hidden lg:flex items-center gap-8">
      {Object.entries(PAGE_ROUTES).map(([route, label]) => {
        const href = route === 'home' ? '/' : `/${route}`;
        return (
          <Link 
            key={route} 
            href={href}
            className={`text-sm uppercase tracking-widest transition-colors hover:text-accent ${pathname === href ? 'text-accent font-bold' : 'text-main'}`}
          >
            {label}
          </Link>
        );
      })}
      <Button variant="primary" size="sm">book private suite</Button>
    </div>
  );

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-full mx-auto px-6 py-4 flex justify-between items-center relative">
        <Link href="/">
          <Typography variant="h3" className="tracking-widest" >
            J&I <span className="text-accent">ELITE</span>
          </Typography>
        </Link>

        <DesktopNav pathname={pathname} />

        <button className="lg:hidden text-main" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
