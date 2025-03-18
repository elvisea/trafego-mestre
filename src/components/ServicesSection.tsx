import {
  MousePointer,
  BarChart,
  Target,
  RefreshCw,
  PieChart,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <MousePointer className="h-10 w-10 text-[hsl(var(--chart-1))]" />,
      title: "Google Ads",
      description: "Campanhas otimizadas para capturar usuários com intenção de compra na maior plataforma de busca do mundo."
    },
    {
      icon: <BarChart className="h-10 w-10 text-[hsl(var(--chart-2))]" />,
      title: "Facebook & Instagram Ads",
      description: "Anúncios estratégicos nas redes sociais para aumentar o reconhecimento da marca e gerar leads qualificados."
    },
    {
      icon: <Target className="h-10 w-10 text-[hsl(var(--chart-3))]" />,
      title: "LinkedIn Ads",
      description: "Campanhas B2B direcionadas para conectar seu negócio com tomadores de decisão e profissionais qualificados."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-[hsl(var(--chart-4))]" />,
      title: "Remarketing",
      description: "Estratégias para reconquistar visitantes que não converteram na primeira visita ao seu site."
    },
    {
      icon: <PieChart className="h-10 w-10 text-[hsl(var(--chart-5))]" />,
      title: "Análise de Dados",
      description: "Monitoramento constante e relatórios detalhados para otimizar suas campanhas e maximizar resultados."
    },
    {
      icon: <Zap className="h-10 w-10 text-[hsl(var(--chart-1))]" />,
      title: "Landing Pages",
      description: "Criação de páginas de alta conversão alinhadas com suas campanhas de tráfego pago."
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Meus <span className="text-[hsl(var(--chart-1))]">serviços</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Soluções completas de tráfego pago para aumentar sua visibilidade online e converter visitantes em clientes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 