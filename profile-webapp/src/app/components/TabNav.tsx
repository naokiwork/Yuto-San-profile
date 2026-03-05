"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Reveal from './Reveal';

const TabNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const sections = useMemo(() => [
    { id: 'overview', label: 'Overview' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'code', label: 'Code' },
    { id: 'contact', label: 'Contact' },
  ], []);

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
  }, [sections]);

  return (
    <nav className="hidden md:flex items-center space-x-2">
      {sections.map((section, index) => (
        <Reveal key={section.id} delay={index * 50}>
          <a href={`#${section.id}`} onClick={() => setActiveSection(section.id)} className={`px-4 py-2 rounded-full text-body font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2
            ${activeSection === section.id ? 'bg-surface-2 text-text' : 'text-muted hover:bg-surface'}
          `}>
            {section.label}
          </a>
        </Reveal>
      ))}
    </nav>
  );
};

export default TabNav;
