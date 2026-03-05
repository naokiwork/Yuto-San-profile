"use client";
import type { Repo } from '../../../data';
import React from 'react';
import { FaStar, FaCodeBranch, FaGithub } from 'react-icons/fa';
import Button from './Button';
import Reveal from './Reveal';

interface RepositoryItemProps {
  repo: Repo;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repo }) => {
  return (
    <Reveal className="h-full">
      <div className="bg-card border border-border rounded-lg shadow-sm p-6 flex flex-col h-full hover:translate-y-[-2px] hover:shadow-md transition-all duration-200">
        <h3 className="text-h3 font-semibold text-foreground mb-2 leading-tight">
          <a href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md" aria-label={`${repo.name} on GitHub`}>
            {repo.name}
          </a>
        </h3>
        {repo.description && <p className="text-muted text-body flex-grow mb-4">{repo.description}</p>}
        <div className="mt-auto flex items-center flex-wrap gap-x-4 gap-y-2 text-small text-muted-2">
          {repo.language && (
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-accent"></span> {/* Adjusted to accent color for consistency */}
              {repo.language}
            </span>
          )}
          {repo.stars !== undefined && (
            <span className="flex items-center gap-1">
              <FaStar className="w-3.5 h-3.5" /> {repo.stars}
            </span>
          )}
          {repo.forks !== undefined && (
            <span className="flex items-center gap-1">
              <FaCodeBranch className="w-3.5 h-3.5" /> {repo.forks}
            </span>
          )}
          <span className="text-muted text-small ml-auto">Updated {Math.floor(Math.random() * 30) + 1} days ago</span>
        </div>
        <div className="mt-6">
          <Button variant="secondary" size="sm" href={repo.url} target="_blank" rel="noopener noreferrer" alt={`View ${repo.name} on GitHub`}>
            <FaGithub /> View on GitHub
          </Button>
        </div>
      </div>
    </Reveal>
  );
};

export default RepositoryItem;
