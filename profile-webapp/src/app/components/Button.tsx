"use client";
import React from "react";

type ButtonProps =
  | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary"|"secondary"|"link"|"cta-primary"; size?: "sm"|"md"|"lg"; alt?:string;})
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"secondary"|"link"|"cta-primary"; size?: "sm"|"md"|"lg"; alt?:string;});

export default function Button(props: ButtonProps) {
  const { variant="primary", size="md", className="", alt="", children, ...rest } = props;
  const base = "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-accent text-brand-contrast hover:opacity-90",
    secondary: "bg-surface text-text hover:bg-surface-2",
    link: "text-link hover:underline",
    'cta-primary': "bg-cta text-brand-contrast hover:opacity-90",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-small",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const cls = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...a } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return <a href={href} className={cls} aria-label={alt} {...a}>{children}</a>;
  }
  return <button className={cls} aria-label={alt} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
}
