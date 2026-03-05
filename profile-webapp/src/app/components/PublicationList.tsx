"use client";
import React, { useState } from 'react';
import type { Publication } from '@/data';
import SectionHeading from './SectionHeading';
import Button from './Button';
import Reveal from './Reveal';
import { FaExternalLinkAlt, FaBook, FaFilePdf, Fa } from '@/components/icons';
import Chip from './Chip'; // Import Chip component
import Card from './Card'; // Import Card component

interface PublicationListProps {
  publications: Publication[];
  className?: string;
}

const PublicationList: React.FC<PublicationListProps> = ({ publications, className = '' }) => {
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = Array.from(new Set(publications.flatMap(pub => pub.tags)));
  const filteredPublications = selectedTag === 'All'
    ? publications
    : publications.filter(pub => pub.tags.includes(selectedTag));

  const groupedPublications: Record<string, Publication[]> = filteredPublications.reduce((acc, pub) => {
    const key = String(pub.year);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(pub);
    return acc;
  }, {} as Record<string, Publication[]>);

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <Button
          variant={selectedTag === 'All' ? 'cta-primary' : 'secondary'}
          size="sm"
          onClick={() => setSelectedTag('All')}
          alt="Show all publications"
        >
          All
        </Button>
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={selectedTag === tag ? 'cta-primary' : 'secondary'}
            size="sm"
            onClick={() => setSelectedTag(tag)}
            alt={`Filter publications by ${tag}`}
          >
            {tag}
          </Button>
        ))}
      </div>

      {Object.keys(groupedPublications).sort((a, b) => Number(b) - Number(a)).map((yearStr) => (
        <div key={yearStr} className="mb-10 pb-6 last:pb-0">
          <h3 className="text-2xl font-semibold text-text mb-6 sticky top-0 bg-bg-base py-2 z-10">{yearStr}</h3>
          <ul className="space-y-6">
            {(groupedPublications[yearStr] ?? []).map((pub, index) => (
              <Card key={index} delay={index * 50}>
                <p className="text-small text-muted mb-1">{pub.type} · {pub.venue}</p>
                <h4 className="text-h3 font-medium text-text mb-3 leading-tight">{pub.title}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag, tagIndex) => (
                    <Chip key={tagIndex}>{tag}</Chip>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  {pub.links.map((link, linkIndex) => (
                    <Button key={linkIndex} variant="secondary" size="sm" href={link.href} target="_blank" rel="noopener noreferrer" alt={`${pub.title} ${link.label}`}>
                      {link.label === 'Paper' ? <FaFilePdf className="mr-2" /> : link.label === 'Abstract' ? <FaBook className="mr-2" /> : null}
                      {link.label}
                    </Button>
                  ))}
                </div>
              </Card>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PublicationList;
