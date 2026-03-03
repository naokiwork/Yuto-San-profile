"use client";

import React, { useState, useEffect } from 'react';

const TabNav: React.FC = () => {
  const tabs = [
    { name: 'Overview', href: '#overview' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Code', href: '#code' },
    { name: 'Contact', href: '#contact' },
  ];

  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    setActiveHash(window.location.hash);

    // Observe sections for active state on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    tabs.forEach(tab => {
      const section = document.getElementById(tab.href.substring(1));
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      tabs.forEach(tab => {
        const section = document.getElementById(tab.href.substring(1));
        if (section) observer.unobserve(section);
      });
    };
  }, [tabs]);

  return (
    <nav className="flex space-x-4">
      {tabs.map((tab) => (
        <a
          key={tab.name}
          href={tab.href}
          className={`text-small font-medium py-2 relative transition-colors
            ${activeHash === tab.href ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-accent' : 'text-muted hover:text-foreground'}
          `}
        >
          {tab.name}
        </a>
      ))}
    </nav>
  );
};

export default TabNav;
