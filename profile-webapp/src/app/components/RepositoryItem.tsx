import { Repo } from '../../../data';
import { FaStar, FaCodeBranch } from 'react-icons/fa'; // Icons, assuming installation

interface RepositoryItemProps {
  repo: Repo;
}

export default function RepositoryItem({ repo }: RepositoryItemProps) {
  return (
    <a
      href={repo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-panel p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
      <h3 className="text-xl font-bold text-text0 mb-2">{repo.name}</h3>
      <p className="text-text1 text-base mb-3 line-clamp-2">{repo.description}</p>
      <div className="flex items-center text-sm text-text1">
        {repo.language && (
          <span className="flex items-center mr-4">
            <FaCodeBranch className="mr-1" /> {repo.language}
          </span>
        )}
        {repo.stars !== undefined && (
          <span className="flex items-center">
            <FaStar className="mr-1" /> {repo.stars}
          </span>
        )}
      </div>
    </a>
  );
}
