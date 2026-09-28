"use client";

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top warm golden amber glow */}
      <div className="absolute -top-24 -right-24 w-[30rem] h-[30rem] rounded-full bg-amber-500/10 blur-[100px] animate-glow-1" />

      {/* Middle-left warm copper glow */}
      <div className="absolute top-1/3 -left-32 w-[36rem] h-[36rem] rounded-full bg-orange-700/8 blur-[120px] animate-glow-2" />

      {/* Bottom subtle rustic glow */}
      <div className="absolute -bottom-24 right-1/3 w-[28rem] h-[28rem] rounded-full bg-amber-400/8 blur-[90px] animate-glow-1" />

      {/* Subtle rising warm embers */}
      <div className="absolute bottom-12 left-1/4 w-1.5 h-1.5 rounded-full bg-amber-400/40 blur-[1px] animate-particle-1" />
      <div className="absolute bottom-20 left-1/2 w-2 h-2 rounded-full bg-amber-300/35 blur-[1px] animate-particle-2" />
      <div className="absolute bottom-16 right-1/4 w-1.5 h-1.5 rounded-full bg-orange-400/30 blur-[1px] animate-particle-3" />
    </div>
  );
}
