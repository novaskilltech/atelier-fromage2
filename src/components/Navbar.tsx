import Link from "next/link";
import { BookOpen, Compass, Hammer, ShoppingBag, ShieldCheck, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-terroir-200 print:hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-cheese-500 text-white flex items-center justify-center font-bold shadow group-hover:bg-cheese-600 transition">
              🧀
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-terroir-900 group-hover:text-cheese-700 transition">
                Atelier Fromager
              </span>
              <span className="block text-xs text-terroir-500 font-sans uppercase tracking-wider">
                Tradition Artisanale
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-terroir-700">
            <Link
              href="/"
              className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-cheese-600" />
              Recettes (24)
            </Link>
            <Link
              href="/ustensiles"
              className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5"
            >
              <Hammer className="w-4 h-4 text-cheese-600" />
              Matériel & Ustensiles
            </Link>
            <Link
              href="/sourcing"
              className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4 text-cheese-600" />
              Où se fournir
            </Link>
            <Link
              href="/lexique"
              className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-cheese-600" />
              Lexique Fromager
            </Link>
            <Link
              href="/charte"
              className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-cheese-600" />
              Charte 100% Artisanal
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
