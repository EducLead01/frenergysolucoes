"use client";

// ============================================================
// CasesGrid — Seção de cases de sucesso
// Substituir os placeholders abaixo com dados reais:
//   - [CASE_N_EMPRESA]: Nome da empresa cliente
//   - [CASE_N_CIDADE]: Cidade/Estado
//   - [CASE_N_SEGMENTO]: "Residencial" | "Comercial" | "Industrial" | "Agronegócio"
//   - [CASE_N_KWP]: Potência instalada em kWp (ex: "12 kWp")
//   - [CASE_N_ECONOMIA]: Percentual de economia (ex: "87%")
//   - [CASE_N_IMAGEM]: Caminho da imagem em /public (ex: "/images/cases/empresa.jpg")
//   - [CASE_N_DEPOIMENTO]: Frase do cliente (opcional)
// ============================================================

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SEGMENT_COLORS: Record<string, string> = {
  Residencial: "#10b981",
  Comercial: "#007bcc",
  Industrial: "#f59e0b",
  Agronegócio: "#84cc16",
};

interface Case {
  empresa: string;
  cidade: string;
  segmento: string;
  kwp: string;
  economia: string;
  imagem: string;
  depoimento?: string;
}

const cases: Case[] = [
  {
    empresa: "[CASE_1_EMPRESA]",
    cidade: "[CASE_1_CIDADE]",
    segmento: "Residencial",
    kwp: "[CASE_1_KWP]",
    economia: "[CASE_1_ECONOMIA]",
    imagem: "https://picsum.photos/seed/solar1/600/400",
    depoimento: "[CASE_1_DEPOIMENTO]",
  },
  {
    empresa: "[CASE_2_EMPRESA]",
    cidade: "[CASE_2_CIDADE]",
    segmento: "Comercial",
    kwp: "[CASE_2_KWP]",
    economia: "[CASE_2_ECONOMIA]",
    imagem: "https://picsum.photos/seed/solar2/600/400",
    depoimento: "[CASE_2_DEPOIMENTO]",
  },
  {
    empresa: "[CASE_3_EMPRESA]",
    cidade: "[CASE_3_CIDADE]",
    segmento: "Industrial",
    kwp: "[CASE_3_KWP]",
    economia: "[CASE_3_ECONOMIA]",
    imagem: "https://picsum.photos/seed/solar3/600/400",
  },
  {
    empresa: "[CASE_4_EMPRESA]",
    cidade: "[CASE_4_CIDADE]",
    segmento: "Comercial",
    kwp: "[CASE_4_KWP]",
    economia: "[CASE_4_ECONOMIA]",
    imagem: "https://picsum.photos/seed/solar4/600/400",
    depoimento: "[CASE_4_DEPOIMENTO]",
  },
  {
    empresa: "[CASE_5_EMPRESA]",
    cidade: "[CASE_5_CIDADE]",
    segmento: "Agronegócio",
    kwp: "[CASE_5_KWP]",
    economia: "[CASE_5_ECONOMIA]",
    imagem: "https://picsum.photos/seed/solar5/600/400",
  },
  {
    empresa: "[CASE_6_EMPRESA]",
    cidade: "[CASE_6_CIDADE]",
    segmento: "Residencial",
    kwp: "[CASE_6_KWP]",
    economia: "[CASE_6_ECONOMIA]",
    imagem: "https://picsum.photos/seed/solar6/600/400",
    depoimento: "[CASE_6_DEPOIMENTO]",
  },
];

function CaseCard({ case: c, index }: { case: Case; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const segColor = SEGMENT_COLORS[c.segmento] ?? "#007bcc";

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "rgba(0,0,0,0.07) 0px 8px 32px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      className="group"
    >
      {/* Imagem */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "3/2", overflow: "hidden" }}>
        <Image
          src={c.imagem}
          alt={c.empresa}
          fill
          style={{
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          className="group-hover:scale-105"
          unoptimized
        />
        {/* Badge segmento */}
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            backgroundColor: segColor,
            color: "white",
            fontSize: "11px",
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: "999px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {c.segmento}
        </span>
      </div>

      {/* Conteúdo */}
      <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
        <div>
          <h3
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "17px",
              fontWeight: 700,
              color: "rgb(33,37,41)",
              margin: 0,
              lineHeight: "22px",
            }}
          >
            {c.empresa}
          </h3>
          <p style={{ fontSize: "13px", color: "#888", margin: "4px 0 0", display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            {c.cidade}
          </p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #f0f0f0", margin: 0 }} />

        {/* Métricas */}
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "11px", color: "#aaa", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 2px" }}>Potência</p>
            <p style={{ fontSize: "20px", fontWeight: 800, color: "rgb(0,123,204)", fontFamily: "var(--font-montserrat)", margin: 0 }}>{c.kwp}</p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "11px", color: "#aaa", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 2px" }}>Economia</p>
            <p style={{ fontSize: "20px", fontWeight: 800, color: "#F5A623", fontFamily: "var(--font-montserrat)", margin: 0 }}>{c.economia}</p>
          </div>
        </div>

        {/* Depoimento */}
        {c.depoimento && (
          <p style={{ fontSize: "13px", color: "#666", fontStyle: "italic", lineHeight: "20px", margin: 0, borderLeft: `3px solid ${segColor}`, paddingLeft: "10px" }}>
            &ldquo;{c.depoimento}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}

export function CasesGrid() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeadingVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ backgroundColor: "#f7f8fa", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        {/* Heading */}
        <div
          ref={headingRef}
          style={{
            textAlign: "center",
            marginBottom: "56px",
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #F0416E, #FF5900)",
              color: "white",
              fontSize: "11px",
              fontWeight: 700,
              padding: "4px 14px",
              borderRadius: "999px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Cases de Sucesso
          </span>
          <h2
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "clamp(28px, 4vw, 38px)",
              fontWeight: 800,
              color: "rgb(33,37,41)",
              lineHeight: "1.2",
              margin: "0 0 14px",
            }}
          >
            Veja quem já economiza com a{" "}
            <span style={{ color: "rgb(0,123,204)" }}>Frenergy</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#666", maxWidth: "560px", margin: "0 auto", lineHeight: "26px" }}>
            Instalações residenciais, comerciais e industriais com resultados reais de economia na conta de luz.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "24px" }}
        >
          {cases.map((c, i) => (
            <CaseCard key={i} case={c} index={i} />
          ))}
        </div>

        {/* CTA bottom */}
        <div
          style={{
            textAlign: "center",
            marginTop: "48px",
            opacity: headingVisible ? 1 : 0,
            transition: "opacity 0.5s ease 0.6s",
          }}
        >
          <a
            href="/orcamentos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(90deg, #F0416E, #FF5900)",
              color: "white",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 36px",
              borderRadius: "999px",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            className="hover:opacity-90"
          >
            Quero economizar também
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
