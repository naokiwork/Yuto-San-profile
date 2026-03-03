import { Repo } from '../../../data';
import { FaStar, FaCodeBranch } from 'react-icons/fa';

interface RepositoryItemProps {
  repo: Repo;
}

export default function RepositoryItem({ repo }: RepositoryItemProps) {
  return (
    <a
      href={repo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-panel border border-border p-4 rounded-[var(--radius)] shadow-sm hover:shadow-md transition-all duration-200 hover:border-link transform"
    >
      <h3 className="text-lg font-semibold text-link mb-1">{repo.name}</h3>
      <p className="text-text1 text-sm mb-2 line-clamp-2">{repo.description}</p>
      <div className="flex items-center text-xs text-text1 space-x-3">
        {repo.language && (
          <span className="flex items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-1"></span> {repo.language}
          </span>
        )}
        {repo.stars !== undefined && (
          <span className="flex items-center">
            <FaStar className="mr-1" /> {repo.stars}
          </span>
        )}
        <span className="ml-auto text-text1">Updated {Math.floor(Math.random() * 30) + 1} days ago</span>
      </div>
    </a>
  );
}
