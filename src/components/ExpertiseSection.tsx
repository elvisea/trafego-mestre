'use client';

import {
  BarChart2,
  Users,
  CheckCircle,
  Target,
  Award
} from 'lucide-react';


const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      title: "Google Ads",
      description: "Campanhas de Search, Display, Shopping e YouTube otimizadas para capturar usuários com alta intenção de compra.",
      features: ['Segmentação avançada', 'Otimização de conversões', 'Remarketing inteligente']
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Meta Ads",
      description: "Anúncios no Facebook e Instagram com segmentação precisa para atingir seu público-alvo ideal e gerar engajamento.",
      features: ['Públicos personalizados', 'Anúncios dinâmicos', 'Otimização de funil']
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "LinkedIn Ads",
      description: "Alcance tomadores de decisão e profissionais qualificados com campanhas B2B de alta performance.",
      features: ['Segmentação por cargo', 'Lead generation forms', 'ABM (Account-Based Marketing)']
    }
  ];

  return (
    <section className="py-16 bg-secondary/30" id="expertise">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expertise em <span className="text-primary">Plataformas</span> de Anúncios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estratégias personalizadas para cada canal, maximizando o retorno do seu investimento em marketing digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{area.title}</h3>
              <p className="text-muted-foreground mb-4">
                {area.description}
              </p>
              <ul className="space-y-2">
                {area.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certificações e Parcerias */}
        <div className="bg-card rounded-xl border border-border p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-4">Certificações e Parcerias</h3>
          <p className="text-muted-foreground mb-8">
            Profissional certificado e parceiro oficial das principais plataformas de anúncios, garantindo expertise atualizada e acesso a recursos exclusivos.
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-lg">
              <div className="w-6 h-6 relative flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">Google Partner</span>
            </div>

            <div className="flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-lg">
              <div className="w-6 h-6 relative flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">Meta Business Partner</span>
            </div>

            <div className="flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-lg">
              <div className="w-6 h-6 relative flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">LinkedIn Ads Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection; 