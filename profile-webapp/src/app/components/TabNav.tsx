"use client";
import React, { useState, useEffect } from 'react';

interface TabNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const TabNav: React.FC<TabNavProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'code', label: 'Code' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`} onClick={() => setActiveSection(section.id)} className={`relative text-body font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md\n          ${activeSection === section.id ? 'text-foreground' : 'text-muted hover:text-foreground'}
        `}>
          {section.label}
          {activeSection === section.id && (
            <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-accent rounded-full" />
          )}
        </a>
      ))}
    </nav>
  );
};

export default TabNav;
