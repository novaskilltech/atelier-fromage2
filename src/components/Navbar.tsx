import Link from "next/link";
import { BookOpen, Compass, Hammer, ShoppingBag, ShieldCheck, Sparkles, Video } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-terroir-200 print:hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/images/logo.jpg"
              alt="Logo L'Atelier Fromager"
              className="w-10 h-10 rounded-full object-cover shadow-sm ring-1 ring-cheese-500/40 group-hover:scale-105 transition"
            />
            <div>
              <span className="font-serif text-lg font-bold text-terroir-900 group-hover:text-cheese-700 transition">
                L'Atelier Fromager
              </span>
              <span className="block text-[11px] text-terroir-500 font-sans uppercase tracking-wider font-semibold">
                Savoir-Faire Artisanal
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 text-sm font-medium text-terroir-700">
            <Link
              href="/"
              className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-cheese-600" />
              Recettes (24)
            </Link>
            <Link
              href="/astuces"
              className="px-3 py-2 rounded-md hover:text-cheese-700 bg-cheese-50/50 text-cheese-900 font-semibold border border-cheese-200/60 transition flex items-center gap-1.5 shadow-2xs"
            >
              <Video className="w-4 h-4 text-cheese-600" />
              Astuces & Vidéos
            </Link>
            <Link
              href="/ustensiles"
              className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5"
            >
              <Hammer className="w-4 h-4 text-cheese-600" />
              Matériel
            </Link>
            <Link
              href="/sourcing"
              className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4 text-cheese-600" />
              Sourcing
            </Link>
            <Link
              href="/lexique"
              className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-cheese-600" />
              Lexique
            </Link>
            <Link
              href="/charte"
              className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-cheese-600" />
              Charte
            </Link>
          </nav>

          {/* User Status / Professional Badge */}
          <div className="flex items-center space-x-3">
            <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
              Accès Pro Validé
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
