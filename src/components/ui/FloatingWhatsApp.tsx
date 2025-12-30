import React from "react";
import {MessageCircle} from "lucide-react";
import { getWhatsAppLink } from "@/src/constants";

const FloatingWhatsApp = () => {
  return (<a 
  href={getWhatsAppLink('Hello! I would like to book your services')} 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
  
>
  <MessageCircle size={24} />
  <span className="font-sans font-medium hidden md:inline">Chat with Concierge</span>
</a>)
;
};

export default FloatingWhatsApp;
