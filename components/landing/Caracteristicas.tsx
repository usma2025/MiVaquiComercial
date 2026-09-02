import {
  MessageCircle,
  Search,
  Bell,
  MapPin,
  BadgeCheck,
  Syringe,
  Wallet,
  CalendarClock,
  QrCode,
  Send,
  Users,
  WifiOff,
} from "lucide-react";
import { Reveal, StaggerReveal } from "./AnimateOnScroll";

const features = [
  {
    icon: MessageCircle,
    title: "Registre cualquier evento por chat",
    description: "Parto, celo, monta, pesaje, vacuna, tratamiento, venta, gasto o cambio de potrero — dígalo como lo diría en el campo y MiVaqui lo registra y organiza solo.",
  },
  {
    icon: Bell,
    title: "Alertas proactivas",
    description: "Celo en mora, parto próximo, diagnóstico de preñez pendiente, destete, vacunas vencidas, presupuesto excedido o un potrero sobrecargado — se lo avisamos antes de que sea un problema.",
  },
  {
    icon: MapPin,
    title: "Potreros y rotación de pastoreo",
    isNew: true,
    description: "Diga a qué potrero movió el animal y MiVaqui lo reconoce, le sugiere el nombre correcto si se equivocó al escribirlo y le avisa si un potrero queda sobrecargado.",
  },
  {
    icon: BadgeCheck,
    title: "Preparación para SINIGÁN",
    isNew: true,
    description: "Lleve el DIN y las fechas de vacunación de aftosa y brucelosis al día. Sepa de un vistazo qué animales están listos para movilizar según el ICA.",
  },
  {
    icon: Syringe,
    title: "Sanidad y tiempos de retiro",
    description: "Registre tratamientos y desparasitaciones y MiVaqui calcula el período de retiro de carne, para que nunca venda un animal antes de tiempo.",
  },
  {
    icon: Wallet,
    title: "Finanzas de la finca",
    description: "Reporte gastos e ingresos por WhatsApp y consulte el balance real de su operación — por animal o de toda la finca — desde el panel web.",
  },
  {
    icon: CalendarClock,
    title: "Calendario reproductivo visual",
    description: "Vea de un vistazo cuándo debe parir, destetar o recibir un diagnóstico cada animal, con la curva de peso de su hato incluida.",
  },
  {
    icon: Search,
    title: "Historial en 10 segundos",
    description: "Pregunte '¿cuándo parió la vaca 312?' y obtenga toda la historia del animal al instante, sin buscar en ningún cuaderno.",
  },
  {
    icon: QrCode,
    title: "Ficha pública para compradores",
    isNew: true,
    description: "Comparta un link con el historial completo y verificado de un animal — origen, vacunas, pesos — ideal para negociar una venta con confianza.",
  },
  {
    icon: Send,
    title: "Resumen semanal sin pedirlo",
    description: "Cada semana, así no pase nada urgente, MiVaqui le manda un resumen del estado completo de su hato directo a WhatsApp.",
  },
  {
    icon: Users,
    title: "Varios usuarios, un solo hato",
    description: "El mayordomo registra desde el potrero, el veterinario consulta el historial, usted ve todo desde el panel web — cada uno con su propio rol.",
  },
  {
    icon: WifiOff,
    title: "100% WhatsApp, incluso sin señal",
    description: "Funciona con el WhatsApp que ya tiene, hasta en 2G. Si no hay señal, el mensaje espera y se sincroniza solo apenas su celular la recupera.",
  },
];

export default function Caracteristicas() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal animation="blur-up" className="text-center mb-12">
          <span className="text-[#53B04B] font-semibold text-sm uppercase tracking-widest">
            Características
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-[#0B4C4A]">
            Todo lo que necesita para llevar su hato
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Diseñado para el ganadero colombiano que trabaja en el campo, no en
            una oficina con WiFi.
          </p>
        </Reveal>

        <StaggerReveal
          animation="fade-up"
          stagger={60}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map(({ icon: Icon, title, description, isNew }) => (
            <div
              key={title}
              className="group relative bg-[#F5F7F4] rounded-2xl p-6 flex flex-col gap-3 border border-transparent hover:border-[#53B04B]/40 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default hover:-translate-y-1"
            >
              {isNew && (
                <span className="absolute top-4 right-4 bg-[#53B04B] text-white text-[10px] font-bold uppercase tracking-wide rounded-full px-2 py-0.5">
                  Nuevo
                </span>
              )}
              <div className="w-11 h-11 rounded-xl bg-[#0B4C4A]/8 flex items-center justify-center group-hover:bg-[#53B04B]/15 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-5 h-5 text-[#53B04B]" />
              </div>
              <h3 className="font-bold text-[#0B4C4A] leading-snug">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
