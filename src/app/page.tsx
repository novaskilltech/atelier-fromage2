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
  Moon,
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
      {/* 1. HERO SECTION LANDING PAGE - FOND ARTISANAL CLAIR & VISIBLE + GLASS    */}
      {/* ========================================================================= */}
      <section
        style={{ backgroundColor: "#1c140e" }}
        className="relative overflow-hidden text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-2xl border border-stone-800"
      >
        {/* Background Image with Lighter Warm Ambiance */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero-artisan-copper.jpg"
            alt="Artisan fromager chauffant son lait cru dans un grand chaudron en cuivre traditionnel avec thermomètre"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
            style={{ opacity: 0.58 }}
          />
          {/* Subtle gradient overlays letting the image shine through */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c140e]/90 via-[#1c140e]/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c140e] via-transparent to-[#1c140e]/40 pointer-events-none" />
        </div>

        {/* Content Container with Frosted Glass Protection */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-14 sm:py-20 lg:py-24 flex flex-col justify-center">
          <div className="max-w-3xl space-y-6 bg-stone-950/65 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-amber-500/20 shadow-2xl">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-950/90 text-amber-300 border border-amber-500/60 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Charte 100% Artisanal & Fermier • Ateliers de 20 à 200 Litres</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
              L’Art Pur de la <br />
              <span className="text-amber-400">
                Fromagerie Artisanale
              </span>
            </h1>

            {/* Subtitle / Pitch */}
            <p className="text-base sm:text-lg text-stone-100 font-sans leading-relaxed font-medium drop-shadow-sm max-w-2xl">
              Découvrez les secrets de fabrication des plus grands fromages de terroir d'Europe.
              Du réchauffage en chaudron de cuivre au salage à sec et à l'affinage sur planches d'épicéa,
              retrouvez 24 protocoles pas-à-pas réservés aux passionnés et professionnels fermiers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#catalogue"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-sm shadow-xl hover:shadow-amber-500/30 transition transform hover:-translate-y-0.5"
              >
                <span>Explorer les 24 Recettes</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#a-propos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 text-amber-200 font-bold text-sm border border-amber-500/40 backdrop-blur-md shadow-md transition"
              >
                <Moon className="w-4 h-4 text-amber-400" />
                <span>Découvrir L'Atelier & La Veillée</span>
              </a>

              <Link
                href="/astuces"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-white font-bold text-sm border border-stone-600 backdrop-blur-md shadow-md transition"
              >
                <Video className="w-4 h-4 text-amber-400" />
                <span>Vidéos & Gestes d'Atelier</span>
              </Link>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800/80">
              <div className="bg-[#221a14]/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 shadow-md">
                <div className="text-2xl font-bold font-serif text-amber-400">24</div>
                <div className="text-xs text-stone-200 font-medium">Méthodes ancestrales</div>
              </div>
              <div className="bg-[#221a14]/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 shadow-md">
                <div className="text-2xl font-bold font-serif text-amber-400">6 Pays</div>
                <div className="text-xs text-stone-200 font-medium">France, Italie, Suisse...</div>
              </div>
              <div className="bg-[#221a14]/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 shadow-md">
                <div className="text-2xl font-bold font-serif text-amber-400">20 à 200 L</div>
                <div className="text-xs text-stone-200 font-medium">Échelle micro-fromagerie</div>
              </div>
              <div className="bg-[#221a14]/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-3.5 shadow-md">
                <div className="text-2xl font-bold font-serif text-amber-400">0% Chimie</div>
                <div className="text-xs text-stone-200 font-medium">Lait cru & ferments nobles</div>
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
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full">
            La Règle de l'Artisan
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Trois Gestes Fondateurs, Zéro Compromis
          </h2>
          <p className="text-sm text-stone-700 font-medium">
            Chaque recette de notre bibliothèque repose sur l'équilibre délicat entre la température, la main de l'artisan et la flore du terroir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilier 1 : Le Cuivre & La Chauffe Douce */}
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/hero-artisan-copper.jpg"
                alt="Chauffage du lait au chaudron en cuivre avec thermomètre artisanal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-md text-amber-300 text-xs px-3 py-1 rounded-full font-bold border border-stone-700 flex items-center gap-1.5 shadow">
                <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                <span>Thermique & Cuivre</span>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                1. Chauffe au Chaudron en Cuivre
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                Le cuivre distribue la chaleur de façon homogène sans brûler la matière grasse du lait cru.
                Le contrôle au thermomètre à cadran permet de respecter le palier précis de coagulation (32°C à 53°C selon la recette).
              </p>
              <div className="pt-2 text-xs font-bold text-amber-800 flex items-center gap-1">
                <span>Indispensable pour : Beaufort, Comté, Gruyère</span>
              </div>
            </div>
          </div>

          {/* Pilier 2 : Le Caillé & Le Moulage Délicat */}
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/curd-moulding.jpg"
                alt="Moulage artisanal à la louche et toiles de lin brut"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-md text-amber-300 text-xs px-3 py-1 rounded-full font-bold border border-stone-700 flex items-center gap-1.5 shadow">
                <Droplets className="w-3.5 h-3.5 text-amber-400" />
                <span>Toiles & Égouttage</span>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                2. Décaillé & Moulage à la Louche
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                Découpe soignée à la harpe inox pour obtenir des grains calibrés (de la taille d'une noisette au grain de blé).
                Moulage manuel dans des toiles de lin naturel préservant le feuilleté et la synérèse spontanée du sérum.
              </p>
              <div className="pt-2 text-xs font-bold text-amber-800 flex items-center gap-1">
                <span>Crucial pour : Reblochon, Saint-Marcellin, Valençay</span>
              </div>
            </div>
          </div>

          {/* Pilier 3 : L'Affinage en Cave sur Bois */}
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/cellar-affinage.jpg"
                alt="Affinage en cave naturelle voûtée sur planches d'épicéa brut"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-md text-amber-300 text-xs px-3 py-1 rounded-full font-bold border border-stone-700 flex items-center gap-1.5 shadow">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Cave & Épicéa</span>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                3. Épicéa & Morge Vivante
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                Les planches d'épicéa brut non traité régulent l'humidité (85-95%) et abritent le biofilm naturel.
                Les soins de croûte (frottage à l'eau saumurée ou morge, brossage doux) développent le bouquet aromatique unique.
              </p>
              <div className="pt-2 text-xs font-bold text-amber-800 flex items-center gap-1">
                <span>Sublime : Appenzeller, Morbier, Gouda Fermier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.5 SECTION À PROPOS : L'ESPRIT D'ATELIER & LA VEILLÉE DU SOIR           */}
      {/* ========================================================================= */}
      <section
        id="a-propos"
        style={{ backgroundColor: "#1e1610" }}
        className="relative overflow-hidden text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-2xl border border-amber-900/40"
      >
        {/* Lighter Evening Twilight Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/cellar-affinage.jpg"
            alt="Cave voûtée d'affinage traditionnel au crépuscule sur planches d'épicéa"
            className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
            style={{ opacity: 0.68 }}
          />
          {/* Lighter evening gradient overlay letting cellar details and wood grain show clearly */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/45 to-amber-950/50 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/40 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-20 space-y-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-950/90 text-amber-300 border border-amber-500/50 shadow-md backdrop-blur-md">
              <Moon className="w-3.5 h-3.5 text-amber-400" />
              <span>À Propos • L'Esprit d'Atelier & La Veillée du Soir</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
              Quand le Soir Tombe sur la Fruitière, <br />
              <span className="text-amber-400">Le Silence Travaille avec le Vivant</span>
            </h2>
            <p className="text-stone-100 text-sm sm:text-base font-medium leading-relaxed drop-shadow max-w-2xl">
              Entre la traite de l'aube, la chauffe au cuivre et le retournement nocturne en cave voûtée,
              L'Atelier Fromager est né de la passion des artisans qui refusent la banalisation du goût.
            </p>
          </div>

          {/* Three Translucent Frosted Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-950/70 backdrop-blur-md border border-amber-500/25 p-6 rounded-2xl shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Moon className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">La Veillée d'Affinage</h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                Après l'égouttage et le salage au sel sec, l'atelier s'apaise. À la nuit tombée, l'artisan descend
                dans la fraîcheur de la cave. Il palpe le talon des meules, écoute le souffle de l'humidité et
                retourne avec précaution les fromages sur les planches d'épicéa brut.
              </p>
            </div>

            <div className="bg-stone-950/70 backdrop-blur-md border border-amber-500/25 p-6 rounded-2xl shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Sanctuaire du Lait Cru</h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                Nous défendons une fromagerie vivante, sans poudres de reconstitution ni additifs de conservation.
                Nos 24 protocoles documentent scrupuleusement la flore microbienne endogène, le respect des flores sauvages
                et la pureté des ferments fermiers.
              </p>
            </div>

            <div className="bg-stone-950/70 backdrop-blur-md border border-amber-500/25 p-6 rounded-2xl shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Échelle Micro-Atelier</h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                Que vous traitiez 20 litres dans un chaudron familial ou 200 litres au sein d'une ferme autonome,
                nos outils adaptent dynamiquement les doses de présure et de ferments, tout en facilitant le suivi HACCP
                au quotidien.
              </p>
            </div>
          </div>

          {/* Quote & Values Banner */}
          <div className="bg-stone-950/60 backdrop-blur-md border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <blockquote className="italic text-amber-200 text-sm sm:text-base font-serif border-l-2 border-amber-500 pl-4 max-w-2xl">
              « Un fromage artisanal n'est pas un produit façonné à la chaîne : c'est un terroir, une saison et le geste patient d'un artisan à la veillée. »
            </blockquote>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/charte"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition"
              >
                Lire la Charte
              </Link>
              <Link
                href="/sourcing"
                className="px-5 py-2.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 font-bold text-xs border border-stone-700 transition"
              >
                Fournisseurs Épicéa
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. LES OUTILS DE L'ATELIER (INNOVATION & ERGONOMIE FERMIÈRE)                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          style={{ backgroundColor: "#1c1510" }}
          className="text-white rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-xl"
        >
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/90 px-3.5 py-1 rounded-full border border-amber-600/50">
              Conçu pour le Quotidien en Atelier
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
              Des Outils Interactifs pour Travailler les Mains Libres
            </h2>
            <p className="text-sm text-stone-200">
              Notre interface a été pensée pour être manipulée en cuverie et en cave d'affinage, sur tablette ou smartphone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="bg-[#291f18] border border-stone-700/80 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Mode Atelier Pas-à-Pas</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-normal">
                Minuteurs intégrés de prise, floculation et d'égouttage avec signal sonore pour ne jamais rater un point de gel.
              </p>
            </div>

            <div className="bg-[#291f18] border border-stone-700/80 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Calculateur Scalable</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-normal">
                Ajustez votre volume de lait de 20 à 200 litres : la présure, les ferments et les rendements se recalculent automatiquement.
              </p>
            </div>

            <div className="bg-[#291f18] border border-stone-700/80 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Fiches Imprimables A4</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-normal">
                Bouton d'impression optimisé pour emporter vos fiches de fabrication en atelier humide sans risquer vos écrans.
              </p>
            </div>

            <div className="bg-[#291f18] border border-stone-700/80 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Sourcing Réel & Actif</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-normal">
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-200 px-3.5 py-1 rounded-full">
              Répertoire Culinaire
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 mt-2">
              Le Catalogue des 24 Recettes Artisanales
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 font-medium">
              4 spécialités d'exception par pays : France, Italie, Espagne, Suisse, Belgique, Pays-Bas.
            </p>
          </div>
          <span className="text-xs text-stone-800 font-bold bg-stone-100 border border-stone-200 px-3 py-1.5 rounded-lg">
            {filteredRecipes.length} méthode(s) disponible(s)
          </span>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-5">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher par nom de fromage, région, pays, méthode, caractéristiques..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
            />
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            {/* Country Filter */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Pays d'origine (6)
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full text-xs font-medium rounded-xl border border-stone-300 py-2.5 px-3 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Espèce laitière
              </label>
              <select
                value={selectedMilk}
                onChange={(e) => setSelectedMilk(e.target.value)}
                className="w-full text-xs font-medium rounded-xl border border-stone-300 py-2.5 px-3 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Famille fromagère
              </label>
              <select
                value={selectedFamily}
                onChange={(e) => setSelectedFamily(e.target.value)}
                className="w-full text-xs font-medium rounded-xl border border-stone-300 py-2.5 px-3 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
            <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs">
              <span className="text-stone-700 font-semibold">
                Résultat : {filteredRecipes.length} recette(s) trouvée(s)
              </span>
              <button
                type="button"
                onClick={resetFilters}
                className="text-amber-800 hover:text-amber-900 font-bold underline"
              >
                Réinitialiser tous les filtres
              </button>
            </div>
          )}
        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center space-y-3">
            <span className="text-5xl">🔍</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Aucune recette ne correspond à votre sélection
            </h3>
            <p className="text-xs text-stone-600 max-w-md mx-auto">
              Essayez de modifier votre mot-clé ou sélectionnez "Tous les pays" et "Toutes les espèces".
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-2 inline-flex items-center px-4 py-2 rounded-xl bg-amber-500 text-stone-950 text-xs font-bold hover:bg-amber-400 transition shadow"
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
            className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-400 hover:shadow-md transition flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-amber-800 transition">
                Astuces & Vidéos
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed font-normal">
                Tutoriels de salage au sel sec, décaillé à la harpe et gestion d'hygrométrie en cave par l'Idele.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Voir les vidéos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/ustensiles"
            className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-400 hover:shadow-md transition flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition flex items-center justify-center">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-amber-800 transition">
                Matériel & Ustensiles
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed font-normal">
                Chaudrons cuivre, tranche-caillés, toiles de lin, moules perforés et planches d'épicéa brut jurassien.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Guide des outils</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/sourcing"
            className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-400 hover:shadow-md transition flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-amber-800 transition">
                Où se Fournir (Sourcing)
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed font-normal">
                Annuaires et contacts réels vérifiés : Coquard, Sacco System, Scierie Renaud, Cocinista, Novonesis.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Consulter les adresses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/lexique"
            className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-400 hover:shadow-md transition flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-amber-800 transition">
                Lexique Fromager
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed font-normal">
                Plus de 30 définitions techniques : synérèse, délactosage, morge, point de gel, filage, floculation.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Lire le lexique</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
