
import React, { ReactNode } from "react";


const BUTTON_VARIANTS = {
  primary: `bg-accent text-white hover:bg-color-goldHover shadow-lg`,
  secondary: `border border-color-foreground text-color-foreground hover:bg-color-foreground hover:text-white`,
  text: `text-color-gold hover:text-goldHover underline-offset-4 hover:underline p-0`
} as const;

type buttonVariant = keyof typeof BUTTON_VARIANTS

const BUTTON_SIZES = {
  sm: "px-4 py-2 text-xs",
  md: "px-8 py-3 text-sm",
  lg: "px-10 py-4 text-base",
} as const;

type ButtonSize = keyof typeof BUTTON_SIZES;

interface buttonProps {
  children: ReactNode,
  variant: buttonVariant,
  className?: string,
  onClick?: () => void, 
  size?: ButtonSize,
  type?: "submit" | "reset" | "button" | undefined, 
}

/**
 * REFACTOR NOTE: 
 * This component mirrors the 'Quiet Luxury' buttons from the J&I Website.
 * *USAGE:
 * - Use 'primary' for main CTAs (Booking, Inquiry).
 * - Use 'secondary' for ghost buttons on light backgrounds.
 * - Use 'text' for inline links that need to maintain button hit-areas.
 * @example
 * <Button variant="primary" onClick={handleBooking}>Reserve Now</Button>
 */
const Button = ({children, variant, className = "", onClick, type = "button",size="md"}: buttonProps) => {

  const baseStyle: string = "px-8 py-3 transition-all duration-300 font-medium tracking-wide text-sm uppercase";

  return (<button type={type} onClick={onClick} className={`${baseStyle} ${BUTTON_VARIANTS[variant]} ${className} ${size}`}>
        {children}
  </button>)
;
};

export default Button;
