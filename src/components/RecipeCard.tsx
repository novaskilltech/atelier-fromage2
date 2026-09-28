import Link from "next/link";
import { CheeseMethod } from "@/types";
import { Clock, Droplets, Scale, Sparkles, ChefHat } from "lucide-react";

interface RecipeCardProps {
  recipe: CheeseMethod;
}

const COUNTRY_FLAGS: Record<string, string> = {
  France: "🇫🇷",
  Italie: "🇮🇹",
  Espagne: "🇪🇸",
  Suisse: "🇨🇭",
  Belgique: "🇧🇪",
  "Pays-Bas": "🇳🇱",
};

const FAMILY_COLORS: Record<string, string> = {
  Lactique: "bg-emerald-50 text-emerald-900 border-emerald-300 font-bold",
  "Pâte Molle": "bg-amber-50 text-amber-950 border-amber-300 font-bold",
  "Pâte Pressée Non Cuite": "bg-orange-50 text-orange-950 border-orange-300 font-bold",
  "Pâte Pressée Cuite": "bg-yellow-50 text-yellow-950 border-yellow-300 font-bold",
  "Pâte Persillée": "bg-cyan-50 text-cyan-950 border-cyan-300 font-bold",
  "Pâte Filée": "bg-purple-50 text-purple-950 border-purple-300 font-bold",
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const flag = COUNTRY_FLAGS[recipe.country] || "🧀";
  const familyClass = FAMILY_COLORS[recipe.family] || "bg-stone-100 text-stone-900 border-stone-300 font-bold";
  const cheeseImg = recipe.image || `/images/cheeses/${recipe.slug}.jpg`;

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden group">
      {/* Top Cheese Photo Showcase */}
      <Link href={`/recette/${recipe.slug}`} className="relative h-44 sm:h-48 overflow-hidden block bg-stone-100">
        <img
          src={cheeseImg}
          alt={recipe.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/20 pointer-events-none" />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-bold text-stone-900 bg-white/95 backdrop-blur-md border border-stone-200/80 px-2.5 py-1 rounded-full shadow-sm">
          <span>{flag}</span>
          <span>{recipe.country}</span>
          <span className="text-stone-300">•</span>
          <span className="text-stone-700 font-medium truncate max-w-[110px]">{recipe.region}</span>
        </div>

        <div className="absolute top-3 right-3">
          <span className={`text-[11px] px-2.5 py-1 rounded-full border shadow-sm backdrop-blur-md ${familyClass}`}>
            {recipe.family}
          </span>
        </div>

        {/* Bottom Milk info badge */}
        <div className="absolute bottom-2.5 left-3 text-xs font-semibold text-white/95 drop-shadow flex items-center gap-1.5">
          <Droplets className="w-3.5 h-3.5 text-amber-300" />
          <span>Lait {recipe.milkType} ({recipe.pasteurization})</span>
        </div>
      </Link>

      <div className="p-5 sm:p-6">
        {/* Title */}
        <Link href={`/recette/${recipe.slug}`} className="block group-hover:text-amber-800 transition">
          <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug mb-2">
            {recipe.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs text-stone-700 line-clamp-2 leading-relaxed mb-4 font-normal">
          {recipe.description}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-2.5 text-xs border-t border-stone-100 pt-3">
          <div className="flex items-center gap-1.5 text-stone-700">
            <Droplets className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-medium truncate">Lait : {recipe.milkType} ({recipe.pasteurization})</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-700">
            <Scale className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-medium">Rendement : ~{recipe.expectedYieldKg} kg / {recipe.referenceVolumeLiters}L</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-700">
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-medium">
              {recipe.ripening
                ? `Affinage : ${recipe.ripening.optimalDays}j (${recipe.ripening.minDays}-${recipe.ripening.maxDays}j)`
                : "Consommation ultra-fraîche"}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-700">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-medium">Échelle : {recipe.minVolumeLiters} à {recipe.maxVolumeLiters} L</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="bg-stone-50/90 px-6 py-3 border-t border-stone-100 flex items-center justify-between gap-3">
        <Link
          href={`/recette/${recipe.slug}`}
          className="text-xs font-bold text-stone-700 hover:text-amber-800 transition"
        >
          Consulter la fiche →
        </Link>
        <Link
          href={`/recette/${recipe.slug}?mode=atelier`}
          className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-sm transition"
        >
          <ChefHat className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Mode Atelier</span>
        </Link>
      </div>
    </div>
  );
}
