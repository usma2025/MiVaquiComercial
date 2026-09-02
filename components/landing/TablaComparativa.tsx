import { Reveal, StaggerReveal } from "./AnimateOnScroll";

const rows = [
  {
    dimension: "Curva de aprendizaje",
    traditional: { text: "Alta — apps complejas o cuadernos inconsistentes" },
    mivaqui: { text: "Cero — usa WhatsApp como siempre" },
  },
  {
    dimension: "Alertas proactivas",
    traditional: { text: "No existen — usted tiene que recordarlo todo" },
    mivaqui: { text: "Automáticas — celo, parto, vacuna, todo" },
  },
  {
    dimension: "Disponibilidad en el potrero",
    traditional: { text: "Limitada — necesita señal y batería para una app" },
    mivaqui: { text: "Total — el mensaje espera y se sincroniza al volver la señal" },
  },
  {
    dimension: "Riesgo de pérdida de datos",
    traditional: { text: "Alto — cuadernos se mojan, apps se borran" },
    mivaqui: { text: "Ninguno — todo en la nube, respaldo automático" },
  },
  {
    dimension: "Rotación de potreros",
    traditional: { text: "A memoria — fácil perder la cuenta de qué animal está dónde" },
    mivaqui: { text: "Con historial y alerta automática si un potrero se sobrecarga" },
  },
  {
    dimension: "Preparación para movilizar/vender",
    traditional: { text: "Papeles sueltos, vacunas sin fecha clara" },
    mivaqui: { text: "Semáforo automático de DIN y vacunas al día para SINIGÁN" },
  },
  {
    dimension: "Costo de adopción",
    traditional: { text: "Alto en tiempo de aprendizaje y errores humanos" },
    mivaqui: { text: "Mínimo — empiece en minutos, no en semanas" },
  },
];

export default function TablaComparativa() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-5">
        <Reveal animation="blur-up" className="text-center mb-10">
          <span className="text-[#53B04B] font-semibold text-sm uppercase tracking-widest">
            Comparativa
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-[#0B4C4A]">
            MiVaqui vs. llevar el control como siempre
          </h2>
        </Reveal>

        <Reveal animation="fade-up" delay={100}>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-140 text-sm">
              <thead>
                <tr>
                  <th className="bg-gray-50 text-left px-5 py-4 font-semibold text-gray-500 border-b border-gray-200 w-1/3">
                    Criterio
                  </th>
                  <th className="bg-gray-50 text-center px-5 py-4 font-semibold text-gray-500 border-b border-gray-200">
                    Cuadernos / Apps complejas
                  </th>
                  <th className="bg-[#53B04B] text-center px-5 py-4 font-bold text-white border-b border-[#47a042]">
                    <span className="flex items-center justify-center gap-2">
                      <span>🐄</span> MiVaqui
                    </span>
                  </th>
                </tr>
              </thead>
              <StaggerReveal as="tbody" animation="fade-left" stagger={80}>
                {rows.map((row, i) => (
                  <tr key={row.dimension} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-5 py-4 font-semibold text-[#0B4C4A] border-b border-gray-100">
                      {row.dimension}
                    </td>
                    <td className="px-5 py-4 text-center border-b border-gray-100">
                      <span className="flex items-start gap-2 justify-center">
                        <span className="mt-0.5 text-red-400 font-bold shrink-0">✕</span>
                        <span className="text-gray-500 text-left">{row.traditional.text}</span>
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center border-b border-gray-100 bg-[#53B04B]/5">
                      <span className="flex items-start gap-2 justify-center">
                        <span className="mt-0.5 text-[#53B04B] font-bold shrink-0">✓</span>
                        <span className="text-[#0B4C4A] font-medium text-left">{row.mivaqui.text}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </StaggerReveal>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
