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
  const baseStyles = `font-medium rounded-md transition-colors duration-200 ${className}`;
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  const variantStyles = {
    primary: 'bg-accent text-text0 hover:bg-link',
    secondary: 'bg-bg1 text-text0 hover:bg-border border border-border',
    outline: 'border border-border text-text0 hover:bg-border',
    link: 'text-link hover:underline p-0',
  };

  const buttonClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
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
