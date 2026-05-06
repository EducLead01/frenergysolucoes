import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";
import { EsferaContactForm } from "@/components/esfera/EsferaContactForm";
import { GestaoTabs } from "@/components/gestao/GestaoTabs";
import { PhoneMockupGroup } from "@/components/gestao/PhoneMockupGroup";

const vantagens = [
  "Gerenciamento energético aplicado ao seu processo produtivo, visando o melhor aproveitamento com o menor custo operacional.",
  "Inteligência energética e de mercado, vislumbrando as melhores oportunidades para sua empresa economizar energia.",
  "Dados de energia em tempo real para consultas através do nosso App.",
  "Equipe especializada de engenheiros e técnicos para o acompanhamento da sua gestão energética.",
];

export default function GestaoDeEnergia() {
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
                  Gestão de Energia
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] leading-snug">
                  Profissionais qualificados para fazer a gestão de energia da sua empresa
                </h1>
                <p className="text-[#787878] text-base leading-relaxed">
                  Nossos especialistas unem conhecimento prático e tecnologia para entregar
                  uma consultoria completa em gestão de geração e consumo de energia,
                  mostrando onde sua empresa pode aplicar a economia gerada — seja no
                  consumo próprio de outras unidades consumidoras ou na revenda da energia
                  excedente.
                </p>
                <a
                  href="#contato"
                  className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Quero saber mais
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
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/casa-solar.jpeg"
                    alt="Casa com painéis solares"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        <GestaoTabs />

        {/* Seção: Vantagens */}
        <section className="bg-[#fafafa] py-16">
          <div className="container mx-auto px-6 max-w-5xl">

            <div className="flex flex-col lg:flex-row items-center gap-12">

              {/* Left: heading + intro + checklist */}
              <div className="flex-1 flex flex-col gap-5">
                <span
                  className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Vantagens
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] leading-snug">
                  Vantagens da{" "}
                  <span style={{ color: "#F0416E" }}>Frenergy Soluções</span>
                </h2>
                <p className="text-[#787878] text-base leading-relaxed">
                  Além de especialistas no mercado de energia, contamos com um software
                  qualificado para gestão de energia que tem tudo para reduzir os seus custos.
                </p>
                <p className="text-[#787878] text-base leading-relaxed">
                  Com o Sistema de Gerenciamento de Energia, sua empresa pode alcançar um
                  corte de{" "}
                  <strong className="text-[#4D4D4D]">até 26% nas despesas</strong>{" "}
                  relacionadas à conta e consumo.
                </p>
                <div className="flex flex-col gap-3">
                {vantagens.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-[#f0f0f0]"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-[#787878] text-sm leading-relaxed">{v}</p>
                  </div>
                ))}
                </div>
                <a
                  href="#contato"
                  className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Quero reduzir minha conta
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Right: phone mockup group */}
              <div className="flex-1 flex justify-center">
                <PhoneMockupGroup />
              </div>


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
