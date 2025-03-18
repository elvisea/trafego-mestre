import { CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Análise e Diagnóstico",
      description: "Avaliação completa do seu negócio, público-alvo e concorrentes para identificar oportunidades"
    },
    {
      number: "02",
      title: "Estratégia Personalizada",
      description: "Desenvolvimento de um plano de tráfego pago sob medida para seus objetivos de negócio"
    },
    {
      number: "03",
      title: "Implementação",
      description: "Criação e configuração das campanhas com segmentação precisa e anúncios persuasivos"
    },
    {
      number: "04",
      title: "Otimização Contínua",
      description: "Monitoramento diário e ajustes para maximizar o desempenho e o retorno sobre investimento"
    }
  ];

  return (
    <section id="process" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Minha <span className="text-[hsl(var(--chart-2))]">metodologia</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Um processo estruturado para garantir que suas campanhas de tráfego pago gerem resultados consistentes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-xl p-6 shadow-md h-full border border-border">
                <div className="text-3xl font-bold text-[hsl(var(--chart-2))] mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Por que minha abordagem funciona</h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--chart-1))] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Dados orientam decisões</h4>
                    <p className="text-muted-foreground">Todas as estratégias são baseadas em análises detalhadas e não em suposições</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--chart-1))] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Segmentação precisa</h4>
                    <p className="text-muted-foreground">Seus anúncios são exibidos apenas para pessoas com real potencial de conversão</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--chart-1))] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Testes A/B constantes</h4>
                    <p className="text-muted-foreground">Refinamento contínuo de anúncios, landing pages e segmentações para melhorar resultados</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--chart-1))] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Transparência total</h4>
                    <p className="text-muted-foreground">Relatórios detalhados e comunicação clara sobre o desempenho das suas campanhas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--chart-2))] to-[hsl(var(--chart-1))] opacity-20 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">+250</div>
                  <div className="text-xl">Campanhas otimizadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 