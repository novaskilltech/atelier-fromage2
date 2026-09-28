"use client";

import { useState } from "react";
import { VIDEO_TIPS, WRITTEN_TIPS, VideoTip } from "@/data/tips";
import {
  Video,
  Lightbulb,
  CheckCircle2,
  Play,
  Sparkles,
  Clock,
  AlertTriangle,
  BookmarkCheck,
  Scale,
  Flame,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  "Tous",
  "Salage",
  "Moulage",
  "Rendement & Caillé",
  "Affinage",
  "Installation & Atelier",
];

export default function AstucesPage() {
  const [selectedCat, setSelectedCat] = useState("Tous");
  const [activeVideoId, setActiveVideoId] = useState<string>("vid-installation-atelier");

  const filteredVideos =
    selectedCat === "Tous"
      ? VIDEO_TIPS
      : VIDEO_TIPS.filter((v) => v.category === selectedCat);

  const filteredWrittenTips =
    selectedCat === "Tous"
      ? WRITTEN_TIPS
      : WRITTEN_TIPS.filter((t) => t.category === selectedCat);

  const activeVideo = VIDEO_TIPS.find((v) => v.id === activeVideoId) || VIDEO_TIPS[0];

  const handleSelectVideo = (videoId: string) => {
    setActiveVideoId(videoId);
    const playerElement = document.getElementById("spotlight-player");
    if (playerElement) {
      playerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-terroir-200 p-6 sm:p-10 shadow-xs space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-cheese-700 bg-cheese-50 px-3.5 py-1.5 rounded-full border border-cheese-200">
          <Lightbulb className="w-3.5 h-3.5 text-cheese-600" />
          <span>Tours de Main & Gestes d'Atelier • Institut de l'Élevage (Idele)</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-terroir-900 leading-tight">
          Vidéos Techniques & Astuces Pratiques Fromagères
        </h1>
        <p className="text-sm sm:text-base text-terroir-600 max-w-3xl leading-relaxed font-sans">
          Accédez aux démonstrations vidéo professionnelles du réseau <strong>Idele / Cap'Pradel</strong> :
          salage au sel sec, calcul du rendement avant moulage, création de labo fromager économique et soins d'affinage.
        </p>

        {/* Quick links to user suggested videos */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-terroir-100">
          <span className="text-xs font-bold text-terroir-700">Vidéos d'Atelier (Idele) :</span>
          <button
            type="button"
            onClick={() => handleSelectVideo("vid-installation-atelier")}
            className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition flex items-center gap-1.5 ${
              activeVideoId === "vid-installation-atelier"
                ? "bg-cheese-600 text-white border-cheese-600 font-bold"
                : "bg-terroir-50 text-terroir-800 border-terroir-200 hover:bg-cheese-100"
            }`}
          >
            <Play className="w-3 h-3" />
            <span>1. Labo à moindre coût (ch4HK61JnxI)</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectVideo("vid-moulage-individuel")}
            className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition flex items-center gap-1.5 ${
              activeVideoId === "vid-moulage-individuel"
                ? "bg-cheese-600 text-white border-cheese-600 font-bold"
                : "bg-terroir-50 text-terroir-800 border-terroir-200 hover:bg-cheese-100"
            }`}
          >
            <Play className="w-3 h-3" />
            <span>2. Moulage individuel (IHRfFWtdy3M)</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectVideo("vid-salage-idele")}
            className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition flex items-center gap-1.5 ${
              activeVideoId === "vid-salage-idele"
                ? "bg-cheese-600 text-white border-cheese-600 font-bold"
                : "bg-terroir-50 text-terroir-800 border-terroir-200 hover:bg-cheese-100"
            }`}
          >
            <Play className="w-3 h-3" />
            <span>3. Salage à sec (7eNphzCqSBU)</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectVideo("vid-rendement-moulage")}
            className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition flex items-center gap-1.5 ${
              activeVideoId === "vid-rendement-moulage"
                ? "bg-cheese-600 text-white border-cheese-600 font-bold"
                : "bg-terroir-50 text-terroir-800 border-terroir-200 hover:bg-cheese-100"
            }`}
          >
            <Play className="w-3 h-3" />
            <span>4. Rendement & Moules (kHEUtQGLsTE)</span>
          </button>
        </div>
      </div>

      {/* Featured Video Spotlight Player */}
      <section
        id="spotlight-player"
        className="bg-gradient-to-br from-terroir-950 via-terroir-900 to-terroir-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-terroir-800 space-y-6 scroll-mt-20"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-terroir-800 pb-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cheese-300">
            <Sparkles className="w-4 h-4 text-cheese-400" />
            <span>Lecteur Vidéo Principal • Formation Professionnelle</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-cheese-600/30 text-cheese-300 border border-cheese-500/40 px-3 py-1 rounded-full font-mono">
              {activeVideo.channel}
            </span>
            <a
              href={`https://youtu.be/${activeVideo.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-terroir-300 hover:text-white flex items-center gap-1 bg-terroir-800/80 px-2.5 py-1 rounded-full border border-terroir-700"
            >
              <span>Ouvrir sur YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* YouTube Video Player Embed */}
          <div className="lg:col-span-7 aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-terroir-700 ring-1 ring-terroir-600/50">
            <iframe
              key={activeVideo.youtubeId}
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          {/* Video Description & Highlights */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-cheese-400 bg-cheese-500/20 px-2.5 py-0.5 rounded-full border border-cheese-400/30">
                Thématique : {activeVideo.category} • Durée : {activeVideo.duration}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug mt-2">
                {activeVideo.title}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-terroir-200 leading-relaxed font-sans">
              {activeVideo.description}
            </p>

            <div className="bg-terroir-850/90 border border-terroir-750 rounded-2xl p-5 space-y-3 text-xs">
              <span className="font-bold text-cheese-300 uppercase tracking-wider text-[11px] block">
                Points clés à appliquer dans votre atelier :
              </span>
              <ul className="space-y-2.5">
                {activeVideo.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-terroir-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
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
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
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
            Vidéothèque Technique d'Atelier ({filteredVideos.length})
          </h2>
          <span className="text-xs text-terroir-500 font-medium">
            Cliquez sur une vidéo pour la charger dans le lecteur principal
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => {
            const isCurrent = video.id === activeVideoId;
            return (
              <div
                key={video.id}
                onClick={() => handleSelectVideo(video.id)}
                className={`bg-white rounded-2xl border cursor-pointer overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between group ${
                  isCurrent ? "border-cheese-500 ring-2 ring-cheese-400/30" : "border-terroir-200 hover:border-cheese-300"
                }`}
              >
                {/* Thumbnail Preview Area */}
                <div className="aspect-video bg-terroir-900 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute w-12 h-12 rounded-full bg-cheese-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-mono px-2 py-0.5 rounded font-bold">
                    {video.duration}
                  </div>
                  {isCurrent && (
                    <div className="absolute top-2 left-2 bg-cheese-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                      En cours de lecture
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] gap-2">
                      <span className="font-semibold text-terroir-500">{video.channel}</span>
                      <span className="bg-cheese-50 text-cheese-800 font-bold px-2 py-0.5 rounded border border-cheese-200">
                        {video.category}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-terroir-900 leading-snug group-hover:text-cheese-700 transition">
                      {video.title}
                    </h3>

                    <p className="text-xs text-terroir-600 leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  {/* Button to Play */}
                  <div className="pt-3 border-t border-terroir-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-cheese-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>{isCurrent ? "Visionner ci-dessus" : "Charger dans le lecteur"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Written Tips & Golden Rules Section */}
      <section className="space-y-6 pt-6 border-t border-terroir-200">
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
              className="bg-white rounded-2xl border border-terroir-200 p-6 shadow-xs hover:border-cheese-300 transition space-y-3"
            >
              <div className="flex items-center justify-between gap-2 border-b border-terroir-100 pb-2">
                <h3 className="font-serif font-bold text-base text-terroir-900">{tip.title}</h3>
                <span className="text-[10px] font-bold uppercase bg-cheese-50 text-cheese-800 border border-cheese-200 px-2 py-0.5 rounded shrink-0">
                  {tip.category}
                </span>
              </div>

              <p className="text-xs text-terroir-700 leading-relaxed">{tip.content}</p>

              <div className="bg-amber-50/80 border-l-3 border-amber-500 p-3 rounded-r-xl text-xs text-amber-950 font-medium">
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
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3 text-xs text-amber-900">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Rappel Sanitaire & HACCP :</strong> Le sel joue un rôle bactériostatique déterminant pour empêcher
          la prolifération des germes indésirables (notamment <em>Staphylococcus aureus</em> et coliformes).
          Ne réduisez jamais arbitrairement la dose de sel sous prétexte de saveur sans valider la conformité microbiologique de votre lot.
        </p>
      </div>
    </div>
  );
}
