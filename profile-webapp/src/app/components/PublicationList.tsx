import { useState } from 'react';
import { Publication } from '../../../data/index';
import SectionHeading from './SectionHeading';
import { FaExternalLinkAlt, FaCopy } from 'react-icons/fa';

interface PublicationListProps {
  publications: Publication[];
}

export default function PublicationList({ publications }: PublicationListProps) {
  const [filter, setFilter] = useState('All');
  const [openYears, setOpenYears] = useState<Record<number, boolean>>({});

  const filteredPublications = publications.filter(pub => filter === 'All' || pub.type === filter);

  const groupedByYear = filteredPublications.reduce((acc, pub) => {
    (acc[pub.year] = acc[pub.year] || []).push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  const sortedYears = Object.keys(groupedByYear).map(Number).sort((a, b) => b - a);

  const toggleYear = (year: number) => {
    setOpenYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const copyCitation = (citation: string) => {
    navigator.clipboard.writeText(citation);
    alert('Citation copied to clipboard!');
  };

  return (
    <section id="publications" className="bg-dark-900 rounded-2xl p-8 shadow-3xl space-y-6">
      <SectionHeading title="Publications" subtitle="My academic publications, organized by year and type." />
      <div className="flex flex-wrap gap-3 mb-6">
        {['All', 'Journal', 'Conference', 'Thesis', 'Preprint'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
              ${filter === type ? 'bg-primary text-light' : 'bg-dark-700 text-light-400 hover:bg-dark-600'}`}
          >
            {type}
          </button>
        ))}
      </div>

      {sortedYears.map(year => (
        <div key={year} className="border border-dark-700 rounded-lg overflow-hidden">
          <button
            className="w-full text-left p-4 bg-dark-800 hover:bg-dark-700 transition-colors duration-200 flex justify-between items-center text-light text-lg font-semibold"
            onClick={() => toggleYear(year)}
          >
            {year} ({groupedByYear[year].length})
            <span>{openYears[year] ? '▲' : '▼'}</span>
          </button>
          {openYears[year] && (
            <div className="p-4 space-y-4">
              {groupedByYear[year].map(pub => (
                <div key={pub.id} className="bg-dark-800 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200">
                  <h4 className="text-light text-md font-medium mb-1">{pub.title}</h4>
                  <p className="text-light-400 text-sm mb-2">{pub.venue} ({pub.year}) - {pub.type}</p>
                  <div className="flex flex-wrap gap-2 items-center">
                    {pub.links.length > 0 ? (
                      pub.links.map(link => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-primary-light hover:text-primary transition-colors duration-200 text-sm"
                        >
                          {link.label} {link.icon === 'external' && <FaExternalLinkAlt className="ml-1 text-xs" />}
                        </a>
                      ))
                    ) : (
                      <span className="text-light-500 text-sm">Link unavailable</span>
                    )}
                    {pub.citation && (
                      <button
                        onClick={() => copyCitation(pub.citation)}
                        className="flex items-center text-light-500 hover:text-light transition-colors duration-200 text-sm ml-auto"
                        title="Copy citation (BibTeX)"
                      >
                        <FaCopy className="mr-1 text-xs" /> Copy citation
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}