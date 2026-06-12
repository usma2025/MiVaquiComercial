import Hero from "@/components/landing/Hero";
import Problema from "@/components/landing/Problema";
import ComoFunciona from "@/components/landing/ComoFunciona";
import Caracteristicas from "@/components/landing/Caracteristicas";
import PanelAdmin from "@/components/landing/PanelAdmin";
import ParaQuien from "@/components/landing/ParaQuien";
import TablaComparativa from "@/components/landing/TablaComparativa";
import Precios from "@/components/landing/Precios";
import PreguntasFrecuentes from "@/components/landing/PreguntasFrecuentes";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="problema">
          <Problema />
        </section>
        <section id="como-funciona">
          <ComoFunciona />
        </section>
        <section id="caracteristicas">
          <Caracteristicas />
        </section>
        <section id="panel">
          <PanelAdmin />
        </section>
        <section id="para-quien">
          <ParaQuien />
        </section>
        <section id="comparativa">
          <TablaComparativa />
        </section>
        <section id="precios">
          <Precios />
        </section>
        <section id="faq">
          <PreguntasFrecuentes />
        </section>
      </main>
      <Footer />
    </>
  );
}
