import SectionHeading from './SectionHeading';
import { FaGithub, FaLinkedin, FaEnvelope, FaResearchgate, FaGraduationCap, FaOrcid } from 'react-icons/fa';
import { SiIeee } from "react-icons/si"; // Example for IEEE

interface AcademicIDListProps {
  socials: Record<string, string>;
}

export default function AcademicIDList({ socials }: AcademicIDListProps) {
  const academicLinks = [
    { id: 'github', label: 'GitHub', icon: <FaGithub />, href: socials.github },
    { id: 'linkedin', label: 'LinkedIn', icon: <FaLinkedin />, href: socials.linkedin },
    { id: 'email', label: 'Email', icon: <FaEnvelope />, href: socials.email },
    { id: 'researchgate', label: 'ResearchGate', icon: <FaResearchgate />, href: socials.researchgate },
    { id: 'googleScholar', label: 'Google Scholar', icon: <FaGraduationCap />, href: socials.googleScholar },
    { id: 'orcid', label: 'ORCID', icon: <FaOrcid />, href: socials.orcid },
    { id: 'ieeeXplore', label: 'IEEE Xplore', icon: <SiIeee />, href: socials.ieeeXplore },
  ].filter(link => link.href && link.href !== '#'); // Only show links that have an actual href

  return (
    <div className="bg-panel border border-border rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-semibold text-text0">Academic Profiles</h2>
      <div className="space-y-3">
        {academicLinks.length > 0 ? (
          academicLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-text1 hover:text-link transition-colors duration-200"
            >
              {link.icon && <span className="mr-3 text-lg text-link">{link.icon}</span>}
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))
        ) : (
          <p className="text-text1 text-sm">Academic profiles coming soon.</p>
        )}
      </div>
    </div>
  );
}
