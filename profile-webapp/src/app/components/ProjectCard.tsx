"use client";
import type { Project } from '@/data';
import Image from 'next/image';
import Button from './Button';
// import { FaExternalLinkAlt } from '@/components/icons'; // Removed as unused
import Chip from './Chip'; // Import Chip component
import Card from './Card'; // Import Card component

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <div className="relative w-full h-48 rounded-md overflow-hidden bg-surface-2 mb-4">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-text-muted text-lg">
            No Image
          </div>
        )}
      </div>
      <h3 className="text-h3 font-semibold text-text mb-2 leading-tight">{project.title}</h3>
      <p className="text-muted text-body flex-grow mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
        {project.tech.map((tech, index) => (
          <Chip key={index}>{tech}</Chip>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        {project.links.map((link, index) => (
          <Button key={index} variant={link.label === 'Live Demo' || link.label === 'GitHub' ? 'cta-primary' : 'secondary'} size="sm" href={link.href} target="_blank" rel="noopener noreferrer" alt={`${project.title} ${link.label}`}>
            {link.label}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
