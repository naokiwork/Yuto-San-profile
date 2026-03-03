import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#hero" className="text-light text-2xl font-bold">
          Yuto Asai
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#research-focus" className="text-light hover:text-primary transition-colors duration-200">
            Research
          </Link>
          <Link href="#publications" className="text-light hover:text-primary transition-colors duration-200">
            Publications
          </Link>
          <Link href="#awards" className="text-light hover:text-primary transition-colors duration-200">
            Awards
          </Link>
          <Link href="#contact" className="text-light hover:text-primary transition-colors duration-200">
            Contact
          </Link>
        </div>
        {/* Mobile menu button will go here */}
      </div>
    </nav>
  );
}