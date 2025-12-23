import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabão Limpo - Lavanderia com Coleta e Entrega",
  description: "Lavanderia profissional com coleta e entrega. Deixe a gente cuidar das suas roupas enquanto você cuida do que importa.",
  keywords: ["lavanderia", "coleta e entrega", "lavagem", "passadoria", "express"],
  authors: [{ name: "Sabão Limpo" }],
  openGraph: {
    title: "Sabão Limpo - Lavanderia com Coleta e Entrega",
    description: "Lavanderia profissional com coleta e entrega. Deixe a gente cuidar das suas roupas enquanto você cuida do que importa.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabão Limpo - Lavanderia com Coleta e Entrega",
    description: "Lavanderia profissional com coleta e entrega. Deixe a gente cuidar das suas roupas enquanto você cuida do que importa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sabão Limpo",
              "description": "Lavanderia profissional com coleta e entrega",
              "priceRange": "R$15-R$40",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "openingHours": "Mo-Sa 08:00-18:00"
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
