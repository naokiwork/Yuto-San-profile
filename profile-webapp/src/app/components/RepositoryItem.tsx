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
      className="block bg-bg1 border border-border p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:border-link transform"
    >
      <h3 className="text-lg font-semibold text-link mb-1">{repo.name}</h3>
      <p className="text-text1 text-sm mb-2 line-clamp-2">{repo.description}</p>
      <div className="flex items-center text-xs text-text1 space-x-3">
        {repo.language && (
          <span className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span> {repo.language}
          </span>
        )}
        {repo.stars !== undefined && (
          <span className="flex items-center">
            <FaStar className="mr-1" /> {repo.stars}
          </span>
        )}
        {/* Add last updated info here if available */}
        <span className="ml-auto">Updated X days ago</span>
      </div>
    </a>
  );
}
