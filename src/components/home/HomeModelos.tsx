"use client";

import { useState } from "react";

const cases = [
  { img: "/images/Residencial.png", href: "/cases/cliente01" },
  { img: "/images/Comercial.png",   href: "/cases/cliente02" },
  { img: "/images/Industrial.png",  href: "/cases/cliente03" },
  { img: "/images/Agro.png",        href: "/cases/cliente04" },
  { img: "/images/Investidores.net.png", href: "/cases/cliente05" },
];

const VISIBLE = 4;
const maxIdx = cases.length - VISIBLE;

export function HomeModelos() {
  const [idx, setIdx] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
            Conheça nossos <span style={{ color: "#FF5900" }}>cases</span>
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
              {cases.map((c, i) => (
                <div key={i} style={{ width: `${100 / VISIBLE}%`, flexShrink: 0, padding: "0 8px" }}>
                  <a
                    href={c.href}
                    className="relative rounded-2xl overflow-hidden block w-full group"
                    style={{ aspectRatio: "310/480" }}
                  >
                    <img
                      src={c.img}
                      alt={`Case ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      draggable={false}
                    />
                  </a>
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
