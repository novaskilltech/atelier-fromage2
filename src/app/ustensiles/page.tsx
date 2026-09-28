import { UTENSILS } from "@/data/utensils";
import { Hammer, CheckCircle2, AlertCircle, Video, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UtensilsPage() {
  const manualTools = UTENSILS.filter((u) => u.category === "Petit outillage manuel");
  const workshopEquipment = UTENSILS.filter((u) => u.category === "Équipement d'atelier");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100 border border-amber-200 px-3.5 py-1.5 rounded-full">
          <Hammer className="w-3.5 h-3.5 text-amber-700" />
          <span>Référentiel Technique Matériel</span>
        </div>
        <h1 className="font-serif text-3xl font-bold text-stone-900">
          Ustensiles & Équipement de Fromagerie Artisanale
        </h1>
        <p className="text-sm text-stone-700 max-w-3xl leading-relaxed font-normal">
          Pour garantir la naturalité des fromages et le respect des normes sanitaires, chaque ustensile
          doit être composé de matériaux nobles agréés (inox AISI 304/316, cuivre pur, lin non blanchi, épicéa de montagne).
        </p>
      </div>

      {/* Video Callout : Créer sa fromagerie à moindre coût (REFCA / Idele) */}
      <div
        style={{ backgroundColor: "#1e1713" }}
        className="text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400">
            <Video className="w-4 h-4" />
            <span>Témoignage Vidéo d'Atelier • Projet REFCA / Idele</span>
          </div>
          <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
            Comment s'équiper et créer son labo fromager à moindre coût ?
          </h3>
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-medium">
            Émilie Lagache explique l'utilisation de matériel d'occasion reconditionné et l'aménagement modulaire conforme aux normes sanitaires.
          </p>
        </div>
        <Link
          href="/astuces"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 px-5 py-3 rounded-xl text-xs font-extrabold shadow-md transition shrink-0 self-start sm:self-auto"
        >
          <span>Visionner le tutoriel</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </Link>
      </div>

      {/* Section 1 : Petit Outillage Manuel */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
          <h2 className="font-serif text-xl font-bold text-stone-900">
            1. Petit Outillage Manuel de l'Artisan ({manualTools.length})
          </h2>
          <span className="text-xs text-stone-600 font-bold">Ustensiles indispensables</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {manualTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:border-amber-400 transition flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif font-bold text-base text-stone-900">{tool.name}</h3>
                  <span className="text-[10px] font-bold uppercase bg-stone-100 text-stone-800 border border-stone-200 px-2 py-0.5 rounded shrink-0">
                    Manuel
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-normal">{tool.description}</p>
              </div>

              <div className="border-t border-stone-100 pt-3 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                  <span className="font-bold">Matériau agréé : </span>
                  <span className="text-stone-800 font-medium">{tool.approvedMaterial}</span>
                </div>
                {tool.traditionalAlternative && (
                  <div className="flex items-start gap-1.5 text-amber-950 text-[11px] bg-amber-50 p-2 rounded-lg border border-amber-200">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      <span className="font-bold">Alternative patrimoniale : </span>
                      {tool.traditionalAlternative}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 : Gros Équipement d'Atelier (20 à 200 L) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
          <h2 className="font-serif text-xl font-bold text-stone-900">
            2. Équipement Fixe & Installations d'Atelier ({workshopEquipment.length})
          </h2>
          <span className="text-xs text-stone-600 font-bold">Cuves, presses et hâloirs</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workshopEquipment.map((eq) => (
            <div
              key={eq.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:border-amber-400 transition flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif font-bold text-base text-stone-900">{eq.name}</h3>
                  <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-950 border border-amber-300 px-2 py-0.5 rounded shrink-0">
                    Atelier
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-normal">{eq.description}</p>
              </div>

              <div className="border-t border-stone-100 pt-3 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                  <span className="font-bold">Spécification : </span>
                  <span className="text-stone-800 font-medium">{eq.approvedMaterial}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
