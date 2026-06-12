import Link from "next/link";
import { WHATSAPP_CTA_URL } from "@/lib/constants";

const tiers = [
  {
    label: "Finca Pequeña",
    emoji: "🌱",
    sub: "5 a 30 animales",
    headline: "Organice el hato familiar sin enredarse con tecnología",
    points: [
      "Sepa cuándo pare cada vaca sin llevar cuadernos",
      "Reciba alertas en su propio celular",
      "Empiece en menos de 5 minutos",
    ],
    iconSize: "text-3xl",
    accentH: "h-1",
  },
  {
    label: "Finca Mediana",
    emoji: "🌿",
    sub: "30 a 150 animales",
    headline: "Controle lo que hace el mayordomo en tiempo real",
    points: [
      "El capataz registra por WhatsApp, usted ve todo en el panel web",
      "Alertas de producción y reproducción por lote",
      "Detecte vacas improductivas antes de que el problema crezca",
    ],
    iconSize: "text-4xl",
    accentH: "h-1.5",
    highlight: true,
  },
  {
    label: "Finca Grande",
    emoji: "🌳",
    sub: "150+ animales · Múltiples potreros",
    headline: "Audite potreros y veterinarios en tiempo real",
    points: [
      "Múltiples usuarios con roles diferenciados",
      "Consolidación automática de datos de toda la operación",
      "Reportes para banco, seguro o certificación ganadera",
    ],
    iconSize: "text-5xl",
    accentH: "h-2",
  },
];

export default function ParaQuien() {
  return (
    <section className="bg-[#0B4C4A] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-[#53B04B] font-semibold text-sm uppercase tracking-widest">
            ¿Para quién es MiVaqui?
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-white">
            Funciona igual de bien con 10 o con 500 animales
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            La plataforma crece con su finca. Empiece pequeño y escale sin
            cambiar de herramienta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className={`relative rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 ${
                tier.highlight
                  ? "bg-white text-[#0B4C4A] shadow-2xl shadow-black/30 scale-105"
                  : "bg-white/8 border border-white/15 text-white hover:bg-white/12"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#53B04B] text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                  Más popular
                </div>
              )}

              {/* Accent bar — grows with tier */}
              <div
                className={`w-full rounded-full bg-[#53B04B] ${tier.accentH}`}
              />

              <div className="flex items-center gap-3">
                <span className={tier.iconSize}>{tier.emoji}</span>
                <div>
                  <p className={`font-bold text-lg ${tier.highlight ? "text-[#0B4C4A]" : "text-white"}`}>
                    {tier.label}
                  </p>
                  <p className={`text-xs ${tier.highlight ? "text-gray-500" : "text-gray-400"}`}>
                    {tier.sub}
                  </p>
                </div>
              </div>

              <p className={`font-semibold leading-snug ${tier.highlight ? "text-[#0B4C4A]" : "text-white"}`}>
                {tier.headline}
              </p>

              <ul className="flex flex-col gap-2.5">
                {tier.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#53B04B] flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className={tier.highlight ? "text-gray-600" : "text-gray-300"}>
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#53B04B] hover:bg-[#47a042] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#53B04B]/30"
          >
            Empiece gratis — 30 días sin costo
          </Link>
        </div>
      </div>
    </section>
  );
}
