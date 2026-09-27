import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier Fromager — Plateforme Professionnelle de Fromagerie Traditionnelle",
  description: "Bibliothèque de méthodes traditionnelles artisanales pour micro-fromageries et ateliers fermiers (20 à 200 L) : 24 fromages patrimoniaux, affinage, ustensiles, sourcing et lexique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
