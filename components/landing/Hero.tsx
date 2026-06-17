import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg-gradient text-white">
      {/* ── Morphing blobs ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-1 absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-[#53B04B]/15 animate-float-slow" />
        <div className="blob-2 absolute -bottom-32 -left-32 w-80 h-80 bg-[#53B04B]/10 animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#53B04B]/4 animate-spin-slow border border-[#53B04B]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#53B04B]/6 animate-spin-slow-r" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ── Left: Copy ─────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          {/* Pill badge */}
          <span className="animate-fade-in-up inline-flex items-center gap-2 bg-[#53B04B]/20 text-[#53B04B] border border-[#53B04B]/40 rounded-full px-4 py-1.5 text-sm font-semibold w-fit">
            <span className="w-2 h-2 rounded-full bg-[#53B04B] animate-pulse" />
            100% por WhatsApp · Sin apps extra
          </span>

          {/* H1 — gradient accent + staggered words */}
          <h1 className="animate-fade-in-up animation-delay-150 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            ¿Cuántos terneros y plata perdió este año por no saber las{" "}
            <span className="text-gradient-green">fechas exactas</span> de su hato?
          </h1>

          <p className="animate-fade-in-up animation-delay-300 text-lg text-gray-300 leading-relaxed max-w-lg">
            MiVaqui convierte su WhatsApp en el asistente ganadero que nunca
            duerme. Usted escribe como siempre, nosotros registramos,
            calculamos y le avisamos.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/postulacion"
              className="animate-glow-pulse flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-200 hover:-translate-y-1 w-full sm:w-auto"
            >
              <RocketIcon className="w-6 h-6 shrink-0" />
              Aplicar al piloto gratuito
            </Link>
          </div>

          <p className="animate-fade-in-up animation-delay-600 text-sm text-gray-400">
            Sin tarjeta de crédito · Sin descargas · Empiece hoy mismo
          </p>

          {/* Mini social proof */}
          <div className="animate-fade-in-up animation-delay-800 flex items-center gap-3 pt-2">
            <div className="flex -space-x-2">
              {["🧑‍🌾","👨‍🌾","🧑‍🤝‍🧑","👩‍🌾"].map((e, i) => (
                <span key={i} className="w-8 h-8 rounded-full bg-[#53B04B]/20 border-2 border-[#0B4C4A] flex items-center justify-center text-sm">{e}</span>
              ))}
            </div>
            <p className="text-sm text-gray-300">
              <span className="text-white font-semibold">+100 ganaderos</span> interesados en utilizar MiVaqui
            </p>
          </div>
        </div>

        {/* ── Right: Phone mockup ─────────────────────────── */}
        <div className="flex justify-center lg:justify-end animate-slide-in-right">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-72 sm:w-80">
      {/* Phone shell */}
      <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl shadow-black/60 border border-gray-700">
        <div className="bg-gray-800 rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-2 text-white text-xs">
            <span className="font-semibold">9:41</span>
            <div className="flex gap-1 items-center">
              <SignalIcon /><WifiIcon /><BatteryIcon />
            </div>
          </div>

          {/* WhatsApp header */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#53B04B] flex items-center justify-center text-white text-lg font-bold shadow-md animate-float-slow">
              🐄
            </div>
            <div>
              <p className="text-white font-semibold text-sm">MiVaqui</p>
              <p className="text-green-300 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                en línea
              </p>
            </div>
          </div>

          {/* Chat area */}
          <div
            className="bg-[#0d1b2a] min-h-64 px-3 py-4 flex flex-col gap-3"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
          >
            <div className="flex justify-end animate-fade-in-up animation-delay-600">
              <div className="bg-[#005C4B] text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] shadow-md">
                <p>La 204 parió una hembra 🐮</p>
                <p className="text-[10px] text-green-300 text-right mt-1">10:23 ✓✓</p>
              </div>
            </div>

            <div className="flex justify-start animate-fade-in-up animation-delay-800">
              <div className="bg-[#202C33] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1 shadow-md">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>

            <div className="flex justify-start animate-fade-in-up animation-delay-1000">
              <div className="bg-[#202C33] text-white text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-md">
                <p>✅ Entendido. Registro exitoso para la <strong>vaca 204</strong>. ¿Tiene número de arete?</p>
                <p className="text-[10px] text-gray-400 text-right mt-1">10:23</p>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div className="bg-[#1f2c34] px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-gray-400 text-xs">
              Escribe un mensaje...
            </div>
            <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center">
              <MicIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating stats badge */}
      <div className="animate-pop-in animation-delay-1200 animate-float-delay absolute -left-8 top-14 bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-2xl text-xs font-semibold border border-gray-100">
        <p className="text-[#53B04B] font-bold text-base">+320</p>
        <p className="text-gray-500">registros hoy</p>
      </div>

      {/* Second floating badge */}
      <div className="animate-pop-in animation-delay-1000 animate-float absolute -right-6 bottom-20 bg-[#0B4C4A] text-white rounded-2xl px-3 py-2.5 shadow-xl text-xs font-semibold">
        <p className="text-[#53B04B]">✓ Alerta enviada</p>
        <p className="text-gray-300 text-[10px]">Celo vaca 087</p>
      </div>
    </div>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function MicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}
function SignalIcon() {
  return <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M1 6l6 6 5-5 5 5 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>;
}
function WifiIcon() {
  return <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>;
}
function BatteryIcon() {
  return <svg className="w-4 h-3 text-white" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="0.75" y="0.75" width="18.5" height="10.5" rx="2"/><path d="M19.25 4.25v3.5A1.75 1.75 0 0 1 21 6a1.75 1.75 0 0 1-1.75-1.75z" fill="currentColor" stroke="none"/><rect x="2.5" y="2.5" width="14" height="7" rx="1" fill="currentColor" stroke="none"/></svg>;
}
