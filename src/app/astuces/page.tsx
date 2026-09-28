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
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-100 border border-amber-200 px-3.5 py-1.5 rounded-full">
          <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
          <span>Tours de Main & Gestes d'Atelier • Institut de l'Élevage (Idele)</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
          Vidéos Techniques & Astuces Pratiques Fromagères
        </h1>
        <p className="text-sm sm:text-base text-stone-700 max-w-3xl leading-relaxed font-sans font-normal">
          Accédez aux démonstrations vidéo professionnelles du réseau <strong>Idele / Cap'Pradel</strong> :
          salage au sel sec, calcul du rendement avant moulage, création de labo fromager économique et soins d'affinage.
        </p>

        {/* Quick links to user suggested videos */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100">
          <span className="text-xs font-bold text-stone-800">Vidéos d'Atelier (Idele) :</span>
          <button
            type="button"
            onClick={() => handleSelectVideo("vid-installation-atelier")}
            className={`text-xs px-3.5 py-1.5 rounded-xl border transition flex items-center gap-1.5 ${
              activeVideoId === "vid-installation-atelier"
                ? "bg-amber-500 text-stone-950 border-amber-500 font-extrabold shadow-sm"
                : "bg-stone-50 text-stone-800 border-stone-300 font-medium hover:bg-stone-100"
            }`}
          >
            <Play className="w-3 h-3 fill-current" />
            <span>1. Labo à moindre coût (ch4HK61JnxI)</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectVideo("vid-moulage-individuel")}
            className={`text-xs px-3.5 py-1.5 rounded-xl border transition flex items-center gap-1.5 ${
              activeVideoId === "vid-moulage-individuel"
                ? "bg-amber-500 text-stone-950 border-amber-500 font-extrabold shadow-sm"
                : "bg-stone-50 text-stone-800 border-stone-300 font-medium hover:bg-stone-100"
            }`}
          >
            <Play className="w-3 h-3 fill-current" />
            <span>2. Moulage individuel (IHRfFWtdy3M)</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectVideo("vid-salage-idele")}
            className={`text-xs px-3.5 py-1.5 rounded-xl border transition flex items-center gap-1.5 ${
              activeVideoId === "vid-salage-idele"
                ? "bg-amber-500 text-stone-950 border-amber-500 font-extrabold shadow-sm"
                : "bg-stone-50 text-stone-800 border-stone-300 font-medium hover:bg-stone-100"
            }`}
          >
            <Play className="w-3 h-3 fill-current" />
            <span>3. Salage à sec (7eNphzCqSBU)</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectVideo("vid-rendement-moulage")}
            className={`text-xs px-3.5 py-1.5 rounded-xl border transition flex items-center gap-1.5 ${
              activeVideoId === "vid-rendement-moulage"
                ? "bg-amber-500 text-stone-950 border-amber-500 font-extrabold shadow-sm"
                : "bg-stone-50 text-stone-800 border-stone-300 font-medium hover:bg-stone-100"
            }`}
          >
            <Play className="w-3 h-3 fill-current" />
            <span>4. Rendement & Moules (kHEUtQGLsTE)</span>
          </button>
        </div>
      </div>

      {/* Featured Video Spotlight Player */}
      <section
        id="spotlight-player"
        style={{ backgroundColor: "#15100c" }}
        className="text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-800 space-y-6 scroll-mt-20"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Lecteur Vidéo Principal • Formation Professionnelle</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-stone-800 text-amber-300 border border-stone-700 px-3 py-1 rounded-full font-mono font-semibold">
              {activeVideo.channel}
            </span>
            <a
              href={`https://youtu.be/${activeVideo.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-200 hover:text-white flex items-center gap-1 bg-stone-800 px-3 py-1 rounded-full border border-stone-700 font-medium"
            >
              <span>Ouvrir sur YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* YouTube Video Player Embed */}
          <div className="lg:col-span-7 aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-stone-700 ring-1 ring-stone-700">
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
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950 border border-amber-600/50 px-3 py-0.5 rounded-full">
                Thématique : {activeVideo.category} • Durée : {activeVideo.duration}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug mt-2">
                {activeVideo.title}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans font-medium">
              {activeVideo.description}
            </p>

            <div className="bg-[#241c16] border border-stone-700 rounded-2xl p-5 space-y-3 text-xs shadow-md">
              <span className="font-bold text-amber-300 uppercase tracking-wider text-[11px] block">
                Points clés à appliquer dans votre atelier :
              </span>
              <ul className="space-y-2.5">
                {activeVideo.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-stone-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-200">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              selectedCat === cat
                ? "bg-stone-900 text-white font-bold shadow-sm"
                : "bg-white text-stone-800 border border-stone-300 hover:bg-stone-100 font-medium"
            }`}
          >
            {cat === "Tous" ? "Toutes les thématiques" : cat}
          </button>
        ))}
      </div>

      {/* Video Gallery Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
            <Video className="w-5 h-5 text-amber-600" />
            Vidéothèque Technique d'Atelier ({filteredVideos.length})
          </h2>
          <span className="text-xs text-stone-600 font-medium">
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
                className={`bg-white rounded-2xl border cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group ${
                  isCurrent ? "border-amber-500 ring-2 ring-amber-400/40" : "border-stone-200 hover:border-stone-400"
                }`}
              >
                {/* Thumbnail Preview Area */}
                <div className="aspect-video bg-stone-900 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors" />
                  <div className="absolute w-12 h-12 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-stone-950/90 text-white text-[11px] font-mono px-2 py-0.5 rounded font-bold">
                    {video.duration}
                  </div>
                  {isCurrent && (
                    <div className="absolute top-2 left-2 bg-amber-500 text-stone-950 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow">
                      En cours de lecture
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] gap-2">
                      <span className="font-semibold text-stone-600">{video.channel}</span>
                      <span className="bg-amber-100 text-amber-950 font-bold px-2 py-0.5 rounded border border-amber-300">
                        {video.category}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-stone-900 leading-snug group-hover:text-amber-800 transition">
                      {video.title}
                    </h3>

                    <p className="text-xs text-stone-700 leading-relaxed line-clamp-2 font-normal">
                      {video.description}
                    </p>
                  </div>

                  {/* Button to Play */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
      <section className="space-y-6 pt-6 border-t border-stone-200">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
            <BookmarkCheck className="w-5 h-5 text-amber-600" />
            Fiches Astuces & Règles d'Or de l'Artisan
          </h2>
          <span className="text-xs text-stone-600 font-medium">Repères techniques d'atelier</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredWrittenTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:border-amber-300 transition space-y-3"
            >
              <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2">
                <h3 className="font-serif font-bold text-base text-stone-900">{tip.title}</h3>
                <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-950 border border-amber-300 px-2 py-0.5 rounded shrink-0">
                  {tip.category}
                </span>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed font-normal">{tip.content}</p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-xl text-xs text-amber-950 font-medium">
                <span className="font-bold block text-[10px] uppercase text-amber-900 mb-0.5">
                  Règle empirique d'atelier
                </span>
                {tip.ruleOfThumb}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hygiene Alert Reminder */}
      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex items-start gap-3 text-xs text-amber-950">
        <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Rappel Sanitaire & HACCP :</strong> Le sel joue un rôle bactériostatique déterminant pour empêcher
          la prolifération des germes indésirables (notamment <em>Staphylococcus aureus</em> et coliformes).
          Ne réduisez jamais arbitrairement la dose de sel sous prétexte de saveur sans valider la conformité microbiologique de votre lot.
        </p>
      </div>
    </div>
  );
}
