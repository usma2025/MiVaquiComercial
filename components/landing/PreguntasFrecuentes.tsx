"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Qué pasa si en el potrero no hay señal de internet?",
    a: "MiVaqui funciona vía WhatsApp, que opera incluso con señal 2G débil. Si no hay señal en el momento, el mensaje se envía en cuanto el celular retome la red. Sus datos nunca se pierden — se sincronizan automáticamente cuando vuelve la conectividad.",
  },
  {
    q: "¿Mis datos están seguros? ¿Quién puede verlos?",
    a: "Sus datos son exclusivamente suyos. Están encriptados en tránsito y en reposo en servidores certificados. MiVaqui no vende ni comparte información de sus animales con terceros. Solo usted y los usuarios que autorice pueden acceder a su hato.",
  },
  {
    q: "¿El mayordomo o capataz puede usarlo sin saber de tecnología?",
    a: "Sí, ese es exactamente el diseño. El mayordomo no necesita aprender ninguna app nueva: escribe por WhatsApp como lo hace todos los días. MiVaqui entiende lenguaje natural ganadero — 'vacuné el lote 3 contra aftosa' o 'pesé los novillos del potrero norte' son instrucciones válidas.",
  },
  {
    q: "¿Qué pasa si no tengo señal durante varios días?",
    a: "Sus mensajes de WhatsApp quedan en cola en el celular y se envían en bloque cuando recupera señal. MiVaqui los procesa en orden cronológico. Recomendamos revisar las alertas acumuladas al recuperar conexión para no perderse ningún evento importante.",
  },
  {
    q: "¿Cómo empiezo? ¿Necesito importar datos previos?",
    a: "No necesita importar nada para empezar. Abra WhatsApp, escríbanos y empiece a registrar desde hoy. Con el tiempo MiVaqui construye el historial de su hato. Si tiene datos en Excel o cuadernos que quiera migrar, nuestro equipo lo ayuda en el proceso de onboarding.",
  },
  {
    q: "¿MiVaqui es lo mismo que Mivaki?",
    a: "Sí. \"Mivaki\" es simplemente la forma en que muchos ganaderos escriben o pronuncian el nombre al buscarlo. El nombre correcto de la marca es MiVaqui, el asistente ganadero que funciona por WhatsApp.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

function useReveal(animation: string, delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("aos-init", `aos-${animation}`);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("aos-animate"), delay);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [animation, delay]);

  return ref;
}

export default function PreguntasFrecuentes() {
  const [open, setOpen] = useState<number | null>(null);
  const headerRef = useReveal("blur-up");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];
    items.forEach((el) => el.classList.add("aos-init", "aos-fade-up"));

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => el.classList.add("aos-animate"), i * 100);
          });
          io.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    io.observe(container);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-5">
        <div ref={headerRef} className="text-center mb-10">
          <span className="text-[#53B04B] font-semibold text-sm uppercase tracking-widest">
            Preguntas frecuentes
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-[#0B4C4A]">
            Las dudas más comunes del ganadero
          </h2>
        </div>

        <div ref={listRef} className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#53B04B]/50 shadow-sm"
                    : "border-gray-200 hover:border-[#53B04B]/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-base leading-snug ${isOpen ? "text-[#53B04B]" : "text-[#0B4C4A]"}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#53B04B] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
