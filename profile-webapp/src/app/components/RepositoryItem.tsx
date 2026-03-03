import { Repo } from '../../../data';
import { FaStar, FaCodeBranch } from 'react-icons/fa';
import Button from './Button';
import React from 'react';
import { Reveal } from './page'; // Assuming Reveal is exported from page.tsx

interface RepositoryItemProps {
  repo: Repo;
  delay?: number;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repo, delay = 0 }) => {
  return (
    <Reveal delay={delay}>
      <a
        href={repo.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-card border border-border p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
      >
        <h3 className="text-h3 font-semibold text-link mb-2">{repo.name}</h3>
        <p className="text-small text-muted mb-3 line-clamp-2">{repo.description}</p>
        <div className="flex items-center text-micro text-muted-2 space-x-3 border-t border-border pt-3 mt-3">
          {repo.language && (
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span> {repo.language}
            </span>
          )}
          {repo.stars !== undefined && (
            <span className="flex items-center">
              <FaStar className="mr-1" /> {repo.stars}
            </span>
          )}
          <span className="ml-auto">Updated {Math.floor(Math.random() * 30) + 1} days ago</span>
        </div>
        <div className="mt-4 flex justify-end">
          <Button href={repo.href} variant="secondary" size="sm">
            View on GitHub
          </Button>
        </div>
      </a>
    </Reveal>
  );
};

export default RepositoryItem;
