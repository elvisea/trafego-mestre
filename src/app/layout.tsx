import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";


import { websiteSchema, organizationSchema } from '@/lib/schema'
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: "TráfegoMestre | Especialista em Tráfego Pago",
  description: "Transforme seu investimento em anúncios em resultados reais. Estratégias de tráfego pago que geram leads qualificados, aumentam vendas e maximizam seu ROI.",
  keywords: "tráfego pago, google ads, facebook ads, instagram ads, linkedin ads, marketing digital, ROI, leads, conversão, anúncios online",
  metadataBase: new URL('https://trafegomestre.com.br'),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://trafegomestre.com.br",
    siteName: "TráfegoMestre",
    title: "TráfegoMestre | Especialista em Tráfego Pago",
    description: "Transforme seu investimento em anúncios em resultados reais. Estratégias de tráfego pago que geram leads qualificados, aumentam vendas e maximizam seu ROI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://trafegomestre.com.br"
  },
  authors: [
    {
      name: "TráfegoMestre",
      url: "https://trafegomestre.com.br",
    }
  ],
  generator: "Next.js",
  applicationName: "TráfegoMestre",
  referrer: "origin-when-cross-origin",
  creator: "TráfegoMestre",
  publisher: "TráfegoMestre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "verification-code",
  },
  other: {
    'priority-hints': "1",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteSchema, organizationSchema])
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
