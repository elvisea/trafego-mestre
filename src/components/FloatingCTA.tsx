'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar o botão flutuante após rolar 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-card rounded-xl p-4 shadow-lg border border-border mb-4 w-72 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Precisa de ajuda?</h3>
            <button
              onClick={toggleOpen}
              className="text-muted-foreground hover:text-foreground"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Estou pronto para ajudar seu negócio a crescer com estratégias de tráfego pago que realmente funcionam.
          </p>
          <button
            onClick={scrollToContact}
            className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Falar com especialista
          </button>
        </div>
      )}

      <button
        onClick={toggleOpen}
        className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Abrir chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default FloatingCTA; 