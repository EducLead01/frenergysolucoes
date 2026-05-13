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

const icons = [
  { src: "https://centersol.com.br/wp-content/uploads/2024/05/1.png", label: "Linha Residencial" },
  { src: "https://centersol.com.br/wp-content/uploads/2024/05/2.png", label: "Grande Porte" },
  { src: "https://centersol.com.br/wp-content/uploads/2024/05/3.png", label: "Linha Piscina" },
  { src: "https://centersol.com.br/wp-content/uploads/2024/05/4.png", label: "Econômica e Rural" },
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
        backgroundAttachment: "fixed",
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
      <div style={{ background: YELLOW, overflow: "hidden", padding: "10px 0", whiteSpace: "nowrap" }}>
        <div className="ticker-track" style={{ display: "inline-flex", gap: "40px", width: "max-content" }}>
          {[...Array(6)].flatMap(() => [
            "ENERGIA RENOVÁVEL",
            "•",
            "LIMPA E ECONÔMICA PARA CONDOMÍNIOS",
            "•",
          ]).map((t, i) => (
            <span key={i} style={{ fontWeight: 700, fontSize: 13, color: "#000", letterSpacing: 1 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <section id="sobre" style={{ background: `url('https://centersol.com.br/wp-content/uploads/2024/05/SISTEMA-SOLAR.png') center/cover no-repeat`, backgroundColor: "#fff" }}>
        <div style={{ background: "rgba(255,255,255,0.93)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
              <div style={{ flex: "1 1 380px" }}>
                <h2 style={{ color: "#000", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>
                  Grupo Center Sol, soluções em Aquecimento Solar
                </h2>
                <p style={{ color: "#555", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
                  Na linha de aquecimento solar trabalhamos com a linha piscina, grande porte, residencial, econômica e rural. Na venda de produtos e acessórios para instalação, além de oferecer suporte técnico e treinamento necessário para seu projeto decolar.
                </p>
                <a href="#contato" className="cs-btn-yellow">SEJA UM REVENDEDOR</a>
              </div>
              <div style={{ flex: "1 1 320px", display: "flex", justifyContent: "center" }}>
                <Image
                  src="https://centersol.com.br/wp-content/uploads/2024/05/1.png"
                  alt="Técnico Center Sol"
                  width={400}
                  height={400}
                  style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
            {/* Icon cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 20, marginTop: 48 }}>
              {icons.map((icon, i) => (
                <div key={i} style={{ background: "#fff", border: `2px solid ${YELLOW}`, borderRadius: 8, padding: "20px 16px", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <Image src={icon.src} alt={icon.label} width={64} height={64} style={{ objectFit: "contain", margin: "0 auto 12px" }} />
                  <p style={{ fontWeight: 700, fontSize: 13, color: NAVY }}>{icon.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features strip ── */}
      <section style={{ background: NAVY }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px" }}>
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
          <div style={{ background: "#ddd", borderRadius: 8, height: 300, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
            <p style={{ color: "#888", fontWeight: 600, fontSize: 15 }}>Mapa de Revendedores</p>
          </div>
          <a href="#contato" className="cs-btn-yellow">SEJA UM REVENDEDOR</a>
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
