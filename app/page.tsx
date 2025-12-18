import Image from "next/image";
import {Hero, Insight, Protocool,Programs} from '@/src/components/sections/home/index';

export default function Home() {
  return (
    <>
    <Hero/>
    <Insight/>
    <Protocool/>
    <Programs/>
    </>
   
  );
}
