"use client";

import { useState, useMemo } from "react";
import { GLOSSARY } from "@/data/glossary";
import { BookOpen, Search, Lightbulb, Compass } from "lucide-react";

const CATEGORIES = ["Tous", "Coagulation", "Affinage", "Technologie", "Matières"];

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("Tous");

  const filteredTerms = useMemo(() => {
    return GLOSSARY.filter((item) => {
      if (selectedCat !== "Tous" && item.category !== selectedCat) {
        return false;
      }
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          item.term.toLowerCase().includes(q) ||
          item.definition.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, selectedCat]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-terroir-200 p-6 sm:p-8 shadow-xs space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cheese-700 bg-cheese-50 px-3 py-1 rounded-full border border-cheese-200">
          <Compass className="w-3.5 h-3.5" />
          Lexique & Terminologie Fromagère
        </div>
        <h1 className="font-serif text-3xl font-bold text-terroir-900">
          Le Dictionnaire Technique du Maître Artisan
        </h1>
        <p className="text-sm text-terroir-600 max-w-3xl leading-relaxed">
          Retrouvez les définitions normées et les repères de terrain indispensables pour dialoguer avec précision :
          synérèse, délactosage, acidification, morge, point de gel, filage.
        </p>
      </div>

      {/* Search & Categories Bar */}
      <div className="bg-white rounded-xl border border-terroir-200 p-4 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-terroir-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rechercher un terme technique ou une définition..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-terroir-300 text-sm focus:outline-none focus:ring-2 focus:ring-cheese-500"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                selectedCat === cat
                  ? "bg-cheese-600 text-white shadow-xs"
                  : "bg-terroir-50 text-terroir-700 hover:bg-cheese-50 border border-terroir-200"
              }`}
            >
              {cat}
            </button>
          ))}
          {search && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCat("Tous");
              }}
              className="text-xs text-cheese-700 hover:underline ml-auto font-medium"
            >
              Effacer
            </button>
          )}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-terroir-200 p-5 shadow-xs hover:border-cheese-300 transition flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2 border-b border-terroir-100 pb-2">
                <h3 className="font-serif font-bold text-base text-terroir-900">{item.term}</h3>
                <span className="text-[10px] font-semibold bg-terroir-100 text-terroir-700 px-2 py-0.5 rounded shrink-0">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-terroir-700 leading-relaxed">{item.definition}</p>
            </div>

            {item.keyTip && (
              <div className="bg-amber-50 border-l-2 border-amber-400 p-2.5 rounded-r-md text-[11px] text-amber-900 flex items-start gap-1.5 mt-auto">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <span className="font-bold">Tour de main : </span>
                  {item.keyTip}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 text-terroir-500 text-sm">
          Aucun terme ne correspond à votre recherche.
        </div>
      )}
    </div>
  );
}
