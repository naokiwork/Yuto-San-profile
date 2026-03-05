"use client";
import type { Project } from '../../../data';
import Image from 'next/image';
import Button from './Button';
import { FaExternalLinkAlt } from 'react-icons/fa';
import React from 'react';
import Reveal from './Reveal';

interface ProjectCardProps {
  project: Project;
  className?: string; // Optional for external styling
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <Reveal className={`h-full ${className}`}>
      <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200">
        <div className="relative w-full h-48 md:h-56 bg-muted/[0.1] flex items-center justify-center overflow-hidden">
          {project.imageUrl && project.alt ? (
            <Image src={project.imageUrl} alt={project.alt} fill style={{ objectFit: 'cover' }} className="transition-transform duration-300 group-hover:scale-105" loading="lazy" />
          ) : project.alt ? (
            <span className="text-muted-2 text-xl">{project.alt}</span>
          ) : (
            <span className="text-muted-2 text-xl">Project Image</span> // Fallback if alt is also missing
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-h3 font-semibold text-foreground mb-3 leading-tight">{project.title}</h3>
          <p className="text-muted text-body flex-grow mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, index) => (
              <span key={index} className="bg-muted/[0.08] text-muted-2 text-sm px-3 py-1 rounded-full border border-border">{tech}</span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3">
            {project.links.map((link, index) => (
              <Button key={index} variant={link.label === 'Live Demo' || link.label === 'GitHub' ? 'primary' : 'secondary'} size="sm" href={link.href} target="_blank" rel="noopener noreferrer" alt={`${project.title} ${link.label}`}>
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