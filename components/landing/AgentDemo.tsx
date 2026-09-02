"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Mensaje {
  from: "user" | "agent";
  text: string;
}

// Guion de la conversación demo: recorre a propósito varias features reales
// (parto, potreros, alertas proactivas, finanzas, SINIGÁN) para que la
// animación funcione también como prueba visual de "todo esto ya existe".
const GUION: Mensaje[] = [
  { from: "user", text: "La 204 parió, hembra 🐄" },
  { from: "agent", text: "🐣 ¡Listo! Registré el parto de la 204 y le asigné la nueva cría." },
  { from: "user", text: "Muévala al potrero 3" },
  { from: "agent", text: "✅ Hecho. La 204 quedó en el Potrero 3." },
  { from: "agent", text: "🔔 Alerta: la 087 lleva 25 días sin diagnóstico de preñez." },
  { from: "user", text: "¿Cuánto llevo gastado este mes?" },
  { from: "agent", text: "💰 Este mes lleva $1.250.000, la mayoría en alimento y vacunas." },
  { from: "user", text: "Vacuné la 204 contra aftosa" },
  { from: "agent", text: "💉 Registrado. La 204 queda al día para SINIGÁN." },
];

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

function useConversationPlayer(guion: Mensaje[]) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function play() {
      while (!cancelled) {
        for (let i = 0; i < guion.length; i++) {
          const msg = guion[i];
          if (msg.from === "agent") {
            setTyping(true);
            await sleep(850 + Math.random() * 400);
            if (cancelled) return;
            setTyping(false);
          } else {
            await sleep(350);
          }
          if (cancelled) return;
          setVisibleCount(i + 1);
          await sleep(1500 + msg.text.length * 25);
          if (cancelled) return;
        }
        await sleep(2600);
        if (cancelled) return;
        setVisibleCount(0);
        setTyping(false);
        await sleep(700);
      }
    }

    play();
    return () => {
      cancelled = true;
    };
  }, [guion]);

  return { visibleCount, typing };
}

function TypingDots() {
  return (
    <div className="bg-[#202C33] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1 shadow-md w-fit">
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
}

function Burbuja({ msg }: { msg: Mensaje }) {
  const isUser = msg.from === "user";
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`text-sm rounded-2xl px-4 py-2.5 max-w-[85%] shadow-md ${
          isUser
            ? "bg-[#005C4B] text-white rounded-tr-sm"
            : "bg-[#202C33] text-white rounded-tl-sm"
        }`}
      >
        {msg.text}
      </div>
    </motion.div>
  );
}

// Inclinación 3D que sigue el cursor -- el "toque exótico" pedido, mismo
// espíritu que las páginas de producto de Apple (perspectiva + spring, no
// un simple hover). En móvil no hay mousemove, así que simplemente no se
// activa y el teléfono se queda plano.
function TiltPhone({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-fit mx-auto"
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </div>
  );
}

export function AgentDemo() {
  const { visibleCount, typing } = useConversationPlayer(GUION);
  const scrollRef = useRef<HTMLDivElement>(null);
  const mensajesVisibles = GUION.slice(0, visibleCount);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visibleCount, typing]);

  return (
    <div className="relative">
      {/* Glow ambiental detrás del teléfono */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-[#53B04B]/20 blur-3xl animate-pulse" />
      </div>

      <TiltPhone>
        <div className="relative w-72 sm:w-80">
          <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl shadow-black/60 border border-gray-700">
            <div className="bg-gray-800 rounded-[2rem] overflow-hidden">
              {/* Status bar */}
              <div className="flex items-center justify-between px-5 py-2 text-white text-xs">
                <span className="font-semibold">9:41</span>
                <span className="w-16 h-3 rounded-full bg-white/10" />
              </div>

              {/* WhatsApp header */}
              <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#53B04B] flex items-center justify-center text-white text-lg font-bold shadow-md">
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
                ref={scrollRef}
                className="bg-[#0d1b2a] h-80 px-3 py-4 flex flex-col gap-3 overflow-hidden"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}
              >
                <AnimatePresence mode="popLayout">
                  {mensajesVisibles.map((msg, i) => (
                    <Burbuja key={i} msg={msg} />
                  ))}
                  {typing && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <TypingDots />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input bar */}
              <div className="bg-[#1f2c34] px-3 py-2 flex items-center gap-2">
                <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-gray-400 text-xs">
                  Escribe un mensaje...
                </div>
              </div>
            </div>
          </div>
        </div>
      </TiltPhone>
    </div>
  );
}
