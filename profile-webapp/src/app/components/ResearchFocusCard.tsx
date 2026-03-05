"use client";
import React from 'react';
import Reveal from './Reveal';
import Button from './Button';
import { FaExternalLinkAlt, FaMicrochip, FaRobot, FaRocket } from '@/components/icons'; // Import specific icons
import Chip from './Chip'; // Import Chip component
import Card from './Card'; // Import Card component

interface ResearchFocusCardProps {
  title: string;
  claim: string;
  keywords: string[];
  linkHref: string;
  icon: string; // Icon name as string
}

const iconComponents: Record<string, React.ElementType> = {
  FaMicrochip,
  FaRobot,
  FaRocket,
};

const ResearchFocusCard: React.FC<ResearchFocusCardProps> = ({ title, claim, keywords, linkHref, icon }) => {
  const IconComponent = iconComponents[icon];
  if (!IconComponent) {
    console.warn(`Icon ${icon} not found for ResearchFocusCard. Using a placeholder.`);
    return null; // or <span className="text-muted">?</span>
  }
  return (
    <Card>
      <div className="flex items-center mb-4">
        <IconComponent className="w-8 h-8 text-accent mr-3" />
        <h3 className="text-h3 font-semibold text-text leading-tight">{title}</h3>
      </div>
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
};

export default ResearchFocusCard;
