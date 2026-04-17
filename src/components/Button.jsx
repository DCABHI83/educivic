import React from "react";
import { cn } from "../utils/cn";

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyles = "rounded-full font-medium transition-all duration-200 inline-flex justify-center items-center";

  const variants = {
    primary: "bg-brand-navy text-white px-8 py-3 hover:scale-95",
    secondary: "ghost-border text-brand-gold px-10 py-4 hover:bg-[#F5E6C2]",
    tertiary: "underline decoration-brand-gold decoration-1 text-body-text hover:text-brand-gold"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
