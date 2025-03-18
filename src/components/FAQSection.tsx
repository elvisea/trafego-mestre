'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados com tráfego pago?",
      answer: "Os primeiros resultados geralmente começam a aparecer entre 2 a 4 semanas após o início das campanhas. No entanto, a otimização completa e os melhores resultados costumam ser alcançados após 2-3 meses de ajustes contínuos e coleta de dados suficientes para otimizações baseadas em performance."
    },
    {
      question: "Qual é o investimento mínimo recomendado para campanhas de tráfego pago?",
      answer: "O investimento mínimo varia de acordo com o setor, concorrência e objetivos. Para a maioria dos negócios, recomendo começar com pelo menos R$ 3.000 mensais para ter dados suficientes para otimização. Setores mais competitivos podem exigir investimentos maiores para obter resultados significativos."
    },
    {
      question: "Vocês trabalham com contratos de longo prazo?",
      answer: "Trabalhamos com contratos mensais renováveis automaticamente. Não exigimos fidelidade de longo prazo, pois acreditamos que nossos resultados falarão por si. No entanto, para obter os melhores resultados, recomendamos um compromisso mínimo de 3 meses, já que as estratégias de tráfego pago geralmente levam tempo para serem totalmente otimizadas."
    },
    {
      question: "Quais plataformas de anúncios vocês gerenciam?",
      answer: "Gerenciamos campanhas em todas as principais plataformas de tráfego pago, incluindo Google Ads (Search, Display, Shopping e YouTube), Meta Ads (Facebook e Instagram), LinkedIn Ads, TikTok Ads, Twitter Ads e Pinterest Ads. A escolha das plataformas dependerá dos objetivos do seu negócio e onde seu público-alvo está mais presente."
    },
    {
      question: "Como vocês medem o sucesso das campanhas?",
      answer: "Definimos KPIs claros no início do projeto, alinhados com seus objetivos de negócio. Dependendo da sua estratégia, podemos focar em métricas como ROAS (retorno sobre investimento em anúncios), CPA (custo por aquisição), CPL (custo por lead), taxa de conversão, ou aumento de receita. Fornecemos relatórios detalhados e dashboards para acompanhar esses indicadores."
    },
    {
      question: "Vocês também criam os anúncios e landing pages?",
      answer: "Sim, oferecemos um serviço completo que inclui a criação de anúncios (textos e elementos visuais) e landing pages otimizadas para conversão. Nosso time de designers e copywriters trabalha em conjunto com os especialistas em tráfego pago para garantir que toda a jornada do usuário seja coerente e eficaz."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre nossos serviços de tráfego pago
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl border ${openIndex === index ? 'border-primary' : 'border-border'
                  } overflow-hidden transition-all`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-primary" />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                >
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Entre em contato para uma conversa personalizada
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Fale com um especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 