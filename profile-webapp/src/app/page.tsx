import { getProfileData, getProjectsData } from "@/lib/data";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";

export default async function Home() {
  const profile = await getProfileData();
  const projects = await getProjectsData();
  const featuredProjects = projects.filter((project: any) => project.isFeatured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-github-darkblue rounded-lg shadow-xl mb-12">
        <h1 className="text-5xl font-extrabold text-github-lightgray mb-4">
          {profile.displayName}
        </h1>
        <p className="text-xl text-github-gray mb-6">{profile.headline}</p>
        <p className="text-lg text-github-gray max-w-2xl mx-auto mb-8">
          {profile.bioShort}
        </p>
        <Link
          href="/contact"
          className="bg-github-blue hover:bg-github-green text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Contact Me
        </Link>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center text-github-lightgray mb-10">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="text-github-blue hover:underline text-lg"
          >
            View All Projects &rarr;
          </Link>
        </div>
      </section>

      {/* Skills Section (placeholder for now) */}
      <section className="py-12 bg-github-darkblue rounded-lg shadow-xl mb-12">
        <h2 className="text-4xl font-bold text-center text-github-lightgray mb-10">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(profile.skills).map(([category, skills]) => (
            <div key={category} className="bg-github-blue text-white px-4 py-2 rounded-full text-lg">
              {category}: {skills.join(", ")}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
