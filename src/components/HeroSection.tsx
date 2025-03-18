'use client'

import Image from 'next/image';
import { ArrowRight, ChevronRight, BarChart2, Target } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <span className="text-sm font-medium">Especialista em Tráfego Pago</span>
              <ChevronRight size={16} />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforme seu <span className="text-primary">investimento</span> em anúncios em <span className="text-primary">resultados</span> reais
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Estratégias de tráfego pago que geram leads qualificados, aumentam vendas e maximizam seu ROI. Sem desperdício de orçamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                Agendar consultoria gratuita <ArrowRight size={18} />
              </button>

              <button
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-background border border-input hover:bg-secondary transition-colors px-6 py-3 rounded-lg font-medium"
              >
                Ver resultados
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                  +50
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-background relative">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60"
                    alt="Cliente"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-background relative">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60"
                    alt="Cliente"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-background relative">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60"
                    alt="Cliente"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-sm">
                <span className="font-medium">+50 empresas</span> já aumentaram seus resultados
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                alt="Dashboard de análise de tráfego pago"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>

              <div className="absolute top-6 left-6 right-6 bg-card/90 backdrop-blur-sm p-4 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <BarChart2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-medium">Métricas que importam</div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-background/80 p-3 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">ROAS</div>
                    <div className="text-lg font-bold text-primary">4.8x</div>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">CPA</div>
                    <div className="text-lg font-bold text-green-500">-42%</div>
                  </div>
                  <div className="bg-background/80 p-3 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">CTR</div>
                    <div className="text-lg font-bold text-primary">8.3%</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm p-4 rounded-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Resultados comprovados</div>
                    <div className="text-xs text-muted-foreground">Aumento médio de 43% em ROAS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 