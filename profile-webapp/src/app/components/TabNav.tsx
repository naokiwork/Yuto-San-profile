import React from 'react';

const TabNav: React.FC = () => {
  const tabs = [
    { name: 'Overview', href: '#overview' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Repositories', href: '#repositories' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="flex space-x-4">
      {tabs.map((tab) => (
        <a
          key={tab.name}
          href={tab.href}
          className="text-text1 hover:text-link px-3 py-2 rounded-md text-sm font-medium"
        >
          {tab.name}
        </a>
      ))}
    </nav>
  );
};

export default TabNav;
