"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Compass,
  Hammer,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Video,
  Menu,
  X,
  ChevronRight
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle body scroll lock & Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const navLinks = [
    {
      href: "/#catalogue",
      label: "Recettes (24)",
      desc: "Fiches techniques pas à pas",
      icon: BookOpen,
      badge: null,
      highlight: false,
    },
    {
      href: "/#a-propos",
      label: "À Propos",
      desc: "Notre histoire & atelier",
      icon: Sparkles,
      badge: null,
      highlight: false,
    },
    {
      href: "/astuces",
      label: "Astuces & Vidéos",
      desc: "Tutoriels d'affinage & gestes",
      icon: Video,
      badge: "Inédit",
      highlight: true,
    },
    {
      href: "/ustensiles",
      label: "Matériel",
      desc: "Cuves, moules, thermomètres",
      icon: Hammer,
      badge: null,
      highlight: false,
    },
    {
      href: "/sourcing",
      label: "Sourcing",
      desc: "Lait cru, ferments & présure",
      icon: ShoppingBag,
      badge: null,
      highlight: false,
    },
    {
      href: "/lexique",
      label: "Lexique",
      desc: "Vocabulaire fromager A-Z",
      icon: Compass,
      badge: null,
      highlight: false,
    },
    {
      href: "/charte",
      label: "Charte",
      desc: "Engagements & qualité artisanale",
      icon: ShieldCheck,
      badge: null,
      highlight: false,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-terroir-200 print:hidden shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Brand */}
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="/images/logo.jpg"
                alt="Logo L'Atelier Fromager"
                className="w-10 h-10 rounded-full object-cover shadow-xs ring-1 ring-cheese-500/40 group-hover:scale-105 transition"
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

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 text-sm font-medium text-terroir-700">
              <Link
                href="/#catalogue"
                className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-cheese-600" />
                Recettes (24)
              </Link>
              <Link
                href="/#a-propos"
                className="px-3 py-2 rounded-md hover:text-cheese-700 hover:bg-cheese-50 transition flex items-center gap-1.5 font-medium"
              >
                <Sparkles className="w-4 h-4 text-cheese-600" />
                À Propos
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

            {/* Right section: Badge + Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                Accès Pro Validé
              </div>

              {/* Mobile Hamburger Toggle Button */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Ouvrir le menu de navigation"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation-drawer"
                className="md:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-terroir-700 hover:text-cheese-800 hover:bg-cheese-100/80 border border-terroir-200 transition focus:outline-hidden focus:ring-2 focus:ring-cheese-500 shadow-2xs"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Retractable Mobile Navigation Drawer (Off-canvas) */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal de navigation"
        className={`fixed inset-0 z-50 md:hidden transition-visibility duration-300 ${
          isOpen ? "visible pointer-events-auto" : "invisible pointer-events-none delay-300"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Sliding Panel */}
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col z-50 transition-transform duration-300 ease-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-terroir-100 bg-cheese-50/50">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.jpg"
                alt="Logo"
                className="w-9 h-9 rounded-full object-cover ring-1 ring-cheese-500/30"
              />
              <div>
                <h2 className="font-serif font-bold text-terroir-900 text-base leading-tight">
                  L'Atelier Fromager
                </h2>
                <span className="text-[10px] text-terroir-500 uppercase tracking-widest font-semibold block">
                  Menu Principal
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer le menu"
              className="p-2 rounded-lg text-terroir-500 hover:text-terroir-900 hover:bg-stone-100 transition focus:outline-hidden focus:ring-2 focus:ring-cheese-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body: Navigation Links */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5">
            <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-terroir-400 mb-2">
              Rubriques & Ressources
            </p>

            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between p-3 rounded-xl transition ${
                    item.highlight
                      ? "bg-cheese-50 border border-cheese-200/80 text-cheese-950 font-medium shadow-2xs hover:bg-cheese-100/70"
                      : "text-terroir-800 hover:bg-stone-100 hover:text-cheese-800"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg transition ${
                        item.highlight
                          ? "bg-cheese-200/70 text-cheese-800"
                          : "bg-terroir-50 text-cheese-600 group-hover:bg-cheese-50 group-hover:text-cheese-700"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold leading-tight">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500 text-white tracking-wide">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-terroir-500 font-normal block leading-snug">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-terroir-300 group-hover:text-cheese-600 group-hover:translate-x-0.5 transition" />
                </Link>
              );
            })}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-terroir-100 bg-stone-50/80 space-y-3">
            <div className="flex items-center justify-between px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-lg">
              <div className="flex items-center space-x-2 text-xs font-medium text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Accès Professionnel Actif</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                100% Validé
              </span>
            </div>

            <p className="text-[11px] text-terroir-400 text-center font-sans">
              © 2026 L'Atelier Fromager — Savoir-Faire Artisanal
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
