import { Project } from '../../../data';
import Image from 'next/image';
import Button from './Button';
import { FaExternalLinkAlt } from 'react-icons/fa';
import React from 'react';
import { Reveal } from './page'; // Assuming Reveal is exported from page.tsx

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  return (
    <Reveal delay={delay}>
      <div className="bg-card border border-border rounded-md shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            width={400}
            height={200}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: '100%', height: 'auto' }}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-bg1 flex items-center justify-center text-muted text-xl font-bold">
            Project Image
          </div>
        )}
        <div className="p-6 space-y-3">
          <h3 className="text-h3 font-semibold text-foreground tracking-tight">{project.title}</h3>
          <p className="text-small text-muted leading-relaxed line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((techItem: string) => (
              <span
                key={techItem}
                className="bg-bg1 text-muted-2 text-micro px-3 py-1 rounded-full border border-border"
              >
                {techItem}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border mt-4">
            {project.links.map((link) => (
              <Button key={link.label} href={link.href} variant="secondary" size="sm">
                {link.label} {link.href.startsWith('http') && <FaExternalLinkAlt className="ml-1 text-micro" />}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
