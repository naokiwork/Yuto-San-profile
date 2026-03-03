import SectionHeading from './SectionHeading';
import { FaGithub, FaLinkedin, FaEnvelope, FaResearchgate, FaGraduationCap, FaOrcid, FaGlobe } from 'react-icons/fa';
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
    <section id="academic-ids" className="bg-dark-900 rounded-2xl p-8 shadow-3xl space-y-6">
      <SectionHeading title="Academic IDs & Profiles" subtitle="My professional and academic online presence." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {academicLinks.length > 0 ? (
          academicLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-dark-800 p-3 rounded-md shadow-sm hover:bg-dark-700 transition-colors duration-200 text-light-300"
            >
              {link.icon && <span className="mr-3 text-xl text-primary-light">{link.icon}</span>}
              <span className="text-md font-medium">{link.label}</span>
            </a>
          ))
        ) : (
          <p className="text-light-500">Academic profiles coming soon.</p>
        )}
      </div>
    </section>
  );
}