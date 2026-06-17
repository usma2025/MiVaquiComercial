import Link from "next/link";
import { Reveal, StaggerReveal } from "./AnimateOnScroll";

const plans = [
  {
    name: "Pequeña Finca",
    tagline: "Para fincas familiares de hasta 30 animales",
    highlight: false,
    features: [
      "Hasta 30 animales registrados",
      "Registro de partos y eventos",
      "Alertas de celo y parto",
      "Historial por animal",
      "Soporte por WhatsApp",
    ],
  },
  {
    name: "Mediana Finca",
    tagline: "Para fincas de 30 a 150 animales con personal",
    highlight: true,
    features: [
      "Hasta 150 animales registrados",
      "Todo lo del plan básico",
      "Panel web para el dueño",
      "Hasta 3 usuarios (capataz + dueño)",
      "Reportes de producción",
      "Alertas por lote o potrero",
    ],
  },
  {
    name: "Gran Finca",
    tagline: "Para operaciones de 150+ animales y múltiples potreros",
    highlight: false,
    features: [
      "Animales ilimitados",
      "Todo lo del plan medio",
      "Usuarios ilimitados con roles",
      "Múltiples fincas en un panel",
      "API para sistemas externos",
      "Soporte prioritario dedicado",
    ],
  },
];

export default function Precios() {
  return (
    <section className="bg-[#F5F7F4] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal animation="blur-up" className="text-center mb-12">
          <span className="text-[#53B04B] font-semibold text-sm uppercase tracking-widest">
            Planes
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-[#0B4C4A]">
            Encuentre el plan que se adapta a su finca
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Estamos en fase piloto — los precios se definirán con las primeras fincas.{" "}
            <strong className="text-[#0B4C4A]">Únase ahora sin costo</strong> y forme parte de esa decisión.
          </p>
        </Reveal>

        <StaggerReveal
          animation="scale"
          stagger={130}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </StaggerReveal>

        <Reveal animation="fade-up" delay={200}>
          <p className="text-center mt-8 text-sm text-gray-400">
            Sin tarjeta de crédito · Sin compromiso · Cancele cuando quiera
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[0] }) {
  return (
    <div className={`relative ${plan.highlight ? "pt-5 md:-mt-4 md:-mb-4 animate-float" : ""}`}>
      {plan.highlight && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-[#53B04B] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md animate-glow-pulse-green whitespace-nowrap">
          Más solicitado
        </div>
      )}
      <div
        className={`relative flex flex-col rounded-2xl p-7 gap-6 transition-all duration-300 ${
          plan.highlight
            ? "bg-[#0B4C4A] text-white shadow-2xl shadow-[#0B4C4A]/30 border-2 border-[#53B04B] scale-105 shimmer-overlay"
            : "bg-white text-gray-700 border border-gray-200 hover:shadow-md hover:-translate-y-1"
        }`}
      >
        <div className={`inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1 w-fit ${
          plan.highlight ? "bg-[#53B04B]/20 text-[#53B04B]" : "bg-[#53B04B]/10 text-[#53B04B]"
        }`}>
          ✦ Piloto gratuito
        </div>

        <div>
          <h3 className={`text-lg font-bold ${plan.highlight ? "text-white" : "text-[#0B4C4A]"}`}>
            {plan.name}
          </h3>
          <p className={`text-sm mt-0.5 ${plan.highlight ? "text-gray-300" : "text-gray-400"}`}>
            {plan.tagline}
          </p>
        </div>

        <div className={`text-sm font-medium px-3 py-2 rounded-lg w-fit ${
          plan.highlight ? "bg-white/10 text-gray-300" : "bg-[#F5F7F4] text-gray-500"
        }`}>
          Precio por definir — fase piloto
        </div>

        <ul className="flex flex-col gap-2.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <span className="mt-0.5 w-4 h-4 rounded-full bg-[#53B04B] flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className={plan.highlight ? "text-gray-200" : "text-gray-600"}>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/postulacion"
          className={`mt-auto flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold transition-all duration-200 hover:-translate-y-0.5 ${
            plan.highlight
              ? "bg-[#53B04B] text-white hover:bg-[#47a042] shadow-lg shadow-[#53B04B]/30 animate-glow-pulse"
              : "bg-[#0B4C4A] text-white hover:bg-[#0d5a58]"
          }`}
        >
          Registrar mi finca piloto
        </Link>
      </div>
    </div>
  );
}
