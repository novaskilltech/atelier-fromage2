import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#573016",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://atelier-fromager.fr"),
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
  creator: "L'Atelier Fromager",
  publisher: "L'Atelier Fromager",
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
    url: "https://atelier-fromager.fr",
    siteName: "L'Atelier Fromager",
    title: "L'Atelier Fromager — Savoir-Faire & 24 Recettes Artisanales",
    description:
      "24 méthodes traditionnelles pas-à-pas (France, Italie, Suisse, Espagne, Belgique, Pays-Bas), mode atelier avec minuteurs, affinage sur épicéa et sourcing certifié.",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "L'Atelier Fromager — Savoir-Faire et Recettes Artisanales au Lait Cru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Atelier Fromager — Savoir-Faire & 24 Recettes Artisanales",
    description:
      "Plateforme technique pour micro-fromageries et ateliers fermiers (20 à 200 L). Recettes 100% lait cru, vidéos Idele et protocoles d'affinage.",
    images: ["/images/og-card.jpg"],
    creator: "@atelierfromager",
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
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
