import type { ReactNode } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";
import { EsferaContactForm } from "@/components/esfera/EsferaContactForm";
import { GestaoTabs } from "@/components/gestao/GestaoTabs";
import { PhoneMockupGroup } from "@/components/gestao/PhoneMockupGroup";

const iconBarras = (
  <svg width="22" height="22" viewBox="0 0 30 31" fill="none">
    <rect x="1" y="17.9111" width="5.95829" height="8.89792" rx="2.97915" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/>
    <rect x="12.0781" y="13.0825" width="5.95829" height="13.7265" rx="2.97915" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/>
    <rect x="23.042" y="3.80908" width="5.95829" height="23" rx="2.97915" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/>
  </svg>
);

const iconCheck = (
  <svg width="22" height="22" viewBox="0 0 30 31" fill="none">
    <path d="M4 15.6431C4 9.38349 9.07441 4.30908 15.334 4.30908C21.5936 4.30908 26.668 9.38349 26.668 15.6431C26.668 21.9027 21.5936 26.9771 15.334 26.9771C9.07441 26.9771 4 21.9027 4 15.6431Z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.8167 16.8154L12.4947 18.2605C13.0321 19.4058 14.6362 19.4718 15.2659 18.3745L18.8515 12.1255" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const vantagens: Array<{ titulo: string; descricao: string; itens: Array<{ texto: string; icon: ReactNode }> }> = [
  {
    titulo: "Acompanhe sua economia em tempo real",
    descricao: "Visualize quanto sua usina está economizando a cada dia, mês e ano, com indicadores claros que mostram o impacto real no seu bolso.",
    itens: [
      { texto: "Economia diária, mensal e anual", icon: iconBarras },
      { texto: "Comparativo com a conta de luz tradicional", icon: iconCheck },
      { texto: "Projeção de economia futura", icon: iconCheck },
    ],
  },
  {
    titulo: "Receba alertas e notificações inteligentes",
    descricao: "Seja avisado sobre qualquer mudança no funcionamento do sistema, garantindo que sua usina opere sempre no máximo desempenho.",
    itens: [
      { texto: "Alertas de queda de geração", icon: iconCheck },
      { texto: "Notificações de manutenção preventiva", icon: iconCheck },
      { texto: "Avisos de falhas e anomalias", icon: iconCheck },
    ],
  },
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
                <div className="flex flex-col gap-6">
                {vantagens.map((v, i) => (
                  <div key={i} className="flex flex-col gap-3 bg-white rounded-xl p-5 shadow-sm border border-[#f0f0f0]">
                    <h3 className="text-base font-bold text-[#4D4D4D]">{v.titulo}</h3>
                    <p className="text-[#787878] text-sm leading-relaxed">{v.descricao}</p>
                    <ul className="flex flex-col gap-2">
                      {v.itens.map((item, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="shrink-0">{item.icon}</span>
                          <span className="text-[#787878] text-sm">{item.texto}</span>
                        </li>
                      ))}
                    </ul>
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

              {/* Right: phone mockup group — aparece primeiro no mobile */}
              <div className="flex-1 flex justify-center order-first lg:order-last">
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
