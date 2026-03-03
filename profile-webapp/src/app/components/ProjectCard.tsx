import { Project } from '../../../data';
import Image from 'next/image';
import Button from './Button'; // Import Button component

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-panel border border-border rounded-[var(--radius)] shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent transform">
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
        <div className="w-full h-48 bg-bg1 flex items-center justify-center text-text1 text-xl font-bold">
          {project.title} (Coming soon)
        </div>
      )}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-text0 tracking-tight">{project.title}</h3>
        <p className="text-text1 text-sm leading-relaxed line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((techItem: string) => (
            <span
              key={techItem}
              className="bg-bg1 text-text1 text-xs px-2 py-0.5 rounded-full border border-border"
            >
              {techItem}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-4">
          {project.links.map((link) => (
            <Button key={link.label} href={link.href} variant="secondary" size="sm">
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
