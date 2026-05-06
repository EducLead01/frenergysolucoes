"use client";
import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Feature = ({ text, bold }: { text: string; bold?: boolean }) => (
  <div
    style={{
      display: "flex",
      marginBottom: "7px",
      alignItems: "center",
      fontSize: "14px",
    }}
  >
    <div
      style={{
        width: "5px",
        height: "10px",
        marginRight: "10px",
        borderRadius: "100px",
        backgroundColor: "#f79d34",
        flexShrink: 0,
      }}
    />
    {bold ? <strong>{text}</strong> : <span>{text}</span>}
  </div>
);

type Plano = {
  nome: string;
  tag?: string;
  resumo: string;
  saibaMore: string;
  features: { text: string; bold?: boolean }[];
  funcionalidades: string[];
};

const planos: Plano[] = [
  {
    nome: "Residencial",
    resumo: "Indicado para casas e apartamentos que desejam reduzir o consumo da concessionária.",
    saibaMore:
      "O sistema fotovoltaico residencial é dimensionado de acordo com o seu consumo médio mensal. Instalamos painéis solares de alta eficiência com inversores de qualidade, garantindo geração máxima.",
    features: [
      { text: "Sistema solar completo", bold: true },
      { text: "Bônus 1: Suporte 24h", bold: true },
      { text: "Bônus 2: Limpeza anual incluída" },
      { text: "Bônus 3: Garantia 25 anos nos painéis" },
      { text: "Análise do telhado e estrutura" },
      { text: "Projeto elétrico completo" },
      { text: "Homologação ANEEL" },
      { text: "Monitoramento via app" },
    ],
    funcionalidades: [
      "Painéis de alta eficiência",
      "Inversor string ou microinversor",
      "Estrutura de fixação inclusa",
      "String box de proteção",
      "Medidor bidirecional",
      "Monitoramento em tempo real",
      "Relatório mensal de geração",
      "Assistência técnica local",
    ],
  },
  {
    nome: "Comercial",
    tag: "+ Monitoramento Avançado",
    resumo: "Indicado para empresas, comércios e estabelecimentos com alta demanda energética.",
    saibaMore:
      "Para empresas, o sistema solar comercial oferece maior retorno sobre investimento. Realizamos estudo de viabilidade técnico-financeiro e dimensionamos o sistema para máxima economia.",
    features: [
      { text: "Tudo do Residencial +", bold: true },
      { text: "Bônus 1: Estudo de viabilidade" },
      { text: "Bônus 2: Relatório de performance" },
      { text: "Bônus 3: Seguro de geração" },
      { text: "Bônus 4: 4 Visitas anuais inclusas" },
      { text: "Sistema de maior potência" },
      { text: "Gestão de demanda" },
      { text: "Dashboard executivo" },
    ],
    funcionalidades: [
      "Análise de demanda e potência",
      "Inversores trifásicos",
      "Proteções de alta performance",
      "Monitoramento em nuvem",
      "Relatório executivo mensal",
      "Suporte técnico prioritário",
      "Treinamento da equipe",
      "Certificação de instalação",
    ],
  },
  {
    nome: "Industrial",
    tag: "+ Consultoria Energética",
    resumo: "Indicado para indústrias e grandes consumidores com demanda acima de 75 kWp.",
    saibaMore:
      "O sistema solar industrial é projetado para grandes demandas de energia. Incluímos consultoria em eficiência energética, análise de tarifas e estudo completo de retorno sobre investimento.",
    features: [
      { text: "Tudo do Comercial +", bold: true },
      { text: "Consultoria energética completa" },
      { text: "Subestação solar inclusa" },
      { text: "Financiamento facilitado" },
      { text: "Gestão de múltiplas unidades" },
      { text: "SCADA para monitoramento" },
      { text: "Análise de crédito de carbono" },
      { text: "Engenheiro dedicado ao projeto" },
    ],
    funcionalidades: [
      "Projeto de engenharia especializado",
      "Inversores de grande porte",
      "Sistema SCADA",
      "Gestão de demanda avançada",
      "Análise tarifária completa",
      "Documentação ANEEL industrial",
      "Treinamento da equipe técnica",
      "SLA de atendimento garantido",
    ],
  },
];

function PlanoCard({ plano }: { plano: Plano }) {
  const [saibaOpen, setSaibaOpen] = useState(false);
  const [funcOpen, setFuncOpen] = useState(false);

  return (
    <div
      className="w-full sm:w-[360px]"
      style={{
        display: "flex",
        marginRight: "10px",
        marginLeft: "10px",
        paddingBottom: "40px",
        flexDirection: "column",
        flex: "0 0 auto",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 3px 20px 0 rgba(0,0,0,0.1)",
      }}
    >
      {/* header */}
      <div
        style={{
          display: "flex",
          height: "85px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
          color: "#007bcc",
          fontSize: "26px",
          lineHeight: "30px",
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        <div>{plano.nome}</div>
        {plano.tag && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: 400,
              color: "#555",
            }}
          >
            <span style={{ marginRight: "4px" }}>{plano.tag}</span>
            <Image src="/images/assinestore/info.svg" alt="" width={14} height={14} />
          </div>
        )}
      </div>

      {/* resumo */}
      <div
        style={{
          display: "flex",
          padding: "20px 35px",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#f2f2f2",
          fontSize: "12px",
          lineHeight: "20px",
        }}
      >
        <div style={{ marginBottom: "5px", fontSize: "14px", lineHeight: "20px" }}>
          {plano.resumo}
        </div>
        <div
          onClick={() => setSaibaOpen(true)}
          style={{
            transition: "color 200ms ease",
            color: "#007bcc",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 700,
            textDecoration: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.color = "#f79d34")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.color = "#007bcc")}
        >
          <span>• </span><span style={{ textDecoration: "underline" }}>Saiba mais</span>
        </div>
      </div>

      {/* features */}
      <div
        style={{
          display: "flex",
          paddingTop: "30px",
          paddingLeft: "35px",
          flexDirection: "column",
          alignItems: "flex-start",
          fontSize: "14px",
        }}
      >
        {plano.features.map((f, i) => (
          <Feature key={i} text={f.text} bold={f.bold} />
        ))}
        <div
          onClick={() => setFuncOpen(true)}
          style={{
            marginBottom: "7px",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            color: "#007bcc",
            fontWeight: 700,
            cursor: "pointer",
            transition: "color 200ms ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.color = "#f79d34")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.color = "#007bcc")}
        >
          + <span style={{ textDecoration: "underline", marginLeft: "4px" }}>Funcionalidades</span>
        </div>
      </div>

      {/* button */}
      <a
        href="#contato"
        style={{
          display: "flex",
          height: "60px",
          paddingRight: "35px",
          paddingLeft: "35px",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: "300px",
          backgroundColor: "#007bcc",
          marginTop: "auto",
          transition: "background-color 300ms ease-in-out",
          color: "#fff",
          fontWeight: 700,
          textDecoration: "none",
          fontSize: "15px",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f79d34")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#007bcc")}
      >
        Solicitar Orçamento
      </a>

      {/* Saiba mais overlay */}
      {saibaOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(33,37,41,0.7)",
            padding: "20px",
          }}
          onClick={() => setSaibaOpen(false)}
        >
          <div
            className="w-full max-w-[500px]"
            style={{ boxShadow: "0 3px 20px 0 rgba(0,0,0,0.1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                padding: "30px",
                justifyContent: "space-between",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                backgroundColor: "#007bcc",
                fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
                color: "#fff",
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              <div>Saiba Mais</div>
              <div
                style={{ cursor: "pointer", width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "20px", backgroundColor: "rgba(255,255,255,0.2)" }}
                onClick={() => setSaibaOpen(false)}
              >×</div>
            </div>
            <div style={{ backgroundColor: "#fff", padding: "30px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", fontSize: "15px", lineHeight: "24px" }}>
              {plano.saibaMore}
            </div>
          </div>
        </div>
      )}

      {/* Funcionalidades overlay */}
      {funcOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(33,37,41,0.7)",
            padding: "20px",
          }}
          onClick={() => setFuncOpen(false)}
        >
          <div
            className="w-full max-w-[500px]"
            style={{ boxShadow: "0 3px 20px 0 rgba(0,0,0,0.1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                padding: "30px",
                justifyContent: "space-between",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                backgroundColor: "#007bcc",
                fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
                color: "#fff",
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              <div>Funcionalidades</div>
              <div
                style={{ cursor: "pointer", width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "20px", backgroundColor: "rgba(255,255,255,0.2)" }}
                onClick={() => setFuncOpen(false)}
              >×</div>
            </div>
            <div style={{ backgroundColor: "#fff", padding: "20px 30px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
              {plano.funcionalidades.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", marginBottom: "12px", fontSize: "14px" }}>
                  <Image src="/images/assinestore/check.svg" alt="" width={18} height={18} style={{ marginRight: "12px", flexShrink: 0 }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function HomePlanos() {
  const h1Ref = useScrollReveal<HTMLHeadingElement>(0);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "150px",
        paddingBottom: "120px",
        backgroundColor: "#e7eaf1",
      }}
    >
      {/* Topo */}
      <div
        style={{
          position: "relative",
          maxWidth: "1200px",
          marginRight: "auto",
          marginBottom: "70px",
          marginLeft: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          color: "#212529",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h2
            ref={h1Ref}
            style={{
              fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
              fontSize: "36px",
              lineHeight: "40px",
              fontWeight: 300,
              marginTop: 0,
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 600ms ease, transform 600ms ease",
            }}
          >
            Planos para todos os tipos de
            <span style={{ color: "#007bcc" }}><strong> Projetos Solares</strong></span>
          </h2>
          <div style={{ maxWidth: "450px", fontSize: "16px", lineHeight: "26px", color: "#212529" }}>
            Tire seu projeto solar do papel e venha economizar com a Frenergy Soluções.
          </div>
        </div>
      </div>

      {/* Cards */}
      <div
        className="flex flex-col sm:flex-row flex-wrap"
        style={{
          position: "relative",
          maxWidth: "1200px",
          marginRight: "auto",
          marginLeft: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {planos.map((p) => (
          <PlanoCard key={p.nome} plano={p} />
        ))}
      </div>
    </section>
  );
}
