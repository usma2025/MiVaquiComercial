import { Calendar, AlertCircle, BookOpen } from "lucide-react";
import { Reveal, StaggerReveal } from "./AnimateOnScroll";

const problems = [
  {
    icon: Calendar,
    title: "Fechas olvidadas",
    headline: "Pierde plata cada vez que se pasa el intervalo entre partos",
    body: "Sin un registro exacto, las vacas quedan vacías semanas o meses de más. Cada día extra sin preñar son kilos de pasto convertidos en pérdida pura.",
    color: "bg-red-50",
    iconBg: "bg-red-100",
  },
  {
    icon: AlertCircle,
    title: "Vacas en mora de celo",
    headline: "Animales que comen pero no producen nada",
    body: "Una vaca que pasó su ventana de inseminación sin que nadie se diera cuenta puede costarle más de $1.500.000 COP al año en insumos sin retorno.",
    color: "bg-amber-50",
    iconBg: "bg-amber-100",
  },
  {
    icon: BookOpen,
    title: "Registros en cuadernos",
    headline: "Un aguacero puede borrar años de historial de su finca",
    body: "El cuaderno se moja, se pierde, o simplemente nadie lo lleva bien. Cuando necesita saber el historial de un animal, no hay información confiable.",
    color: "bg-blue-50",
    iconBg: "bg-blue-100",
  },
];

export default function Problema() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal animation="blur-up" className="text-center mb-12">
          <span className="text-[#53B04B] font-semibold text-sm uppercase tracking-widest">
            El problema real
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-[#0B4C4A]">
            Lo que le cuesta no llevar el control
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            La mayoría de ganaderos pierden entre el 15% y el 30% de su
            potencial productivo por falta de datos oportunos.
          </p>
        </Reveal>

        <StaggerReveal
          animation="scale"
          stagger={130}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problems.map(({ icon: Icon, title, headline, body, color, iconBg }) => (
            <div
              key={title}
              className={`${color} rounded-2xl p-7 flex flex-col gap-4 border border-black/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default group`}
            >
              <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-[#53B04B]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {title}
                </span>
                <h3 className="mt-1 text-lg font-bold text-[#0B4C4A] leading-snug">
                  {headline}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
