"use client";

import { useState } from "react";
import { SUPPLIERS } from "@/data/suppliers";
import { ShoppingBag, Globe, Mail, MapPin, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";

const CATEGORIES = [
  { id: "ALL", label: "Toutes les filières" },
  { id: "RENNET_ANIMAL", label: "Présures animales pures" },
  { id: "RENNET_VEGETABLE", label: "Coagulants végétaux (Chardon)" },
  { id: "FERMENTS", label: "Ferments fermiers & Souches" },
  { id: "LINEN_CLOTHS", label: "Toiles de lin & Étamines" },
  { id: "MOULDS", label: "Moules & Faisselles" },
  { id: "WOOD_BOARDS", label: "Planches d'épicéa d'affinage" },
  { id: "EQUIPMENT", label: "Chaudrons & Presses" },
];

export default function SourcingPage() {
  const [selectedCat, setSelectedCat] = useState("ALL");

  const filteredSuppliers =
    selectedCat === "ALL"
      ? SUPPLIERS
      : SUPPLIERS.filter((s) => s.category === selectedCat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-terroir-200 p-6 sm:p-8 shadow-xs space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cheese-700 bg-cheese-50 px-3 py-1 rounded-full border border-cheese-200">
          <ShoppingBag className="w-3.5 h-3.5" />
          Annuaire Professionnel de Sourcing
        </div>
        <h1 className="font-serif text-3xl font-bold text-terroir-900">
          Où se Fournir en Intrants Nobles & Matériel Artisanal
        </h1>
        <p className="text-sm text-terroir-600 max-w-3xl leading-relaxed">
          Pour éviter les coagulants chimiques OGM et les textiles synthétiques de l'agro-industrie, cet annuaire
          référence des maisons historiques et coopératives fournissant des intrants authentiques certifiés.
        </p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-terroir-200">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCat(cat.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              selectedCat === cat.id
                ? "bg-cheese-600 text-white shadow-xs"
                : "bg-white text-terroir-700 border border-terroir-200 hover:bg-cheese-50"
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
            className="bg-white rounded-xl border border-terroir-200 p-6 shadow-xs hover:border-cheese-300 transition flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif font-bold text-lg text-terroir-900">{s.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-terroir-500 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-cheese-600 shrink-0" />
                    <span>
                      {s.country} {s.region ? `• ${s.region}` : ""}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full shrink-0">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Vérifié Artisanal
                </span>
              </div>

              {/* Specialty Highlight */}
              <div className="bg-cheese-50/60 border border-cheese-200 p-3 rounded-lg text-xs text-cheese-950 font-medium">
                <span className="font-bold block text-[10px] uppercase text-cheese-800 mb-0.5">
                  Spécialité Principale
                </span>
                {s.specialty}
              </div>

              <p className="text-xs text-terroir-600 leading-relaxed">{s.description}</p>
            </div>

            {/* Contact & Links Footer */}
            <div className="border-t border-terroir-100 pt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
              {s.address && (
                <span className="text-terroir-500 text-[11px] truncate max-w-[220px]">
                  {s.address}
                </span>
              )}
              <div className="flex items-center gap-3 ml-auto">
                {s.contactEmail && (
                  <a
                    href={`mailto:${s.contactEmail}`}
                    className="flex items-center gap-1 text-terroir-700 hover:text-cheese-700 transition"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Contact
                  </a>
                )}
                {s.website && (
                  <a
                    href={s.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-terroir-900 text-white font-semibold hover:bg-cheese-600 transition"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Catalogue
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sourcing Best Practices Card */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-xs text-emerald-900 space-y-2">
        <h4 className="font-serif font-bold text-sm text-emerald-950 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          Règles d'Or du Sourcing Artisanal
        </h4>
        <ul className="list-disc pl-5 space-y-1 text-emerald-800 leading-relaxed">
          <li><strong>Présures :</strong> Exiger des extraits 100% caillette sans benzoate de sodium ni chymosine issue de fermentation OGM.</li>
          <li><strong>Toiles :</strong> Préférer le lin écru non teinté lavé au savon de Marseille, résistant à l'acidité et neutre au contact.</li>
          <li><strong>Planches d'Affinage :</strong> Utiliser uniquement du bois brut d'épicéa de montagne non raboté, non imprégné de fongicides chimiques.</li>
        </ul>
      </div>
    </div>
  );
}
