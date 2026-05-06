"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "gerenciamento",
    label: "Gerenciamento Inteligente",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 16l3-4 3 3 3-5" />
      </svg>
    ),
    titulo: "Gerenciamento Inteligente",
    descricao: "Nossa plataforma de gerenciamento energético monitora em tempo real a geração e o consumo da sua empresa. Com dashboards intuitivos, você acompanha cada kWh gerado, identifica desperdícios e toma decisões baseadas em dados precisos.",
    img: "/images/assinestore/admin_analytics2x.png",
  },
  {
    id: "independencia",
    label: "Independência Financeira",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v2m0 8v2M9.5 9A3 3 0 0 1 15 12a3 3 0 0 1-5.5 1" />
      </svg>
    ),
    titulo: "Independência Financeira",
    descricao: "Com a gestão de energia da Frenergy, sua empresa pode reduzir custos, gerar receita com a venda de energia excedente e abastecer pontos estratégicos do seu negócio, como eletropostos e carregamento de baterias. Estruturamos um plano personalizado, com retorno rápido sobre o investimento.",
    img: "/images/Financeiro.jpg",
  },
  {
    id: "app",
    label: "APP Dedicado",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" />
      </svg>
    ),
    titulo: "APP Dedicado",
    descricao: "O aplicativo exclusivo da Frenergy coloca o controle da sua energia na palma da mão. Acompanhe em tempo real a geração solar, o valor economizado e o desempenho dos painéis, de qualquer lugar e a qualquer hora.",
    img: "/images/app.png",
  },
  {
    id: "equipe",
    label: "Equipe Especializada",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
    titulo: "Equipe Especializada",
    descricao: "Contamos com uma equipe multidisciplinar de engenheiros e técnicos certificados, com ampla experiência no mercado de energia solar. Do projeto à manutenção, estamos ao seu lado em cada etapa com suporte prioritário.",
    img: "/images/equipe01.png",
  },
];

export function GestaoTabs() {
  const [active, setActive] = useState<string>("gerenciamento");

  function toggle(id: string) {
    setActive((prev) => (prev === id ? "" : id));
  }

  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="container mx-auto px-6 max-w-5xl">

        <div className="mb-10">
          <span
            className="inline-block text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
          >
            O que oferecemos
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-snug">
            Soluções completas em{" "}
            <span style={{ color: "#FF5900" }}>gestão de energia</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {tabs.map((tab) => {
            const isOpen = active === tab.id;
            return (
              <div
                key={tab.id}
                className="rounded-2xl overflow-hidden bg-white"
                style={{
                  border: isOpen ? "2px solid #FF5900" : "2px solid transparent",
                  boxShadow: isOpen ? "0 4px 20px rgba(255,89,0,0.15)" : "0 2px 8px rgba(0,0,0,0.08)",
                  transition: "border-color 300ms, box-shadow 300ms",
                }}
              >
                {/* Header */}
                <button
                  onClick={() => toggle(tab.id)}
                  className="w-full flex items-start justify-between px-5 py-4 cursor-pointer gap-3"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="shrink-0 mt-0.5" style={{ color: isOpen ? "#FF5900" : "#bbb", transition: "color 200ms" }}>
                      {tab.icon}
                    </span>
                    <div className="flex flex-col gap-1 min-w-0 text-left">
                      <span
                        className="font-bold text-sm"
                        style={{ color: isOpen ? "#FF5900" : "#4D4D4D", transition: "color 200ms" }}
                      >
                        {tab.label}
                      </span>
                      {!isOpen && (
                        <span className="text-xs text-[#aaa] truncate">{tab.descricao}</span>
                      )}
                    </div>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isOpen ? "#FF5900" : "#bbb"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transition: "transform 300ms, stroke 200ms", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0, marginTop: "2px" }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Collapsible content */}
                <div
                  style={{
                    maxHeight: isOpen ? "600px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 400ms ease",
                  }}
                >
                  <div
                    className="flex flex-col lg:flex-row items-center gap-8 px-6 pb-8 pt-2"
                    style={{ borderTop: "1px solid #f0f0f0" }}
                  >
                    {/* Text */}
                    <div className="flex-1 flex flex-col gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                        style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                      >
                        {tab.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#4D4D4D]">{tab.titulo}</h3>
                      <p className="text-[#787878] text-sm leading-relaxed">{tab.descricao}</p>
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

                    {/* Image */}
                    <div className="w-full lg:w-[220px] shrink-0 relative">
                      <div
                        className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                        style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                      />
                      <div className="relative rounded-2xl overflow-hidden h-[200px] lg:h-auto lg:aspect-[4/3]">
                        <Image
                          src={tab.img}
                          alt={tab.titulo}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) calc(100vw - 48px), 220px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
