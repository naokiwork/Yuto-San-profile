import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, id }) => {
  return (
    <div id={id} className="mb-4">
      <h2 className="text-xl font-semibold text-text0 mb-2 border-b border-border pb-2 inline-block">{title}</h2>
      {subtitle && <p className="text-text1 text-sm mt-2">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
