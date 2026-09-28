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
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100 border border-amber-200 px-3.5 py-1.5 rounded-full">
          <Compass className="w-3.5 h-3.5 text-amber-700" />
          <span>Lexique & Terminologie Fromagère</span>
        </div>
        <h1 className="font-serif text-3xl font-bold text-stone-900">
          Le Dictionnaire Technique du Maître Artisan
        </h1>
        <p className="text-sm text-stone-700 max-w-3xl leading-relaxed font-normal">
          Retrouvez les définitions normées et les repères de terrain indispensables pour dialoguer avec précision :
          synérèse, délactosage, acidification, morge, point de gel, filage.
        </p>
      </div>

      {/* Search & Categories Bar */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-sm space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rechercher un terme technique ou une définition..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedCat === cat
                  ? "bg-stone-900 text-white font-bold shadow-sm"
                  : "bg-white text-stone-800 hover:bg-stone-100 border border-stone-300 font-medium"
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
              className="text-xs text-amber-900 hover:text-amber-950 font-bold underline ml-auto"
            >
              Effacer la recherche
            </button>
          )}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:border-amber-400 transition flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2 border-b border-stone-100 pb-2">
                <h3 className="font-serif font-bold text-base text-stone-900">{item.term}</h3>
                <span className="text-[10px] font-bold uppercase bg-stone-100 text-stone-800 border border-stone-200 px-2.5 py-0.5 rounded-full shrink-0">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-normal">{item.definition}</p>
            </div>

            {item.keyTip && (
              <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-xl text-xs text-amber-950 flex items-start gap-2 mt-auto">
                <Lightbulb className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="font-bold">Tour de main : </strong>
                  {item.keyTip}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 text-stone-600 text-sm font-medium">
          Aucun terme ne correspond à votre recherche.
        </div>
      )}
    </div>
  );
}
