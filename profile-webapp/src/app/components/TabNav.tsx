import React from 'react';

const TabNav: React.FC = () => {
  const tabs = [
    { name: 'Overview', href: '#overview' },
    { name: 'Research', href: '#research' },
    { name: 'Projects', href: '#projects' },
    { name: 'Repositories', href: '#repositories' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="flex space-x-6">
      {tabs.map((tab) => (
        <a
          key={tab.name}
          href={tab.href}
          className="text-text1 hover:text-text0 px-3 py-2 text-sm font-medium transition-colors"
        >
          {tab.name}
        </a>
      ))}
    </nav>
  );
};

export default TabNav;
