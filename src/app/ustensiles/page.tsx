import { UTENSILS } from "@/data/utensils";
import { Hammer, CheckCircle2, AlertCircle } from "lucide-react";

export default function UtensilsPage() {
  const manualTools = UTENSILS.filter((u) => u.category === "Petit outillage manuel");
  const workshopEquipment = UTENSILS.filter((u) => u.category === "Équipement d'atelier");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-terroir-200 p-6 sm:p-8 shadow-xs space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cheese-700 bg-cheese-50 px-3 py-1 rounded-full border border-cheese-200">
          <Hammer className="w-3.5 h-3.5" />
          Référentiel Technique Matériel
        </div>
        <h1 className="font-serif text-3xl font-bold text-terroir-900">
          Ustensiles & Équipement de Fromagerie Artisanale
        </h1>
        <p className="text-sm text-terroir-600 max-w-3xl leading-relaxed">
          Pour garantir la naturalité des fromages et le respect des normes sanitaires, chaque ustensile
          doit être composé de matériaux nobles agréés (inox AISI 304/316, cuivre pur, lin non blanchi, épicéa de montagne).
        </p>
      </div>

      {/* Video Callout : Créer sa fromagerie à moindre coût (REFCA / Idele) */}
      <div className="bg-gradient-to-r from-terroir-900 to-terroir-850 text-white rounded-2xl p-6 border border-terroir-700 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cheese-400">
            <span>Témoignage Vidéo d'Atelier • Projet REFCA / Idele</span>
          </div>
          <h3 className="font-serif font-bold text-base text-white">
            Comment s'équiper et créer son labo fromager à moindre coût ?
          </h3>
          <p className="text-xs text-terroir-300">
            Émilie Lagache explique l'utilisation de matériel d'occasion reconditionné et l'aménagement modulaire conforme aux normes sanitaires.
          </p>
        </div>
        <a
          href="/astuces"
          className="inline-flex items-center gap-2 bg-cheese-600 hover:bg-cheese-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs transition shrink-0 self-start sm:self-auto"
        >
          <span>Visionner le tutoriel</span>
          <span>→</span>
        </a>
      </div>

      {/* Section 1 : Petit Outillage Manuel */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-terroir-200 pb-2">
          <h2 className="font-serif text-xl font-bold text-terroir-900">
            1. Petit Outillage Manuel de l'Artisan ({manualTools.length})
          </h2>
          <span className="text-xs text-terroir-500 font-medium">Ustensiles indispensables</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {manualTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-xl border border-terroir-200 p-5 shadow-xs hover:border-cheese-300 transition flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif font-bold text-base text-terroir-900">{tool.name}</h3>
                  <span className="text-[10px] font-bold uppercase bg-terroir-100 text-terroir-700 px-2 py-0.5 rounded shrink-0">
                    Manuel
                  </span>
                </div>
                <p className="text-xs text-terroir-600 leading-relaxed">{tool.description}</p>
              </div>

              <div className="border-t border-terroir-100 pt-3 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-semibold">Matériau agréé : </span>
                  <span className="text-terroir-800">{tool.approvedMaterial}</span>
                </div>
                {tool.traditionalAlternative && (
                  <div className="flex items-start gap-1.5 text-amber-800 text-[11px]">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <span className="font-semibold">Alternative patrimoniale : </span>
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
        <div className="flex items-center justify-between border-b border-terroir-200 pb-2">
          <h2 className="font-serif text-xl font-bold text-terroir-900">
            2. Équipement Fixe & Installations d'Atelier ({workshopEquipment.length})
          </h2>
          <span className="text-xs text-terroir-500 font-medium">Cuves, presses et hâloirs</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workshopEquipment.map((eq) => (
            <div
              key={eq.id}
              className="bg-white rounded-xl border border-terroir-200 p-5 shadow-xs hover:border-cheese-300 transition flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif font-bold text-base text-terroir-900">{eq.name}</h3>
                  <span className="text-[10px] font-bold uppercase bg-cheese-100 text-cheese-900 px-2 py-0.5 rounded shrink-0">
                    Atelier
                  </span>
                </div>
                <p className="text-xs text-terroir-600 leading-relaxed">{eq.description}</p>
              </div>

              <div className="border-t border-terroir-100 pt-3 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-semibold">Spécification : </span>
                  <span className="text-terroir-800">{eq.approvedMaterial}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
