import Navbar from "@/components/landing/Navbar";
import FormularioPostulacion from "@/components/landing/FormularioPostulacion";
import Footer from "@/components/landing/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postular al piloto gratuito — MiVaqui",
  description: "Aplica para el programa piloto gratuito de MiVaqui. Cupos limitados para las primeras 30 fincas.",
};

export default function PostulacionPage() {
  return (
    <>
      <Navbar />
      <main>
        <FormularioPostulacion />
      </main>
      <Footer />
    </>
  );
}
