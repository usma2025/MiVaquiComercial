import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_SUPPORT_URL, WHATSAPP_CTA_URL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B4C4A] text-gray-300">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🐄</span>
              <span className="text-white font-bold text-xl">MiVaqui</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              El asistente ganadero que vive en su WhatsApp. Diseñado para el
              campo colombiano.
            </p>
            <Link
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm py-2.5 px-5 rounded-xl transition-colors w-fit"
            >
              Probar 30 días gratis
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-sm mb-1">Plataforma</p>
            {[
              { label: "Cómo funciona", href: "#como-funciona" },
              { label: "Precios", href: "#precios" },
              { label: "Para quién es", href: "#para-quien" },
              { label: "Preguntas frecuentes", href: "#faq" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-[#53B04B] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-sm mb-1">Soporte</p>
            <Link
              href={WHATSAPP_SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#53B04B] hover:text-[#6bc963] transition-colors text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Soporte por WhatsApp
            </Link>
            <p className="text-sm text-gray-400">
              Lunes a sábado, 7 AM – 7 PM
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Respondemos en menos de 2 horas en horario laboral.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} MiVaqui. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link href="/privacidad" className="hover:text-[#53B04B] transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-[#53B04B] transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
