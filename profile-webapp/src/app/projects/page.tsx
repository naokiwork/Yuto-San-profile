import { getProjectsData } from "@/lib/data";
import ProjectCard from "../components/ProjectCard";

export default async function ProjectsPage() {
  const projects = await getProjectsData();

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-github-lightgray mb-8 text-center">
        All Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
