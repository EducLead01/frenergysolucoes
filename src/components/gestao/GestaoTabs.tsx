"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "gerenciamento",
    label: "Gerenciamento Inteligente",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v2m0 8v2M9.5 9A3 3 0 0 1 15 12a3 3 0 0 1-5.5 1" />
      </svg>
    ),
    titulo: "Independência Financeira",
    descricao: "Com a gestão de energia da Frenergy, sua empresa pode reduzir em até 26% os custos com energia. Auxiliamos na migração para o Mercado Livre de Energia e estruturamos um plano de economia personalizado com retorno rápido sobre o investimento.",
    img: "/images/Financeiro.jpg",
  },
  {
    id: "app",
    label: "APP Dedicado",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
    titulo: "Equipe Especializada",
    descricao: "Contamos com uma equipe multidisciplinar de engenheiros e técnicos certificados, com ampla experiência no mercado de energia solar. Do projeto à manutenção, estamos ao seu lado em cada etapa com suporte prioritário.",
    img: "/images/esfera/card-controle.jpg",
  },
];

export function GestaoTabs() {
  const [active, setActive] = useState("gerenciamento");
  const current = tabs.find((t) => t.id === active)!;

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

        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left: tab list */}
          <div className="flex flex-col gap-3 lg:w-[280px] shrink-0">
            {tabs.map((tab) => {
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 text-left transition-all duration-200 cursor-pointer border-2 w-full"
                  style={{
                    borderColor: isActive ? "#F0416E" : "transparent",
                    boxShadow: isActive
                      ? "0 4px 20px rgba(240,65,110,0.2)"
                      : "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <span style={{ color: isActive ? "#F0416E" : "#bbb", transition: "color 200ms" }}>
                    {tab.icon}
                  </span>
                  <span
                    className="font-bold text-sm"
                    style={{ color: isActive ? "#F0416E" : "#4D4D4D", transition: "color 200ms" }}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: content */}
          <div className="flex-1 bg-white rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8">

            {/* Text side */}
            <div className="flex-1 flex flex-col gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
                style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
              >
                {current.icon}
              </div>
              <h3 className="text-xl font-bold text-[#4D4D4D]">{current.titulo}</h3>
              <p className="text-[#787878] text-sm leading-relaxed">{current.descricao}</p>
              <a
                href="#contato"
                className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90 mt-2"
                style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
              >
                Quero saber mais
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Image — padrão Frenergy */}
            <div className="w-full lg:w-[220px] shrink-0 relative">
              <div
                className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
              />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src={current.img}
                  alt={current.titulo}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
