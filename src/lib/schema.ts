// Esquema JSON-LD para o site TráfegoMestre

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://trafegomestre.com.br/#website",
  "url": "https://trafegomestre.com.br/",
  "name": "TráfegoMestre",
  "description": "Especialista em Tráfego Pago",
  "publisher": {
    "@id": "https://trafegomestre.com.br/#organization"
  },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://trafegomestre.com.br/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  ],
  "inLanguage": "pt-BR"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://trafegomestre.com.br/#organization",
  "name": "TráfegoMestre",
  "url": "https://trafegomestre.com.br/",
  "logo": {
    "@type": "ImageObject",
    "inLanguage": "pt-BR",
    "@id": "https://trafegomestre.com.br/#/schema/logo/image/",
    "url": "https://trafegomestre.com.br/logo.png",
    "contentUrl": "https://trafegomestre.com.br/logo.png",
    "width": 180,
    "height": 60,
    "caption": "TráfegoMestre - Especialista em Tráfego Pago"
  },
  "image": {
    "@id": "https://trafegomestre.com.br/#/schema/logo/image/"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 1000",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01310-100",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://www.facebook.com/trafegomestre",
    "https://www.instagram.com/trafegomestre",
    "https://www.linkedin.com/company/trafegomestre",
    "https://www.youtube.com/c/trafegomestre"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://trafegomestre.com.br/#localbusiness",
  "name": "TráfegoMestre",
  "image": "https://trafegomestre.com.br/images/office.jpg",
  "url": "https://trafegomestre.com.br",
  "telephone": "+551198765-4321",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 1000",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01310-100",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.5505,
    "longitude": -46.6333
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/trafegomestre",
    "https://www.instagram.com/trafegomestre",
    "https://www.linkedin.com/company/trafegomestre"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gestão de Tráfego Pago",
  "provider": {
    "@id": "https://trafegomestre.com.br/#organization"
  },
  "serviceType": "Marketing Digital",
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "description": "Estratégias de tráfego pago que geram leads qualificados, aumentam vendas e maximizam seu ROI. Especialistas em Google Ads, Facebook Ads, Instagram Ads e LinkedIn Ads.",
  "offers": {
    "@type": "Offer",
    "price": "1497.00",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto tempo leva para ver resultados com tráfego pago?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os primeiros resultados podem ser observados em 2-4 semanas, com campanhas otimizadas e dados suficientes para análise. Resultados mais significativos geralmente aparecem após 2-3 meses de otimização contínua e ajustes estratégicos."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é o investimento mínimo recomendado para campanhas de tráfego pago?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O investimento mínimo varia conforme seu setor e objetivos, mas geralmente recomendamos começar com pelo menos R$ 3.000 mensais em mídia para obter dados suficientes para otimização e resultados significativos."
      }
    },
    {
      "@type": "Question",
      "name": "Vocês trabalham com relatórios de desempenho?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, fornecemos relatórios detalhados e personalizados com métricas relevantes para seu negócio. Dependendo do plano, os relatórios podem ser semanais ou mensais, com análises de desempenho e recomendações estratégicas."
      }
    },
    {
      "@type": "Question",
      "name": "É possível cancelar o serviço a qualquer momento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, nossos contratos são flexíveis e você pode cancelar com aviso prévio de 30 dias. Não aplicamos multas por cancelamento, apenas cobramos pelos serviços prestados até a data de encerramento."
      }
    },
    {
      "@type": "Question",
      "name": "Vocês criam as artes e textos para os anúncios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, oferecemos criação completa de conteúdo para anúncios, incluindo textos persuasivos e direção de arte. Nosso time de criação trabalha alinhado com a estratégia de marketing para desenvolver materiais de alta conversão."
      }
    }
  ]
}; 