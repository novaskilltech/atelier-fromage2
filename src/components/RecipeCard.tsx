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
  Lactique: "bg-emerald-50 text-emerald-800 border-emerald-200",
  "Pâte Molle": "bg-amber-50 text-amber-800 border-amber-200",
  "Pâte Pressée Non Cuite": "bg-orange-50 text-orange-800 border-orange-200",
  "Pâte Pressée Cuite": "bg-yellow-50 text-yellow-900 border-yellow-300",
  "Pâte Persillée": "bg-cyan-50 text-cyan-800 border-cyan-200",
  "Pâte Filée": "bg-purple-50 text-purple-800 border-purple-200",
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const flag = COUNTRY_FLAGS[recipe.country] || "🧀";
  const familyClass = FAMILY_COLORS[recipe.family] || "bg-gray-50 text-gray-800 border-gray-200";

  return (
    <div className="bg-white rounded-xl border border-terroir-200 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden group">
      <div className="p-6">
        {/* Header: Pays & Famille */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-terroir-700 bg-terroir-100 px-2.5 py-1 rounded-full">
            <span>{flag}</span>
            <span>{recipe.country}</span>
            <span className="text-terroir-400">•</span>
            <span>{recipe.region}</span>
          </span>
          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${familyClass}`}>
            {recipe.family}
          </span>
        </div>

        {/* Title */}
        <Link href={`/recette/${recipe.slug}`} className="block group-hover:text-cheese-700 transition">
          <h3 className="font-serif text-lg font-bold text-terroir-900 leading-snug mb-2">
            {recipe.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs text-terroir-600 line-clamp-2 leading-relaxed mb-4">
          {recipe.description}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs border-t border-terroir-100 pt-3">
          <div className="flex items-center gap-1.5 text-terroir-700">
            <Droplets className="w-3.5 h-3.5 text-cheese-600 shrink-0" />
            <span className="font-medium truncate">Lait : {recipe.milkType} ({recipe.pasteurization})</span>
          </div>
          <div className="flex items-center gap-1.5 text-terroir-700">
            <Scale className="w-3.5 h-3.5 text-cheese-600 shrink-0" />
            <span>Rendement : ~{recipe.expectedYieldKg} kg / {recipe.referenceVolumeLiters}L</span>
          </div>
          <div className="flex items-center gap-1.5 text-terroir-700">
            <Clock className="w-3.5 h-3.5 text-cheese-600 shrink-0" />
            <span>
              {recipe.ripening
                ? `Affinage : ${recipe.ripening.optimalDays}j (${recipe.ripening.minDays}-${recipe.ripening.maxDays}j)`
                : "Consommation ultra-fraîche"}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-terroir-700">
            <Sparkles className="w-3.5 h-3.5 text-cheese-600 shrink-0" />
            <span>Échelle : {recipe.minVolumeLiters} à {recipe.maxVolumeLiters} L</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="bg-terroir-50 px-6 py-3 border-t border-terroir-100 flex items-center justify-between gap-3">
        <Link
          href={`/recette/${recipe.slug}`}
          className="text-xs font-semibold text-terroir-700 hover:text-cheese-700 transition"
        >
          Consulter la fiche →
        </Link>
        <Link
          href={`/recette/${recipe.slug}?mode=atelier`}
          className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-cheese-500 hover:bg-cheese-600 text-white shadow-sm transition"
        >
          <ChefHat className="w-3.5 h-3.5" />
          Mode Atelier
        </Link>
      </div>
    </div>
  );
}
