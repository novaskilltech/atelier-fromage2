import Link from "next/link";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-terroir-900 text-terroir-200 mt-20 border-t border-terroir-800 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1 : Identité */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🧀</span>
              <span className="font-serif font-bold text-lg text-white">Atelier Fromager</span>
            </div>
            <p className="text-xs text-terroir-400 leading-relaxed">
              Plateforme professionnelle de transmission des tours de main et méthodes traditionnelles
              artisanales pour micro-fromageries et ateliers fermiers (20 à 200 Litres).
            </p>
            <div className="text-xs text-cheese-400 font-mono">
              Version 1.1 — 6 Pays / 24 Recettes
            </div>
          </div>

          {/* Col 2 : Navigation */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Ressources d'Atelier
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-cheese-400 transition">
                  Catalogue des 24 Recettes
                </Link>
              </li>
              <li>
                <Link href="/ustensiles" className="hover:text-cheese-400 transition">
                  Guide du Matériel & Outillage
                </Link>
              </li>
              <li>
                <Link href="/sourcing" className="hover:text-cheese-400 transition">
                  Où se fournir (Présures & Ferments)
                </Link>
              </li>
              <li>
                <Link href="/lexique" className="hover:text-cheese-400 transition">
                  Dictionnaire des Termes Fromagers
                </Link>
              </li>
              <li>
                <Link href="/charte" className="hover:text-cheese-400 transition">
                  Charte 100% Artisanal & Zéro Industriel
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 : Cadre Sanitaire & HACCP */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Cadre Sanitaire
            </h3>
            <p className="text-xs text-terroir-400 leading-relaxed mb-2">
              Chaque fiche intègre les principes du Paquet Hygiène européen (Règlements CE 852/2004 et CE 853/2004) et la communication 2022/C 355/01 sur la flexibilité pour ateliers traditionnels.
            </p>
            <p className="text-[11px] text-terroir-500">
              Double validation préalable : technologique & microbiologique.
            </p>
          </div>

          {/* Col 4 : Avertissement Légal */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              Mentions Légales
            </h3>
            <p className="text-xs text-terroir-400 leading-relaxed">
              Les fiches techniques décrivent des procédés de savoir-faire patrimonial. L'usage commercial de dénominations bénéficiant d'une AOP/IGP/STG reste strictement subordonné au respect des cahiers des charges officiels homologués.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-terroir-800 text-center text-xs text-terroir-500">
          © 2026 Atelier Fromager — Réservé aux professionnels du secteur laitier et fermier. Données traitées conformément au RGPD (minimisation stricte).
        </div>
      </div>
    </footer>
  );
}
