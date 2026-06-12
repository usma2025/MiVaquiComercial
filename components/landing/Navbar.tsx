"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WHATSAPP_CTA_URL } from "@/lib/constants";

const navLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="#inicio" className="flex items-center gap-2">
          <span className="text-2xl">🐄</span>
          <span className={`font-bold text-lg transition-colors ${scrolled ? "text-[#0B4C4A]" : "text-white"}`}>
            MiVaqui
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#53B04B] ${
                scrolled ? "text-gray-600" : "text-gray-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm py-2.5 px-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            Prueba gratis
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-[#0B4C4A]" : "text-white"}`}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80" : "max-h-0"
        } bg-white border-b border-gray-100`}
      >
        <div className="px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium py-1 hover:text-[#53B04B] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center bg-orange-500 text-white font-bold py-3 rounded-xl mt-1"
          >
            Prueba gratis — 30 días
          </Link>
        </div>
      </div>
    </header>
  );
}
