"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";

const NAVY = "#091B30";
const YELLOW = "#FFC10E";

const products = [
  {
    id: 1,
    title: "Linha Residencial",
    desc: "Seu banho não será mais o mesmo! O prazer e a sensação de se tomar um banho quente sem custos",
    color: NAVY,
    textColor: "#fff",
    btnColor: YELLOW,
    btnText: "#000",
    img: "https://centersol.com.br/wp-content/uploads/2024/05/1.png",
  },
  {
    id: 2,
    title: "Grande Porte",
    desc: "Os reservatórios de grande porte é um diferencial da Center Sol. Suas características construtivas",
    color: YELLOW,
    textColor: "#000",
    btnColor: NAVY,
    btnText: "#fff",
    img: "https://centersol.com.br/wp-content/uploads/2024/05/2.png",
  },
  {
    id: 3,
    title: "Linha Piscina",
    desc: "Instalar o coletor solar para piscina permite a todos usufruir o máximo de sua piscina",
    color: NAVY,
    textColor: "#fff",
    btnColor: YELLOW,
    btnText: "#000",
    img: "https://centersol.com.br/wp-content/uploads/2024/05/3.png",
  },
  {
    id: 4,
    title: "Econômica e Rural",
    desc: "A Center Sol possui em sua linha de produção de aquecedores este equipamento versátil e econômico",
    color: NAVY,
    textColor: "#fff",
    btnColor: YELLOW,
    btnText: "#000",
    img: "https://centersol.com.br/wp-content/uploads/2024/05/4.png",
  },
  {
    id: 5,
    title: "Coletores Residenciais",
    desc: "Responsável por absorver a radiação solar ao longo do dia e transformá-la em calor.",
    color: YELLOW,
    textColor: "#000",
    btnColor: NAVY,
    btnText: "#fff",
    img: "https://centersol.com.br/wp-content/uploads/2024/05/5.png",
  },
];


export default function Condominios() {
  const [openSpec, setOpenSpec] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", color: "#333" }}>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
        @keyframes ticker-anim {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track { animation: ticker-anim 18s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }
        .icon-cards-grid { transform: translateY(-50%); margin-bottom: -40px; }
        @media (max-width: 768px) {
          .icon-cards-grid { transform: none; margin-bottom: 0; padding-top: 32px; }
        }
        .cs-btn-yellow {
          display: inline-block;
          background: ${YELLOW};
          color: #000;
          font-weight: 700;
          font-size: 13px;
          padding: 12px 28px;
          border-radius: 4px;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: opacity 0.2s;
        }
        .cs-btn-yellow:hover { opacity: 0.85; }
        .cs-btn-navy {
          display: inline-block;
          background: ${NAVY};
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          padding: 12px 28px;
          border-radius: 4px;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: opacity 0.2s;
        }
        .cs-btn-navy:hover { opacity: 0.85; }
        .download-btn {
          display: block;
          background: ${YELLOW};
          color: #000;
          font-weight: 700;
          font-size: 13px;
          padding: 14px 32px;
          border-radius: 4px;
          text-decoration: none;
          letter-spacing: 0.5px;
          text-align: center;
          transition: opacity 0.2s;
          margin-bottom: 12px;
        }
        .download-btn:hover { opacity: 0.85; }
        .form-input {
          width: 100%;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 12px 14px;
          font-family: Montserrat, sans-serif;
          font-size: 14px;
          outline: none;
          margin-bottom: 12px;
          box-sizing: border-box;
        }
        .form-input:focus { border-color: ${YELLOW}; }
      `}</style>

      {/* ── Hero ── */}
      <section style={{
        position: "relative",
        minHeight: 600,
        display: "flex",
        alignItems: "center",
        background: `url('https://centersol.com.br/wp-content/uploads/2024/04/parallax.png') center/cover no-repeat`,
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 32px" }}>
          <p style={{ color: "#FFC10E", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
            Energia solar para condomínios
          </p>
          <h2 style={{ color: "#fff", fontSize: "clamp(32px, 4.5vw, 58px)", fontWeight: 900, maxWidth: 700, lineHeight: 1.15, marginBottom: 16 }}>
            O ativo que reelege síndicos.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 400, maxWidth: 560, lineHeight: 1.6, marginBottom: 36 }}>
            Economia que aparece na conta e na assembleia.
          </p>
          <a
            href="#contato"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(90deg, #F0416E, #FF5900)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "14px 32px", borderRadius: 999, textDecoration: "none", transition: "opacity 0.2s" }}
          >
            Solicitar estudo do seu condomínio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)", overflow: "hidden", padding: "10px 0", whiteSpace: "nowrap" }}>
        <div className="ticker-track" style={{ display: "inline-flex", gap: "40px", width: "max-content" }}>
          {[...Array(8)].flatMap(() => [
            "ENERGIA SOLAR PARA CONDOMÍNIOS",
            "•",
          ]).map((t, i) => (
            <span key={i} style={{ fontWeight: 700, fontSize: 13, color: "#000", letterSpacing: 1 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <section id="sobre" style={{ background: "#fff", paddingBottom: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px 0" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center", paddingBottom: 60 }}>
            <div style={{ flex: "1 1 380px" }}>
              <h2 style={{ color: "#4D4D4D", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>
                O grupo Frenergy Soluções está presente em todo{" "}
                <span style={{ color: "#FF5900" }}>centro oeste brasileiro</span>
              </h2>
              <a href="#contato" className="cs-btn-yellow">SEJA UM REVENDEDOR</a>
            </div>
            <div style={{ flex: "1 1 320px", display: "flex", justifyContent: "center" }}>
              <Image
                src="/images/centersol-tecnico.png"
                alt="Técnico Center Sol"
                width={520}
                height={280}
                style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features strip com icon cards sobrepostos ── */}
      <section style={{ background: NAVY, paddingTop: 0 }}>
        {/* Icon cards — sobrepostos sobre a transição branco→navy */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div className="icon-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { label: "Empresa pioneira em Aquecimento solar.", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 175" style={{ width: 80, height: 80 }}><style>{`.s0{fill:#FFC100}.s1{fill:#00142D}`}</style><circle className="s0" cx="87.5" cy="87.5" r="87.5"/><path className="s1" d="M139.7,131l-22.2-40.7c-0.3-0.6-0.9-0.9-1.6-0.9H59.1c-0.7,0-1.3,0.4-1.6,0.9L35.3,131c-0.3,0.6-0.3,1.2,0,1.8c0.3,0.5,0.9,0.9,1.6,0.9h6.2v8.1c0,1,0.8,1.8,1.8,1.8h85.1c1,0,1.8-0.8,1.8-1.8v-8.1h6.2c0.6,0,1.2-0.3,1.6-0.9C140,132.3,140,131.6,139.7,131z"/><path className="s1" d="M65.9,56.6h4.5c0.4,3.4,1.7,6.5,3.7,9L71,68.8c-0.7,0.7-0.7,1.9,0,2.6c0.7,0.7,1.9,0.7,2.6,0l3.2-3.2c2.5,2,5.6,3.4,9,3.7v4.5c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8v-4.5c3.4-0.4,6.5-1.7,9-3.7l3.2,3.2c0.7,0.7,1.9,0.7,2.6,0c0.7-0.7,0.7-1.9,0-2.6l-3.2-3.2c2-2.5,3.4-5.6,3.7-9h4.5c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8h-4.5c-0.4-3.4-1.7-6.5-3.7-9l3.2-3.2c0.7-0.7,0.7-1.9,0-2.6c-0.7-0.7-1.9-0.7-2.6,0l-3.2,3.2c-2.5-2-5.6-3.4-9-3.7v-4.5c0-1-0.8-1.8-1.8-1.8s-1.8,0.8-1.8,1.8v4.5c-3.4,0.4-6.5,1.7-9,3.7l-3.2-3.2c-0.7-0.7-1.9-0.7-2.6,0c-0.7,0.7-0.7,1.9,0,2.6l3.2,3.2c-2,2.5-3.4,5.6-3.7,9h-4.5c-1,0-1.8,0.8-1.8,1.8S64.9,56.6,65.9,56.6z M87.5,41.2c7.5,0,13.6,6.1,13.6,13.6S95,68.4,87.5,68.4S73.9,62.3,73.9,54.8S80,41.2,87.5,41.2z"/></svg> },
              { label: "Preços e condições especiais para revenda.", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 175" style={{ width: 80, height: 80 }}><style>{`.s0{fill:#FFC100}.s1{fill:#00142D}`}</style><ellipse className="s0" cx="87.5" cy="87.5" rx="87.5" ry="87.5"/><path className="s1" d="M125.5,60.4h-16.3v-6.8c0-12.2-9.9-22.1-22.1-22.1C74.9,31.4,65,41.3,65,53.5v6.8H49.5c-1,0-1.8,0.8-1.8,1.8v79.6c0,1,0.8,1.8,1.8,1.8h76c1,0,1.8-0.8,1.8-1.8V62.2C127.3,61.2,126.5,60.4,125.5,60.4z M68.6,53.5c0-10.2,8.3-18.5,18.5-18.5c10.2,0,18.5,8.3,18.5,18.5v6.8h-37V53.5z M123.7,140H51.3V64h13.7v11.7c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8V64h37v11.7c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8V64h14.5V140z"/></svg> },
              { label: "Ampla experiência em desenvolvimento e distribuição de produtos.", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 175" style={{ width: 80, height: 80 }}><style>{`.s0{fill:#FFC100}.s1{fill:#00142D}`}</style><path className="s0" d="M175,87.5c0,48.3-39.2,87.5-87.5,87.5S0,135.8,0,87.5C0,39.2,39.2,0,87.5,0S175,39.2,175,87.5z"/><path className="s1" d="M141.8,91.6h-1.4c-6,0-11.4,3.1-14.5,7.8V89c2.9-2.5,13.8-12.9,13.8-25.8c0-14.5-13.9-25.9-14.4-26.3c-0.7-0.5-1.6-0.5-2.3,0c-0.6,0.5-14.4,11.9-14.4,26.3c0,12.8,10.9,23.2,13.8,25.8v10.4c-3.1-4.7-8.5-7.8-14.5-7.8h-1.4c-1,0-1.8,0.8-1.8,1.8v1.4c0,9.6,7.8,17.5,17.5,17.5h0.2v3.9c0,10.3-8.4,18.7-18.7,18.7H69.8c-10.3,0-18.7-8.4-18.7-18.7V87.3c8.6-0.5,15.4-7.6,15.4-16.2V54c0-1-0.8-1.8-1.8-1.8H51.3c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h11.6v15.3c0,6.9-5.6,12.5-12.5,12.5s-12.5-5.6-12.5-12.5V55.8h11.6c1,0,1.8-0.8,1.8-1.8S51,52.2,50,52.2H35.4c-1,0-1.8,0.8-1.8,1.8v17.1c0,9.6,7.8,17.5,17.5,17.5h0.2v27.6c0,12.3,10,22.3,22.3,22.3h35.3c12.3,0,22.3-10,22.3-22.3v-3.9h0.2c9.6,0,17.5-7.8,17.5-17.5v-1.4C143.6,92.4,142.8,91.6,141.8,91.6z"/></svg> },
              { label: "Energia limpa, natural, renovável, segura e 100% gratuita.", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 175" style={{ width: 80, height: 80 }}><style>{`.s0{fill:#FFC100}.s1{fill:#00142D}`}</style><path className="s0" d="M175,87.5c0,48.3-39.2,87.5-87.5,87.5S0,135.8,0,87.5C0,39.2,39.2,0,87.5,0S175,39.2,175,87.5z"/><path className="s1" d="M93.4,31.4H81.6c-17.2,0-31.2,14-31.2,31.1v12.3c0,10.4,5.2,20,13.8,25.8c2.8,1.8,4.5,4.9,4.5,8.2v8.9c0,1,0.8,1.8,1.8,1.8h32.3c1,0,1.8-0.8,1.8-1.8v-8.9c0-3.3,1.7-6.4,4.5-8.2c8.7-5.8,13.8-15.5,13.8-25.8V62.6C124.5,45.4,110.5,31.4,93.4,31.4z M120.9,74.9c0,8.9-4.5,17.1-11.9,22.1c-3.9,2.6-6.2,6.9-6.2,11.5v7.1H72.2v-7.1c0-4.6-2.3-8.9-6.2-11.5C59,92,54.5,83.8,54.5,74.9V62.6c0-15.2,12.4-27.6,27.6-27.6h11.8c15.2,0,27.6,12.4,27.6,27.6V74.9z"/><path className="s1" d="M103.3,119.2H71.7c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8h31.6c1,0,1.8-0.8,1.8-1.8S104.3,119.2,103.3,119.2z"/><path className="s1" d="M100.5,125.7H74.5c-1,0-1.8,0.8-1.8,1.8c0,7.5,6.1,13.6,13.6,13.6h2.4c7.5,0,13.6-6.1,13.6-13.6C102.3,126.5,101.5,125.7,100.5,125.7z"/></svg> },
            ].map((item, i) => (
              <div key={i} style={{ background: YELLOW, borderRadius: 12, padding: "24px 16px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.18)", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.svg}
                </div>
                <p style={{ fontWeight: 700, fontSize: 13, color: NAVY, lineHeight: 1.5, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Features text */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
            {[
              "Empresa pioneira em Aquecimento solar.",
              "Preços e condições especiais para revenda.",
              "Ampla experiência em desenvolvimento e distribuição de produtos.",
              "Energia limpa, natural, renovável, segura e 100% gratuita.",
            ].map((text, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${YELLOW}`, paddingLeft: 16 }}>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: 14, lineHeight: 1.6 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="produtos" style={{ background: "#f7f7f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <h3 style={{ color: NAVY, fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, marginBottom: 12 }}>Grupo Center Sol</h3>
          <p style={{ color: "#555", fontSize: 15, lineHeight: 1.8, maxWidth: 800, marginBottom: 48 }}>
            Hoje nos orgulhamos em ser líder em aquecimento solar no Brasil. Buscamos sempre a excelência na fabricação dos produtos, e atendimento às revendas. Ao instalar um aquecedor solar Center Sol, você contribui com o meio ambiente utilizando energia limpa e renovável para aquecer a água do seu banho ou da sua piscina.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 24 }}>
            {products.map((p) => (
              <div key={p.id} style={{ background: p.color, borderRadius: 8, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ height: 160, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: 6, background: "rgba(255,255,255,0.1)" }}>
                  <Image src={p.img} alt={p.title} width={140} height={140} style={{ objectFit: "contain" }} />
                </div>
                <h4 style={{ color: p.textColor, fontWeight: 800, fontSize: 17, margin: 0 }}>{p.title}</h4>
                <p style={{ color: p.textColor, fontSize: 14, lineHeight: 1.6, opacity: 0.85, flexGrow: 1 }}>{p.desc}</p>
                <div>
                  <button
                    onClick={() => setOpenSpec(openSpec === p.id ? null : p.id)}
                    style={{ background: "transparent", border: `1px solid ${p.textColor}`, color: p.textColor, fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 13, padding: "8px 18px", borderRadius: 4, cursor: "pointer", width: "100%", marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}
                  >
                    Especificações
                    <span style={{ transform: openSpec === p.id ? "rotate(180deg)" : "none", transition: "0.2s", display: "inline-block" }}>▼</span>
                  </button>
                  {openSpec === p.id && (
                    <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 4, padding: "12px 14px", marginBottom: 10 }}>
                      <p style={{ color: p.textColor, fontSize: 13, margin: 0 }}>Entre em contato para receber as especificações técnicas completas deste produto.</p>
                    </div>
                  )}
                  <a href="#contato" style={{ display: "block", background: p.btnColor, color: p.btnText, fontWeight: 700, fontSize: 13, padding: "11px 0", borderRadius: 4, textAlign: "center", textDecoration: "none", letterSpacing: 0.5 }}>
                    SEJA UM REVENDEDOR
                  </a>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div style={{ background: NAVY, borderRadius: 8, padding: 28, display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              <h4 style={{ color: YELLOW, fontWeight: 800, fontSize: 18, margin: 0 }}>CONHEÇA NOSSOS PRODUTOS</h4>
              <p style={{ color: "#fff", fontSize: 14, lineHeight: 1.7, opacity: 0.85 }}>
                Na linha de produtos de aquecimento solar trabalhamos com: linha piscina, aquecimento residencial, aquecimento rural e fabricação de boiler especial (grande porte). Oferecemos suporte e treinamento necessário para seu projeto decolar!
              </p>
              <a href="#contato" className="cs-btn-yellow" style={{ textAlign: "center" }}>SEJA UM REVENDEDOR</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quem somos ── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, marginBottom: 16 }}>Quem somos</h2>
          <p style={{ color: "#555", fontSize: 15, lineHeight: 1.8, maxWidth: 800, marginBottom: 48 }}>
            Hoje nos orgulhamos em ser líder em aquecimento solar no Brasil. Buscamos sempre a excelência na fabricação dos produtos, e atendimento às revendas. Ao instalar um aquecedor solar Center Sol, você contribui com o meio ambiente utilizando energia limpa e renovável para aquecer a água do seu banho ou da sua piscina.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
            {[
              { title: "Missão", text: "Oferecer produtos com alto padrão de qualidade, focando em tecnologia, inovação, soluções sustentáveis, sem esquecer de levar o melhor custo/benefício." },
              { title: "Visão", text: "Ser referência nacional em soluções de aquecimento solar, expandindo nossa presença em todo o território brasileiro com produtos de excelência." },
              { title: "Valores", text: "Qualidade, inovação, sustentabilidade, respeito ao cliente e compromisso com o meio ambiente são os pilares que guiam cada decisão da Center Sol." },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: `4px solid ${YELLOW}`, paddingTop: 20 }}>
                <h4 style={{ color: NAVY, fontWeight: 800, fontSize: 17, marginBottom: 12 }}>{item.title}</h4>
                <p style={{ color: "#555", fontSize: 14, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Revendedores ── */}
      <section style={{ background: "#f7f7f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, marginBottom: 12 }}>Conheça nossos revedendores</h2>
          <p style={{ color: "#555", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
            Clique em um dos pontos no mapa e entre em contato com um de nossos revendedores mais próximo de você.
          </p>
          <div style={{ background: "#115e59", borderRadius: 12, padding: "40px 32px", marginBottom: 32, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40, position: "relative", overflow: "hidden" }}>
            {/* glow de fundo */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 50%, rgba(255,193,14,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
            {/* mapa real com estados */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <Image
                src="/images/brazil-states.png"
                alt="Mapa do Brasil com estados"
                width={320}
                height={336}
                style={{ width: 320, maxWidth: "100%", height: "auto", display: "block", filter: "invert(1)", mixBlendMode: "screen", opacity: 0.9 }}
              />
            </div>
            {/* legenda */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 16, maxWidth: 280 }}>
              <span style={{ background: YELLOW, color: NAVY, fontWeight: 800, fontSize: 12, padding: "4px 14px", borderRadius: 999, alignSelf: "flex-start", letterSpacing: 1 }}>COBERTURA</span>
              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 22, lineHeight: 1.3, margin: 0 }}>Centro-Oeste<br />Brasileiro</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Atendemos Goiás, Mato Grosso, Mato Grosso do Sul, Distrito Federal e regiões adjacentes com instalação e suporte completos.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["Goiânia — GO", "Cuiabá — MT", "Campo Grande — MS", "Brasília — DF"].map((city) => (
                  <div key={city} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: YELLOW, flexShrink: 0, display: "inline-block" }} />
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 600 }}>{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section id="contato" style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-start" }}>
            {/* Form */}
            <div style={{ flex: "1 1 340px" }}>
              <h2 style={{ color: NAVY, fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, marginBottom: 8 }}>Preencha o formulário</h2>
              <p style={{ color: "#888", fontSize: 14, marginBottom: 28 }}>Preencha com seus dados que nossa equipe vai entrar em contato</p>
              <input className="form-input" type="text" placeholder="Nome" />
              <input className="form-input" type="email" placeholder="E-mail" />
              <input className="form-input" type="tel" placeholder="Telefone" />
              <textarea className="form-input" placeholder="Mensagem" rows={5} style={{ resize: "vertical" }} />
              <button style={{ background: YELLOW, color: "#000", fontWeight: 700, fontSize: 14, padding: "13px 40px", borderRadius: 4, border: "none", cursor: "pointer", fontFamily: "Montserrat, sans-serif", letterSpacing: 0.5 }}>
                Enviar
              </button>
            </div>
            {/* CTA card */}
            <div style={{ flex: "1 1 280px", background: YELLOW, borderRadius: 8, padding: 40, display: "flex", flexDirection: "column", gap: 20, alignItems: "center", textAlign: "center" }}>
              <Image
                src="https://centersol.com.br/wp-content/uploads/2024/05/Ativo-2.png"
                alt="Center Sol"
                width={160}
                height={60}
                style={{ objectFit: "contain" }}
              />
              <h3 style={{ color: NAVY, fontWeight: 900, fontSize: 20, lineHeight: 1.3 }}>LÍDER EM AQUECIMENTO SOLAR NO BRASIL</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["(62) 3295-7007", "(62) 9 8178-0484", "centersol@centersol.com.br"].map((c, i) => (
                  <p key={i} style={{ color: NAVY, fontWeight: 600, fontSize: 14 }}>{c}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Downloads ── */}
      <section style={{ background: "#f7f7f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, marginBottom: 8 }}>Downloads</h2>
          <p style={{ color: "#888", fontSize: 15, marginBottom: 40 }}>Clique nos links abaixo para fazer o download de nossos arquivos</p>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 480 }}>
            {["CERTIFICADO DE GARANTIA", "MANUAL BOILER", "MANUAL PISCINA", "MEDIDA BAIXA PRESSÃO", "MEDIDA ALTA PRESSÃO"].map((file, i) => (
              <a key={i} href="#" className="download-btn">{file}</a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: NAVY }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 32px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
            <div>
              <Image
                src="https://centersol.com.br/wp-content/uploads/2024/04/Ativo-2-1024x195.png"
                alt="Center Sol"
                width={140}
                height={28}
                style={{ objectFit: "contain", marginBottom: 12 }}
              />
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>@centersol</p>
            </div>
            <div>
              <h2 style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginBottom: 16 }}>Contato</h2>
              {["(62) 3295-7007", "(62) 9 8178-0484", "centersol@centersol.com.br"].map((c, i) => (
                <p key={i} style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 6 }}>{c}</p>
              ))}
            </div>
            <div>
              <h2 style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginBottom: 16 }}>Endereço</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.7 }}>
                Rua 11, Quadra 4, Lote 6/13, s/n<br />
                Polo Empresarial<br />
                Aparecida de Goiânia
              </p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8 }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Center Sol • 2024 • Todos os direitos reservados</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Feito por ® Focus Creative</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
