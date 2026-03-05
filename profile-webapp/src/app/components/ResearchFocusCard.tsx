"use client";
import React from 'react';
import Reveal from './Reveal';
import Button from './Button';
import { FaExternalLinkAlt } from '@/components/icons';
import Chip from './Chip'; // Import Chip component
import Card from './Card'; // Import Card component

interface ResearchFocusCardProps {
  title: string;
  claim: string;
  keywords: string[];
  linkHref: string;
}

const ResearchFocusCard: React.FC<ResearchFocusCardProps> = ({ title, claim, keywords, linkHref }) => (
  <Card>
    <h3 className="text-h3 font-semibold text-text mb-2 leading-tight">{title}</h3>
    <p className="text-muted text-body flex-grow mb-4">{claim}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {keywords.map((keyword, index) => (
        <Chip key={index}>{keyword}</Chip>
      ))}
    </div>
    <div className="mt-auto">
      <Button variant="link" size="sm" href={linkHref} alt={`Read more about ${title}`}>
        Read more <FaExternalLinkAlt className="inline-block ml-1 w-3 h-3" />
      </Button>
    </div>
  </Card>
);

export default ResearchFocusCard;
