"use client";
import type { Repo } from '@/data';
import React, { useState } from 'react';
import { FaStar, FaCodeBranch, FaGithub } from '@/components/icons';
import Button from './Button';
import Reveal from './Reveal';
import Card from './Card'; // Import Card component

interface RepositoryItemProps {
  repo: Repo;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repo }) => {
  const [daysAgo] = useState(25); // Hardcoded value to avoid impure function call
  return (
    <Card>
      <h3 className="text-h3 font-semibold text-text mb-2 leading-tight">
        <a href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-md" aria-label={`${repo.name} on GitHub`}>
          {repo.name}
        </a>
      </h3>
      {repo.description && <p className="text-muted text-body flex-grow mb-4">{repo.description}</p>}
      <div className="mt-auto flex items-center flex-wrap gap-x-4 gap-y-2 text-small text-text-muted">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
            {repo.language}
          </span>
        )}
        {repo.stars !== undefined && (
          <span className="flex items-center gap-1">
            <FaStar className="w-3.5 h-3.5 text-muted" /> {repo.stars}
          </span>
        )}
        {repo.forks !== undefined && (
          <span className="flex items-center gap-1">
            <FaCodeBranch className="w-3.5 h-3.5 text-muted" /> {repo.forks}
          </span>
        )}
        <span className="text-text-muted text-small ml-auto">Updated {daysAgo} days ago</span>
      </div>
      <div className="mt-6">
        <Button variant="secondary" size="sm" href={repo.url} target="_blank" rel="noopener noreferrer" alt={`View ${repo.name} on GitHub`}>
          <FaGithub className="mr-2" /> View on GitHub
        </Button>
      </div>
    </Card>
  );
};

export default RepositoryItem;
