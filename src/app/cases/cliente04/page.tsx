import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";
import { EsferaContactForm } from "@/components/esfera/EsferaContactForm";

const fotos: string[] = [];

export default function Cliente04() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24" style={{ fontFamily: "'Open Sans', sans-serif" }}>

        {/* Hero */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              <div className="flex-1 flex flex-col gap-5">
                <span
                  className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Case de Sucesso
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] leading-snug">
                  Cliente 04
                </h1>
                <p className="text-[#787878] text-base leading-relaxed">
                  Descrição do case: contexto do cliente, desafio, solução aplicada e resultado obtido com a Frenergy.
                </p>
                <a
                  href="#contato"
                  className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Quero um resultado igual
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="flex-1 w-full relative">
                <div
                  className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                  style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white">
                  <Image
                    src="/images/icone-painel-solar-600x523.png"
                    alt="Case Cliente 04"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="bg-[#fafafa] py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fotos.length > 0 ? fotos.map((src, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#f0f0f0]">
                  <Image src={src} alt={`Foto ${i + 1}`} fill className="object-cover" />
                </div>
              )) : Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl aspect-[4/3] bg-[#f0f0f0] border-2 border-dashed border-[#ddd] flex items-center justify-center">
                  <span className="text-[#bbb] text-sm font-medium">Foto {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="contato">
          <EsferaContactForm />
        </div>
      </main>
      <EsferaFooter />
    </>
  );
}
