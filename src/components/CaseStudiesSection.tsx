'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ArrowRight, TrendingUp, DollarSign, Users, ShoppingCart } from 'lucide-react';

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "E-commerce de Moda",
      logo: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=60",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&auto=format&fit=crop&q=80",
      challenge: "Aumentar vendas online e reduzir custo de aquisição de clientes em um mercado altamente competitivo.",
      solution: "Implementação de campanhas de Google Shopping otimizadas, remarketing dinâmico no Facebook e Instagram, e segmentação avançada por interesse e comportamento.",
      results: [
        {
          icon: <TrendingUp className="h-5 w-5 text-primary" />,
          title: "Aumento de 127%",
          description: "nas vendas online em 3 meses"
        },
        {
          icon: <DollarSign className="h-5 w-5 text-primary" />,
          title: "Redução de 42%",
          description: "no custo de aquisição de clientes"
        },
        {
          icon: <ShoppingCart className="h-5 w-5 text-primary" />,
          title: "ROAS de 4.8x",
          description: "retorno sobre investimento em anúncios"
        }
      ]
    },
    {
      title: "SaaS B2B",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
      challenge: "Gerar leads qualificados para um software de gestão empresarial com ciclo de vendas longo e ticket médio alto.",
      solution: "Estratégia multicanal com LinkedIn Ads para targeting preciso, Google Ads para captura de intenção de busca e remarketing segmentado por etapa do funil.",
      results: [
        {
          icon: <Users className="h-5 w-5 text-primary" />,
          title: "Aumento de 83%",
          description: "na geração de leads qualificados"
        },
        {
          icon: <DollarSign className="h-5 w-5 text-primary" />,
          title: "Redução de 37%",
          description: "no custo por lead qualificado"
        },
        {
          icon: <TrendingUp className="h-5 w-5 text-primary" />,
          title: "Crescimento de 52%",
          description: "na taxa de conversão de trials"
        }
      ]
    },
    {
      title: "Clínica de Estética",
      logo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
      challenge: "Aumentar o agendamento de consultas e procedimentos estéticos em uma clínica premium com alta concorrência local.",
      solution: "Campanhas locais no Google e Meta com segmentação geográfica precisa, anúncios personalizados por procedimento e landing pages otimizadas para conversão.",
      results: [
        {
          icon: <Users className="h-5 w-5 text-primary" />,
          title: "Aumento de 94%",
          description: "nos agendamentos online"
        },
        {
          icon: <DollarSign className="h-5 w-5 text-primary" />,
          title: "ROI de 320%",
          description: "sobre o investimento em marketing"
        },
        {
          icon: <TrendingUp className="h-5 w-5 text-primary" />,
          title: "Crescimento de 68%",
          description: "na receita mensal recorrente"
        }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados <span className="text-primary">Comprovados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos casos de sucesso que transformaram investimento em anúncios em crescimento real
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`text-left p-6 rounded-xl transition-all ${activeCase === index
                ? 'bg-card border-primary border shadow-lg'
                : 'bg-card/50 border-transparent border hover:bg-card'
                }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src={caseStudy.logo}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="font-semibold text-lg">{caseStudy.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {caseStudy.challenge}
              </p>
              <div className={`flex items-center gap-2 text-sm font-medium ${activeCase === index ? 'text-primary' : 'text-muted-foreground'
                }`}>
                Ver case completo <ArrowRight size={16} />
              </div>
            </button>
          ))}
        </div>

        <div className="bg-card rounded-xl overflow-hidden border border-border shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4">{caseStudies[activeCase].title}</h3>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">O Desafio</h4>
                <p className="text-muted-foreground">{caseStudies[activeCase].challenge}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-2">Nossa Solução</h4>
                <p className="text-muted-foreground">{caseStudies[activeCase].solution}</p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Resultados Alcançados</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {caseStudies[activeCase].results.map((result, index) => (
                    <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                      <div className="mb-2">{result.icon}</div>
                      <div className="font-medium">{result.title}</div>
                      <div className="text-sm text-muted-foreground">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-[300px] lg:h-auto">
              <Image
                src={caseStudies[activeCase].image}
                alt={caseStudies[activeCase].title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection; 