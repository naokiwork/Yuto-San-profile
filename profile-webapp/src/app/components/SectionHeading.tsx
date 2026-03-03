import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, id }) => {
  return (
    <div id={id} className="text-center mb-12 relative">
      <h2 className="text-4xl font-extrabold text-text0 mb-4 inline-block relative z-10">{title}</h2>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 w-24 h-1 bg-accent opacity-40 rounded-full z-0"></div>
      {subtitle && <p className="text-text1 text-lg max-w-2xl mx-auto relative z-10">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
