import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

export default function ProdutoResidencial() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: "'Open Sans', sans-serif" }}>

        {/* Hero */}
        <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
          <Image src="/images/hero01.jpeg" alt="Energia solar residencial" fill className="object-cover" priority />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
          <div style={{ position: "absolute", bottom: 0, right: "8%", zIndex: 1, display: "flex", alignItems: "flex-end" }}>
            <Image
              src="/images/eng.png"
              alt="Engenheiro solar"
              width={340}
              height={520}
              className="h-[70vh] w-auto object-contain object-bottom"
              priority
            />
          </div>
        </section>

        {/* Intro */}
        <section className="pt-20 pb-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 relative">
                <div className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3" style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }} />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image src="/images/08.png" alt="Energia solar residencial" fill className="object-cover" />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <span className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full" style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}>Residencial</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] leading-snug">Economia real na conta de luz <span style={{ color: "#FF5900" }}>todo mês</span></h2>
                <p className="text-[#787878] text-base leading-relaxed">Sistemas de 3 a 20 kWp são ideais para casas e apartamentos. Com energia solar, você deixa de pagar à distribuidora e passa a produzir sua própria eletricidade, com retorno garantido em até 4 anos.</p>
                <p className="text-[#787878] text-base leading-relaxed">A Frenergy realiza a visita técnica, dimensiona o sistema ideal para o seu perfil de consumo, cuida de toda a documentação e entrega o projeto instalado e funcionando. Você só precisa acompanhar a economia.</p>
                <a href="/orcamentos" className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90" style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}>
                  Quero economizar
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-[#F7F7F7]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">Vantagens para a <span style={{ color: "#FF5900" }}>sua casa</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <svg width="32" height="32" viewBox="0 0 30 31" fill="none"><rect x="1" y="17.9" width="5.96" height="8.9" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/><rect x="12.08" y="13.08" width="5.96" height="13.73" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/><rect x="23.04" y="3.81" width="5.96" height="23" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/></svg>, title: "Retorno em até 4 anos", text: "Economia de até 95% na conta de luz desde o primeiro mês, com sistema de 25 anos de vida útil." },
                { icon: <svg width="32" height="32" viewBox="0 0 30 30" fill="none"><path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2"/><path d="M15 8v7l4.5 2.5" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Instalação sem obras", text: "Processo rápido e limpo. A instalação é feita em 1 a 2 dias sem grandes intervenções na estrutura." },
                { icon: <svg width="32" height="32" viewBox="0 0 30 31" fill="none"><path d="M4 15.64C4 9.38 9.07 4.31 15.33 4.31c6.26 0 11.34 5.07 11.34 11.33 0 6.26-5.08 11.34-11.34 11.34C9.07 26.98 4 21.9 4 15.64z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2"/><path d="M11.82 16.82l2.33 2.33 4.66-4.66" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Valoriza seu imóvel", text: "Imóveis com energia solar são avaliados com até 8% a mais no mercado imobiliário." },
              ].map((b, i) => (
                <div key={i} className="bg-white rounded-2xl p-7 shadow-sm flex flex-col gap-4">
                  {b.icon}
                  <h3 className="font-bold text-[#4D4D4D] text-base">{b.title}</h3>
                  <p className="text-[#787878] text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <EsferaFooter />
    </>
  );
}
