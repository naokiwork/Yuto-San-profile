"use client";
import React from 'react';
import { Slot } from '@radix-ui/react-slot'; // Assuming @radix-ui/react-slot is installed and desired

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asChild?: boolean;
  alt?: string; // For accessibility
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', className, asChild = false, children, alt, ...props }) => {
  const Comp = asChild ? Slot : 'button';

  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  const variantStyles = {
    primary: "bg-accent text-white hover:bg-accent-2",
    secondary: "bg-card text-foreground border border-border hover:bg-muted/[0.1]",
    link: "text-link hover:underline",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-small",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <Comp className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} aria-label={alt} {...props}>
      {children}
    </Comp>
  );
};

export default Button;
