import React from "react";
import {
  MapPin,
  Lock,
  CreditCard,
  ShieldCheck,
  Phone,
  Mail,
} from "lucide-react";
import { Typography } from "@/ui";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

// 1. Content Schema (Easy to edit later)
const FOOTER_DATA = {
  number: "+17032093359",
  email: "annudofia@gmail.com",
  copy: `© ${new Date().getFullYear()} J&I Elite Health & Wellness. All rights reserved.`,
} as const;

const Footer = () => {
  return (
    <footer
      className={`bg-main text-white py-16 px-6 border-t border-white/5 `}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <Typography
            variant="h3"
            color="text-white"
            className="tracking-widest"
          >
            J&I <span className="text-white">ELITE</span>
          </Typography>
          <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
            World class care you usually travel for
          </p>
          <Typography variant="small" color="text-muted">
            {FOOTER_DATA.copy}
          </Typography>
        </div>

        {/* Column 2: Private Protocols */}
        <div className="space-y-4">
          <Typography
            variant="h4"
            color="text-accent"
            className="italic font-serif"
          >
            Contact Us
          </Typography>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-gray-400 text-sm">
              <Phone size={18} className="text-accent shrink-0" />
              <span>{FOOTER_DATA.number}</span>
            </div>
            <div className="flex items-start gap-3 text-gray-400 text-sm italic">
              <Mail size={18} className="text-accent shrink-0" />
              <span>{FOOTER_DATA.email}</span>
            </div>
          </div>
        </div>

        {/* Column 3: Reviews */}
        <div className="space-y-4">
          <Typography
            className="font-serif text-italic"
            variant="h4"
            color="text-accent"
          >
            Connect With Us
          </Typography>
          <div className="flex gap-5 h-8">
            <a
              className="w-[28px] h-full"
              href="https://www.instagram.com/annnwabuebo_dpt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="w-7 h-8"
              href="https://www.tiktok.com/@dranndpt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              className="w-7 h-8"
              href="https://www.youtube.com/channel/UC5S8IUCCKcFsbrd8Bz1kXBQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              className="w-7 h-8"
              href="https://www.facebook.com/annudofiadpt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>

        {/* Column 4 */}
        <div className="space-y-4 lg:text-center">
          <Typography
            className="font-serif text-italic"
            variant="h4"
            color="text-accent"
          >
            Ratings
          </Typography>
          <div className="flex space-x-3">
          <a
              className="h-full"
              href="https://www.healthgrades.com/providers/aniekan-udofia-382sf"
            >
              <Image
                className="object-contain"
                alt="healthgrades logo"
                width={100}
                height={100}
                src={"/images/logos/healthgrades.png"}
              />
            </a>
            <a
              className="h-full"
              href="https://www.ratemds.com/doctor-ratings/dr-ann-udofia-san-carlos-ca-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="object-contain"
                alt="rateMDs logo"
                width={100}
                height={100}
                src={"/images/logos/rateMDs.png"}
              />
            </a>
            {/* <a
              className="h-full"
              href="https://www.healthgrades.com/providers/aniekan-udofia-382sf"
            >
              <Image
                className="object-contain"
                alt="healthgrades logo"
                width={100}
                height={100}
                src={"/images/logos/healthgrades.png"}
              />
            </a> */}
            <a
              className="h-full"
              href="https://www.google.com/maps/place/Body+Connect+Physical+Therapy+(Ann+Nwabuebo,+DPT)/@39.0154222,-77.6907568,10z/data=!4m8!3m7!1s0x808fef81c8448805:0xace045da59300569!8m2!3d39.015886!4d-77.3611115!9m1!1b1!16s%2Fg%2F11hz2b59dh?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="object-contain"
                alt="google logo"
                width={100}
                height={100}
                src={"/images/logos/google.png"}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
