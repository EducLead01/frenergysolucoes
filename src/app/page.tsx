import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductsSection } from "@/components/ProductsSection";
import { AnimacaoSolar } from "@/components/AnimacaoSolar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { EsferaHero } from "@/components/esfera/EsferaHero";
import { EsferaStats } from "@/components/esfera/EsferaStats";
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
        <EsferaStats />
        <EsferaFAQ />
        <EsferaContactForm />

        {/* Quem somos */}
        <section style={{ background: "#fff", padding: "80px 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ color: "#4D4D4D", fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, marginBottom: 16 }}>Quem somos</h2>
            <p style={{ color: "#787878", fontSize: 15, lineHeight: 1.8, maxWidth: 800, marginBottom: 48 }}>
              A Frenergy Soluções é uma empresa goiana especializada em energia solar fotovoltaica, presente em todo o Centro-Oeste. Levamos tecnologia de ponta, economia real e impacto positivo para condomínios, empresas e residências de Goiás e região.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
              {[
                { title: "Missão", text: "Democratizar o acesso à energia solar em Goiás, entregando soluções completas com qualidade, agilidade e o melhor retorno sobre investimento para cada cliente." },
                { title: "Visão", text: "Ser a maior referência em energia solar do Centro-Oeste, expandindo nossa presença e transformando a forma como condomínios, empresas e famílias consomem energia." },
                { title: "Valores", text: "Transparência, inovação, compromisso com o cliente e responsabilidade ambiental guiam cada projeto da Frenergy — do primeiro contato à conta de luz zerada." },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "4px solid #FF5900", paddingTop: 20 }}>
                  <h4 style={{ color: "#0d3347", fontWeight: 800, fontSize: 17, marginBottom: 12 }}>{item.title}</h4>
                  <p style={{ color: "#787878", fontSize: 14, lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EsferaFooter />
      </main>
      <WhatsAppFloat />
    </>
  );
}
