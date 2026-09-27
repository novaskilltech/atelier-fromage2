"use client";

import { useState, useEffect } from "react";
import { CheeseMethod, StepItem } from "@/types";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Printer,
  X,
  AlertTriangle,
  Eye,
  Thermometer,
} from "lucide-react";

interface WorkshopModeProps {
  recipe: CheeseMethod;
  onClose: () => void;
}

export default function WorkshopMode({ recipe, onClose }: WorkshopModeProps) {
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const step: StepItem = recipe.steps[currentStepIdx];

  // Timer state
  const initialSeconds = (step.durationMinutes || 0) * 60;
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Reset timer on step change
  useEffect(() => {
    setTimeLeft((step.durationMinutes || 0) * 60);
    setIsRunning(false);
  }, [currentStepIdx, step.durationMinutes]);

  // Timer interval
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  const toggleStepCompleted = (idx: number) => {
    setCompletedSteps((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-terroir-950 text-white flex flex-col overflow-y-auto">
      {/* Top Workshop Header */}
      <header className="bg-terroir-900 border-b border-terroir-800 px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">👨‍🍳</span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif font-bold text-base sm:text-lg text-white">
                {recipe.name}
              </h2>
              <span className="bg-cheese-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                Mode Atelier
              </span>
            </div>
            <p className="text-xs text-terroir-400">
              Étape {currentStepIdx + 1} sur {recipe.steps.length} • {recipe.country} ({recipe.region})
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-terroir-800 hover:bg-terroir-700 text-xs font-semibold text-terroir-200 transition"
          >
            <Printer className="w-4 h-4 text-cheese-400" />
            Imprimer Fiche
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-terroir-800 hover:bg-terroir-700 text-terroir-300 hover:text-white transition"
            aria-label="Quitter le mode atelier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Progress Step Bar */}
      <div className="bg-terroir-900/60 border-b border-terroir-800/80 px-4 py-2 shrink-0 overflow-x-auto">
        <div className="flex items-center space-x-2 min-w-max">
          {recipe.steps.map((s, idx) => (
            <button
              key={s.stepNumber}
              type="button"
              onClick={() => setCurrentStepIdx(idx)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
                currentStepIdx === idx
                  ? "bg-cheese-500 text-white font-bold shadow"
                  : completedSteps.includes(idx)
                  ? "bg-emerald-950 text-emerald-300 border border-emerald-700/60"
                  : "bg-terroir-800 text-terroir-400 hover:bg-terroir-700"
              }`}
            >
              {completedSteps.includes(idx) ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <span>#{idx + 1}</span>
              )}
              <span className="truncate max-w-[130px]">{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-8 flex flex-col justify-between">
        <div className="space-y-6">
          {/* Phase Badge & Step Title */}
          <div>
            <div className="inline-block px-3 py-1 rounded text-xs font-bold tracking-wider uppercase bg-cheese-900/60 text-cheese-300 border border-cheese-700 mb-2">
              Phase : {step.phase}
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {step.stepNumber}. {step.title}
            </h1>
          </div>

          {/* Quick Technical Badges (T°, pH, Durée) */}
          <div className="flex flex-wrap gap-3">
            {step.temperatureC && (
              <div className="flex items-center gap-1.5 bg-terroir-800/90 border border-terroir-700 px-3 py-1.5 rounded-lg text-sm font-mono text-amber-300">
                <Thermometer className="w-4 h-4 text-amber-400" />
                <span className="font-bold">{step.temperatureC}°C</span>
              </div>
            )}
            {step.phTarget && (
              <div className="flex items-center gap-1.5 bg-terroir-800/90 border border-terroir-700 px-3 py-1.5 rounded-lg text-sm font-mono text-cyan-300">
                <span>pH cible :</span>
                <span className="font-bold">{step.phTarget}</span>
              </div>
            )}
            {step.durationMinutes && (
              <div className="flex items-center gap-1.5 bg-terroir-800/90 border border-terroir-700 px-3 py-1.5 rounded-lg text-sm font-mono text-cheese-300">
                <Clock className="w-4 h-4 text-cheese-400" />
                <span className="font-bold">{step.durationMinutes} min</span>
              </div>
            )}
          </div>

          {/* Step Description */}
          <div className="bg-terroir-900 border border-terroir-800 rounded-xl p-6 text-terroir-100 text-base sm:text-lg leading-relaxed font-sans shadow-inner">
            {step.description}
          </div>

          {/* Sensory Cue (Repère sensoriel paysan) */}
          <div className="bg-amber-950/40 border-l-4 border-amber-500 rounded-r-xl p-5 text-amber-200">
            <div className="flex items-center gap-2 font-bold text-sm text-amber-300 mb-1">
              <Eye className="w-4 h-4" />
              Repère sensoriel paysan (Toucher / Visuel)
            </div>
            <p className="text-sm sm:text-base leading-relaxed">{step.sensoryCue}</p>
          </div>

          {/* Critical Control Point (HACCP) */}
          {step.criticalControlPoint && (
            <div className="bg-rose-950/40 border-l-4 border-rose-500 rounded-r-xl p-5 text-rose-200">
              <div className="flex items-center gap-2 font-bold text-sm text-rose-300 mb-1">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                Point de Maîtrise Sanitaire Critique (HACCP)
              </div>
              <p className="text-sm sm:text-base leading-relaxed">{step.criticalControlPoint}</p>
            </div>
          )}

          {/* Interactive Workshop Timer (if duration is present) */}
          {step.durationMinutes && step.durationMinutes > 0 && (
            <div className="bg-terroir-900 border border-terroir-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-cheese-400" />
                <div>
                  <div className="text-xs text-terroir-400 uppercase tracking-wider font-semibold">
                    Chronomètre d'étape
                  </div>
                  <div
                    className={`font-mono text-3xl font-bold ${
                      timeLeft === 0
                        ? "text-rose-400 animate-pulse"
                        : isRunning
                        ? "text-emerald-400"
                        : "text-white"
                    }`}
                  >
                    {formatTime(timeLeft)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsRunning(!isRunning)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition shadow ${
                    isRunning
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}
                >
                  {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isRunning ? "Pause" : "Démarrer"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsRunning(false);
                    setTimeLeft((step.durationMinutes || 0) * 60);
                  }}
                  className="p-2 rounded-lg bg-terroir-800 hover:bg-terroir-700 text-terroir-300 hover:text-white transition"
                  title="Réinitialiser le chrono"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="border-t border-terroir-800 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <button
            type="button"
            onClick={() => setCurrentStepIdx((prev) => Math.max(0, prev - 1))}
            disabled={currentStepIdx === 0}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-terroir-800 hover:bg-terroir-700 disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-sm flex items-center justify-center gap-2 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            Étape précédente
          </button>

          <button
            type="button"
            onClick={() => toggleStepCompleted(currentStepIdx)}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition shadow ${
              completedSteps.includes(currentStepIdx)
                ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                : "bg-terroir-800 hover:bg-terroir-700 text-terroir-200 border border-terroir-700"
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            {completedSteps.includes(currentStepIdx) ? "Étape validée !" : "Marquer comme fait"}
          </button>

          <button
            type="button"
            onClick={() => setCurrentStepIdx((prev) => Math.min(recipe.steps.length - 1, prev + 1))}
            disabled={currentStepIdx === recipe.steps.length - 1}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cheese-500 hover:bg-cheese-600 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-sm text-white flex items-center justify-center gap-2 transition shadow"
          >
            Étape suivante
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
