import { CheckCircle, ArrowRight } from 'lucide-react';

const MethodologySection = () => {
  const steps = [
    {
      number: "01",
      title: "Auditoria e Diagnóstico",
      description: "Análise completa do seu negócio, público-alvo, concorrentes e campanhas existentes para identificar oportunidades."
    },
    {
      number: "02",
      title: "Estratégia Personalizada",
      description: "Desenvolvimento de um plano de tráfego pago sob medida para seus objetivos específicos e orçamento disponível."
    },
    {
      number: "03",
      title: "Implementação Técnica",
      description: "Configuração de rastreamento avançado, criação de campanhas otimizadas e desenvolvimento de criativos persuasivos."
    },
    {
      number: "04",
      title: "Otimização Contínua",
      description: "Monitoramento diário, testes A/B constantes e ajustes estratégicos para maximizar o desempenho."
    },
    {
      number: "05",
      title: "Análise e Relatórios",
      description: "Relatórios detalhados com insights acionáveis e recomendações para melhorias contínuas."
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Metodologia <span className="text-primary">Comprovada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado e orientado por dados para garantir que suas campanhas de tráfego pago gerem resultados consistentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-xl p-6 shadow-md h-full border border-border hover:border-primary/20 transition-all hover:shadow-lg">
                <div className="text-3xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6">
                  <ArrowRight className="text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl overflow-hidden border border-border shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-6">Por que minha metodologia funciona</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Abordagem orientada por dados</h4>
                    <p className="text-muted-foreground">Todas as decisões são baseadas em métricas reais, não em suposições ou tendências passageiras.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Segmentação precisa</h4>
                    <p className="text-muted-foreground">Seus anúncios são exibidos apenas para pessoas com real potencial de conversão, maximizando o ROI.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Testes A/B constantes</h4>
                    <p className="text-muted-foreground">Refinamento contínuo de anúncios, landing pages e segmentações para melhorar resultados.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Otimização de funil completo</h4>
                    <p className="text-muted-foreground">Estratégias para cada etapa do funil de vendas, desde o reconhecimento da marca até a conversão.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Transparência total</h4>
                    <p className="text-muted-foreground">Relatórios detalhados e comunicação clara sobre o desempenho das suas campanhas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 lg:p-10 flex items-center justify-center">
              <div className="max-w-md">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <div className="text-5xl font-bold text-primary">94%</div>
                  </div>
                  <h4 className="text-xl font-semibold">dos clientes aumentam seu ROI em pelo menos 30% nos primeiros 60 dias</h4>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border shadow-md">
                  <p className="italic text-muted-foreground mb-4">&ldquo;A metodologia aplicada transformou completamente nosso marketing digital. Finalmente temos previsibilidade e escalabilidade nos resultados.&rdquo;</p>
                  <div>
                    <div className="font-medium">Marcos Oliveira</div>
                    <div className="text-sm text-muted-foreground">Diretor de Marketing, TechCorp</div>
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

export default MethodologySection; 