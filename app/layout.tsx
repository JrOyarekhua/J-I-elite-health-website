import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Using your Barrel Exports for clean organization
import { Navbar, Footer } from '@/layout';
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
  viewport: "width=device-width, initial-scale=1",
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
        {/* THE FRAME: Elements that never move while navigating */}
        <Navbar />

        {/* THE CONTENT: 
          'min-h-screen' ensures the footer stays at the bottom even on short pages.
          We removed pb-12 here so individual Sections can manage their own padding.
        */}
        <main className="flex-1 relative ">
          {children}
        </main>

        <Footer />
        
        {/* GLOBAL UI: Elements that float above the layout */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}