"use client";

import { useState } from "react";
import { Reveal } from "./AnimateOnScroll";

// ── Types ──────────────────────────────────────────────────────────────────

type FormData = {
  // Contacto
  nombre: string;
  finca: string;
  ubicacion: string;
  whatsapp: string;
  rol: string;
  // Perfil productivo
  tipoGanaderia: string;
  cantidadAnimales: string;
  // Digitalización
  registros: string[];
  // Dolor principal
  retos: string[];
  otroReto: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
type Status = "idle" | "loading" | "success" | "error";

// ── Constants ──────────────────────────────────────────────────────────────

const ROLES = ["Dueño", "Administrador", "Veterinario", "Mayordomo / Trabajador"];
const TIPOS_GANADERIA = ["Leche", "Carne", "Doble Propósito"];
const CANTIDADES = ["Menos de 50", "51 a 200", "Más de 200"];
const REGISTROS = ["Cuaderno / Papel", "Excel", "WhatsApp", "Memoria", "Software especializado"];
const RETOS = [
  "Se nos olvida anotar",
  "Tomar decisiones toma tiempo",
  "El personal no se adapta a la PC",
  "Pérdida de apuntes",
];

const INITIAL: FormData = {
  nombre: "",
  finca: "",
  ubicacion: "",
  whatsapp: "",
  rol: "",
  tipoGanaderia: "",
  cantidadAnimales: "",
  registros: [],
  retos: [],
  otroReto: "",
};

// ── Validation ─────────────────────────────────────────────────────────────

function validate(data: FormData): FormErrors {
  const e: FormErrors = {};
  if (!data.nombre.trim()) e.nombre = "El nombre es requerido";
  if (!data.finca.trim()) e.finca = "El nombre de la finca es requerido";
  if (!data.ubicacion.trim()) e.ubicacion = "La ubicación es requerida";
  if (!data.whatsapp.trim()) {
    e.whatsapp = "El WhatsApp es requerido";
  } else if (!/^\+?\d{10,15}$/.test(data.whatsapp.replace(/\s/g, ""))) {
    e.whatsapp = "Ingresa un número válido (mínimo 10 dígitos)";
  }
  if (!data.rol) e.rol = "Selecciona tu rol en la finca";
  if (!data.tipoGanaderia) e.tipoGanaderia = "Selecciona el tipo de ganadería";
  if (!data.cantidadAnimales) e.cantidadAnimales = "Selecciona la cantidad de animales";
  if (data.registros.length === 0) e.registros = "Selecciona al menos una opción";
  if (data.retos.length === 0 && !data.otroReto.trim()) e.retos = "Selecciona al menos un reto";
  return e;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function toggleArray(arr: string[], val: string): string[] {
  return arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];
}

// ── Sub-components ─────────────────────────────────────────────────────────

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-500">{msg}</p>;
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-semibold text-[#0B4C4A] mb-1.5">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-[#F5F7F4] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#53B04B] focus:ring-2 focus:ring-[#53B04B]/20 transition-all duration-200 disabled:opacity-50";

const errorInputClass =
  "w-full rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200 transition-all duration-200 disabled:opacity-50";

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={error ? errorInputClass : inputClass}
    />
  );
}

function RadioGroup({
  options,
  value,
  onChange,
  error,
  disabled,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const checked = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => !disabled && onChange(opt)}
            disabled={disabled}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-150 ${
              checked
                ? "bg-[#0B4C4A] text-white border-[#0B4C4A]"
                : error
                ? "bg-red-50 text-gray-600 border-red-200 hover:border-[#53B04B]"
                : "bg-[#F5F7F4] text-gray-600 border-gray-200 hover:border-[#53B04B] hover:bg-white"
            } disabled:opacity-50`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function CheckboxGroup({
  options,
  values,
  onChange,
  error,
  disabled,
}: {
  options: string[];
  values: string[];
  onChange: (vals: string[]) => void;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {options.map((opt) => {
        const checked = values.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => !disabled && onChange(toggleArray(values, opt))}
            disabled={disabled}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left border transition-all duration-150 ${
              checked
                ? "bg-[#53B04B]/10 border-[#53B04B] text-[#0B4C4A] font-medium"
                : error
                ? "bg-red-50 border-red-200 text-gray-600 hover:border-[#53B04B]"
                : "bg-[#F5F7F4] border-gray-200 text-gray-600 hover:border-[#53B04B] hover:bg-white"
            } disabled:opacity-50`}
          >
            <span
              className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border-2 transition-colors ${
                checked ? "bg-[#53B04B] border-[#53B04B]" : "border-gray-300"
              }`}
            >
              {checked && (
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-7 h-7 rounded-full bg-[#0B4C4A] text-white text-xs font-bold flex items-center justify-center shrink-0">
        {number}
      </span>
      <h3 className="text-base font-bold text-[#0B4C4A]">{title}</h3>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function FormularioPostulacion() {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const disabled = status === "loading";

  function set<K extends keyof FormData>(key: K, val: FormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstErr = document.querySelector("[data-field-error]");
      firstErr?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("loading");
    setErrors({});

    const payload = {
      ...formData,
      retos: formData.retos.length > 0 || formData.otroReto.trim()
        ? [...formData.retos, ...(formData.otroReto.trim() ? [`Otro: ${formData.otroReto.trim()}`] : [])]
        : [],
    };

    try {
      const res = await fetch("/api/postulacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  // ── Success state ──────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <section id="postulacion" className="bg-[#F5F7F4] py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-5">
          <Reveal animation="scale">
            <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
              <div className="w-16 h-16 bg-[#53B04B]/15 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#53B04B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B4C4A] mb-3">
                ¡Listo, {formData.nombre.split(" ")[0]}! 🎉
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                Recibimos la postulación de <strong className="text-[#0B4C4A]">{formData.finca}</strong>. Le
                contactaremos por WhatsApp en las próximas 48 horas para agendar su incorporación al piloto.
              </p>
              <p className="mt-5 text-sm text-[#53B04B] font-semibold">
                Gracias por hacer parte de esta revolución ganadera. ¡Estamos emocionados de acompañarlo en este camino hacia una finca más productiva y digitalizada!
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────
  return (
    <section id="postulacion" className="bg-[#F5F7F4] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal animation="blur-up" className="text-center mb-10">
          <span className="text-[#53B04B] font-semibold text-sm uppercase tracking-widest">
            Programa piloto gratuito
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-[#0B4C4A]">
            Postule su finca al piloto gratuito
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Seleccionamos <strong className="text-[#0B4C4A]">30 fincas</strong> para el primer piloto. Cupos limitados — primero en llegar, primero en entrar.
          </p>
        </Reveal>

        <Reveal animation="fade-up" delay={100}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl shadow-xl max-w-2xl mx-auto p-8 lg:p-10"
          >
            {/* ── Error banner ── */}
            {status === "error" && (
              <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 3h.01M12 4a8 8 0 100 16A8 8 0 0012 4z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-red-700">No pudimos enviar su postulación</p>
                  <p className="text-xs text-red-600 mt-0.5">Verifique su conexión e intente de nuevo.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="ml-auto text-xs font-semibold text-red-600 underline underline-offset-2 hover:text-red-800"
                >
                  Intentar de nuevo
                </button>
              </div>
            )}

            {/* ─────────────────────────────────────────────────────── */}
            {/* 1. Información de Contacto                              */}
            {/* ─────────────────────────────────────────────────────── */}
            <SectionHeader number="1" title="Información de Contacto" />
            <div className="flex flex-col gap-5 mb-8">
              <div data-field-error={errors.nombre ? "1" : undefined}>
                <Label required>Nombre Completo</Label>
                <TextInput
                  value={formData.nombre}
                  onChange={(v) => set("nombre", v)}
                  placeholder="Ej. Carlos Herrera"
                  error={errors.nombre}
                  disabled={disabled}
                />
                <FieldError msg={errors.nombre} />
              </div>

              <div data-field-error={errors.finca ? "1" : undefined}>
                <Label required>Nombre de la Finca</Label>
                <TextInput
                  value={formData.finca}
                  onChange={(v) => set("finca", v)}
                  placeholder="Ej. Finca Las Palmas"
                  error={errors.finca}
                  disabled={disabled}
                />
                <FieldError msg={errors.finca} />
              </div>

              <div data-field-error={errors.ubicacion ? "1" : undefined}>
                <Label required>Ubicación / Municipio / Departamento</Label>
                <TextInput
                  value={formData.ubicacion}
                  onChange={(v) => set("ubicacion", v)}
                  placeholder="Ej. Montería, Córdoba"
                  error={errors.ubicacion}
                  disabled={disabled}
                />
                <FieldError msg={errors.ubicacion} />
              </div>

              <div data-field-error={errors.whatsapp ? "1" : undefined}>
                <Label required>WhatsApp</Label>
                <TextInput
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(v) => set("whatsapp", v)}
                  placeholder="Ej. 3001234567"
                  error={errors.whatsapp}
                  disabled={disabled}
                />
                <FieldError msg={errors.whatsapp} />
              </div>

              <div data-field-error={errors.rol ? "1" : undefined}>
                <Label required>Rol en la finca</Label>
                <select
                  value={formData.rol}
                  onChange={(e) => set("rol", e.target.value)}
                  disabled={disabled}
                  className={errors.rol
                    ? "w-full rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-gray-800 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200 transition-all duration-200 disabled:opacity-50"
                    : "w-full rounded-xl border border-gray-200 bg-[#F5F7F4] px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#53B04B] focus:ring-2 focus:ring-[#53B04B]/20 transition-all duration-200 disabled:opacity-50"
                  }
                >
                  <option value="">Selecciona tu rol...</option>
                  {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
                <FieldError msg={errors.rol} />
              </div>
            </div>

            <div className="border-t border-gray-100 mb-8" />

            {/* ─────────────────────────────────────────────────────── */}
            {/* 2. Perfil Productivo                                     */}
            {/* ─────────────────────────────────────────────────────── */}
            <SectionHeader number="2" title="Perfil Productivo" />
            <div className="flex flex-col gap-5 mb-8">
              <div data-field-error={errors.tipoGanaderia ? "1" : undefined}>
                <Label required>Tipo de Ganadería</Label>
                <RadioGroup
                  options={TIPOS_GANADERIA}
                  value={formData.tipoGanaderia}
                  onChange={(v) => set("tipoGanaderia", v)}
                  error={errors.tipoGanaderia}
                  disabled={disabled}
                />
                <FieldError msg={errors.tipoGanaderia} />
              </div>

              <div data-field-error={errors.cantidadAnimales ? "1" : undefined}>
                <Label required>Cantidad aproximada de animales</Label>
                <RadioGroup
                  options={CANTIDADES}
                  value={formData.cantidadAnimales}
                  onChange={(v) => set("cantidadAnimales", v)}
                  error={errors.cantidadAnimales}
                  disabled={disabled}
                />
                <FieldError msg={errors.cantidadAnimales} />
              </div>
            </div>

            <div className="border-t border-gray-100 mb-8" />

            {/* ─────────────────────────────────────────────────────── */}
            {/* 3. Nivel de Digitalización                              */}
            {/* ─────────────────────────────────────────────────────── */}
            <SectionHeader number="3" title="Nivel de Digitalización" />
            <div className="mb-8" data-field-error={errors.registros ? "1" : undefined}>
              <Label required>¿Cómo llevan hoy los registros? (puede elegir varios)</Label>
              <CheckboxGroup
                options={REGISTROS}
                values={formData.registros}
                onChange={(v) => set("registros", v)}
                error={errors.registros}
                disabled={disabled}
              />
              <FieldError msg={errors.registros} />
            </div>

            <div className="border-t border-gray-100 mb-8" />

            {/* ─────────────────────────────────────────────────────── */}
            {/* 4. Dolor Principal                                       */}
            {/* ─────────────────────────────────────────────────────── */}
            <SectionHeader number="4" title="El Mayor Reto" />
            <div className="mb-8" data-field-error={errors.retos ? "1" : undefined}>
              <Label required>¿Cuál es tu mayor reto en el registro de datos?</Label>
              <CheckboxGroup
                options={RETOS}
                values={formData.retos}
                onChange={(v) => set("retos", v)}
                error={errors.retos}
                disabled={disabled}
              />
              {/* Opción "Otro" */}
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (!disabled) {
                      if (formData.retos.includes("__otro__")) {
                        set("retos", formData.retos.filter((v) => v !== "__otro__"));
                        set("otroReto", "");
                      } else {
                        set("retos", [...formData.retos, "__otro__"]);
                      }
                    }
                  }}
                  disabled={disabled}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left border w-full transition-all duration-150 ${
                    formData.retos.includes("__otro__")
                      ? "bg-[#53B04B]/10 border-[#53B04B] text-[#0B4C4A] font-medium"
                      : "bg-[#F5F7F4] border-gray-200 text-gray-600 hover:border-[#53B04B] hover:bg-white"
                  } disabled:opacity-50`}
                >
                  <span className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border-2 transition-colors ${
                    formData.retos.includes("__otro__") ? "bg-[#53B04B] border-[#53B04B]" : "border-gray-300"
                  }`}>
                    {formData.retos.includes("__otro__") && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  Otro
                </button>
                {formData.retos.includes("__otro__") && (
                  <input
                    type="text"
                    value={formData.otroReto}
                    onChange={(e) => set("otroReto", e.target.value)}
                    placeholder="Describe tu reto..."
                    disabled={disabled}
                    className={`mt-2 ${inputClass}`}
                  />
                )}
              </div>
              <FieldError msg={errors.retos} />
            </div>

            {/* ── CTA Button ── */}
            <button
              type="submit"
              disabled={disabled}
              className="w-full flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 active:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-base py-4 px-8 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/30"
            >
              {disabled ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Enviando postulación...
                </>
              ) : (
                "Postular mi finca al piloto gratuito"
              )}
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              Sin compromiso · Sin tarjeta de crédito · Le contactamos por WhatsApp
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
