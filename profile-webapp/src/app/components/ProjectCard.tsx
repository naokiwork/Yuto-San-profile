import { Project } from '../../../data';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-bg1 border border-border rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-accent transform">
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
        <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-text1 text-xl font-bold">
          {project.title} (Coming soon)
        </div>
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-text0">{project.title}</h3>
        <p className="text-text1 text-sm line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((techItem: string) => (
            <span
              key={techItem}
              className="bg-gray-700 text-text1 text-xs px-2 py-0.5 rounded-full border border-border"
            >
              {techItem}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border mt-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-sm font-medium text-link hover:underline"
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
