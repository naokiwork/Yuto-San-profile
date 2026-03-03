import { getProjectsData } from "@/lib/data";
import { notFound } from 'next/navigation';
import Link from "next/link";

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projects = await getProjectsData();
  const project = projects.find((p: any) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-8">
      <h1 className="text-5xl font-bold text-github-lightgray mb-4">
        {project.title}
      </h1>
      <p className="text-github-gray text-xl mb-6">{project.summary}</p>

      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-github-lightgray mb-4">Description</h2>
        <p className="text-github-gray text-lg mb-4">{project.description}</p>

        <h3 className="text-2xl font-bold text-github-lightgray mb-2">Tech Stack</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech: string) => (
            <span
              key={tech}
              className="bg-github-blue text-white text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-github-lightgray mb-2">Role</h3>
        <p className="text-github-gray text-lg mb-4">{project.role}</p>

        {project.links.demo && (
          <div className="mb-2">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-github-blue hover:underline text-lg"
            >
              View Demo &rarr;
            </a>
          </div>
        )}

        {project.links.repository && (
          <div>
            <a
              href={project.links.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-github-blue hover:underline text-lg"
            >
              View Repository &rarr;
            </a>
          </div>
        )}
      </div>

      <Link href="/projects" className="text-github-blue hover:underline">
        &larr; Back to Projects
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  const projects = await getProjectsData();
  return projects.map((project: any) => ({
    id: project.id,
  }));
}
