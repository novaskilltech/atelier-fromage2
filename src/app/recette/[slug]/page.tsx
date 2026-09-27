"use client";

import { use, useState, useEffect } from "react";
import { notFound, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getRecipeBySlug, getUtensilsForRecipe, getSuppliersForRecipe } from "@/lib/data";
import ScaledYieldCalculator from "@/components/ScaledYieldCalculator";
import WorkshopMode from "@/components/WorkshopMode";
import {
  ChevronLeft,
  ChefHat,
  Printer,
  Clock,
  Droplets,
  Scale,
  ShieldCheck,
  AlertTriangle,
  Hammer,
  ShoppingBag,
  Sparkles,
  Thermometer,
  Layers,
  HeartHandshake
} from "lucide-react";

export default function RecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "atelier";

  const [isWorkshopOpen, setIsWorkshopOpen] = useState(initialMode);

  useEffect(() => {
    if (searchParams.get("mode") === "atelier") {
      setIsWorkshopOpen(true);
    }
  }, [searchParams]);

  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const utensils = getUtensilsForRecipe(recipe);
  const suppliers = getSuppliersForRecipe(recipe);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Fullscreen Workshop Mode Overlay */}
      {isWorkshopOpen && (
        <WorkshopMode recipe={recipe} onClose={() => setIsWorkshopOpen(false)} />
      )}

      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-terroir-600 hover:text-cheese-700 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          Retour au catalogue des recettes
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-terroir-300 bg-white hover:bg-terroir-50 text-xs font-bold text-terroir-700 transition shadow-xs"
          >
            <Printer className="w-4 h-4 text-terroir-500" />
            Imprimer Fiche A4
          </button>
          <button
            type="button"
            onClick={() => setIsWorkshopOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cheese-600 hover:bg-cheese-700 text-xs font-bold text-white transition shadow"
          >
            <ChefHat className="w-4 h-4" />
            Lancer le Mode Atelier
          </button>
        </div>
      </div>

      {/* Printable Sheet Header (Always visible on print) */}
      <div className="hidden print:block border-b-2 border-black pb-4 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-serif font-bold">{recipe.name}</h1>
            <p className="text-xs text-gray-700 font-sans mt-0.5">
              Fiche Technique d'Atelier • {recipe.country} ({recipe.region}) • {recipe.family}
            </p>
          </div>
          <div className="text-right text-xs">
            <div>Version : {recipe.version}</div>
            <div>Validateur : {recipe.validatorTech}</div>
          </div>
        </div>
      </div>

      {/* Main Header Banner */}
      <header className="bg-white rounded-2xl border border-terroir-200 p-6 sm:p-8 shadow-sm space-y-4 print:border-none print:p-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold bg-terroir-100 text-terroir-800 px-3 py-1 rounded-full">
            {recipe.country} ({recipe.region})
          </span>
          <span className="text-xs font-semibold bg-cheese-100 text-cheese-900 border border-cheese-300 px-3 py-1 rounded-full">
            {recipe.family}
          </span>
          <span className="text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full">
            {recipe.milkType} • {recipe.pasteurization}
          </span>
          <span className="text-xs font-mono text-terroir-500 ml-auto">
            Version {recipe.version} • Statut : Certifié
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-terroir-900 leading-tight">
          {recipe.name}
        </h1>

        <p className="text-sm sm:text-base text-terroir-700 leading-relaxed font-sans">
          {recipe.description}
        </p>

        {/* History Box */}
        <div className="bg-terroir-50 border-l-4 border-cheese-500 p-4 rounded-r-lg text-xs text-terroir-800 italic">
          <span className="font-bold not-italic">Histoire & Terroir : </span>
          {recipe.history}
        </div>

        {/* Technical Key Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="bg-terroir-50 border border-terroir-100 p-3 rounded-lg flex items-center gap-2.5">
            <Droplets className="w-4 h-4 text-cheese-600 shrink-0" />
            <div>
              <span className="text-terroir-500 block text-[10px] uppercase">Lait mis en œuvre</span>
              <span className="font-bold text-terroir-900">{recipe.referenceVolumeLiters} Litres</span>
            </div>
          </div>
          <div className="bg-terroir-50 border border-terroir-100 p-3 rounded-lg flex items-center gap-2.5">
            <Scale className="w-4 h-4 text-cheese-600 shrink-0" />
            <div>
              <span className="text-terroir-500 block text-[10px] uppercase">Rendement estimé</span>
              <span className="font-bold text-terroir-900">~{recipe.expectedYieldKg} kg</span>
            </div>
          </div>
          <div className="bg-terroir-50 border border-terroir-100 p-3 rounded-lg flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-cheese-600 shrink-0" />
            <div>
              <span className="text-terroir-500 block text-[10px] uppercase">Affinage optimal</span>
              <span className="font-bold text-terroir-900">
                {recipe.ripening ? `${recipe.ripening.optimalDays} jours` : "Frais (1-3j)"}
              </span>
            </div>
          </div>
          <div className="bg-terroir-50 border border-terroir-100 p-3 rounded-lg flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <span className="text-terroir-500 block text-[10px] uppercase">Validation</span>
              <span className="font-bold text-terroir-900">Sanitaire OK</span>
            </div>
          </div>
        </div>
      </header>

      {/* Dynamic Yield & Ingredient Scaler */}
      <section className="print-avoid-break">
        <ScaledYieldCalculator recipe={recipe} />
      </section>

      {/* Required Utensils & Materials */}
      <section className="bg-white rounded-xl border border-terroir-200 p-6 shadow-xs space-y-4 print-avoid-break">
        <h3 className="font-serif text-xl font-bold text-terroir-900 flex items-center gap-2">
          <Hammer className="w-5 h-5 text-cheese-600" />
          Ustensiles & Matériel d'Atelier Requis
        </h3>
        <p className="text-xs text-terroir-600">
          Ustensiles indispensables pour réaliser cette recette dans le respect des traditions et des normes d'hygiène alimentaire.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {utensils.map((u) => (
            <div
              key={u.id}
              className="border border-terroir-100 rounded-lg p-3 bg-terroir-50/50 hover:bg-white hover:border-cheese-300 transition text-xs space-y-1"
            >
              <div className="font-bold text-terroir-900">{u.name}</div>
              <div className="text-[11px] text-terroir-600 font-mono">
                Matériau agréé : {u.approvedMaterial}
              </div>
              <div className="text-[11px] text-terroir-500 leading-snug">{u.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Chronological Step-by-Step Manufacturing Process */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl font-bold text-terroir-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cheese-600" />
            Conduite Chronologique de la Fabrication
          </h3>
          <span className="text-xs font-semibold text-terroir-500">
            {recipe.steps.length} étapes clés
          </span>
        </div>

        <div className="space-y-4">
          {recipe.steps.map((st) => (
            <div
              key={st.stepNumber}
              className="bg-white rounded-xl border border-terroir-200 p-6 shadow-xs space-y-3 print-avoid-break"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-terroir-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-cheese-600 text-white font-bold flex items-center justify-center text-xs">
                    {st.stepNumber}
                  </span>
                  <span className="font-serif font-bold text-base text-terroir-900">
                    {st.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-terroir-100 text-terroir-700 px-2.5 py-0.5 rounded font-semibold uppercase text-[10px]">
                    {st.phase}
                  </span>
                  {st.temperatureC && (
                    <span className="bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded font-mono font-bold">
                      {st.temperatureC}°C
                    </span>
                  )}
                  {st.phTarget && (
                    <span className="bg-cyan-50 text-cyan-900 border border-cyan-200 px-2 py-0.5 rounded font-mono font-bold">
                      pH {st.phTarget}
                    </span>
                  )}
                  {st.durationMinutes && (
                    <span className="bg-cheese-50 text-cheese-900 border border-cheese-200 px-2 py-0.5 rounded font-mono font-bold">
                      {st.durationMinutes} min
                    </span>
                  )}
                </div>
              </div>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-terroir-800 leading-relaxed font-sans">
                {st.description}
              </p>

              {/* Sensory Cue Box */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-md text-xs text-amber-900">
                <span className="font-bold">👁️ Repère sensoriel (Toucher / Visuel) : </span>
                {st.sensoryCue}
              </div>

              {/* HACCP Alert Box */}
              {st.criticalControlPoint && (
                <div className="bg-rose-50 border-l-4 border-rose-400 p-3 rounded-r-md text-xs text-rose-900 flex items-start gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Point Critique de Maîtrise (HACCP) : </span>
                    {st.criticalControlPoint}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ripening Protocol & Cellar Care */}
      {recipe.ripening && (
        <section className="bg-white rounded-xl border border-terroir-200 p-6 shadow-xs space-y-4 print-avoid-break">
          <div className="border-b border-terroir-100 pb-3 flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-terroir-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cheese-600" />
              Protocole d'Affinage & Soins de Croûte
            </h3>
            <span className="text-xs font-bold text-cheese-700 bg-cheese-50 border border-cheese-200 px-3 py-1 rounded-full">
              Soin : {recipe.ripening.careType} ({recipe.ripening.careFrequency})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-terroir-50 p-4 rounded-lg border border-terroir-100">
              <span className="text-terroir-500 block uppercase tracking-wider text-[10px] font-semibold">
                Température Cave
              </span>
              <span className="text-lg font-serif font-bold text-terroir-900">
                {recipe.ripening.cellarTempMin}°C à {recipe.ripening.cellarTempMax}°C
              </span>
            </div>
            <div className="bg-terroir-50 p-4 rounded-lg border border-terroir-100">
              <span className="text-terroir-500 block uppercase tracking-wider text-[10px] font-semibold">
                Hygrométrie (HR)
              </span>
              <span className="text-lg font-serif font-bold text-terroir-900">
                {recipe.ripening.humidityMinPercent}% à {recipe.ripening.humidityMaxPercent}%
              </span>
            </div>
            <div className="bg-terroir-50 p-4 rounded-lg border border-terroir-100">
              <span className="text-terroir-500 block uppercase tracking-wider text-[10px] font-semibold">
                Durée d'Affinage
              </span>
              <span className="text-lg font-serif font-bold text-terroir-900">
                {recipe.ripening.minDays} à {recipe.ripening.maxDays} jours
              </span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <span className="font-bold text-terroir-900">Support d'affinage : </span>
              <span className="text-terroir-700">{recipe.ripening.woodType}</span>
            </div>
            <div>
              <span className="font-bold text-terroir-900">Protocole de soins : </span>
              <span className="text-terroir-700">{recipe.ripening.careDescription}</span>
            </div>
            <div>
              <span className="font-bold text-terroir-900">Évolution sensorielle : </span>
              <span className="text-terroir-700">{recipe.ripening.sensoryEvolution}</span>
            </div>
          </div>
        </section>
      )}

      {/* Sourcing & Recommended Suppliers */}
      {suppliers.length > 0 && (
        <section className="bg-white rounded-xl border border-terroir-200 p-6 shadow-xs space-y-4 print:hidden">
          <div className="flex items-center justify-between border-b border-terroir-100 pb-3">
            <h3 className="font-serif text-xl font-bold text-terroir-900 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-cheese-600" />
              Où se Fournir pour cette Recette (Sourcing Artisanal)
            </h3>
            <Link
              href="/sourcing"
              className="text-xs font-semibold text-cheese-700 hover:text-cheese-800"
            >
              Voir tout l'annuaire →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {suppliers.map((s) => (
              <div
                key={s.id}
                className="border border-terroir-100 rounded-lg p-3 bg-cheese-50/30 hover:bg-cheese-50 transition space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-terroir-900">{s.name}</span>
                  <span className="text-[10px] font-semibold bg-terroir-200 text-terroir-800 px-2 py-0.5 rounded">
                    {s.country}
                  </span>
                </div>
                <div className="text-[11px] text-terroir-700">{s.specialty}</div>
                {s.website && (
                  <a
                    href={s.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-cheese-700 hover:underline block pt-1 font-medium"
                  >
                    Consulter le catalogue ({s.website.replace("https://", "")})
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Hygiene & Legal Disclaimers */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs print-avoid-break">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-1">
          <div className="font-bold text-amber-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            Vigilance Sanitaire (Lait Cru & HACCP)
          </div>
          <p className="text-amber-800 leading-relaxed">{recipe.hygieneWarning}</p>
        </div>

        <div className="bg-terroir-100 border border-terroir-200 rounded-xl p-4 space-y-1">
          <div className="font-bold text-terroir-900 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-terroir-700" />
            Cadre Réglementaire & Marques AOP
          </div>
          <p className="text-terroir-700 leading-relaxed">{recipe.legalDisclaimer}</p>
        </div>
      </section>

      {/* Governance & Signatures */}
      <footer className="text-xs text-terroir-500 border-t border-terroir-200 pt-4 flex flex-col sm:flex-row justify-between gap-2 print:border-black print:text-black">
        <div>Auteur : {recipe.author}</div>
        <div>Validation Technique : {recipe.validatorTech}</div>
        <div>Validation Sanitaire : {recipe.validatorHealth}</div>
      </footer>
    </div>
  );
}
