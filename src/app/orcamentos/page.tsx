import { Navbar } from "@/components/Navbar";
import { EsferaContactForm } from "@/components/esfera/EsferaContactForm";
import { CalculadoraSection } from "@/components/CalculadoraSection";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

export default function Orcamentos() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div id="contato"><EsferaContactForm /></div>
        <CalculadoraSection />
      </main>
      <EsferaFooter />
    </>
  );
}
