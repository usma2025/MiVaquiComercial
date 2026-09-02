import { MessageCircle, Cpu, Bell, Mic, ArrowRight } from "lucide-react";
import { Reveal, StaggerReveal } from "./AnimateOnScroll";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Escribe por WhatsApp",
    description:
      "Mande un mensaje como lo haría con cualquier persona: 'La 204 parió hembra', 'Vacuné el lote 3', 'La movimos al potrero 4'. Sin formularios ni apps.",
    badge: { icon: Mic, text: "Mensajes de voz (Próximamente)" },
  },
  {
    number: "02",
    icon: Cpu,
    title: "MiVaqui procesa",
    description:
      "Nuestra IA entiende lenguaje ganadero natural. Extrae la información, la organiza, calcula fechas clave y actualiza el historial del animal automáticamente.",
    badge: null,
  },
  {
    number: "03",
    icon: Bell,
    title: "Reciba alertas tempranas",
    description:
      "Antes de que una vaca entre en celo, antes de que venza una vacuna, antes de que se pase un parto — MiVaqui le avisa primero, directo a su celular.",
    badge: null,
  },
];

export default function ComoFunciona() {
  return (
    <section className="bg-[#F5F7F4] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal animation="blur-up" className="text-center mb-14">
          <span className="text-[#53B04B] font-semibold text-sm uppercase tracking-widest">
            Cómo funciona
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-[#0B4C4A]">
            Tres pasos. Cero curva de aprendizaje.
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Si sabe usar WhatsApp, ya sabe usar MiVaqui.
          </p>
        </Reveal>

        <StaggerReveal
          animation="fade-up"
          stagger={160}
          className="relative flex flex-col lg:flex-row gap-8 lg:gap-0"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex-1 flex flex-col items-center text-center px-4 group">
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-4 z-10 items-center justify-center w-8 h-8">
                    <ArrowRight className="w-6 h-6 text-[#53B04B]" />
                  </div>
                )}

                {/* Icon circle */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-[#0B4C4A] flex items-center justify-center shadow-lg shadow-[#0B4C4A]/20 group-hover:scale-110 group-hover:shadow-[#0B4C4A]/40 transition-all duration-300">
                    <Icon className="w-9 h-9 text-white" />
                  </div>
                  <span className="absolute -top-3 -right-3 bg-[#53B04B] text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shadow animate-glow-pulse-green">
                    {step.number.slice(-1)}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0B4C4A]">{step.title}</h3>

                {step.badge && (
                  <span className="mt-2 inline-flex items-center gap-1.5 border border-[#53B04B]/50 text-[#53B04B] rounded-full px-3 py-1 text-xs font-medium">
                    <step.badge.icon className="w-3 h-3" />
                    {step.badge.text}
                  </span>
                )}

                <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </StaggerReveal>

        <Reveal animation="fade-up" delay={300} className="mt-12">
          <p className="text-center text-sm text-gray-500">
            La primera semana, la mayoría de usuarios dicen que{" "}
            <strong className="text-[#0B4C4A]">"se sintió como hablar con alguien de la finca"</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
