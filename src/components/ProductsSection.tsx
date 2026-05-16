"use client";

import { useState } from "react";

const products = [
  {
    title: "Industrial",
    description: "Acima de 75 kWp para indústrias e grandes consumidores. Consultoria energética e engenheiro dedicado ao projeto.",
    img: "/images/Industrial.png",
    href: "/produtos/industrial",
  },
  {
    title: "Agro",
    description: "Energia solar para o agronegócio. Irrigação, refrigeração e operações agrícolas com energia limpa e economia real.",
    img: "/images/Agro.png",
    href: "/agro",
  },
  {
    title: "Residencial",
    description: "Sistemas de 3 a 20 kWp para casas e apartamentos. Retorno de investimento em até 4 anos com economia real na conta de luz.",
    img: "/images/Residencial.png",
    href: "/produtos/residencial",
  },
  {
    title: "Investidores",
    description: "Invista em usinas solares e gere renda passiva com alta rentabilidade, retorno previsível e impacto positivo no planeta.",
    img: "/images/Investidores.net.png",
    href: "/produtos/investidores",
  },
  {
    title: "Comercial",
    description: "Sistemas de 20 a 75 kWp para empresas e comércios. Projeto elétrico completo, homologação ANEEL e acompanhamento dedicado.",
    img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
    href: "/produtos/comercial",
  },
];

function ProductCard({ title, description, img, href }: typeof products[0]) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col justify-end w-full"
      style={{ aspectRatio: "310/480" }}
    >
      {/* Imagem de fundo */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      {/* Overlay gradiente na base */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)" }}
      />
      {/* Conteúdo */}
      <div className="relative z-10 p-5 flex flex-col gap-3">
        <div>
          <p className="text-white font-bold text-base leading-tight">{title}</p>
          <p className="text-white/70 text-xs mt-1 leading-relaxed line-clamp-3">{description}</p>
        </div>
        <a
          href={href}
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white font-bold text-xs transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
        >
          Saiba Mais
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

const VISIBLE = 4;
const maxIdx = products.length - VISIBLE;

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

        <div className="relative px-6">
          {/* Seta esquerda */}
          <button
            onClick={() => setIdx(i => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-opacity disabled:opacity-20 hover:brightness-110"
            style={{ background: "#115e59" }}
            aria-label="Anterior"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Seta direita */}
          <button
            onClick={() => setIdx(i => Math.min(maxIdx, i + 1))}
            disabled={idx === maxIdx}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-opacity disabled:opacity-20 hover:brightness-110"
            style={{ background: "#115e59" }}
            aria-label="Próximo"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                <div key={i} style={{ width: `${100 / VISIBLE}%`, flexShrink: 0, padding: "0 8px" }}>
                  <ProductCard {...p} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: idx === i ? 24 : 8,
                  height: 8,
                  background: idx === i ? "linear-gradient(90deg, #F0416E, #FF5900)" : "#ddd",
                }}
                aria-label={`Posição ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
