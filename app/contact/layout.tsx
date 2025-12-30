import React, {ReactNode} from "react";
import {Navbar,Footer} from '@/layout'
import { FloatingWhatsApp } from "@/src/components/ui";

export const ContactLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
    <Navbar/>
    <main className="flex-1 relative">{children}</main>
    <Footer/>
    <FloatingWhatsApp/>
    </>
  );
};

export default ContactLayout
;
