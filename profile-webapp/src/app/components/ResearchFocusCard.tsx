"use client";
import React from 'react';
import Reveal from './Reveal';
import Button from './Button';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ResearchFocusCardProps {
  title: string;
  claim: string;
  keywords: string[];
  linkHref: string;
}

const ResearchFocusCard: React.FC<ResearchFocusCardProps> = ({ title, claim, keywords, linkHref }) => (
  <Reveal>
    <div className="bg-bg-surface border border-border-subtle rounded-lg shadow-sm p-6 flex flex-col items-start h-full">
      <h3 className="text-h3 font-semibold text-text-primary mb-2 leading-tight">{title}</h3>
      <p className="text-text-secondary text-body flex-grow mb-4">{claim}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {keywords.map((keyword, index) => (
          <span key={index} className="bg-bg-elevated text-text-muted text-xs px-2 py-0.5 rounded-full border border-border-subtle">{keyword}</span>
        ))}
      </div>
      <div className="mt-auto">
        <Button variant="link" size="sm" href={linkHref} alt={`Read more about ${title}`}>
          Read more <FaExternalLinkAlt className="inline-block ml-1 w-3 h-3" />
        </Button>
      </div>
    </div>
  </Reveal>
);

export default ResearchFocusCard;
