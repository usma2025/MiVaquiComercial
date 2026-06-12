import { TrendingUp, Users, AlertTriangle, Activity, RefreshCw } from "lucide-react";

export default function PanelAdmin() {
  return (
    <section className="bg-[#F5F7F4] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ── Left: Copy ─────────────────────────────── */}
        <div className="flex flex-col gap-5">
          <span className="text-[#53B04B] font-semibold text-sm uppercase tracking-widest">
            Panel web
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B4C4A] leading-tight">
            El dueño ve todo, desde cualquier lugar
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Mientras el mayordomo registra desde el potrero por WhatsApp, usted
            y su administrador tienen acceso a un{" "}
            <strong className="text-[#0B4C4A]">panel web completo</strong> donde
            toda esa información se consolida automáticamente en tiempo real.
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "Métricas de producción y reproducción en un vistazo",
              "Alertas del día para no perder ningún evento",
              "Historial completo de cada animal con un clic",
              "Reportes exportables para el veterinario o el banco",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#53B04B]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#53B04B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Dashboard mockup ─────────────────── */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Browser bar */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 ml-2">
                app.mivaqui.com/dashboard
              </div>
              <RefreshCw className="w-3.5 h-3.5 text-gray-400" />
            </div>

            {/* Dashboard header */}
            <div className="bg-[#0B4C4A] px-5 py-3 flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-sm">MiVaqui Dashboard</p>
                <p className="text-green-300 text-xs">Finca Las Palmas · Actualizado ahora</p>
              </div>
              <span className="bg-[#53B04B]/20 text-[#53B04B] text-xs px-2.5 py-1 rounded-full font-medium border border-[#53B04B]/30">
                Vista de ejemplo
              </span>
            </div>

            {/* KPI cards */}
            <div className="p-4 grid grid-cols-3 gap-3">
              <KpiCard
                icon={Users}
                label="Total Animales"
                value="142"
                change="+3 este mes"
                positive
              />
              <KpiCard
                icon={TrendingUp}
                label="Tasa de Preñez"
                value="78%"
                change="+4% vs anterior"
                positive
              />
              <KpiCard
                icon={AlertTriangle}
                label="Alertas del Día"
                value="5"
                change="3 celos · 2 partos"
                positive={false}
                urgent
              />
            </div>

            {/* Mini chart area */}
            <div className="px-4 pb-4">
              <div className="bg-[#F5F7F4] rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-[#0B4C4A]">
                    Partos por mes
                  </p>
                  <Activity className="w-3.5 h-3.5 text-[#53B04B]" />
                </div>
                <div className="flex items-end gap-1.5 h-14">
                  {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 5 ? "#53B04B" : "#0B4C4A",
                        opacity: i === 5 ? 1 : 0.25 + i * 0.1,
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5">
                  {["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"].map((m) => (
                    <span key={m} className="text-[9px] text-gray-400 flex-1 text-center">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KpiCard({
  icon: Icon,
  label,
  value,
  change,
  positive,
  urgent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  change: string;
  positive: boolean;
  urgent?: boolean;
}) {
  return (
    <div className="bg-[#F5F7F4] rounded-xl p-3 flex flex-col gap-2">
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${urgent ? "bg-orange-100" : "bg-[#53B04B]/10"}`}>
        <Icon className={`w-4 h-4 ${urgent ? "text-orange-500" : "text-[#53B04B]"}`} />
      </div>
      <div>
        <p className="text-xs text-gray-400 leading-none">{label}</p>
        <p className="text-lg font-bold text-[#0B4C4A] leading-tight">{value}</p>
      </div>
      <span className={`text-[9px] font-medium ${positive ? "text-[#53B04B]" : "text-orange-500"}`}>
        {change}
      </span>
    </div>
  );
}
