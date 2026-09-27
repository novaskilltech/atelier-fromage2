"use client";

import { useState, useMemo } from "react";
import { CHEESE_RECIPES } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import { Search, Filter, Sparkles, BookOpen, Hammer, ShoppingBag, ShieldCheck } from "lucide-react";
import Link from "next/link";

const COUNTRIES = ["Tous", "France", "Italie", "Espagne", "Suisse", "Belgique", "Pays-Bas"];
const MILK_TYPES = ["Tous", "Vache", "Chèvre", "Brebis", "Mixte"];
const FAMILIES = [
  "Tous",
  "Lactique",
  "Pâte Molle",
  "Pâte Pressée Non Cuite",
  "Pâte Pressée Cuite",
  "Pâte Persillée",
  "Pâte Filée",
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Tous");
  const [selectedMilk, setSelectedMilk] = useState("Tous");
  const [selectedFamily, setSelectedFamily] = useState("Tous");

  const filteredRecipes = useMemo(() => {
    return CHEESE_RECIPES.filter((recipe) => {
      // Search filter
      if (search.trim()) {
        const q = search.toLowerCase();
        const matches =
          recipe.name.toLowerCase().includes(q) ||
          recipe.region.toLowerCase().includes(q) ||
          recipe.description.toLowerCase().includes(q) ||
          recipe.country.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Country filter
      if (selectedCountry !== "Tous" && recipe.country !== selectedCountry) {
        return false;
      }

      // Milk filter
      if (selectedMilk !== "Tous" && recipe.milkType !== selectedMilk) {
        return false;
      }

      // Family filter
      if (selectedFamily !== "Tous" && recipe.family !== selectedFamily) {
        return false;
      }

      return true;
    });
  }, [search, selectedCountry, selectedMilk, selectedFamily]);

  const resetFilters = () => {
    setSearch("");
    setSelectedCountry("Tous");
    setSelectedMilk("Tous");
    setSelectedFamily("Tous");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-terroir-900 via-terroir-800 to-terroir-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg border border-terroir-700 relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cheese-500/20 text-cheese-300 border border-cheese-400/30">
            <Sparkles className="w-3.5 h-3.5 text-cheese-400" />
            Charte 100% Artisanal & Zéro Industriel • Échelle 20 à 200 Litres
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Le Savoir-Faire des Grands Fromages de Terroir
          </h1>

          <p className="text-sm sm:text-base text-terroir-200 leading-relaxed font-sans">
            Bibliothèque technique réservée aux artisans fromagers et producteurs fermiers.
            Accédez à 24 méthodes documentées pas-à-pas, protocoles d’affinage stricts, fiches de fabrication et annuaire de sourcing pour intrants nobles.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="bg-terroir-800/80 border border-terroir-700/80 rounded-lg p-3">
              <div className="text-xl font-bold font-serif text-cheese-400">24</div>
              <div className="text-xs text-terroir-300">Recettes artisanales</div>
            </div>
            <div className="bg-terroir-800/80 border border-terroir-700/80 rounded-lg p-3">
              <div className="text-xl font-bold font-serif text-cheese-400">6 Pays</div>
              <div className="text-xs text-terroir-300">4 spécialités par pays</div>
            </div>
            <div className="bg-terroir-800/80 border border-terroir-700/80 rounded-lg p-3">
              <div className="text-xl font-bold font-serif text-cheese-400">100%</div>
              <div className="text-xs text-terroir-300">Lait cru / Noble</div>
            </div>
            <div className="bg-terroir-800/80 border border-terroir-700/80 rounded-lg p-3">
              <div className="text-xl font-bold font-serif text-cheese-400">HACCP</div>
              <div className="text-xs text-terroir-300">Validé hygiène & tech</div>
            </div>
          </div>
        </div>

        {/* Decorative Cheese Wheel in background */}
        <div className="absolute right-4 -bottom-10 opacity-10 text-[180px] pointer-events-none select-none">
          🧀
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-white rounded-xl border border-terroir-200 p-5 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-terroir-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rechercher par nom de fromage, région, pays, typicité..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-terroir-300 text-sm focus:outline-none focus:ring-2 focus:ring-cheese-500 focus:border-cheese-500 transition"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Country Filter */}
          <div>
            <label className="block text-xs font-semibold text-terroir-700 uppercase tracking-wider mb-1.5">
              Pays d'origine (6)
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full text-xs font-medium rounded-lg border border-terroir-300 py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-cheese-500"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c === "Tous" ? "Tous les pays" : c}
                </option>
              ))}
            </select>
          </div>

          {/* Milk Filter */}
          <div>
            <label className="block text-xs font-semibold text-terroir-700 uppercase tracking-wider mb-1.5">
              Espèce laitière
            </label>
            <select
              value={selectedMilk}
              onChange={(e) => setSelectedMilk(e.target.value)}
              className="w-full text-xs font-medium rounded-lg border border-terroir-300 py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-cheese-500"
            >
              {MILK_TYPES.map((m) => (
                <option key={m} value={m}>
                  {m === "Tous" ? "Toutes les espèces" : m}
                </option>
              ))}
            </select>
          </div>

          {/* Family Filter */}
          <div>
            <label className="block text-xs font-semibold text-terroir-700 uppercase tracking-wider mb-1.5">
              Famille fromagère
            </label>
            <select
              value={selectedFamily}
              onChange={(e) => setSelectedFamily(e.target.value)}
              className="w-full text-xs font-medium rounded-lg border border-terroir-300 py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-cheese-500"
            >
              {FAMILIES.map((f) => (
                <option key={f} value={f}>
                  {f === "Tous" ? "Toutes les familles" : f}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Summary & Reset */}
        {(selectedCountry !== "Tous" ||
          selectedMilk !== "Tous" ||
          selectedFamily !== "Tous" ||
          search.trim() !== "") && (
          <div className="flex items-center justify-between pt-2 border-t border-terroir-100 text-xs">
            <span className="text-terroir-600">
              {filteredRecipes.length} recette(s) trouvée(s) pour ces critères
            </span>
            <button
              type="button"
              onClick={resetFilters}
              className="text-cheese-700 hover:text-cheese-800 font-semibold"
            >
              Réinitialiser tous les filtres
            </button>
          </div>
        )}
      </section>

      {/* Recipes Catalog Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-terroir-900">
            Catalogue des Méthodes ({filteredRecipes.length})
          </h2>
          <span className="text-xs text-terroir-500 font-medium">
            Affichage des fiches validées
          </span>
        </div>

        {filteredRecipes.length === 0 ? (
          <div className="bg-white rounded-xl border border-terroir-200 p-12 text-center space-y-3">
            <span className="text-4xl">🔍</span>
            <h3 className="font-serif text-lg font-bold text-terroir-900">
              Aucune méthode ne correspond à vos filtres
            </h3>
            <p className="text-xs text-terroir-600 max-w-md mx-auto">
              Essayez d'élargir votre recherche en modifiant le pays ou l'espèce laitière sélectionnée.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-2 inline-flex items-center px-4 py-2 rounded-lg bg-cheese-600 text-white text-xs font-bold hover:bg-cheese-700 transition"
            >
              Réinitialiser les critères
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </section>

      {/* Quick Direct Links Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <Link
          href="/ustensiles"
          className="bg-white p-5 rounded-xl border border-terroir-200 shadow-xs hover:border-cheese-400 hover:shadow-sm transition flex items-start gap-4 group"
        >
          <div className="p-3 rounded-lg bg-cheese-50 text-cheese-600 group-hover:bg-cheese-600 group-hover:text-white transition shrink-0">
            <Hammer className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm text-terroir-900 group-hover:text-cheese-700 transition">
              Matériel & Ustensiles
            </h3>
            <p className="text-xs text-terroir-600 mt-1">
              Chaudrons cuivre, harpes inox, toiles de lin, moules perforés et planches d'épicéa brut.
            </p>
          </div>
        </Link>

        <Link
          href="/sourcing"
          className="bg-white p-5 rounded-xl border border-terroir-200 shadow-xs hover:border-cheese-400 hover:shadow-sm transition flex items-start gap-4 group"
        >
          <div className="p-3 rounded-lg bg-cheese-50 text-cheese-600 group-hover:bg-cheese-600 group-hover:text-white transition shrink-0">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm text-terroir-900 group-hover:text-cheese-700 transition">
              Où se fournir (Sourcing)
            </h3>
            <p className="text-xs text-terroir-600 mt-1">
              Carnet d'adresses d'intrants nobles : présures caillettes, fleurs de chardon sauvage, ferments.
            </p>
          </div>
        </Link>

        <Link
          href="/lexique"
          className="bg-white p-5 rounded-xl border border-terroir-200 shadow-xs hover:border-cheese-400 hover:shadow-sm transition flex items-start gap-4 group"
        >
          <div className="p-3 rounded-lg bg-cheese-50 text-cheese-600 group-hover:bg-cheese-600 group-hover:text-white transition shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm text-terroir-900 group-hover:text-cheese-700 transition">
              Lexique Fromager
            </h3>
            <p className="text-xs text-terroir-600 mt-1">
              Plus de 30 définitions et tours de main : synérèse, délactosage, morge, point de gel, filage.
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
