'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO, TechSolutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60",
      text: "Contratar este especialista em tráfego pago foi a melhor decisão que tomei para meu negócio. Em apenas dois meses, triplicamos nossas conversões e reduzimos o custo por aquisição em 40%. A abordagem estratégica e o foco em dados fizeram toda a diferença.",
      rating: 5
    },
    {
      name: "Ana Ferreira",
      position: "Diretora de Marketing, ModaExpress",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60",
      text: "Depois de trabalhar com várias agências de marketing digital, finalmente encontramos alguém que realmente entende de tráfego pago. A transparência nos relatórios e a comunicação constante nos deram confiança total no processo. Os resultados falam por si.",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      position: "Fundador, ClinicaEstética",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60",
      text: "Nossa clínica aumentou o faturamento em 68% em apenas 4 meses de trabalho com as estratégias de tráfego pago implementadas. O mais impressionante foi a capacidade de atrair exatamente o tipo de cliente que buscávamos, com alta conversão e ticket médio elevado.",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resultados reais compartilhados por empresários que transformaram seus negócios com nossas estratégias
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="bg-card rounded-xl p-8 md:p-10 border border-border shadow-md">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg">{testimonials[activeIndex].name}</h3>
                  <p className="text-muted-foreground">{testimonials[activeIndex].position}</p>
                </div>
              </div>
              <blockquote className="text-lg md:text-xl italic text-center">
                "{testimonials[activeIndex].text}"
              </blockquote>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="text-3xl font-bold text-primary mb-2">+300%</div>
            <p className="text-muted-foreground">Aumento médio em ROAS</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="text-3xl font-bold text-primary mb-2">+127%</div>
            <p className="text-muted-foreground">Aumento em conversões</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="text-3xl font-bold text-primary mb-2">-42%</div>
            <p className="text-muted-foreground">Redução média em CPA</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Taxa de retenção</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 