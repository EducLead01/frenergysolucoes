import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";
import { EsferaContactForm } from "@/components/esfera/EsferaContactForm";

export default function Cases() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">

        {/* Hero */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              {/* Image */}
              <div className="flex-1 w-full flex justify-center">
                <Image
                  src="/images/icone-painel-solar-600x523.png"
                  alt="Técnico instalando painéis solares"
                  width={600}
                  height={523}
                  className="w-full max-w-sm lg:max-w-md object-contain"
                  priority
                />
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col gap-5">
                <span
                  className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Cases de Sucesso
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] leading-snug">
                  Empresas que já economizam com energia solar
                </h1>
                <p className="text-[#787878] text-base leading-relaxed">
                  Conheça os clientes que transformaram sua conta de energia com a
                  Frenergy. Instalações residenciais, comerciais e industriais com
                  resultados reais de economia.
                </p>
                <a
                  href="#contato"
                  className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Quero economizar também
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </section>

        <EsferaContactForm />
      </main>
      <EsferaFooter />
    </>
  );
}
