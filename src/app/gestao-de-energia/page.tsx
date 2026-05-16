import type { ReactNode } from "react";
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

const iconDocumento = (
  <svg width="22" height="22" viewBox="0 0 30 30" fill="none">
    <path d="M27 9.03445V24.5517C27 26.4562 25.4562 28 23.5517 28H5.44828C3.54384 28 2 26.4562 2 24.5517V6.44824" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.2593 17.2244C22.2593 17.7004 21.8733 18.0864 21.3972 18.0864C20.9212 18.0864 20.5352 17.7004 20.5352 17.2244C20.5352 16.7483 20.9212 16.3623 21.3972 16.3623C21.8733 16.3623 22.2593 16.7483 22.2593 17.2244Z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23.5517 9.03448H5.01724C3.35086 9.03448 2 7.68362 2 6.01724C2 4.35086 3.35086 3 5.01724 3H20.1034C22.0079 3 23.5517 4.54384 23.5517 6.44828V9.03448ZM23.5517 9.03448H27Z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
      { texto: "Comparativo com a conta de luz tradicional", icon: iconDocumento },
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
      <main className="min-h-screen" style={{ fontFamily: "'Open Sans', sans-serif" }}>

        {/* Hero */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: "url('https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1600&q=80') center/cover no-repeat" }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "120px 32px 80px" }}>
            <p style={{ color: "#FFC10E", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Gestão de energia</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 4.5vw, 62px)", fontWeight: 900, maxWidth: 760, lineHeight: 1.15, marginBottom: 20 }}>
              Profissionais qualificados para gerir a energia da sua empresa.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 560, lineHeight: 1.65, marginBottom: 40 }}>
              Consultoria completa em geração e consumo de energia — do diagnóstico à otimização do retorno financeiro.
            </p>
            <a href="#contato" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(90deg, #F0416E, #FF5900)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "16px 36px", borderRadius: 999, textDecoration: "none" }}>
              Falar com especialista
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
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
