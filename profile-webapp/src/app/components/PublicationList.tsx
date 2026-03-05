"use client";
import React, { useState } from 'react';
import Button from './Button';
import Reveal from './Reveal';
import { FaExternalLinkAlt, FaBook, FaFilePdf } from '@/components/icons';

interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'Journal' | 'Conference' | 'Preprint';
  links: { label: string; href: string }[];
  tags: string[];
}

interface PublicationListProps {
  publications: Publication[];
  className?: string; // For additional styling
}

const PublicationList: React.FC<PublicationListProps> = ({ publications, className = '' }) => {
  const [filter, setFilter] = useState<'All' | 'Journal' | 'Conference' | 'Preprint'>('All');

  const filteredPublications = publications.filter(pub =>
    filter === 'All' || pub.type === filter
  );

  const groupedPublications = filteredPublications.reduce((acc, pub) => {
    const year = pub.year.toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {} as Record<string, Publication[]>);

  return (
    <div className={`mt-12 ${className}`}>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <Button variant={filter === 'All' ? 'cta-primary' : 'secondary'} size="sm" onClick={() => setFilter('All')} alt="Show all publications">All</Button>
        <Button variant={filter === 'Journal' ? 'cta-primary' : 'secondary'} size="sm" onClick={() => setFilter('Journal')} alt="Show journal publications">Journals</Button>
        <Button variant={filter === 'Conference' ? 'cta-primary' : 'secondary'} size="sm" onClick={() => setFilter('Conference')} alt="Show conference publications">Conferences</Button>
        <Button variant={filter === 'Preprint' ? 'cta-primary' : 'secondary'} size="sm" onClick={() => setFilter('Preprint')} alt="Show preprint publications">Preprints</Button>
      </div>

      {Object.keys(groupedPublications).sort((a, b) => parseInt(b) - parseInt(a)).map(year => (
        <div key={year} className="mb-10 border-b border-border-subtle pb-6 last:border-b-0 last:pb-0">
          <h3 className="text-2xl font-semibold text-text-primary mb-6 sticky top-0 bg-bg-elevated py-2 z-10">{year}</h3>
          <ul className="space-y-6">
            {groupedPublications[year].map((pub, index) => (
              <Reveal key={index} delay={index * 50}>
                <li className="bg-bg-surface border border-border-subtle rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <p className="text-small text-text-secondary mb-1">{pub.type} · {pub.venue}</p>
                  <h4 className="text-h3 font-medium text-text-primary mb-3 leading-tight">{pub.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-bg-elevated text-text-muted text-xs px-2 py-0.5 rounded-full border border-border-subtle">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {pub.links.map((link, linkIndex) => (
                      <Button key={linkIndex} variant="secondary" size="sm" href={link.href} target="_blank" rel="noopener noreferrer" alt={`${pub.title} ${link.label}`}>
                          {link.label === 'Paper' && <FaFilePdf className="w-4 h-4" />}
                          {link.label === 'Abstract' && <FaBook className="w-4 h-4" />}
                          {link.label !== 'Paper' && link.label !== 'Abstract' && <FaExternalLinkAlt className="w-4 h-4" />}
                          <span>{link.label}</span>
                      </Button>
                    ))}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PublicationList;
