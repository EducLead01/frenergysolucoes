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
    img: "/images/08.png",
  },
  {
    id: 2,
    title: "Grande Porte",
    desc: "Os reservatórios de grande porte é um diferencial da Center Sol. Suas características construtivas",
    color: YELLOW,
    textColor: "#000",
    btnColor: NAVY,
    btnText: "#fff",
    img: "/images/08.png",
  },
  {
    id: 3,
    title: "Linha Piscina",
    desc: "Instalar o coletor solar para piscina permite a todos usufruir o máximo de sua piscina",
    color: NAVY,
    textColor: "#fff",
    btnColor: YELLOW,
    btnText: "#000",
    img: "/images/08.png",
  },
  {
    id: 4,
    title: "Econômica e Rural",
    desc: "A Center Sol possui em sua linha de produção de aquecedores este equipamento versátil e econômico",
    color: NAVY,
    textColor: "#fff",
    btnColor: YELLOW,
    btnText: "#000",
    img: "/images/08.png",
  },
  {
    id: 5,
    title: "Coletores Residenciais",
    desc: "Responsável por absorver a radiação solar ao longo do dia e transformá-la em calor.",
    color: YELLOW,
    textColor: "#000",
    btnColor: NAVY,
    btnText: "#fff",
    img: "/images/08.png",
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
        @keyframes br-run { to { stroke-dashoffset: -1860; } }
        .br-dash { stroke-dasharray: 60 1800; stroke-dashoffset: 0; animation: br-run 4s linear infinite; }
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
            </div>
            <div style={{ flex: "1 1 320px", position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end", minHeight: 360 }}>
              {/* SVG contorno do Brasil com animação laranja */}
              <svg viewBox="0 0 510 530" style={{ width: 300, maxWidth: "100%", height: "auto", display: "block" }} aria-label="Mapa do Brasil">
                <defs>
                  <filter id="glow-orange">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>
                {/* preenchimento sutil */}
                <path fill="rgba(17,94,89,0.12)" stroke="rgba(17,94,89,0.5)" strokeWidth="1.5"
                  d="M78,44 L138,19 L156,3 L174,17 L246,44 L283,20 L296,55 L319,90 L375,100 L403,111 L431,107 L488,141 L488,192 L479,210 L445,260 L444,330 L426,360 L386,404 L349,418 L321,446 L318,460 L258,520 L220,500 L195,500 L210,460 L240,415 L200,370 L195,330 L175,300 L145,260 L20,200 L15,185 L50,115 Z"/>
                {/* contorno base */}
                <path fill="none" stroke="rgba(77,77,77,0.3)" strokeWidth="2"
                  d="M78,44 L138,19 L156,3 L174,17 L246,44 L283,20 L296,55 L319,90 L375,100 L403,111 L431,107 L488,141 L488,192 L479,210 L445,260 L444,330 L426,360 L386,404 L349,418 L321,446 L318,460 L258,520 L220,500 L195,500 L210,460 L240,415 L200,370 L195,330 L175,300 L145,260 L20,200 L15,185 L50,115 Z"/>
                {/* ponto laranja animado */}
                <path className="br-dash" fill="none" stroke="#FF5900" strokeWidth="5" strokeLinecap="round"
                  style={{ filter: "url(#glow-orange)" }}
                  d="M78,44 L138,19 L156,3 L174,17 L246,44 L283,20 L296,55 L319,90 L375,100 L403,111 L431,107 L488,141 L488,192 L479,210 L445,260 L444,330 L426,360 L386,404 L349,418 L321,446 L318,460 L258,520 L220,500 L195,500 L210,460 L240,415 L200,370 L195,330 L175,300 L145,260 L20,200 L15,185 L50,115 Z"/>
              </svg>
              {/* Engenheiro sobreposto */}
              <div style={{ position: "absolute", right: -10, bottom: 0, height: "95%", display: "flex", alignItems: "flex-end" }}>
                <Image
                  src="/images/hero02.png"
                  alt="Engenheiro Frenergy"
                  width={200}
                  height={320}
                  style={{ height: "100%", width: "auto", objectFit: "contain", objectPosition: "bottom" }}
                />
              </div>
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
              {
                title: "Economia imediata",
                text: "Redução de até 95% na conta de energia das áreas comuns do condomínio.",
                icon: <svg width="36" height="36" viewBox="0 0 30 31" fill="none"><rect x="1" y="17.9" width="5.96" height="8.9" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/><rect x="12.08" y="13.08" width="5.96" height="13.73" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/><rect x="23.04" y="3.81" width="5.96" height="23" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/></svg>,
              },
              {
                title: "Valoriza o imóvel",
                text: "Condomínios com energia solar têm maior valor de mercado e atratividade.",
                icon: <svg width="36" height="36" viewBox="0 0 30 30" fill="none"><path d="M3 13L15 3l12 10v14a1 1 0 01-1 1H4a1 1 0 01-1-1V13z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2" strokeLinejoin="round"/><path d="M11 28V18h8v10" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Sem obras nas unidades",
                text: "Instalação nas áreas comuns. Nenhuma intervenção necessária nos apartamentos.",
                icon: <svg width="36" height="36" viewBox="0 0 30 30" fill="none"><path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2"/><path d="M10 15l3.5 3.5 6.5-7" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Energia 100% limpa",
                text: "Solar fotovoltaica — renovável, sustentável e sem emissão de carbono.",
                icon: <svg width="36" height="36" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="5" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/><path d="M15 3v3M15 24v3M3 15h3M24 15h3M6.22 6.22l2.12 2.12M21.66 21.66l2.12 2.12M6.22 23.78l2.12-2.12M21.66 8.34l2.12-2.12" stroke="#FF5900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "28px 20px", textAlign: "center", border: "1.5px solid rgba(255,89,0,0.25)", boxShadow: "0 4px 20px rgba(255,89,0,0.08)", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg,rgba(240,65,110,0.08),rgba(255,89,0,0.08))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: "#0d3347", margin: 0 }}>{item.title}</h3>
                <p style={{ fontWeight: 400, fontSize: 12, color: "#787878", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="produtos" style={{ background: "#f7f7f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[...products, {
              id: 0,
              title: "Conheça Nossos Produtos",
              desc: "Na linha de produtos de aquecimento solar trabalhamos com: linha piscina, aquecimento residencial, aquecimento rural e fabricação de boiler especial (grande porte). Suporte e treinamento para seu projeto decolar!",
              img: "/images/08.png",
            }].map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-md"
                style={{ border: "1.5px solid rgba(255, 89, 0, 0.25)" }}
              >
                {/* imagem */}
                <div className="h-48 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={280}
                    height={192}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                {/* conteúdo */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="font-bold text-base" style={{ color: "#0d3347" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#787878" }}>{p.desc}</p>
                  {/* botão accordion estilo Saiba Mais */}
                  <div className="mt-1">
                    <button
                      onClick={() => setOpenSpec(openSpec === p.id ? null : p.id)}
                      className="flex items-center gap-2 text-white text-xs font-bold px-5 py-2 rounded-full transition-opacity hover:opacity-90"
                      style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                    >
                      Especificações
                      <span style={{ display: "inline-block", transition: "transform 0.25s", transform: openSpec === p.id ? "rotate(180deg)" : "rotate(0deg)", fontSize: 9 }}>▲</span>
                    </button>
                    {openSpec === p.id && (
                      <div className="mt-3 rounded-xl p-3 text-xs leading-relaxed" style={{ background: "rgba(255,89,0,0.05)", border: "1px solid rgba(255,89,0,0.15)", color: "#4D4D4D" }}>
                        Entre em contato para receber as especificações técnicas completas deste produto.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
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

    </div>
  );
}
