"use client";

import { useRef, useState, useCallback } from "react";
import { Lightbulb } from "lucide-react";

const MIN = 100;
const MAX = 5000;

function fmt(n: number) {
  return Math.round(n).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function DragSlider({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const pct = ((value - MIN) / (MAX - MIN)) * 100;

  const calcValue = useCallback((clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const raw = MIN + (x / rect.width) * (MAX - MIN);
    onChange(Math.round(raw / 10) * 10);
  }, [onChange]);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    calcValue(e.clientX);
    const move = (e: MouseEvent) => { if (dragging.current) calcValue(e.clientX); };
    const up = () => { dragging.current = false; window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    calcValue(e.touches[0].clientX);
    const move = (e: TouchEvent) => calcValue(e.touches[0].clientX);
    const end = () => { window.removeEventListener("touchmove", move); window.removeEventListener("touchend", end); };
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", end);
  };

  return (
    <div
      ref={trackRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      className="relative h-3 rounded-full bg-gray-200 cursor-pointer select-none"
      style={{ touchAction: "none" }}
    >
      {/* Filled track */}
      <div
        className="absolute left-0 top-0 h-full rounded-full pointer-events-none"
        style={{ width: `${pct}%`, background: "linear-gradient(to right, #F0416E, #FF5900)" }}
      />

      {/* Lightbulb handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
        style={{ left: `${pct}%` }}
      >
        {/* Bulb */}
        <div
          className="rounded-full p-2.5 shadow-xl"
          style={{
            background: "linear-gradient(135deg, #F0416E, #FF5900)",
            boxShadow: "0 6px 20px rgba(255,89,0,0.5)",
            marginBottom: "-6px",
          }}
        >
          <Lightbulb className="w-7 h-7 text-white" />
        </div>
        {/* Triangle pointer down to track */}
        <div className="w-3 h-3 rotate-45" style={{ background: "#FF5900", marginTop: "-6px" }} />
      </div>
    </div>
  );
}

export function CalculadoraSection() {
  const [bill, setBill] = useState(400);

  const savingsRate = 0.9;
  const monthly = bill * savingsRate;
  const annual = monthly * 12;

  return (
    <section id="calculadora" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl text-center">

        <p className="text-[#4D4D4D] text-lg lg:text-xl font-semibold mb-12 leading-relaxed">
          Deslize a lâmpada e tenha uma noção do valor médio da sua conta de luz e veja sua economia em tempo real.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

          {/* Two columns */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:divide-x lg:divide-gray-100 mb-8">

            {/* Left — input + drag slider */}
            <div className="flex-1 flex flex-col items-center lg:pr-10">
              <p className="text-base font-bold text-[#4D4D4D] mb-6 text-center">
                Valor da sua conta de luz mensal
              </p>

              <div className="flex items-center justify-center gap-2 mb-10">
                <span className="text-3xl font-bold text-gray-400">R$</span>
                <input
                  id="fr-calc-input"
                  type="number"
                  min={MIN}
                  max={MAX}
                  step={10}
                  value={bill}
                  onChange={(e) => {
                    const v = Math.max(MIN, Math.min(MAX, Number(e.target.value) || MIN));
                    setBill(v);
                  }}
                  className="w-36 text-5xl font-extrabold text-[#FF5900] border-b-2 border-[#FF5900] outline-none bg-transparent text-center"
                />
              </div>

              {/* Custom drag slider — extra top padding for bulb overflow */}
              <div className="w-full pt-8 pb-2">
                <DragSlider value={bill} onChange={setBill} />
              </div>
              <div className="flex justify-between text-xs text-gray-400 w-full mt-3">
                <span>R$ 100</span>
                <span>R$ 5.000</span>
              </div>
            </div>

            {/* Right — monthly savings */}
            <div className="flex-1 flex flex-col items-center justify-center lg:pl-10">
              <p className="text-base font-bold text-[#4D4D4D] mb-6 text-center">
                Valor em média economizado no mês
              </p>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-gray-400">R$</span>
                <span className="text-5xl font-extrabold" style={{ color: "#FF5900" }}>
                  {Math.round(monthly).toLocaleString("pt-BR")}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 mb-8" />

          <p className="text-lg font-semibold text-[#4D4D4D] mb-2">
            No primeiro ano, você vai economizar até
          </p>
          <p className="text-5xl font-extrabold mb-2" style={{ color: "#FF5900" }}>
            {fmt(annual)}
          </p>
          <p className="text-xs text-gray-400 mb-8">
            Simulação baseada em 90% de economia solar. O valor real pode sofrer alterações conforme o projeto.
          </p>

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
