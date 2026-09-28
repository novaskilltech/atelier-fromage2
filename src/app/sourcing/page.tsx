"use client";

import { useState } from "react";
import { SUPPLIERS } from "@/data/suppliers";
import { ShoppingBag, ExternalLink, MapPin, CheckCircle, Phone, Mail } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "Tous les fournisseurs" },
  { id: "Matériel d'atelier & chaudrons", label: "Chaudrons & Cuverie" },
  { id: "Ferments & Présures traditionnelles", label: "Présures & Ferments" },
  { id: "Toiles & Étamines en lin", label: "Toiles de lin" },
  { id: "Planches d'épicéa pour affinage", label: "Planches d'épicéa" },
  { id: "Moules & Faisselles", label: "Moules & Faisselles" },
];

export default function SourcingPage() {
  const [selectedCat, setSelectedCat] = useState("all");

  const filteredSuppliers =
    selectedCat === "all"
      ? SUPPLIERS
      : SUPPLIERS.filter((s) => s.category === selectedCat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100 border border-amber-200 px-3.5 py-1.5 rounded-full">
          <ShoppingBag className="w-3.5 h-3.5 text-amber-700" />
          <span>Annuaire Artisanal Certifié</span>
        </div>
        <h1 className="font-serif text-3xl font-bold text-stone-900">
          Où se Fournir en Matériel & Intrants Nobles
        </h1>
        <p className="text-sm text-stone-700 max-w-3xl leading-relaxed font-normal">
          Sélection rigoureuse des fournisseurs spécialisés pour ateliers fermiers et micro-fromageries :
          présures traditionnelles garanties sans OGM, ferments indigènes, bois d'épicéa de montagne et chaudrons en cuivre.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-200">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCat(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              selectedCat === cat.id
                ? "bg-stone-900 text-white font-bold shadow-sm"
                : "bg-white text-stone-800 border border-stone-300 hover:bg-stone-100 font-medium"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSuppliers.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:border-amber-400 transition flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">{s.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-stone-600 mt-0.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>
                      {s.country} {s.region ? `• ${s.region}` : ""}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-300 px-3 py-1 rounded-full shrink-0">
                  {s.category}
                </span>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed font-normal">{s.description}</p>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs space-y-1">
                <div className="font-bold text-stone-900">Spécialité certifiée :</div>
                <div className="text-stone-700 font-medium">{s.specialty}</div>
              </div>
            </div>

            <div className="border-t border-stone-100 pt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-stone-600 font-semibold">{s.isVerifiedCraft ? "✓ Fournisseur vérifié artisanat" : "Matériel professionnel"}</span>

              <div className="flex items-center gap-2">
                {s.phone && (
                  <a
                    href={`tel:${s.phone}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-stone-300 text-stone-800 bg-white hover:bg-stone-50 font-bold transition"
                  >
                    <Phone className="w-3 h-3 text-stone-600" />
                    Contact
                  </a>
                )}
                {s.website && (
                  <a
                    href={s.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold shadow-sm transition"
                  >
                    <span>Catalogue</span>
                    <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sourcing Best Practices Card */}
      <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-xs text-emerald-950 space-y-2.5 shadow-2xs">
        <h4 className="font-serif font-bold text-base text-emerald-950 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-700" />
          Règles d'Or du Sourcing Artisanal
        </h4>
        <ul className="list-disc pl-5 space-y-1.5 text-emerald-900 leading-relaxed font-normal">
          <li><strong>Présures :</strong> Exiger des extraits 100% caillette sans benzoate de sodium ni chymosine issue de fermentation OGM.</li>
          <li><strong>Toiles :</strong> Préférer le lin écru non teinté lavé au savon de Marseille, résistant à l'acidité et neutre au contact.</li>
          <li><strong>Planches d'Affinage :</strong> Utiliser uniquement du bois brut d'épicéa de montagne non raboté, non imprégné de fongicides chimiques.</li>
        </ul>
      </div>
    </div>
  );
}
