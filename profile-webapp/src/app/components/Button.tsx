import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = `font-medium rounded-[var(--radius)] transition-colors duration-200 ${className}`;
  const sizeStyles = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-9 px-4 text-base',
    lg: 'h-11 px-6 text-lg',
  };
  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-link',
    secondary: 'bg-bg1 text-text0 hover:bg-border border border-border',
    outline: 'border border-border text-text0 hover:bg-border',
    link: 'text-link hover:underline p-0 h-auto',
  };

  const buttonClasses = `
    inline-flex items-center justify-center
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    focus:ring-2 focus:ring-focus focus:outline-none
  `;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props as any}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
