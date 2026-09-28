import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#573016",
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://atelier-fromage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "L'Atelier Fromager — Plateforme Professionnelle de Fromagerie Traditionnelle",
    template: "%s | L'Atelier Fromager",
  },
  description:
    "Bibliothèque de méthodes traditionnelles artisanales pour micro-fromageries et ateliers fermiers (20 à 200 L) : 24 fromages patrimoniaux, affinage sur épicéa, ustensiles nobles, sourcing et vidéos Idele.",
  keywords: [
    "fromagerie artisanale",
    "fromage fermier",
    "recettes fromage",
    "lait cru",
    "affinage fromage",
    "chaudron cuivre",
    "moulage à la louche",
    "salage à sec",
    "HACCP fromagerie",
    "micro-fromagerie",
  ],
  authors: [{ name: "L'Atelier Fromager" }],
  creator: "novaskilltech",
  publisher: "novaskilltech",
  icons: {
    icon: [
      { url: "/images/logo.jpg", sizes: "any" },
      { url: "/images/logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "L'Atelier Fromager",
    title: "L'Atelier Fromager — Savoir-Faire & 24 Recettes Artisanales",
    description:
      "24 méthodes traditionnelles pas-à-pas (France, Italie, Suisse, Espagne, Belgique, Pays-Bas), mode atelier avec minuteurs, affinage sur épicéa et sourcing certifié.",
    images: [
      {
        url: `${SITE_URL}/images/og-card.jpg`,
        secureUrl: `${SITE_URL}/images/og-card.jpg`,
        width: 1200,
        height: 630,
        alt: "L'Atelier Fromager — Savoir-Faire et Recettes Artisanales au Lait Cru",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Atelier Fromager — Savoir-Faire & 24 Recettes Artisanales",
    description:
      "Plateforme technique pour micro-fromageries et ateliers fermiers (20 à 200 L). Recettes 100% lait cru, vidéos Idele et protocoles d'affinage.",
    images: [`${SITE_URL}/images/og-card.jpg`],
    creator: "@novaskilltech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />

        {/* WhatsApp & Social Media Open Graph Raw Fallback */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="L'Atelier Fromager" />
        <meta property="og:title" content="L'Atelier Fromager — Savoir-Faire & 24 Recettes Artisanales" />
        <meta
          property="og:description"
          content="24 méthodes traditionnelles pas-à-pas (France, Italie, Suisse, Espagne, Belgique, Pays-Bas), mode atelier avec minuteurs et sourcing certifié."
        />
        <meta property="og:image" content={`${SITE_URL}/images/og-card.jpg`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/images/og-card.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={SITE_URL} />

        {/* Twitter Card Raw Fallback */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@novaskilltech" />
        <meta name="twitter:title" content="L'Atelier Fromager — Savoir-Faire & 24 Recettes Artisanales" />
        <meta
          name="twitter:description"
          content="Plateforme technique pour micro-fromageries et ateliers fermiers (20 à 200 L). 24 recettes au lait cru."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/og-card.jpg`} />
      </head>
      <body className="min-h-full flex flex-col antialiased relative">
        <DynamicBackground />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
