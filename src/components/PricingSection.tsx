'use client';

import { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Essencial",
      description: "Ideal para pequenas empresas que estão começando com tráfego pago",
      monthlyPrice: 1497,
      annualPrice: 14970,
      features: [
        "Gestão de 2 plataformas de anúncios",
        "Até R$ 5.000 em investimento mensal",
        "Otimização semanal das campanhas",
        "Relatórios mensais de desempenho",
        "Suporte por e-mail",
        "1 reunião mensal de alinhamento"
      ],
      cta: "Começar agora"
    },
    {
      name: "Profissional",
      description: "Para empresas que buscam escalar seus resultados com tráfego pago",
      monthlyPrice: 2997,
      annualPrice: 29970,
      popular: true,
      features: [
        "Gestão de 3 plataformas de anúncios",
        "Até R$ 15.000 em investimento mensal",
        "Otimização 3x por semana",
        "Relatórios semanais de desempenho",
        "Suporte por e-mail e WhatsApp",
        "2 reuniões mensais de alinhamento",
        "Criação de landing pages",
        "Testes A/B contínuos"
      ],
      cta: "Escolher plano"
    },
    {
      name: "Enterprise",
      description: "Para negócios que necessitam de estratégias avançadas e resultados em escala",
      monthlyPrice: 4997,
      annualPrice: 49970,
      features: [
        "Gestão de todas as plataformas de anúncios",
        "Investimento mensal ilimitado",
        "Otimização diária das campanhas",
        "Dashboard em tempo real",
        "Suporte prioritário",
        "Reuniões semanais de alinhamento",
        "Criação de landing pages avançadas",
        "Estratégia de funil completo",
        "Análise de concorrentes"
      ],
      cta: "Falar com especialista"
    }
  ];

  const discount = 20; // Desconto anual em porcentagem

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos <span className="text-primary">Transparentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para seu negócio e comece a transformar seu investimento em anúncios em resultados reais
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-secondary/50 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md transition-all ${!isAnnual ? 'bg-card shadow-sm' : 'hover:bg-card/50'
                }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md transition-all ${isAnnual ? 'bg-card shadow-sm' : 'hover:bg-card/50'
                }`}
            >
              Anual <span className="text-xs text-primary">(-{discount}%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl overflow-hidden border ${plan.popular ? 'border-primary shadow-lg relative' : 'border-border'
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                  Mais popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-3xl font-bold">
                    {formatCurrency(isAnnual ? (plan.annualPrice / 12) * (1 - discount / 100) : plan.monthlyPrice)}
                    <span className="text-muted-foreground text-base font-normal">/mês</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-primary mt-1">
                      Economia de {formatCurrency((plan.monthlyPrice * 12) - plan.annualPrice * (1 - discount / 100))} por ano
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={18} className="text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary hover:bg-secondary/70 text-foreground'
                    } transition-colors`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-xl p-8 border border-border max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <HelpCircle size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Precisa de um plano personalizado?</h3>
              <p className="text-muted-foreground mb-4">
                Se você tem necessidades específicas ou um orçamento maior, podemos criar uma estratégia sob medida para o seu negócio.
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Agendar consultoria gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 