"use client";
import type { Project } from '@/data';
import Image from 'next/image';
import Button from './Button';
// import { FaExternalLinkAlt } from '@/components/icons'; // Removed as unused
import React from 'react';
import Reveal from './Reveal';

interface ProjectCardProps {
  project: Project;
  className?: string; // Optional for external styling
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <Reveal className={`h-full ${className}`}>
      <div className="bg-bg-surface border border-border-subtle rounded-lg shadow-default overflow-hidden flex flex-col h-full hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200">
        <div className="relative w-full h-48 md:h-56 bg-bg-elevated flex items-center justify-center overflow-hidden">
          {project.imageUrl && project.alt ? (
            <Image src={project.imageUrl} alt={project.alt} fill style={{ objectFit: 'cover' }} className="transition-transform duration-300 group-hover:scale-105" loading="lazy" />
          ) : project.alt ? (
            <span className="text-text-muted text-xl">{project.alt}</span>
          ) : (
            <span className="text-text-muted text-xl">Project Image</span> // Fallback if alt is also missing
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-h3 font-semibold text-text-primary mb-3 leading-tight">{project.title}</h3>
          <p className="text-text-secondary text-body flex-grow mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, index) => (
              <span key={index} className="bg-bg-elevated text-text-muted text-sm px-3 py-1 rounded-full border border-border-subtle">{tech}</span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3">
            {project.links.map((link, index) => (
              <Button key={index} variant={link.label === 'Live Demo' || link.label === 'GitHub' ? 'cta-primary' : 'secondary'} size="sm" href={link.href} target="_blank" rel="noopener noreferrer" alt={`${project.title} ${link.label}`}>
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
