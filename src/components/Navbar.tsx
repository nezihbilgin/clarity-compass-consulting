
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { content } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-heading font-bold">
              Clarity <span className="text-primary">Compass</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              {content.navbar.about}
            </a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">
              {content.navbar.services}
            </a>
            <a href="#clients" className="text-sm hover:text-primary transition-colors">
              {content.navbar.clients}
            </a>
            <a href="#why-me" className="text-sm hover:text-primary transition-colors">
              {content.navbar.whyMe}
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              {content.navbar.contact}
            </a>
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <LanguageToggle />
            <button onClick={toggleMenu} className="p-1">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="block py-2 hover:text-primary" onClick={toggleMenu}>
                {content.navbar.about}
              </a>
              <a href="#services" className="block py-2 hover:text-primary" onClick={toggleMenu}>
                {content.navbar.services}
              </a>
              <a href="#clients" className="block py-2 hover:text-primary" onClick={toggleMenu}>
                {content.navbar.clients}
              </a>
              <a href="#why-me" className="block py-2 hover:text-primary" onClick={toggleMenu}>
                {content.navbar.whyMe}
              </a>
              <a href="#contact" className="block py-2 hover:text-primary" onClick={toggleMenu}>
                {content.navbar.contact}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
