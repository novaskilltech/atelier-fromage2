"use client";

import { useState } from "react";
import { CheeseMethod } from "@/types";
import { Scale, RefreshCw, Video, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ScaledYieldCalculatorProps {
  recipe: CheeseMethod;
}

export default function ScaledYieldCalculator({ recipe }: ScaledYieldCalculatorProps) {
  const [liters, setLiters] = useState<number>(recipe.referenceVolumeLiters);

  const ratio = liters / recipe.referenceVolumeLiters;
  const scaledYield = Math.round(recipe.expectedYieldKg * ratio * 10) / 10;

  const presets = [20, 30, 50, 80, 100, 150, 200].filter(
    (val) => val >= recipe.minVolumeLiters && val <= recipe.maxVolumeLiters
  );

  return (
    <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-700" />
            Calculateur de Litrage & Rendement Atelier
          </h4>
          <p className="text-xs text-stone-700 mt-0.5 font-medium">
            Ajustez le volume de lait cru pour recalculer instantanément les doses et la masse de fromage attendue.
          </p>
        </div>

        {/* Scaled Yield Result Box */}
        <div className="bg-white border border-amber-300 rounded-xl px-4 py-2 text-right shadow-xs shrink-0">
          <div className="text-[11px] text-stone-600 uppercase tracking-wider font-bold">Rendement estimé</div>
          <div className="text-xl font-serif font-bold text-amber-800">
            ~{scaledYield} kg <span className="text-xs font-sans text-stone-700">({liters} L)</span>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={recipe.minVolumeLiters}
            max={recipe.maxVolumeLiters}
            step={5}
            value={liters}
            onChange={(e) => setLiters(Number(e.target.value))}
            className="w-full accent-amber-600 cursor-pointer h-2 bg-amber-200 rounded-lg"
          />
          <span className="font-mono text-sm font-bold bg-white px-3 py-1.5 rounded-lg border border-amber-300 text-stone-900 shrink-0 shadow-xs">
            {liters} Litres
          </span>
        </div>

        {/* Quick Preset Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-stone-700 font-bold">Volumes types :</span>
          {presets.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setLiters(val)}
              className={`text-xs px-3 py-1.5 rounded-lg transition font-medium ${
                liters === val
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-800 border border-stone-300 hover:bg-stone-100"
              }`}
            >
              {val} L
            </button>
          ))}
          {liters !== recipe.referenceVolumeLiters && (
            <button
              type="button"
              onClick={() => setLiters(recipe.referenceVolumeLiters)}
              className="text-xs text-amber-900 hover:text-amber-950 flex items-center gap-1 ml-auto font-bold underline"
            >
              <RefreshCw className="w-3 h-3" />
              Réinitialiser ({recipe.referenceVolumeLiters} L)
            </button>
          )}
        </div>
      </div>

      {/* Dynamically Scaled Ingredients */}
      <div className="border-t border-amber-200 pt-4">
        <h5 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
          Ingrédients adaptés pour {liters} L de cuve
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {recipe.ingredients.map((ing, idx) => {
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-xl p-3 flex items-center justify-between text-xs shadow-2xs"
              >
                <div>
                  <span className="font-bold text-stone-900">{ing.name}</span>
                  {ing.notes && <span className="block text-[11px] text-stone-600 mt-0.5">{ing.notes}</span>}
                </div>
                <span className="font-mono font-bold text-amber-900 shrink-0 ml-3 text-xs bg-amber-50 px-2 py-1 rounded border border-amber-200">
                  {idx === 0
                    ? `${liters} Litres`
                    : ing.quantity.includes("Litres") || ing.quantity.includes("L")
                    ? `${Math.round(parseFloat(ing.quantity) * ratio * 10) / 10} L`
                    : ing.quantity.includes("mL")
                    ? `${Math.round(parseFloat(ing.quantity) * ratio * 10) / 10} mL`
                    : ing.quantity.includes("g")
                    ? `${Math.round(parseFloat(ing.quantity) * ratio)} g`
                    : ing.quantity}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Callout to Idele Yield Video */}
      <div className="p-3.5 bg-white border border-amber-300 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs shadow-2xs">
        <div className="flex items-center gap-2 text-stone-900 font-medium">
          <Video className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong className="font-bold">Tuto Idele :</strong> Comment calibrer vos moules à l'avance selon le rendement fromager ?
          </span>
        </div>
        <Link
          href="/astuces"
          className="font-bold text-amber-900 hover:text-amber-950 underline flex items-center gap-1 shrink-0"
        >
          <span>Voir la vidéo Idele</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
