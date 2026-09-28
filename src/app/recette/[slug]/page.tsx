"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { getRecipeBySlug, getSuppliersForRecipe, getUtensilsForRecipe } from "@/lib/data";
import WorkshopMode from "@/components/WorkshopMode";
import ScaledYieldCalculator from "@/components/ScaledYieldCalculator";
import {
  Clock,
  Droplets,
  Scale,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Hammer,
  ShoppingBag,
  Printer,
  ChefHat,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

interface RecipePageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    mode?: string;
  }>;
}

export default function RecipeDetailPage({ params, searchParams }: RecipePageProps) {
  const resolvedParams = use(params);
  const resolvedSearchParams = searchParams ? use(searchParams) : undefined;
  const initialMode = resolvedSearchParams?.mode === "atelier";

  const [isWorkshopOpen, setIsWorkshopOpen] = useState<boolean>(initialMode);

  const recipe = getRecipeBySlug(resolvedParams.slug);

  if (!recipe) {
    notFound();
  }

  const suppliers = getSuppliersForRecipe(recipe);
  const utensils = getUtensilsForRecipe(recipe);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Breadcrumb & Quick Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-amber-800 transition"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          Retour au catalogue des recettes
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-xs font-bold text-stone-800 transition shadow-2xs"
          >
            <Printer className="w-4 h-4 text-stone-600" />
            Imprimer Fiche A4
          </button>
          <button
            type="button"
            onClick={() => setIsWorkshopOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-xs font-extrabold text-stone-950 transition shadow-sm"
          >
            <ChefHat className="w-4 h-4 stroke-[2.5]" />
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

      {/* Main Header Banner with Cheese Image Showcase */}
      <header className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm print:border-none print:p-0">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Photo Showcase (5 cols on md/lg) */}
          <div className="md:col-span-5 relative h-72 md:h-auto min-h-[280px] bg-stone-100 overflow-hidden">
            <img
              src={recipe.image || `/images/cheeses/${recipe.slug}.jpg`}
              alt={recipe.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/95 drop-shadow">
              <span className="font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{recipe.family} • {recipe.milkType}</span>
              </span>
              <span className="text-[11px] bg-stone-900/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                100% {recipe.pasteurization}
              </span>
            </div>
          </div>

          {/* Details & Info (7 cols on md/lg) */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold bg-stone-100 text-stone-800 border border-stone-200 px-3 py-1 rounded-full">
                  {recipe.country} ({recipe.region})
                </span>
                <span className="text-xs font-bold bg-amber-100 text-amber-950 border border-amber-300 px-3 py-1 rounded-full">
                  {recipe.family}
                </span>
                <span className="text-xs font-mono text-stone-600 font-semibold ml-auto">
                  Version {recipe.version} • Certifié
                </span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
                {recipe.name}
              </h1>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans font-normal">
                {recipe.description}
              </p>

              {/* History Box */}
              <div className="bg-amber-50/70 border-l-4 border-amber-500 p-3.5 rounded-r-xl text-xs text-stone-800 italic">
                <span className="font-bold not-italic text-stone-900">Histoire & Terroir : </span>
                {recipe.history}
              </div>
            </div>

            {/* Technical Key Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 text-xs border-t border-stone-100">
              <div className="bg-stone-50 border border-stone-200 p-2.5 rounded-xl flex items-center gap-2">
                <Droplets className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">Lait cuve</span>
                  <span className="font-bold text-stone-900">{recipe.referenceVolumeLiters} L</span>
                </div>
              </div>
              <div className="bg-stone-50 border border-stone-200 p-2.5 rounded-xl flex items-center gap-2">
                <Scale className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">Rendement</span>
                  <span className="font-bold text-stone-900">~{recipe.expectedYieldKg} kg</span>
                </div>
              </div>
              <div className="bg-stone-50 border border-stone-200 p-2.5 rounded-xl flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">Affinage</span>
                  <span className="font-bold text-stone-900">
                    {recipe.ripening ? `${recipe.ripening.optimalDays} j` : "Frais"}
                  </span>
                </div>
              </div>
              <div className="bg-stone-50 border border-stone-200 p-2.5 rounded-xl flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">HACCP</span>
                  <span className="font-bold text-emerald-800">Conforme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dynamic Yield & Ingredient Scaler */}
      <section className="print-avoid-break">
        <ScaledYieldCalculator recipe={recipe} />
      </section>

      {/* Required Utensils & Materials */}
      <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4 print-avoid-break">
        <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
          <Hammer className="w-5 h-5 text-amber-600" />
          Ustensiles & Matériel d'Atelier Requis
        </h3>
        <p className="text-xs text-stone-600 font-medium">
          Ustensiles indispensables pour réaliser cette recette dans le respect des traditions et des normes d'hygiène alimentaire.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {utensils.map((utensil, idx) => (
            <div
              key={idx}
              className="border border-stone-200 rounded-xl p-3.5 bg-stone-50/50 space-y-1"
            >
              <div className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{utensil.name}</span>
              </div>
              <div className="text-[11px] text-stone-600 leading-snug">{utensil.description}</div>
              <div className="text-[10px] font-semibold text-emerald-800 pt-0.5">
                Matériau : {utensil.approvedMaterial}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step Chronology */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
          <div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Chronologie de Fabrication Pas-à-Pas ({recipe.steps.length} Étapes)
            </h3>
            <p className="text-xs text-stone-600 font-medium">
              Suivez scrupuleusement les températures et temps de repos indiqués.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsWorkshopOpen(true)}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 px-4 py-2 rounded-xl font-extrabold text-xs shadow-sm transition self-start sm:self-auto"
          >
            <ChefHat className="w-4 h-4 stroke-[2.5]" />
            Démarrer le Mode Atelier avec Minuteurs
          </button>
        </div>

        <div className="space-y-4">
          {recipe.steps.map((st) => (
            <div
              key={st.stepNumber}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-3 print-avoid-break"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-stone-950 font-extrabold flex items-center justify-center text-xs shadow-2xs">
                    {st.stepNumber}
                  </span>
                  <span className="font-serif font-bold text-base text-stone-900">
                    {st.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-stone-100 text-stone-800 px-2.5 py-0.5 rounded font-bold uppercase text-[10px]">
                    {st.phase}
                  </span>
                  {st.temperatureC && (
                    <span className="bg-amber-50 text-amber-950 border border-amber-300 px-2.5 py-0.5 rounded font-mono font-bold">
                      {st.temperatureC}°C
                    </span>
                  )}
                  {st.phTarget && (
                    <span className="bg-cyan-50 text-cyan-950 border border-cyan-300 px-2.5 py-0.5 rounded font-mono font-bold">
                      pH {st.phTarget}
                    </span>
                  )}
                  {st.durationMinutes && (
                    <span className="bg-stone-100 text-stone-800 border border-stone-300 px-2.5 py-0.5 rounded font-mono font-bold">
                      {st.durationMinutes} min
                    </span>
                  )}
                </div>
              </div>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans font-normal">
                {st.description}
              </p>

              {/* Sensory Cue Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-xl text-xs text-amber-950 font-medium">
                <span className="font-bold">👁️ Repère sensoriel (Toucher / Visuel) : </span>
                {st.sensoryCue}
              </div>

              {/* HACCP Alert Box */}
              {st.criticalControlPoint && (
                <div className="bg-rose-50 border-l-4 border-rose-500 p-3.5 rounded-r-xl text-xs text-rose-950 font-medium flex items-start gap-2">
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
        <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4 print-avoid-break">
          <div className="border-b border-stone-100 pb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              Protocole d'Affinage & Soins de Croûte
            </h3>
            <span className="text-xs font-bold text-amber-950 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
              Soin : {recipe.ripening.careType} ({recipe.ripening.careFrequency})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="text-stone-600 block uppercase tracking-wider text-[10px] font-bold">
                Température Cave
              </span>
              <span className="text-lg font-serif font-bold text-stone-900">
                {recipe.ripening.cellarTempMin}°C à {recipe.ripening.cellarTempMax}°C
              </span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="text-stone-600 block uppercase tracking-wider text-[10px] font-bold">
                Hygrométrie (HR)
              </span>
              <span className="text-lg font-serif font-bold text-stone-900">
                {recipe.ripening.humidityMinPercent}% à {recipe.ripening.humidityMaxPercent}%
              </span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="text-stone-600 block uppercase tracking-wider text-[10px] font-bold">
                Durée Recommandée
              </span>
              <span className="text-lg font-serif font-bold text-stone-900">
                {recipe.ripening.optimalDays} jours (min {recipe.ripening.minDays}j)
              </span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <span className="font-bold text-stone-900">Support d'affinage : </span>
              <span className="text-stone-800">{recipe.ripening.woodType}</span>
            </div>
            <div>
              <span className="font-bold text-stone-900">Protocole de soins : </span>
              <span className="text-stone-800">{recipe.ripening.careDescription}</span>
            </div>
            <div>
              <span className="font-bold text-stone-900">Évolution sensorielle : </span>
              <span className="text-stone-800">{recipe.ripening.sensoryEvolution}</span>
            </div>
          </div>
        </section>
      )}

      {/* Sourcing & Recommended Suppliers */}
      {suppliers.length > 0 && (
        <section className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4 print:hidden">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-600" />
              Où se Fournir pour cette Recette (Sourcing Artisanal)
            </h3>
            <Link
              href="/sourcing"
              className="text-xs font-bold text-amber-800 hover:text-amber-900 underline"
            >
              Voir tout l'annuaire →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {suppliers.map((s) => (
              <div
                key={s.id}
                className="border border-stone-200 rounded-xl p-3.5 bg-stone-50/50 hover:bg-stone-50 transition space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900">{s.name}</span>
                  <span className="text-[10px] font-bold bg-stone-200 text-stone-800 px-2 py-0.5 rounded">
                    {s.country}
                  </span>
                </div>
                <div className="text-[11px] text-stone-700">{s.specialty}</div>
                {s.website && (
                  <a
                    href={s.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-amber-800 hover:underline block pt-1 font-bold"
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
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 space-y-1">
          <div className="font-bold text-amber-950 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            Vigilance Sanitaire (Lait Cru & HACCP)
          </div>
          <p className="text-amber-900 leading-relaxed font-normal">{recipe.hygieneWarning}</p>
        </div>

        <div className="bg-stone-100 border border-stone-300 rounded-2xl p-5 space-y-1">
          <div className="font-bold text-stone-900 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-stone-700" />
            Cadre Réglementaire & Marques AOP
          </div>
          <p className="text-stone-700 leading-relaxed font-normal">{recipe.legalDisclaimer}</p>
        </div>
      </section>

      {/* Governance & Signatures */}
      <footer className="text-xs text-stone-600 font-semibold border-t border-stone-200 pt-4 flex flex-col sm:flex-row justify-between gap-2 print:border-black print:text-black">
        <div>Auteur : {recipe.author}</div>
        <div>Validation Technique : {recipe.validatorTech}</div>
        <div>Validation Sanitaire : {recipe.validatorHealth}</div>
      </footer>

      {/* Modal Mode Atelier */}
      {isWorkshopOpen && (
        <WorkshopMode recipe={recipe} onClose={() => setIsWorkshopOpen(false)} />
      )}
    </div>
  );
}
