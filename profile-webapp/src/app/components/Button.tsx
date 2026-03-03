import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
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
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  const variantStyles = {
    primary: 'bg-accent text-text0 hover:bg-accent2',
    secondary: 'bg-panel text-text0 hover:bg-bg1',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-text0 focus:ring-2 focus:ring-focus focus:outline-none',
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
