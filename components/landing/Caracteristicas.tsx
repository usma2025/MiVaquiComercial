import { Baby, Search, Bell, ClipboardList, Tag, MessageCircle, Shield, BarChart2 } from "lucide-react";

const features = [
  {
    icon: Baby,
    title: "Registro de partos inteligente",
    description:
      "Diga 'La 204 parió macho' y MiVaqui registra el evento, asigna el ternero y calcula automáticamente la próxima fecha esperada de celo.",
  },
  {
    icon: Search,
    title: "Historial en 10 segundos",
    description:
      "Pregunte '¿cuándo parió la vaca 312?' y obtenga toda la historia del animal al instante, sin buscar en ningún cuaderno.",
  },
  {
    icon: Bell,
    title: "Alertas proactivas",
    description:
      "Reciba un mensaje antes de que la vaca entre en celo, antes de que venza una vacuna, antes de que se cumpla el intervalo entre partos.",
  },
  {
    icon: ClipboardList,
    title: "Control sin planillas",
    description:
      "Inventario, pesos, tratamientos y movimientos de animales, todo registrado por chat. Sin Excel, sin apps complicadas.",
  },
  {
    icon: Tag,
    title: "Trazabilidad por arete",
    description:
      "Cada animal tiene su propio historial completo: origen, reproductores, descendencia, vacunas y eventos. Todo en un solo lugar.",
  },
  {
    icon: MessageCircle,
    title: "100% WhatsApp",
    description:
      "Funciona con el WhatsApp que ya tiene. Sin instalar nada extra. Funciona en 2G. Funciona sin señal (sincroniza al tomar red).",
  },
  {
    icon: Shield,
    title: "Datos seguros en la nube",
    description:
      "Su información está respaldada automáticamente. Si pierde el celular, sus datos siguen en pie. Encriptados y protegidos.",
  },
  {
    icon: BarChart2,
    title: "Panel web para el dueño",
    description:
      "Usted y su administrador pueden ver métricas, reportes y el estado del hato desde cualquier computador, en tiempo real.",
  },
];

export default function Caracteristicas() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-[#F5F7F4] rounded-2xl p-6 flex flex-col gap-3 border border-transparent hover:border-[#53B04B]/30 hover:bg-white hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0B4C4A]/8 flex items-center justify-center group-hover:bg-[#53B04B]/10 transition-colors">
                <Icon className="w-5 h-5 text-[#53B04B]" />
              </div>
              <h3 className="font-bold text-[#0B4C4A] leading-snug">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
