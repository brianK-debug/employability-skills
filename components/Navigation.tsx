'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'reflection', label: 'Reflection' },
    { id: 'career', label: 'Career' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
        scrolled
          ? 'backdrop-blur-md bg-white/5 border-b border-violet-500/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-cyan-300 smooth-transition"
            >
              Skills
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`smooth-transition text-sm font-semibold px-3 py-2 rounded-lg ${
                  activeSection === section.id
                    ? 'text-violet-300 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-violet-500/50'
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-cyan-400 hover:bg-white/10 smooth-transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-violet-500/20">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg smooth-transition font-semibold ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-violet-600/30 to-cyan-500/30 text-violet-300 border border-violet-500/50'
                    : 'text-foreground/70 hover:bg-white/5 hover:text-foreground'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
