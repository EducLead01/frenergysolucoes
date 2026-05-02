"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";

function fmt(n: number) {
  return Math.round(n).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function CalculadoraSection() {
  const [bill, setBill] = useState(400);

  const savingsRate = 0.9;
  const monthly = bill * savingsRate;
  const annual = monthly * 12;
  const pct = ((bill - 100) / (5000 - 100)) * 100;
  const sliderBg = `linear-gradient(to right, #FF5900 ${pct}%, #e5e7eb ${pct}%)`;

  return (
    <section id="calculadora" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl text-center">

        {/* Header */}
        <p className="text-[#4D4D4D] text-lg lg:text-xl font-semibold mb-12 leading-relaxed">
          Deslize a lâmpada e tenha uma noção do valor médio da sua conta de luz e veja sua economia em tempo real.
        </p>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

          {/* Slider label */}
          <p className="text-base font-bold text-[#4D4D4D] mb-6">
            Valor da sua conta de luz mensal
          </p>

          {/* Value input */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="text-3xl font-bold text-gray-400">R$</span>
            <input
              id="fr-calc-input"
              type="number"
              min={100}
              max={5000}
              step={10}
              value={bill}
              onChange={(e) => {
                const v = Math.max(100, Math.min(5000, Number(e.target.value) || 100));
                setBill(v);
              }}
              className="w-40 text-5xl font-extrabold text-[#FF5900] border-b-2 border-[#FF5900] outline-none bg-transparent text-center"
            />
          </div>

          {/* Slider + floating bulb */}
          <div className="relative pt-14 mb-1">
            <div
              className="absolute top-0 pointer-events-none flex flex-col items-center"
              style={{ left: `clamp(1.2rem, calc(${pct}% - 1.2rem), calc(100% - 1.2rem))` }}
            >
              <div className="rounded-full p-2.5 shadow-lg" style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)", boxShadow: "0 4px 16px rgba(255,89,0,0.4)" }}>
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="w-2.5 h-2.5 rotate-45 -mt-1.5" style={{ background: "#FF5900" }} />
            </div>

            <input
              type="range"
              min={100}
              max={5000}
              step={10}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="fr-slider w-full h-3 rounded-full appearance-none cursor-pointer"
              style={{ background: sliderBg }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mb-10">
            <span>R$ 100</span>
            <span>R$ 5.000</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-8" />

          {/* Result */}
          <p className="text-lg font-semibold text-[#4D4D4D] mb-2">
            No primeiro ano, você vai economizar até
          </p>
          <p className="text-5xl font-extrabold mb-2" style={{ color: "#FF5900" }}>
            {fmt(annual)}
          </p>
          <p className="text-xs text-gray-400 mb-8">
            Simulação baseada em 90% de economia solar. O valor real pode sofrer alterações conforme o projeto.
          </p>

          {/* CTA */}
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 w-full text-white font-bold py-4 rounded-full text-lg transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
          >
            Quero economizar
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
