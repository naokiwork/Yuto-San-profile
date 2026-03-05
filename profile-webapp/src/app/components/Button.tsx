"use client";
import React from "react";

type ButtonProps =
  | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary"|"secondary"|"link"; size?: "sm"|"md"|"lg"; alt?:string;})
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"secondary"|"link"; size?: "sm"|"md"|"lg"; alt?:string;});

export default function Button(props: ButtonProps) {
  const { variant="primary", size="md", className="", alt="", children, ...rest } = props as any;
  const base = "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
  const v = variant==="primary" ? "bg-accent text-white hover:bg-accent-2" :
            variant==="secondary" ? "bg-card text-foreground border border-border hover:bg-muted/[0.1]" :
            "text-link hover:underline";
  const s = size==="lg" ? "px-6 py-3 text-lg" : size==="sm" ? "px-4 py-2 text-small" : "px-5 py-2.5 text-base";
  const cls = `${base} ${v} ${s} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...a } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return <a href={href} className={cls} aria-label={alt} {...a}>{children}</a>;
  }
  return <button className={cls} aria-label={alt} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
}
