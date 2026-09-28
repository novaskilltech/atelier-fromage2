"use client";

import { useState, useMemo } from "react";
import { CHEESE_RECIPES } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import {
  Search,
  Sparkles,
  BookOpen,
  Hammer,
  ShoppingBag,
  ShieldCheck,
  Flame,
  Clock,
  Droplets,
  Scale,
  Award,
  Video,
  ArrowRight,
  CheckCircle2,
  Thermometer,
} from "lucide-react";
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
      if (search.trim()) {
        const q = search.toLowerCase();
        const matches =
          recipe.name.toLowerCase().includes(q) ||
          recipe.region.toLowerCase().includes(q) ||
          recipe.description.toLowerCase().includes(q) ||
          recipe.country.toLowerCase().includes(q);
        if (!matches) return false;
      }

      if (selectedCountry !== "Tous" && recipe.country !== selectedCountry) {
        return false;
      }

      if (selectedMilk !== "Tous" && recipe.milkType !== selectedMilk) {
        return false;
      }

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
    <div className="space-y-16 pb-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION LANDING PAGE AVEC PHOTO DE L'ARTISAN & CHAUDRON CUIVRE    */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-terroir-950 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-2xl border border-terroir-800">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-artisan-copper.jpg"
            alt="Artisan fromager chauffant son lait cru dans un grand chaudron en cuivre traditionnel avec thermomètre"
            className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-terroir-950 via-terroir-950/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-terroir-950 via-transparent to-terroir-950/50" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 lg:py-28 flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-cheese-500/25 text-cheese-300 border border-cheese-400/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cheese-400" />
              <span>Charte 100% Artisanal & Fermier • Ateliers de 20 à 200 Litres</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              L’Art Pur de la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cheese-300 via-cheese-400 to-amber-200">
                Fromagerie Artisanale
              </span>
            </h1>

            {/* Subtitle / Pitch */}
            <p className="text-base sm:text-lg text-terroir-200 font-sans leading-relaxed">
              Découvrez les secrets de fabrication des plus grands fromages de terroir d'Europe.
              Du réchauffage en chaudron de cuivre au salage à sec et à l'affinage sur planches d'épicéa,
              retrouvez 24 protocoles pas-à-pas réservés aux passionnés et professionnels fermiers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#catalogue"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cheese-500 to-cheese-600 hover:from-cheese-600 hover:to-cheese-700 text-terroir-950 font-bold text-sm shadow-lg hover:shadow-cheese-500/20 transition transform hover:-translate-y-0.5"
              >
                <span>Explorer les 24 Recettes</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/astuces"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-terroir-800/80 hover:bg-terroir-700/80 text-white font-semibold text-sm border border-terroir-700 backdrop-blur-md transition"
              >
                <Video className="w-4 h-4 text-cheese-400" />
                <span>Vidéos & Gestes d'Atelier</span>
              </Link>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-terroir-800/80">
              <div className="bg-terroir-900/60 backdrop-blur-md border border-terroir-700/50 rounded-xl p-3.5">
                <div className="text-2xl font-bold font-serif text-cheese-400">24</div>
                <div className="text-xs text-terroir-300">Méthodes ancestrales</div>
              </div>
              <div className="bg-terroir-900/60 backdrop-blur-md border border-terroir-700/50 rounded-xl p-3.5">
                <div className="text-2xl font-bold font-serif text-cheese-400">6 Pays</div>
                <div className="text-xs text-terroir-300">France, Italie, Suisse...</div>
              </div>
              <div className="bg-terroir-900/60 backdrop-blur-md border border-terroir-700/50 rounded-xl p-3.5">
                <div className="text-2xl font-bold font-serif text-cheese-400">20 à 200 L</div>
                <div className="text-xs text-terroir-300">Échelle micro-fromagerie</div>
              </div>
              <div className="bg-terroir-900/60 backdrop-blur-md border border-terroir-700/50 rounded-xl p-3.5">
                <div className="text-2xl font-bold font-serif text-cheese-400">0% Chimie</div>
                <div className="text-xs text-terroir-300">Lait cru & ferments nobles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. LES TROIS PILIERS DU GESTE ARTISANAL (GALERIE D'IMAGES D'ATELIER)       */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-cheese-700 bg-cheese-100 px-3 py-1 rounded-full">
            La Règle de l'Artisan
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-terroir-900">
            Trois Gestes Fondateurs, Zéro Compromis
          </h2>
          <p className="text-sm text-terroir-600">
            Chaque recette de notre bibliothèque repose sur l'équilibre délicat entre la température, la main de l'artisan et la flore du terroir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilier 1 : Le Cuivre & La Chauffe Douce */}
          <div className="bg-white rounded-2xl border border-terroir-200 overflow-hidden shadow-xs hover:shadow-md transition group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/hero-artisan-copper.jpg"
                alt="Chauffage du lait au chaudron en cuivre avec thermomètre artisanal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-terroir-900/80 backdrop-blur-md text-cheese-300 text-xs px-2.5 py-1 rounded-full font-semibold border border-terroir-700 flex items-center gap-1.5">
                <Thermometer className="w-3.5 h-3.5 text-cheese-400" />
                <span>Thermique & Cuivre</span>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-terroir-900">
                1. Chauffe au Chaudron en Cuivre
              </h3>
              <p className="text-xs sm:text-sm text-terroir-600 leading-relaxed">
                Le cuivre distribue la chaleur de façon homogène sans brûler la matière grasse du lait cru.
                Le contrôle au thermomètre à cadran permet de respecter le palier précis de coagulation (32°C à 53°C selon la recette).
              </p>
              <div className="pt-2 text-xs font-semibold text-cheese-700 flex items-center gap-1">
                <span>Indispensable pour : Beaufort, Comté, Gruyère</span>
              </div>
            </div>
          </div>

          {/* Pilier 2 : Le Caillé & Le Moulage Délicat */}
          <div className="bg-white rounded-2xl border border-terroir-200 overflow-hidden shadow-xs hover:shadow-md transition group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/curd-moulding.jpg"
                alt="Moulage artisanal à la louche et toiles de lin brut"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-terroir-900/80 backdrop-blur-md text-cheese-300 text-xs px-2.5 py-1 rounded-full font-semibold border border-terroir-700 flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-cheese-400" />
                <span>Toiles & Égouttage</span>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-terroir-900">
                2. Décaillé & Moulage à la Louche
              </h3>
              <p className="text-xs sm:text-sm text-terroir-600 leading-relaxed">
                Découpe soignée à la harpe inox pour obtenir des grains calibrés (de la taille d'une noisette au grain de blé).
                Moulage manuel dans des toiles de lin naturel préservant le feuilleté et la synérèse spontanée du sérum.
              </p>
              <div className="pt-2 text-xs font-semibold text-cheese-700 flex items-center gap-1">
                <span>Crucial pour : Reblochon, Saint-Marcellin, Valençay</span>
              </div>
            </div>
          </div>

          {/* Pilier 3 : L'Affinage en Cave sur Bois */}
          <div className="bg-white rounded-2xl border border-terroir-200 overflow-hidden shadow-xs hover:shadow-md transition group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/cellar-affinage.jpg"
                alt="Affinage en cave naturelle voûtée sur planches d'épicéa brut"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-terroir-900/80 backdrop-blur-md text-cheese-300 text-xs px-2.5 py-1 rounded-full font-semibold border border-terroir-700 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-cheese-400" />
                <span>Cave & Épicéa</span>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-terroir-900">
                3. Épicéa & Morge Vivante
              </h3>
              <p className="text-xs sm:text-sm text-terroir-600 leading-relaxed">
                Les planches d'épicéa brut non traité régulent l'humidité (85-95%) et abritent le biofilm naturel.
                Les soins de croûte (frottage à l'eau saumurée ou morge, brossage doux) développent le bouquet aromatique unique.
              </p>
              <div className="pt-2 text-xs font-semibold text-cheese-700 flex items-center gap-1">
                <span>Sublime : Appenzeller, Morbier, Gouda Fermier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LES OUTILS DE L'ATELIER (INNOVATION & ERGONOMIE FERMIÈRE)                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-terroir-900 to-terroir-800 text-white rounded-3xl p-8 sm:p-12 border border-terroir-700 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cheese-400 bg-cheese-500/20 px-3 py-1 rounded-full border border-cheese-400/30">
              Conçu pour le Quotidien en Atelier
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
              Des Outils Interactifs pour Travailler les Mains Libres
            </h2>
            <p className="text-sm text-terroir-200">
              Notre interface a été pensée pour être manipulée en cuverie et en cave d'affinage, sur tablette ou smartphone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="bg-terroir-800/80 border border-terroir-700 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cheese-500/20 text-cheese-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Mode Atelier Pas-à-Pas</h3>
              <p className="text-xs text-terroir-300 leading-relaxed">
                Minuteurs intégrés de prise, floculation et d'égouttage avec signal sonore pour ne jamais rater un point de gel.
              </p>
            </div>

            <div className="bg-terroir-800/80 border border-terroir-700 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cheese-500/20 text-cheese-400 flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Calculateur Scalable</h3>
              <p className="text-xs text-terroir-300 leading-relaxed">
                Ajustez votre volume de lait de 20 à 200 litres : la présure, les ferments et les rendements se recalculent automatiquement.
              </p>
            </div>

            <div className="bg-terroir-800/80 border border-terroir-700 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cheese-500/20 text-cheese-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Fiches Imprimables A4</h3>
              <p className="text-xs text-terroir-300 leading-relaxed">
                Bouton d'impression optimisé pour emporter vos fiches de fabrication en atelier humide sans risquer vos écrans.
              </p>
            </div>

            <div className="bg-terroir-800/80 border border-terroir-700 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cheese-500/20 text-cheese-400 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Sourcing Réel & Actif</h3>
              <p className="text-xs text-terroir-300 leading-relaxed">
                Adresses directes des fournisseurs de présure traditionnelle, ferments vivants et planches d'épicéa certifiées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CATALOGUE DES 24 RECETTES AVEC FILTRES ET RECHERCHE                    */}
      {/* ========================================================================= */}
      <section id="catalogue" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-terroir-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cheese-700 bg-cheese-100 px-3 py-1 rounded-full">
              Répertoire Culinaire
            </span>
            <h2 className="font-serif text-3xl font-bold text-terroir-900 mt-2">
              Le Catalogue des 24 Recettes Artisanales
            </h2>
            <p className="text-xs sm:text-sm text-terroir-600">
              4 spécialités d'exception par pays : France, Italie, Espagne, Suisse, Belgique, Pays-Bas.
            </p>
          </div>
          <span className="text-xs text-terroir-500 font-semibold bg-terroir-100 px-3 py-1.5 rounded-lg">
            {filteredRecipes.length} méthode(s) disponible(s)
          </span>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl border border-terroir-200 p-6 shadow-xs space-y-5">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-terroir-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher par nom de fromage, région, pays, méthode, caractéristiques..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-terroir-300 text-sm focus:outline-none focus:ring-2 focus:ring-cheese-500 focus:border-cheese-500 transition"
            />
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            {/* Country Filter */}
            <div>
              <label className="block text-xs font-bold text-terroir-700 uppercase tracking-wider mb-1.5">
                Pays d'origine (6)
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full text-xs font-medium rounded-xl border border-terroir-300 py-2.5 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-cheese-500"
              >
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c === "Tous" ? "Tous les pays (6)" : c}
                  </option>
                ))}
              </select>
            </div>

            {/* Milk Filter */}
            <div>
              <label className="block text-xs font-bold text-terroir-700 uppercase tracking-wider mb-1.5">
                Espèce laitière
              </label>
              <select
                value={selectedMilk}
                onChange={(e) => setSelectedMilk(e.target.value)}
                className="w-full text-xs font-medium rounded-xl border border-terroir-300 py-2.5 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-cheese-500"
              >
                {MILK_TYPES.map((m) => (
                  <option key={m} value={m}>
                    {m === "Tous" ? "Toutes les espèces (Vache, Chèvre, Brebis...)" : m}
                  </option>
                ))}
              </select>
            </div>

            {/* Family Filter */}
            <div>
              <label className="block text-xs font-bold text-terroir-700 uppercase tracking-wider mb-1.5">
                Famille fromagère
              </label>
              <select
                value={selectedFamily}
                onChange={(e) => setSelectedFamily(e.target.value)}
                className="w-full text-xs font-medium rounded-xl border border-terroir-300 py-2.5 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-cheese-500"
              >
                {FAMILIES.map((f) => (
                  <option key={f} value={f}>
                    {f === "Tous" ? "Toutes les familles (Lactique, Pressée...)" : f}
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
            <div className="flex items-center justify-between pt-3 border-t border-terroir-100 text-xs">
              <span className="text-terroir-600 font-medium">
                Résultat : {filteredRecipes.length} recette(s) trouvée(s)
              </span>
              <button
                type="button"
                onClick={resetFilters}
                className="text-cheese-700 hover:text-cheese-800 font-bold underline"
              >
                Réinitialiser tous les filtres
              </button>
            </div>
          )}
        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length === 0 ? (
          <div className="bg-white rounded-2xl border border-terroir-200 p-12 text-center space-y-3">
            <span className="text-5xl">🔍</span>
            <h3 className="font-serif text-lg font-bold text-terroir-900">
              Aucune recette ne correspond à votre sélection
            </h3>
            <p className="text-xs text-terroir-600 max-w-md mx-auto">
              Essayez de modifier votre mot-clé ou sélectionnez "Tous les pays" et "Toutes les espèces".
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-2 inline-flex items-center px-4 py-2 rounded-xl bg-cheese-600 text-white text-xs font-bold hover:bg-cheese-700 transition"
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

      {/* ========================================================================= */}
      {/* 5. LIENS RAPIDES VERS LES RUBRIQUES D'ATELIER                             */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/astuces"
            className="bg-white p-6 rounded-2xl border border-terroir-200 shadow-xs hover:border-cheese-400 hover:shadow-md transition flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cheese-50 text-cheese-600 group-hover:bg-cheese-600 group-hover:text-white transition flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-terroir-900 group-hover:text-cheese-700 transition">
                Astuces & Vidéos
              </h3>
              <p className="text-xs text-terroir-600 leading-relaxed">
                Tutoriels de salage au sel sec, décaillé à la harpe et gestion d'hygrométrie en cave par l'Idele.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-cheese-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Voir les vidéos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/ustensiles"
            className="bg-white p-6 rounded-2xl border border-terroir-200 shadow-xs hover:border-cheese-400 hover:shadow-md transition flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cheese-50 text-cheese-600 group-hover:bg-cheese-600 group-hover:text-white transition flex items-center justify-center">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-terroir-900 group-hover:text-cheese-700 transition">
                Matériel & Ustensiles
              </h3>
              <p className="text-xs text-terroir-600 leading-relaxed">
                Chaudrons cuivre, tranche-caillés, toiles de lin, moules perforés et planches d'épicéa brut jurassien.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-cheese-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Guide des outils</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/sourcing"
            className="bg-white p-6 rounded-2xl border border-terroir-200 shadow-xs hover:border-cheese-400 hover:shadow-md transition flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cheese-50 text-cheese-600 group-hover:bg-cheese-600 group-hover:text-white transition flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-terroir-900 group-hover:text-cheese-700 transition">
                Où se Fournir (Sourcing)
              </h3>
              <p className="text-xs text-terroir-600 leading-relaxed">
                Annuaires et contacts réels vérifiés : Coquard, Sacco System, Scierie Renaud, Cocinista, Novonesis.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-cheese-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Consulter les adresses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/lexique"
            className="bg-white p-6 rounded-2xl border border-terroir-200 shadow-xs hover:border-cheese-400 hover:shadow-md transition flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cheese-50 text-cheese-600 group-hover:bg-cheese-600 group-hover:text-white transition flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-terroir-900 group-hover:text-cheese-700 transition">
                Lexique Fromager
              </h3>
              <p className="text-xs text-terroir-600 leading-relaxed">
                Plus de 30 définitions techniques : synérèse, délactosage, morge, point de gel, filage, floculation.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-cheese-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Lire le lexique</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
