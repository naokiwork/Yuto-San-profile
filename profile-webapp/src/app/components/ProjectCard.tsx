import { Project } from '../../../data';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-panel rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform">
      {project.imageUrl ? (
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          width={400}
          height={200}
          layout="responsive"
          objectFit="cover"
          className="w-full h-48"
        />
      ) : (
        <div className="w-full h-48 bg-gradient-to-r from-accent to-secondary flex items-center justify-center text-text0 text-xl font-bold">
          {project.title} (Placeholder)
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-light mb-2">{project.title}</h3>
        <p className="text-light-400 text-base mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((techItem: string) => (
            <span
              key={techItem}
              className="bg-accent-dark text-text0 text-xs px-3 py-1 rounded-full border border-line"
            >
              {techItem}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-text0 rounded-md hover:bg-secondary transition-colors duration-200 text-sm font-medium"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
