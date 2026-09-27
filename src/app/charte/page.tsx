import { Sparkles, CheckCircle2, XCircle, ShieldCheck } from "lucide-react";

export default function ChartePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-terroir-200 p-6 sm:p-10 shadow-xs space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cheese-700 bg-cheese-50 px-3 py-1 rounded-full border border-cheese-200">
          <Sparkles className="w-3.5 h-3.5" />
          Charte Fondatrice
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-terroir-900 leading-tight">
          La Charte 100% Artisanal & Zéro Industriel
        </h1>
        <p className="text-sm sm:text-base text-terroir-600 leading-relaxed font-sans">
          Cette charte définit les critères non négociables pour qu'une méthode de fabrication soit
          référencée et transmise sur la plateforme. Elle protège l'authenticité des savoir-faire paysans
          et garantit l'absence totale de dérives agro-industrielles.
        </p>
      </div>

      {/* The 5 Pillars */}
      <div className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-terroir-900">
          Les 5 Piliers de l'Artisanat Fromager
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-terroir-200 rounded-xl p-5 shadow-xs space-y-2">
            <div className="text-xs font-bold text-cheese-700 uppercase tracking-wider">Pilier 1</div>
            <h3 className="font-serif font-bold text-base text-terroir-900">
              Échelle Réelle d'Atelier (20 à 200 Litres)
            </h3>
            <p className="text-xs text-terroir-600 leading-relaxed">
              Toutes les recettes sont calibrées pour des cuves artisanales manipulables par une ou deux personnes,
              sans automatisation lourde. Idéal pour fermes pastorales et micro-fromageries urbaines.
            </p>
          </div>

          <div className="bg-white border border-terroir-200 rounded-xl p-5 shadow-xs space-y-2">
            <div className="text-xs font-bold text-cheese-700 uppercase tracking-wider">Pilier 2</div>
            <h3 className="font-serif font-bold text-base text-terroir-900">
              Priorité Absolue au Lait Cru Entier
            </h3>
            <p className="text-xs text-terroir-600 leading-relaxed">
              Le lait est travaillé dans son intégrité biologique et saisonnière, sans homogénéisation mécanique ni
              standardisation industrielle des taux de matière grasse ou de protéines.
            </p>
          </div>

          <div className="bg-white border border-terroir-200 rounded-xl p-5 shadow-xs space-y-2">
            <div className="text-xs font-bold text-cheese-700 uppercase tracking-wider">Pilier 3</div>
            <h3 className="font-serif font-bold text-base text-terroir-900">
              Intrants Nobles & Coagulants Naturels
            </h3>
            <p className="text-xs text-terroir-600 leading-relaxed">
              Usage exclusif de présures naturelles animales issues de caillettes de jeunes ruminants ou de coagulants végétaux
              historiques (fleur de chardon sauvage, gaillet). Exclusion des enzymes issues d'organismes génétiquement modifiés (OGM).
            </p>
          </div>

          <div className="bg-white border border-terroir-200 rounded-xl p-5 shadow-xs space-y-2">
            <div className="text-xs font-bold text-cheese-700 uppercase tracking-wider">Pilier 4</div>
            <h3 className="font-serif font-bold text-base text-terroir-900">
              Matériaux Vivants & Nobles au Contact
            </h3>
            <p className="text-xs text-terroir-600 leading-relaxed">
              Travail en chaudrons cuivre ou cuves inox alimentaire, toiles d'égouttage en lin ou coton écru naturel non teinté,
              et affinage sur planches d'épicéa brut de scierie non traité.
            </p>
          </div>

          <div className="bg-white border border-terroir-200 rounded-xl p-5 shadow-xs space-y-2 md:col-span-2">
            <div className="text-xs font-bold text-cheese-700 uppercase tracking-wider">Pilier 5</div>
            <h3 className="font-serif font-bold text-base text-terroir-900">
              Le Primat du Geste Manuel et des Repères Sensoriels
            </h3>
            <p className="text-xs text-terroir-600 leading-relaxed">
              Découpe au tranche-caillé manuel, moulage délicat à la louche, surveillance tactile de la synérèse et
              soins de croûte personnalisés (morgeage, retournements, brossage doux).
            </p>
          </div>
        </div>
      </div>

      {/* Comparison: Artisanal vs Industriel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Pratiques Autorisées */}
        <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-6 space-y-3">
          <h3 className="font-serif font-bold text-base text-emerald-950 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Pratiques Artisanales Autorisées
          </h3>
          <ul className="space-y-2 text-xs text-emerald-900 leading-relaxed">
            <li>✓ Coagulation spontanée au petit-lait indigène (levain de sérum).</li>
            <li>✓ Salage manuel au sel de mer pur non raffiné (sans ferrocyanure E535).</li>
            <li>✓ Croûte naturelle fleurie, morgée ou frottée à l'huile d'olive ou à la bière de terroir.</li>
            <li>✓ Pressage progressif gravitaire ou à levier mécanique.</li>
            <li>✓ Respect du rythme biologique de la lactation des bêtes.</li>
          </ul>
        </div>

        {/* Pratiques Bannies */}
        <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-6 space-y-3">
          <h3 className="font-serif font-bold text-base text-rose-950 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-rose-600" />
            Pratiques Industrielles Strictement Bannies
          </h3>
          <ul className="space-y-2 text-xs text-rose-900 leading-relaxed">
            <li>✗ Conservateurs et fongicides chimiques de surface (natamycine E235).</li>
            <li>✗ Colorants artificiels pour teinter les croûtes ou la pâte.</li>
            <li>✗ Enrobage à la cire paraffine plastique imperméable.</li>
            <li>✗ Chymosine de recombinaison génétique (OGM).</li>
            <li>✗ Centrifugation brutale du caillé ou égouttage sous vide forcé.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
