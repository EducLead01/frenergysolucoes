import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductsSection } from "@/components/ProductsSection";
import { AnimacaoSolar } from "@/components/AnimacaoSolar";
import { CalculadoraSection } from "@/components/CalculadoraSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { EsferaHero } from "@/components/esfera/EsferaHero";
import { EsferaTestimonial } from "@/components/esfera/EsferaTestimonial";
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
        <EsferaTestimonial
          quote="Depois da migração, percebemos uma economia significativa, que nos apoia no desenvolvimento e nos investimentos no Clube Jundiaiense."
          name="Hélio Sandoval"
          role="Diretor de Operações"
          company="Clube Jundiaiense"
        />
        <EsferaStats />
        <EsferaClientLogos />
        <EsferaTestimonial
          quote="É perceptível a atenção da Esfera na geração de negócios estruturados e focados no resultado satisfatório para nós. Tem sido uma experiência ótima."
          name="Antonio Mello"
          role="Presidente"
          company="SHB"
        />
        <EsferaFAQ />
        <EsferaContactForm />
        <EsferaFooter />

        <CalculadoraSection />
      </main>
      <WhatsAppFloat />
    </>
  );
}
