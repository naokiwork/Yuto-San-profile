import SectionHeading from './SectionHeading';
import React from 'react';
import Button from './Button';
import { Reveal } from './page'; // Assuming Reveal is exported from page.tsx

// Minimal local type definition for Publication
interface Publication {
  id: string;
  title: string;
  venue: string;
  year: number;
  links: { label: string; href: string }[];
  tags: string[];
}

interface PublicationListProps {
  publications?: Publication[]; // Publications are optional
}

const PublicationList: React.FC<PublicationListProps> = ({ publications }) => {
  const [filter, setFilter] = React.useState('All');

  const allTags = Array.from(new Set(publications?.flatMap(p => p.tags) || []));
  const filters = ['All', ...allTags];

  const filteredPublications = publications?.filter(pub => filter === 'All' || pub.tags.includes(filter)) || [];

  return (
    <div className="space-y-6">
      <SectionHeading title="Publications" subtitle="My academic publications." />

      {publications && publications.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-small font-medium transition-colors border
                ${filter === f ? 'bg-accent text-card border-accent' : 'bg-background text-muted-2 border-border hover:bg-muted/10'}`}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4">
        {filteredPublications.length > 0 ? (
          filteredPublications.sort((a, b) => b.year - a.year).map((pub, index) => (
            <Reveal key={pub.id} delay={index * 100}>
              <div className="bg-card border border-border rounded-md p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-grow space-y-1">
                  <h3 className="text-h3 font-semibold text-foreground tracking-tight">{pub.title}</h3>
                  <p className="text-small text-muted">{pub.venue} ({pub.year})</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {pub.tags.map(tag => (
                      <span key={tag} className="bg-background text-muted-2 text-micro px-2 py-0.5 rounded-full border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:ml-4">
                  {pub.links.map(link => (
                    <Button key={link.label} href={link.href} variant="secondary" size="sm">
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            </Reveal>
          ))
        ) : (
          <p className="text-muted text-center text-body">No publications match the current filter. Publications will appear here soon.</p>
        )}
      </div>
    </div>
  );
};

export default PublicationList;
