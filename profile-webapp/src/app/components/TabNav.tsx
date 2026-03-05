"use client";
import React, { useState, useEffect } from 'react';
import Reveal from './Reveal'; // Import Reveal

interface TabNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const TabNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'code', label: 'Code' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: '0px 0px -50% 0px', // When section midpoint crosses the viewport center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {sections.map((section, index) => (
        <Reveal key={section.id} delay={index * 50}>
          <a href={`#${section.id}`} onClick={() => setActiveSection(section.id)} className={`relative text-body font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-md\n            ${activeSection === section.id ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}
          `}>
            {section.label}
            {activeSection === section.id && (
              <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-brand-primary rounded-full" />
            )}
          </a>
        </Reveal>
      ))}
    </nav>
  );
};

export default TabNav;
