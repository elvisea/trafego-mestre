'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            <span className="text-primary">Tráfego</span><span className="text-foreground">Mestre</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('expertise')} className="text-foreground hover:text-primary transition-colors">
            Expertise
          </button>
          <button onClick={() => scrollToSection('case-studies')} className="text-foreground hover:text-primary transition-colors">
            Resultados
          </button>
          <button onClick={() => scrollToSection('methodology')} className="text-foreground hover:text-primary transition-colors">
            Metodologia
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">
            Depoimentos
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">
            Planos
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">
            FAQ
          </button>
          <button onClick={() => scrollToSection('contact')} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Fale Comigo
          </button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('expertise')} className="text-foreground hover:text-primary transition-colors py-2">
              Expertise
            </button>
            <button onClick={() => scrollToSection('case-studies')} className="text-foreground hover:text-primary transition-colors py-2">
              Resultados
            </button>
            <button onClick={() => scrollToSection('methodology')} className="text-foreground hover:text-primary transition-colors py-2">
              Metodologia
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors py-2">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors py-2">
              Planos
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors py-2">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Fale Comigo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 