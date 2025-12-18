import React, { ReactNode } from "react";

const TYPOGRAPHY_STYLES = {
    h1: "font-primary text-4xl md:text-6xl leading-tight",
    h2: "font-primary text-3xl md:text-4xl leading-snug",
    h3: "font-primary text-2xl md:text-3xl",
    h4: "font-secondary font-bold text-lg tracking-widest uppercase",
    body: "font-secondary text-base md:text-lg leading-relaxed",
    small: "font-secondary text-sm"
} as const;

const TAG_MAP: Record<keyof typeof TYPOGRAPHY_STYLES, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    body: 'p',
    small: 'span'
};

type TypographyVariant = keyof typeof TYPOGRAPHY_STYLES;

interface TypographyProps {
    /** The content to be rendered inside the typography element */
    children: ReactNode;
    /** Defines the visual style and semantic HTML tag (e.g., h1 renders <h1>) */
    variant: TypographyVariant;
    /** Additional CSS classes for custom positioning or margins */
    className?: string;
    /** Tailwind color class. Defaults to 'text-main' (Deep Navy) */
    color?: string;
}

/**
 * The core typography system for J&I Elite.
 * This component enforces brand consistency by mapping visual variants to semantic tags.
 * * * DESIGN SYSTEM VARIANTS:
 * - `h1`: Page-level headlines. High impact, Serif.
 * - `h2`: Section headers. Balanced, Serif.
 * - `h3`: Sub-section titles or card headings. Serif.
 * - `h4`: Accent labels/taglines. Sans-serif, Bold, Uppercase, Wide Tracking.
 * - `body`: Standard readable paragraph text. Sans-serif.
 * - `small`: Fine print, metadata, or muted descriptions. Sans-serif.
 * * @example
 * <Typography variant="h1" color="text-main">Digital Sanctuary</Typography>
 * * @example
 * <Typography variant="small" color="text-muted" className="mt-2">
 * Published Oct 2024
 * </Typography>
 */
const Typography = ({ 
    children, 
    variant, 
    className = "", 
    color = "text-main" 
}: TypographyProps) => {
  
  const Component = TAG_MAP[variant];

  return (
    <Component className={`${TYPOGRAPHY_STYLES[variant]} ${color} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;