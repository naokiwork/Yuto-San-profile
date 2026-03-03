import Link from 'next/link';
import React from 'react';

const SkipToContent: React.FC = () => {
  return (
    <Link
      href="#main-content"
      className="absolute left-4 top-4 bg-primary text-white p-3 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light sr-only focus:not-sr-only"
    >
      Skip to main content
    </Link>
  );
};

export default SkipToContent;
