import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-zinc-900 text-white p-2 rounded-lg group-hover:scale-110 transition-transform">
            <Terminal size={20} strokeWidth={3} />
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900">
            PixelForge<span className="font-normal text-zinc-500">Studios</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-100 shadow-xl p-6 flex flex-col gap-4">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-lg font-medium text-zinc-900 py-2 border-b border-zinc-50"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-zinc-900 text-white px-5 py-3 rounded-xl text-center font-medium mt-2"
            onClick={() => setIsOpen(false)}
          >
            Start Project
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;