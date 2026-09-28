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
    <div className="bg-cheese-50/70 border border-cheese-200 rounded-xl p-6 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-serif font-bold text-base text-terroir-900 flex items-center gap-2">
            <Scale className="w-5 h-5 text-cheese-600" />
            Calculateur de Litrage & Rendement Atelier
          </h4>
          <p className="text-xs text-terroir-600 mt-0.5">
            Ajustez le volume de lait cru pour recalculer instantanément les doses et la masse de fromage attendue.
          </p>
        </div>

        {/* Scaled Yield Result Box */}
        <div className="bg-white border border-cheese-300 rounded-lg px-4 py-2 text-right shadow-xs shrink-0">
          <div className="text-[11px] text-terroir-500 uppercase tracking-wider font-semibold">Rendement estimé</div>
          <div className="text-xl font-serif font-bold text-cheese-700">
            ~{scaledYield} kg <span className="text-xs font-sans text-terroir-600">({liters} L)</span>
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
            className="w-full accent-cheese-600 cursor-pointer h-2 bg-cheese-200 rounded-lg"
          />
          <span className="font-mono text-sm font-bold bg-white px-3 py-1 rounded-md border border-cheese-300 text-terroir-900 shrink-0">
            {liters} Litres
          </span>
        </div>

        {/* Quick Preset Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-terroir-500 font-medium">Volumes types :</span>
          {presets.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setLiters(val)}
              className={`text-xs px-2.5 py-1 rounded-md transition font-medium ${
                liters === val
                  ? "bg-cheese-600 text-white font-bold shadow-xs"
                  : "bg-white text-terroir-700 border border-terroir-200 hover:bg-cheese-100"
              }`}
            >
              {val} L
            </button>
          ))}
          {liters !== recipe.referenceVolumeLiters && (
            <button
              type="button"
              onClick={() => setLiters(recipe.referenceVolumeLiters)}
              className="text-xs text-cheese-700 hover:text-cheese-800 flex items-center gap-1 ml-auto font-medium"
            >
              <RefreshCw className="w-3 h-3" />
              Réinitialiser ({recipe.referenceVolumeLiters} L)
            </button>
          )}
        </div>
      </div>

      {/* Dynamically Scaled Ingredients */}
      <div className="border-t border-cheese-200 pt-4">
        <h5 className="text-xs font-bold uppercase tracking-wider text-terroir-700 mb-3">
          Ingrédients adaptés pour {liters} L de cuve
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {recipe.ingredients.map((ing, idx) => {
            return (
              <div
                key={idx}
                className="bg-white/90 border border-terroir-100 rounded-lg p-2.5 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-semibold text-terroir-900">{ing.name}</span>
                  {ing.notes && <span className="block text-[11px] text-terroir-500">{ing.notes}</span>}
                </div>
                <span className="font-mono font-bold text-cheese-800 shrink-0 ml-3">
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
      <div className="p-3 bg-amber-50/90 border border-amber-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-amber-950 font-medium">
          <Video className="w-4 h-4 text-cheese-600 shrink-0" />
          <span>
            <strong>Tuto Idele :</strong> Comment calibrer vos moules à l'avance selon le rendement fromager ?
          </span>
        </div>
        <Link
          href="/astuces"
          className="font-bold text-cheese-800 hover:text-cheese-900 underline flex items-center gap-1 shrink-0"
        >
          <span>Voir la vidéo Idele</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
