import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
// Using your Barrel Exports for clean organization
import { FloatingWhatsApp } from '@/ui';



/**
 * FONT CONFIGURATION
 * We use 'variable' to create CSS variables (e.g., var(--font-serif))
 * which Tailwind can then pick up in tailwind.config.ts.
 */
const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

/**
 * SEO METADATA
 * This is what Google displays in search results.
 */
export const metadata: Metadata = {
  title: "J&I Elite | Concierge Health & Wellness Abuja",
  description: "World-class private medical care, aesthetic treatments, and wellness suites in Maitama & Asokoro.",
  icons: '/images/transparent_logo.png'
};

// Add a separate viewport export
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  
 
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${serif.variable} 
          ${sans.variable} 
          antialiased 
          font-sans 
          bg-white 
          text-main
          flex 
          flex-col 
          min-h-screen
        `}
      >
        {/* <main className="flex-1 relative "></main> */}
          {children}
        
      </body>
    </html>
  );
}