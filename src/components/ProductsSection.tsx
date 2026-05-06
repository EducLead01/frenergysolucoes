"use client";

import { useState } from "react";

const products = [
  {
    title: "Residencial",
    description: "Sistemas de 3 a 20 kWp para casas e apartamentos. Retorno de investimento em até 4 anos com economia real na conta de luz.",
    img: "/images/08.png",
  },
  {
    title: "Comercial",
    description: "Sistemas de 20 a 75 kWp para empresas e comércios. Projeto elétrico completo, homologação ANEEL e acompanhamento dedicado.",
    img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
  },
  {
    title: "Industrial",
    description: "Acima de 75 kWp para indústrias e grandes consumidores. Consultoria energética e engenheiro dedicado ao projeto.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    title: "Agro",
    description: "Energia solar para o agronegócio. Irrigação, refrigeração e operações agrícolas com energia limpa e economia real.",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80",
  },
  {
    title: "Investidores",
    description: "Invista em usinas solares e gere renda passiva com alta rentabilidade, retorno previsível e impacto positivo no planeta.",
    img: "/images/Investidores.jpg",
  },
];

const VISIBLE = 3;

export function ProductsSection() {
  const [start, setStart] = useState(0);

  const canPrev = start > 0;
  const canNext = start + VISIBLE < products.length;

  const visible = products.slice(start, start + VISIBLE);

  return (
    <section id="servicos" className="py-20" style={{ background: "#0d3347" }}>
      <div className="container mx-auto px-6 max-w-5xl">

        <div className="text-center mb-12">
          <span
            className="inline-block text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
          >
            Produtos
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Soluções em energia solar para{" "}
            <span style={{ color: "#FF5900" }}>cada necessidade</span>
          </h2>
        </div>

        <div className="relative flex items-center gap-4">

          {/* Prev arrow */}
          <button
            onClick={() => setStart(start - 1)}
            disabled={!canPrev}
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: canPrev ? "white" : "rgba(255,255,255,0.15)",
              color: canPrev ? "#0d3347" : "rgba(255,255,255,0.4)",
              cursor: canPrev ? "pointer" : "default",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="font-bold text-base" style={{ color: "#0d3347" }}>{p.title}</h3>
                  <p className="text-[#787878] text-sm leading-relaxed flex-1">{p.description}</p>
                  <a
                    href="#contato"
                    className="self-start text-white text-xs font-bold px-5 py-2 rounded-full transition-opacity hover:opacity-90 mt-1"
                    style={{ background: "#0d3347" }}
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={() => setStart(start + 1)}
            disabled={!canNext}
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: canNext ? "white" : "rgba(255,255,255,0.15)",
              color: canNext ? "#0d3347" : "rgba(255,255,255,0.4)",
              cursor: canNext ? "pointer" : "default",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}
