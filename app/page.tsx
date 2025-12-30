import Image from "next/image";
import {Hero, Insight, Protocool,Programs} from '@/src/components/sections/home/index';
import {Navbar,Footer} from '@/layout'
import { FloatingWhatsApp } from "@/src/components/ui";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex-1 relative">
    <Hero/>
    <Insight/>
    <Protocool/>
    <Programs/>
    </main>
    <Footer/>
    <FloatingWhatsApp/>
    </>
  );
}
