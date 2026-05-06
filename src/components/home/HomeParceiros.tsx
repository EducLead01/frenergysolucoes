"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const parceiros = [
  { nome: "Canadian Solar", descricao: "Painéis fotovoltaicos de alta eficiência com garantia de 25 anos." },
  { nome: "Jinko Solar", descricao: "Um dos maiores fabricantes de painéis solares do mundo." },
  { nome: "Fronius", descricao: "Inversores premium com tecnologia austríaca e alta durabilidade." },
  { nome: "SMA Solar", descricao: "Tecnologia alemã em inversores com monitoramento inteligente." },
  { nome: "Growatt", descricao: "Inversores de excelente custo-benefício com monitoramento em nuvem." },
  { nome: "WEG", descricao: "Soluções brasileiras em proteção elétrica e infraestrutura solar." },
  { nome: "Aldo Solar", descricao: "Distribuidora nacional de equipamentos fotovoltaicos." },
  { nome: "BYD Battery", descricao: "Baterias de armazenamento solar de alta performance e ciclo de vida." },
];

export function HomeParceiros() {
  const h2Ref = useScrollReveal<HTMLHeadingElement>(0);
  const dropRef = useScrollReveal<HTMLDivElement>(100);

  return (
    <section
      style={{
        paddingTop: "120px",
        paddingBottom: "60px",
        backgroundColor: "#e7eaf1",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* Heading */}
        <h2
          ref={h2Ref}
          style={{
            fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
            fontSize: "36px",
            lineHeight: "40px",
            fontWeight: 300,
            marginTop: 0,
            marginBottom: 0,
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          Fornecedores e <strong style={{ color: "#007bcc" }}>Parceiros</strong>
        </h2>
        <div
          ref={dropRef}
          style={{
            width: "60px",
            height: "5px",
            marginTop: "15px",
            marginBottom: "25px",
            borderRadius: "200px",
            backgroundColor: "#007bcc",
            opacity: 0,
            transform: "translateY(10px)",
            transition: "opacity 600ms ease 100ms, transform 600ms ease 100ms",
          }}
        />
        <div
          style={{
            maxWidth: "550px",
            marginBottom: "30px",
            fontSize: "16px",
            lineHeight: "26px",
            color: "#212529",
          }}
        >
          Trabalhamos com os melhores fabricantes de equipamentos solares do mercado, garantindo qualidade, durabilidade e máxima geração de energia.
        </div>

        {/* Partners grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {parceiros.map((p) => (
            <div
              key={p.nome}
              style={{
                display: "flex",
                alignItems: "flex-start",
                width: "calc(25% - 15px)",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 3px 20px 0 rgba(0,0,0,0.07)",
              }}
            >
              {/* Logo placeholder */}
              <div
                style={{
                  width: "100px",
                  height: "50px",
                  marginRight: "15px",
                  flexShrink: 0,
                  backgroundColor: "#e7eaf1",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#007bcc",
                  textAlign: "center",
                  padding: "4px",
                }}
              >
                {p.nome}
              </div>
              <div style={{ fontSize: "13px", lineHeight: "20px", color: "#555" }}>
                {p.descricao}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
