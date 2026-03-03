import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'link';
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
  const baseStyles = `font-medium rounded-full transition-colors duration-200 active:scale-[0.98] active:duration-120 ${className}`;
  const sizeStyles = {
    sm: 'h-9 px-4 text-small',
    md: 'h-11 px-5 text-base',
    lg: 'h-14 px-7 text-lg',
  };
  const variantStyles = {
    primary: 'bg-accent text-white hover:opacity-80',
    secondary: 'border border-border text-link hover:opacity-80',
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
