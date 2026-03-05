"use client";
import React from 'react';
import SectionHeading from './SectionHeading';
import { FaExternalLinkAlt } from '@/components/icons';

interface AcademicID {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface AcademicIDListProps {
  academicIDs: AcademicID[];
  className?: string; // For additional styling
}

const AcademicIDList: React.FC<AcademicIDListProps> = ({ academicIDs, className = '' }) => {
  return (
    <div className={`bg-bg-surface border border-border-subtle rounded-lg shadow-sm p-6 md:p-8 ${className}`}>
      <SectionHeading title="Academic Identifiers" subtitle="Connect and explore my research profiles." className="text-text-primary" />
      <ul className="mt-8 space-y-4">
        {academicIDs.map((id, index) => (
          <li key={index} className="text-text-primary text-body">
            <a href={id.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-link transition-colors flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-md">
              {id.icon}
              <span className="flex-grow">{id.label}</span>
              <FaExternalLinkAlt className="w-3 h-3 text-text-muted group-hover:text-brand-link transition-colors" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AcademicIDList;
