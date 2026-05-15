"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const NAVY = "#091B30";
const YELLOW = "#FFC10E";



const condoProducts = [
  {
    id: 1,
    badge: "Economia",
    title: "Redução de até 95% na conta de energia",
    desc: "Sistema solar nas áreas comuns do condomínio — corredores, elevadores, bombas, iluminação externa — gera economia imediata e visível para todos os moradores.",
    img: "/images/08.png",
  },
  {
    id: 2,
    badge: "Instalação",
    title: "Sem obras nas unidades privativas",
    desc: "Toda a instalação é feita nas áreas comuns. Os apartamentos não precisam de nenhuma intervenção. Processo rápido, limpo e com engenheiro dedicado.",
    img: "/images/08.png",
  },
  {
    id: 3,
    badge: "Valorização",
    title: "Condomínio com energia solar vale mais",
    desc: "Imóveis com sistema solar têm maior valor de mercado e atratividade para locação e venda. Um diferencial real na assembleia e na hora de negociar.",
    img: "/images/08.png",
  },
  {
    id: 4,
    badge: "Sustentabilidade",
    title: "Energia 100% limpa e renovável",
    desc: "Solar fotovoltaica sem emissão de carbono. Contribui com o meio ambiente e com as metas de sustentabilidade do condomínio — um argumento forte para moradores conscientes.",
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
        .about-flex { display: flex; align-items: center; gap: 48px; }
        .about-text { flex: 1 1 380px; }
        .about-img-wrap { flex: 1 1 320px; position: relative; height: 380px; }
        @media (max-width: 768px) {
          .icon-cards-grid { transform: none; margin-bottom: 0; padding-top: 32px; }
          .about-flex { flex-direction: column; gap: 24px; }
          .about-text { width: 100%; flex: none; }
          .about-img-wrap { width: 100%; flex: none; height: 320px; }
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
            "EXCLUSIVO PARA MULHERES",
            "•",
          ]).map((t, i) => (
            <span key={i} style={{ fontWeight: 700, fontSize: 13, color: "#000", letterSpacing: 1 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <section id="sobre" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px 60px" }}>
          <div className="about-flex">
            {/* Texto */}
            <div className="about-text">
              <h2 style={{ color: "#4D4D4D", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>
                O grupo Frenergy Soluções está presente em todo{" "}
                <span style={{ color: "#FF5900" }}>centro oeste brasileiro</span>
              </h2>
            </div>
            {/* Imagens — mapa + engenheiro */}
            <div className="about-img-wrap">
              <Image
                src="/images/brazil-states.png"
                alt="Mapa do Brasil"
                fill
                style={{ objectFit: "contain", objectPosition: "center top", opacity: 0.85, filter: "sepia(1) saturate(2) hue-rotate(140deg)", padding: "0 20px 60px" }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                <Image
                  src="/images/hero02.png"
                  alt="Engenheiro Frenergy"
                  width={220}
                  height={380}
                  style={{ width: "auto", height: 260, objectFit: "contain", objectPosition: "bottom" }}
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
      <section id="produtos" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span
              className="inline-block text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
            >
              Produtos
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
              Soluções em energia solar para{" "}
              <span style={{ color: "#FF5900" }}>condomínios</span>
            </h2>
          </div>

          <div className="flex flex-col gap-20">
            {condoProducts.map((p, i) => (
              <div
                key={p.id}
                className={`flex flex-col items-center gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                {/* Texto */}
                <div className="flex-1 flex flex-col gap-4">
                  <span
                    className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                    style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                  >
                    {p.badge}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#4D4D4D] leading-snug">{p.title}</h3>
                  <p className="text-[#787878] text-base leading-relaxed">{p.desc}</p>
                  <div>
                    <button
                      onClick={() => setOpenSpec(openSpec === p.id ? null : p.id)}
                      className="flex items-center gap-2 text-white text-xs font-bold px-5 py-2 rounded-full transition-opacity hover:opacity-90"
                      style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                    >
                      Insights para o síndico
                      <span style={{ display: "inline-block", transition: "transform 0.25s", transform: openSpec === p.id ? "rotate(180deg)" : "rotate(0deg)", fontSize: 9 }}>▲</span>
                    </button>
                    {openSpec === p.id && (
                      <div className="mt-3 rounded-xl p-4 text-sm leading-relaxed" style={{ background: "rgba(255,89,0,0.05)", border: "1px solid rgba(255,89,0,0.15)", color: "#4D4D4D" }}>
                        Entre em contato para receber as especificações técnicas completas deste produto.
                      </div>
                    )}
                  </div>
                </div>

                {/* Imagem com sombra laranja offset */}
                <div className="flex-1 w-full relative">
                  <div
                    className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                    style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                  />
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <Image src={p.img} alt={p.title} fill className="object-cover" />
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
          <h2 style={{ color: "#4D4D4D", fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, marginBottom: 16 }}>Quem somos</h2>
          <p style={{ color: "#787878", fontSize: 15, lineHeight: 1.8, maxWidth: 800, marginBottom: 48 }}>
            A Frenergy Soluções é uma empresa goiana especializada em energia solar fotovoltaica, presente em todo o Centro-Oeste. Levamos tecnologia de ponta, economia real e impacto positivo para condomínios, empresas e residências de Goiás e região.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
            {[
              { title: "Missão", text: "Democratizar o acesso à energia solar em Goiás, entregando soluções completas com qualidade, agilidade e o melhor retorno sobre investimento para cada cliente." },
              { title: "Visão", text: "Ser a maior referência em energia solar do Centro-Oeste, expandindo nossa presença e transformando a forma como condomínios, empresas e famílias consomem energia." },
              { title: "Valores", text: "Transparência, inovação, compromisso com o cliente e responsabilidade ambiental guiam cada projeto da Frenergy — do primeiro contato à conta de luz zerada." },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: "4px solid #FF5900", paddingTop: 20 }}>
                <h4 style={{ color: "#0d3347", fontWeight: 800, fontSize: 17, marginBottom: 12 }}>{item.title}</h4>
                <p style={{ color: "#787878", fontSize: 14, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
}
