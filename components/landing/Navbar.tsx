"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Cómo funciona", anchor: "como-funciona" },
  { label: "Características", anchor: "caracteristicas" },
  { label: "Precios", anchor: "precios" },
  { label: "FAQ", anchor: "faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  function href(anchor: string) {
    return isHome ? `#${anchor}` : `/#${anchor}`;
  }

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
          : "bg-[#0B4C4A]"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href={isHome ? "#inicio" : "/"} className="flex items-center">
          <Image
            src="/Logo-multiformato-03.png"
            alt="MiVaqui"
            width={140}
            height={40}
            className={`h-10 w-auto transition-all duration-300 ${scrolled ? "brightness-0 saturate-0" : "brightness-0 invert"}`}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={href(item.anchor)}
              className={`text-sm font-medium transition-colors hover:text-[#53B04B] ${
                scrolled ? "text-gray-600" : "text-gray-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/postulacion"
            className="bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm py-2.5 px-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            Piloto gratuito
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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={href(item.anchor)}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium py-1 hover:text-[#53B04B] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/postulacion"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center bg-orange-500 text-white font-bold py-3 rounded-xl mt-1"
          >
            Piloto gratuito — sin costo
          </Link>
        </div>
      </div>
    </header>
  );
}
