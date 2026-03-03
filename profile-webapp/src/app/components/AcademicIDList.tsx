import React from 'react';
import SectionHeading from './SectionHeading';
import { FaGithub, FaLinkedin, FaEnvelope, FaResearchgate, FaGraduationCap, FaOrcid } from 'react-icons/fa';
import { SiIeee } from "react-icons/si";

interface AcademicIDListProps {
  socials: Record<string, string>;
}

const AcademicIDList: React.FC<AcademicIDListProps> = ({ socials }) => {
  const academicLinks = [
    { id: 'github', label: 'GitHub', icon: <FaGithub />, href: socials.github },
    { id: 'linkedin', label: 'LinkedIn', icon: <FaLinkedin />, href: socials.linkedin },
    { id: 'email', label: 'Email', icon: <FaEnvelope />, href: socials.email },
    { id: 'researchgate', label: 'ResearchGate', icon: <FaResearchgate />, href: socials.researchgate },
    { id: 'googleScholar', label: 'Google Scholar', icon: <FaGraduationCap />, href: socials.googleScholar },
    { id: 'orcid', label: 'ORCID', icon: <FaOrcid />, href: socials.orcid },
    { id: 'ieeeXplore', label: 'IEEE Xplore', icon: <SiIeee />, href: socials.ieeeXplore },
  ].filter(link => link.href && link.href !== '#');

  return (
    <div className="bg-card border border-border rounded-md shadow-sm p-6 space-y-4">
      <SectionHeading title="Academic & Social Profiles" subtitle="My professional and academic online presence." />
      <div className="grid grid-cols-1 gap-3">
        {academicLinks.length > 0 ? (
          academicLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-foreground hover:text-link transition-colors p-3 bg-background rounded-lg border border-border hover:shadow-sm"
            >
              {link.icon && <span className="mr-3 text-xl text-accent">{link.icon}</span>}
              <span className="text-base font-medium">{link.label}</span>
            </a>
          ))
        ) : (
          <p className="text-muted text-base text-center">Academic profiles coming soon.</p>
        )}
      </div>
    </div>
  );
};

export default AcademicIDList;
