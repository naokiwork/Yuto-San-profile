import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-surface-2 text-text-muted text-xs px-2 py-0.5 rounded-full ${className}`}>
      {children}
    </span>
  );
};

export default Chip;
