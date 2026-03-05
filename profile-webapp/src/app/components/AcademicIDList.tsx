"use client";
import React from 'react';
import SectionHeading from './SectionHeading';
import { FaExternalLinkAlt } from '@/components/icons';
import Card from '@/components/Card'; // Import the new Card component

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
    <Card className={`bg-bg-base border-0 shadow-none p-0 ${className}`}>
      <SectionHeading title="Academic Identifiers" subtitle="Connect and explore my research profiles." className="text-text" />
      <ul className="mt-8 space-y-4">
        {academicIDs.map((id, index) => (
          <li key={index} className="text-text text-body">
            <a href={id.href} target="_blank" rel="noopener noreferrer" className="hover:text-link transition-colors flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-md">
              {id.icon}
              <span className="flex-grow">{id.label}</span>
              <FaExternalLinkAlt className="w-3 h-3 text-text-muted group-hover:text-link transition-colors" />
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default AcademicIDList;
