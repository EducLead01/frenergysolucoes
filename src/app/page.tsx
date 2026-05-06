import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { StatsBar } from "@/components/StatsBar";
import { ProductsSection } from "@/components/ProductsSection";
import { HomeModelos } from "@/components/home/HomeModelos";
import { HomeClientes } from "@/components/home/HomeClientes";
import { EsferaFAQ } from "@/components/esfera/EsferaFAQ";
import { EsferaContactForm } from "@/components/esfera/EsferaContactForm";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <StatsBar />
        <ProductsSection />
        <HomeModelos />
        <HomeClientes />
        <EsferaFAQ />
        <EsferaContactForm />
        <EsferaFooter />
      </main>
      <WhatsAppFloat />
    </>
  );
}
