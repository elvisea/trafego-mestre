'use client';

import { useState } from 'react';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const ResultsSection = () => {
  const [activeTab, setActiveTab] = useState('ecommerce');

  const caseStudies = {
    ecommerce: {
      title: "E-commerce de Moda",
      metrics: [
        { icon: <TrendingUp size={24} />, value: "380%", label: "Aumento nas vendas" },
        { icon: <Users size={24} />, value: "12.500", label: "Novos clientes" },
        { icon: <DollarSign size={24} />, value: "4.2x", label: "ROAS" }
      ],
      description: "Para uma loja online de moda, implementei uma estratégia multicanal com Google Shopping, Facebook Ads e Instagram Ads. Otimizei as campanhas para diferentes segmentos de público e fases do funil de vendas.",
      result: "Em apenas 3 meses, as vendas aumentaram 380%, com um retorno sobre o investimento em publicidade de 4.2x."
    },
    saas: {
      title: "SaaS B2B",
      metrics: [
        { icon: <TrendingUp size={24} />, value: "215%", label: "Aumento em leads" },
        { icon: <Users size={24} />, value: "-32%", label: "Redução no CAC" },
        { icon: <DollarSign size={24} />, value: "68", label: "Novos clientes" }
      ],
      description: "Para uma empresa de software B2B, criei campanhas no Google Ads e LinkedIn focadas em palavras-chave de alta intenção e segmentação precisa por cargo e setor.",
      result: "O número de leads qualificados aumentou 215%, o custo de aquisição de cliente reduziu em 32% e 68 novos clientes foram conquistados em 6 meses."
    },
    local: {
      title: "Negócio Local",
      metrics: [
        { icon: <TrendingUp size={24} />, value: "145%", label: "Mais agendamentos" },
        { icon: <Users size={24} />, value: "85%", label: "Novos clientes" },
        { icon: <DollarSign size={24} />, value: "3.8x", label: "ROI" }
      ],
      description: "Para uma clínica estética local, implementei campanhas no Google Ads com foco em anúncios locais e remarketing no Facebook para visitantes do site.",
      result: "Os agendamentos aumentaram 145%, com 85% dos novos clientes vindo diretamente das campanhas de anúncios, gerando um ROI de 3.8x."
    }
  };

  const activeCase = caseStudies[activeTab as keyof typeof caseStudies];

  return (
    <section id="results" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Resultados <span className="text-[hsl(var(--chart-2))]">comprovados</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Conheça alguns casos de sucesso e os resultados que alcancei para meus clientes
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'ecommerce'
                  ? 'bg-[hsl(var(--chart-1))] text-white'
                  : 'bg-card hover:bg-secondary'
                }`}
            >
              E-commerce
            </button>
            <button
              onClick={() => setActiveTab('saas')}
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'saas'
                  ? 'bg-[hsl(var(--chart-1))] text-white'
                  : 'bg-card hover:bg-secondary'
                }`}
            >
              SaaS B2B
            </button>
            <button
              onClick={() => setActiveTab('local')}
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'local'
                  ? 'bg-[hsl(var(--chart-1))] text-white'
                  : 'bg-card hover:bg-secondary'
                }`}
            >
              Negócio Local
            </button>
          </div>

          {/* Case Study Content */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">{activeCase.title}</h3>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {activeCase.metrics.map((metric, index) => (
                  <div key={index} className="bg-secondary/50 rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-2 text-[hsl(var(--chart-1))]">
                      {metric.icon}
                    </div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">{activeCase.description}</p>
                <p className="font-medium">{activeCase.result}</p>
              </div>

              <div className="mt-8 flex justify-center">
                <button className="flex items-center gap-2 text-[hsl(var(--chart-1))] hover:underline">
                  Ver estudo de caso completo <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection; 