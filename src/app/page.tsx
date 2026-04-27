import { Navbar } from "@/components/Navbar";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductsSection } from "@/components/ProductsSection";
import { AnimacaoSolar } from "@/components/AnimacaoSolar";
import { NumbersSection } from "@/components/NumbersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { BCCastSection } from "@/components/BCCastSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <ProductsSection />
        <AnimacaoSolar />
        <NumbersSection />
        <TestimonialsSection />
        <ClientsSection />
        <BCCastSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
