"use client";

import { useState } from "react";

const products = [
  {
    title: "Industrial",
    description: "Acima de 75 kWp para indústrias e grandes consumidores. Consultoria energética e engenheiro dedicado ao projeto.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    href: "/produtos/industrial",
  },
  {
    title: "Agro",
    description: "Energia solar para o agronegócio. Irrigação, refrigeração e operações agrícolas com energia limpa e economia real.",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80",
    href: "/agro",
  },
  {
    title: "Residencial",
    description: "Sistemas de 3 a 20 kWp para casas e apartamentos. Retorno de investimento em até 4 anos com economia real na conta de luz.",
    img: "/images/08.png",
    href: "/produtos/residencial",
  },
  {
    title: "Investidores",
    description: "Invista em usinas solares e gere renda passiva com alta rentabilidade, retorno previsível e impacto positivo no planeta.",
    img: "/images/Investidores.jpg",
    href: "/produtos/investidores",
  },
  {
    title: "Comercial",
    description: "Sistemas de 20 a 75 kWp para empresas e comércios. Projeto elétrico completo, homologação ANEEL e acompanhamento dedicado.",
    img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
    href: "/produtos/comercial",
  },
];

const VISIBLE = 4;
const max = products.length - VISIBLE;

export function ProductsSection() {
  const [idx, setIdx] = useState(0);

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <span
            className="inline-block text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
          >
            Produtos
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
            Soluções em energia solar para{" "}
            <span style={{ color: "#FF5900" }}>cada necessidade</span>
          </h2>
        </div>

        {/* Carrossel */}
        <div className="relative">

          {/* Seta esquerda */}
          <button
            onClick={() => setIdx(i => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-opacity disabled:opacity-20"
            style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)", color: "#fff" }}
            aria-label="Anterior"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Seta direita */}
          <button
            onClick={() => setIdx(i => Math.min(max, i + 1))}
            disabled={idx === max}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-opacity disabled:opacity-20"
            style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)", color: "#fff" }}
            aria-label="Próximo"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${idx * (100 / VISIBLE)}%)`,
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {products.map((p, i) => (
                <div
                  key={i}
                  style={{ width: `${100 / VISIBLE}%`, flexShrink: 0, padding: "0 10px" }}
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden flex flex-col h-full"
                    style={{ border: "1.5px solid rgba(255,89,0,0.2)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                  >
                    <div className="overflow-hidden" style={{ height: 180 }}>
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        draggable={false}
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <h3 className="font-bold text-base" style={{ color: "#0d3347" }}>{p.title}</h3>
                      <p className="text-[#787878] text-sm leading-relaxed flex-1">{p.description}</p>
                      <a
                        href={p.href}
                        className="self-start text-white text-xs font-bold px-5 py-2 rounded-full transition-opacity hover:opacity-90 mt-1"
                        style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                      >
                        Saiba Mais
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="rounded-full transition-all"
                style={{
                  width: idx === i ? 24 : 8,
                  height: 8,
                  background: idx === i ? "linear-gradient(90deg, #F0416E, #FF5900)" : "#ddd",
                }}
                aria-label={`Ir para ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
