"use client";
import React from 'react';
import SectionHeading from './SectionHeading';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Ensure this is explicitly imported

interface AcademicID {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface AcademicIDListProps {
  academicIDs: AcademicID[];
}

const AcademicIDList: React.FC<AcademicIDListProps> = ({ academicIDs }) => {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm p-6 md:p-8">
      <SectionHeading title="Academic Identifiers" subtitle="Connect and explore my research profiles." />
      <ul className="mt-8 space-y-4">
        {academicIDs.map((id, index) => (
          <li key={index}>
            <a href={id.href} target="_blank" rel="noopener noreferrer" className="text-foreground text-body hover:text-link transition-colors flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md">
              {id.icon}
              <span>{id.label}</span>
              <FaExternalLinkAlt className="w-3 h-3 text-muted-2 group-hover:text-link transition-colors" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AcademicIDList;