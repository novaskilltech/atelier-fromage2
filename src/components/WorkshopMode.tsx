"use client";

import { useState, useEffect } from "react";
import { CheeseMethod, StepItem } from "@/types";
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
  AlertTriangle,
  Printer,
  Sparkles,
} from "lucide-react";

interface WorkshopModeProps {
  recipe: CheeseMethod;
  onClose: () => void;
}

export default function WorkshopMode({ recipe, onClose }: WorkshopModeProps) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Step Timer State
  const currentStep = recipe.steps[currentStepIdx];
  const durationSeconds = (currentStep.durationMinutes || 0) * 60;
  const [timeLeft, setTimeLeft] = useState<number>(durationSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Synchronize timer when step changes
  useEffect(() => {
    setTimeLeft((recipe.steps[currentStepIdx].durationMinutes || 0) * 60);
    setIsTimerRunning(false);
  }, [currentStepIdx, recipe.steps]);

  // Interval countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      try {
        const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.6);
      } catch {
        // AudioContext not available or blocked
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const toggleStepCompleted = (idx: number) => {
    if (completedSteps.includes(idx)) {
      setCompletedSteps(completedSteps.filter((i) => i !== idx));
    } else {
      setCompletedSteps([...completedSteps, idx]);
    }
  };

  const formatTimer = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{ backgroundColor: "#140f0c" }}
      className="fixed inset-0 z-50 text-white flex flex-col overflow-y-auto"
    >
      {/* Top Workshop Header */}
      <header
        style={{ backgroundColor: "#1e1713" }}
        className="border-b border-stone-800 px-4 py-3.5 flex items-center justify-between shrink-0 shadow-md"
      >
        <div className="flex items-center space-x-3">
          <span className="text-2xl">👨‍🍳</span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif font-bold text-base sm:text-lg text-white">
                {recipe.name}
              </h2>
              <span className="bg-amber-400 text-stone-950 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                Mode Atelier
              </span>
            </div>
            <p className="text-xs text-stone-300 font-medium">
              Étape {currentStepIdx + 1} sur {recipe.steps.length} • {recipe.country} ({recipe.region})
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-bold text-stone-200 border border-stone-700 transition"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            Imprimer Fiche
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 transition"
            aria-label="Quitter le mode atelier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Progress Step Bar */}
      <div
        style={{ backgroundColor: "#1c1510" }}
        className="border-b border-stone-800 px-4 py-2.5 shrink-0 overflow-x-auto"
      >
        <div className="flex items-center space-x-2 min-w-max">
          {recipe.steps.map((s, idx) => (
            <button
              key={s.stepNumber}
              type="button"
              onClick={() => setCurrentStepIdx(idx)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                currentStepIdx === idx
                  ? "bg-amber-400 text-stone-950 font-extrabold shadow-md"
                  : completedSteps.includes(idx)
                  ? "bg-emerald-950 text-emerald-200 border border-emerald-600 font-bold"
                  : "bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700"
              }`}
            >
              {completedSteps.includes(idx) ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <span className="font-bold">#{idx + 1}</span>
              )}
              <span className="truncate max-w-[140px]">{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-8 flex flex-col justify-between">
        <div className="space-y-6">
          {/* Phase Badge & Step Title */}
          <div className="space-y-2 border-b border-stone-800 pb-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-600/50">
                Phase {currentStep.phase}
              </span>
              <div className="flex items-center gap-2">
                {currentStep.temperatureC && (
                  <span className="text-xs font-mono font-bold bg-stone-800 text-amber-300 border border-stone-700 px-2.5 py-1 rounded-md">
                    🌡️ {currentStep.temperatureC}°C
                  </span>
                )}
                {currentStep.phTarget && (
                  <span className="text-xs font-mono font-bold bg-stone-800 text-cyan-300 border border-stone-700 px-2.5 py-1 rounded-md">
                    🧪 pH {currentStep.phTarget}
                  </span>
                )}
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white pt-1">
              Étape {currentStep.stepNumber} : {currentStep.title}
            </h3>
          </div>

          {/* Step Description */}
          <div className="text-sm sm:text-base text-stone-100 leading-relaxed font-sans bg-[#221a14] border border-stone-700/80 p-6 rounded-2xl shadow-md">
            {currentStep.description}
          </div>

          {/* Interactive Countdown Timer (if duration specified) */}
          {durationSeconds > 0 && (
            <div className="bg-[#261d16] border border-amber-600/40 rounded-2xl p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-amber-950 text-amber-400 border border-amber-700/60">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs text-stone-300 uppercase tracking-wider font-bold block">
                    Minuteur d'Atelier ({currentStep.durationMinutes} min)
                  </span>
                  <div
                    className={`font-mono text-4xl sm:text-5xl font-extrabold tracking-tight ${
                      timeLeft === 0
                        ? "text-emerald-400 animate-pulse"
                        : isTimerRunning
                        ? "text-amber-400"
                        : "text-white"
                    }`}
                  >
                    {formatTimer(timeLeft)}
                  </div>
                </div>
              </div>

              {/* Timer Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`px-5 py-3 rounded-xl font-extrabold text-sm flex items-center gap-2 shadow-lg transition ${
                    isTimerRunning
                      ? "bg-amber-600 hover:bg-amber-500 text-white"
                      : "bg-amber-500 hover:bg-amber-400 text-stone-950"
                  }`}
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      Démarrer
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsTimerRunning(false);
                    setTimeLeft(durationSeconds);
                  }}
                  className="p-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 transition"
                  title="Réinitialiser le chrono"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Sensory Cue */}
          <div className="bg-amber-950/80 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-amber-100 shadow-xs">
            <span className="font-extrabold text-amber-300 block mb-1">
              👁️ Repère Sensoriel & Tour de Main de l'Artisan :
            </span>
            {currentStep.sensoryCue}
          </div>

          {/* HACCP Alert (if defined) */}
          {currentStep.criticalControlPoint && (
            <div className="bg-rose-950/80 border-l-4 border-rose-500 p-4 rounded-r-xl text-xs sm:text-sm text-rose-100 shadow-xs flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-rose-300 block mb-0.5">
                  Point Critique Sanitaire (HACCP) :
                </span>
                {currentStep.criticalControlPoint}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="border-t border-stone-800 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setCurrentStepIdx((prev) => Math.max(0, prev - 1))}
            disabled={currentStepIdx === 0}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-sm text-stone-200 border border-stone-700 flex items-center justify-center gap-2 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            Étape précédente
          </button>

          <button
            type="button"
            onClick={() => toggleStepCompleted(currentStepIdx)}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition shadow-md ${
              completedSteps.includes(currentStepIdx)
                ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                : "bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-700"
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            {completedSteps.includes(currentStepIdx) ? "Étape validée !" : "Marquer comme fait"}
          </button>

          <button
            type="button"
            onClick={() => setCurrentStepIdx((prev) => Math.min(recipe.steps.length - 1, prev + 1))}
            disabled={currentStepIdx === recipe.steps.length - 1}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed font-extrabold text-sm text-stone-950 flex items-center justify-center gap-2 transition shadow-lg"
          >
            Étape suivante
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
