"use client";

import { useState } from "react";
import { VIDEO_TIPS, WRITTEN_TIPS, VideoTip } from "@/data/tips";
import { Video, Lightbulb, CheckCircle2, Play, Sparkles, Clock, AlertTriangle, BookmarkCheck } from "lucide-react";

const CATEGORIES = [
  "Tous",
  "Salage",
  "Moulage",
  "Rendement & Caillé",
  "Affinage",
];

export default function AstucesPage() {
  const [selectedCat, setSelectedCat] = useState("Tous");

  const filteredVideos =
    selectedCat === "Tous"
      ? VIDEO_TIPS
      : VIDEO_TIPS.filter((v) => v.category === selectedCat);

  const filteredWrittenTips =
    selectedCat === "Tous"
      ? WRITTEN_TIPS
      : WRITTEN_TIPS.filter((t) => t.category === selectedCat);

  const featuredVideo = VIDEO_TIPS.find((v) => v.isFeatured) || VIDEO_TIPS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-terroir-200 p-6 sm:p-10 shadow-xs space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cheese-700 bg-cheese-50 px-3 py-1 rounded-full border border-cheese-200">
          <Lightbulb className="w-3.5 h-3.5" />
          Tours de Main & Gestes d'Atelier
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-terroir-900 leading-tight">
          Astuces Pratiques & Vidéos Techniques Fromagères
        </h1>
        <p className="text-sm sm:text-base text-terroir-600 max-w-3xl leading-relaxed font-sans">
          Sélection rigoureuse de démonstrations vidéo professionnelles (Institut de l'Élevage - Idele,
          centres de formation) et fiches astuces pour maîtriser les gestes fondamentaux : salage au sel sec,
          gestion de la saumure, cinétique de moulage et soins d'affinage.
        </p>
      </div>

      {/* Featured Video Spotlight : Le Salage au Sel Sec (Vidéo Partagée) */}
      <section className="bg-gradient-to-br from-terroir-900 to-terroir-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-terroir-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-terroir-800 pb-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cheese-400">
            <Sparkles className="w-4 h-4" />
            Vidéo Recommandée • Méthode Essentielle de Salage
          </div>
          <span className="text-xs bg-cheese-600/30 text-cheese-300 border border-cheese-500/40 px-2.5 py-0.5 rounded font-mono">
            {featuredVideo.channel}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* YouTube Video Player Embed */}
          <div className="lg:col-span-7 aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-terroir-700">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${featuredVideo.youtubeId}`}
              title={featuredVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          {/* Video Description & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
              {featuredVideo.title}
            </h2>
            <p className="text-xs text-terroir-300 leading-relaxed">
              {featuredVideo.description}
            </p>

            <div className="bg-terroir-850/80 border border-terroir-750 rounded-xl p-4 space-y-2.5 text-xs">
              <span className="font-bold text-cheese-400 uppercase tracking-wider text-[11px] block">
                Points clés à retenir pour votre atelier :
              </span>
              <ul className="space-y-2">
                {featuredVideo.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-terroir-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-terroir-200">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              selectedCat === cat
                ? "bg-cheese-600 text-white shadow-xs"
                : "bg-white text-terroir-700 border border-terroir-200 hover:bg-cheese-50"
            }`}
          >
            {cat === "Tous" ? "Toutes les thématiques" : cat}
          </button>
        ))}
      </div>

      {/* Video Gallery Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-terroir-900 flex items-center gap-2">
            <Video className="w-5 h-5 text-cheese-600" />
            Démonstrations Vidéo d'Atelier ({filteredVideos.length})
          </h2>
          <span className="text-xs text-terroir-500 font-medium">
            Sources : Institut de l'Élevage (Idele) & Centres Fromagers
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl border border-terroir-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              {/* Embedded Player */}
              <div className="aspect-video bg-black relative">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Video Info */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] gap-2">
                    <span className="font-semibold text-terroir-500">{video.channel}</span>
                    <span className="bg-terroir-100 text-terroir-800 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3 text-terroir-600" />
                      {video.duration}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-terroir-900 leading-snug">
                    {video.title}
                  </h3>

                  <p className="text-xs text-terroir-600 leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="border-t border-terroir-100 pt-3 space-y-1.5 text-xs bg-terroir-50/50 -mx-5 -mb-5 p-4 rounded-b-xl">
                  <span className="font-bold text-terroir-800 text-[11px] block">
                    Tour de main clé :
                  </span>
                  <p className="text-terroir-700 text-[11px] leading-snug">
                    {video.keyTakeaways[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Written Tips & Golden Rules Section */}
      <section className="space-y-6 pt-4 border-t border-terroir-200">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-terroir-900 flex items-center gap-2">
            <BookmarkCheck className="w-5 h-5 text-cheese-600" />
            Fiches Astuces & Règles d'Or de l'Artisan
          </h2>
          <span className="text-xs text-terroir-500 font-medium">Repères techniques d'atelier</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredWrittenTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-xl border border-terroir-200 p-6 shadow-xs hover:border-cheese-300 transition space-y-3"
            >
              <div className="flex items-center justify-between gap-2 border-b border-terroir-100 pb-2">
                <h3 className="font-serif font-bold text-base text-terroir-900">{tip.title}</h3>
                <span className="text-[10px] font-bold uppercase bg-cheese-50 text-cheese-800 border border-cheese-200 px-2 py-0.5 rounded shrink-0">
                  {tip.category}
                </span>
              </div>

              <p className="text-xs text-terroir-700 leading-relaxed">{tip.content}</p>

              <div className="bg-amber-50/80 border-l-3 border-amber-500 p-3 rounded-r-lg text-xs text-amber-950 font-medium">
                <span className="font-bold block text-[10px] uppercase text-amber-800 mb-0.5">
                  Règle empirique d'atelier
                </span>
                {tip.ruleOfThumb}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hygiene Alert Reminder */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3 text-xs text-amber-900">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Rappel Sanitaire :</strong> Le sel joue un rôle bactériostatique déterminant pour empêcher
          la prolifération des germes indésirables (notamment <em>Staphylococcus aureus</em> et coliformes).
          Ne réduisez jamais arbitrairement la dose de sel sous prétexte de saveur sans valider la conformité microbiologique de votre lot.
        </p>
      </div>
    </div>
  );
}
