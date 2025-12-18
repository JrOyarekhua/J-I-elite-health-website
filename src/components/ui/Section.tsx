import React, { ReactNode } from "react";

interface sectionProps {
    children: ReactNode,
    className?: string, 
    background?: 'white' | 'cream'
} 

/**
 * A semantic wrapper for page-level content blocks.
 * * DESIGN LOGIC:
 * - This is an "unopinionated" shell. It manages background colors and 
 * HTML semantics (<section>) but does NOT enforce padding or width.
 * * USAGE:
 * - Use `bg="cream"` (default) for the 'Digital Sanctuary' aesthetic.
 * - Use `bg="white"` for high-contrast clinical sections or cards.
 * - Always apply vertical padding (e.g., `className="py-20"`) via props 
 * to maintain brand breathing room.
 */
const Section = ({children, className = "", background = 'cream'}: sectionProps) => {
  const bgColor = background === 'white' ? 'bg-white' : "bg-background";
  return <div className = {` w-full ${bgColor} ${className}`}>{children}</div>;
};

export default Section;
