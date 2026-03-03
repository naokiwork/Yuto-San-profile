"use client";

import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState('apple'); // Default to Apple Light

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'apple';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'apple' ? 'github' : 'apple';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-full bg-bg1 border border-border text-text1 text-sm font-medium focus:ring-2 focus:ring-focus focus:outline-none"
      aria-label="Toggle theme"
    >
      {theme === 'apple' ? 'GitHub Dark' : 'Apple Light'}
    </button>
  );
};

export default ThemeToggle;
