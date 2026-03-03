import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-github-lightgray mb-2">
        {project.title}
      </h3>
      <p className="text-github-gray text-base mb-4 line-clamp-2">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="bg-github-blue text-white text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.id}`}
        className="text-github-blue hover:underline"
      >
        Learn More &rarr;
      </Link>
    </div>
  );
}
