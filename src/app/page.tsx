import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductsSection } from "@/components/ProductsSection";
import { AnimacaoSolar } from "@/components/AnimacaoSolar";
import { CalculadoraSection } from "@/components/CalculadoraSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { EsferaHero } from "@/components/esfera/EsferaHero";
import { EsferaAudioTestimonials } from "@/components/esfera/EsferaAudioTestimonials";
import { EsferaStats } from "@/components/esfera/EsferaStats";
import { EsferaClientLogos } from "@/components/esfera/EsferaClientLogos";
import { EsferaBenefitsCards } from "@/components/esfera/EsferaBenefitsCards";
import { EsferaFAQ } from "@/components/esfera/EsferaFAQ";
import { EsferaContactForm } from "@/components/esfera/EsferaContactForm";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <AnimacaoSolar />
        <EsferaBenefitsCards />
        <ProductsSection />
        {/* — Esfera Simplifica clone — */}
        <EsferaHero />
        <EsferaAudioTestimonials />
        <EsferaStats />
        <EsferaClientLogos />
        <EsferaFAQ />
        <EsferaContactForm />
        <EsferaFooter />

        <CalculadoraSection />
      </main>
      <WhatsAppFloat />
    </>
  );
}
