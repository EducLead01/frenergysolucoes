"use client";

import { useState } from "react";

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-gray-400 transition-colors bg-white placeholder:text-gray-400";

const labelClass = "text-sm font-medium text-gray-700";

const ESTADOS = ["GO", "DF", "MT", "MG", "TO"];

function SimNao({
  value,
  onChange,
}: {
  value: "Sim" | "Não" | null;
  onChange: (v: "Sim" | "Não") => void;
}) {
  const base =
    "flex-1 py-3.5 rounded-xl text-sm font-medium border transition-colors cursor-pointer";
  const active = "bg-[#1C2744] text-white border-[#1C2744]";
  const inactive = "bg-white text-gray-700 border-gray-200 hover:border-gray-300";

  return (
    <div className="flex gap-3">
      {(["Sim", "Não"] as const).map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`${base} ${value === opt ? active : inactive}`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function EsferaContactForm() {
  const [sent, setSent] = useState(false);
  const [contaMaior300, setContaMaior300] = useState<"Sim" | "Não" | null>(null);
  const [tarifaSocial, setTarifaSocial] = useState<"Sim" | "Não" | null>(null);

  return (
    <section id="contato" className="py-16" style={{ background: "#F5F5F5" }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col justify-center lg:pt-4">
            <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-[#4D4D4D] text-justify lg:text-left">
              Entre em contato para começar a economizar
            </h2>
          </div>

          {/* Right: form */}
          <div className="flex-1 w-full bg-white rounded-2xl shadow-sm p-8">
            {sent ? (
              <div className="text-center py-12">
                <p className="text-2xl font-bold text-[#F0416E]">Mensagem enviada!</p>
                <p className="text-gray-500 mt-2">Em breve entraremos em contato.</p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                {/* Nome */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Qual o seu nome?</label>
                  <input type="text" placeholder="" required className={inputClass} />
                </div>

                {/* E-mail + WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>
                      Qual o seu e-mail? <span className="text-red-500">*</span>
                    </label>
                    <input type="email" placeholder="E-mail" required className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>
                      Qual o seu Whatsapp? <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" placeholder="(XX) XXXXX-XXXX" required className={inputClass} />
                  </div>
                </div>

                {/* Valor médio + Estado */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>
                      Qual Valor médio da sua conta de energia? <span className="text-red-500">*</span>
                    </label>
                    <input type="text" placeholder="" required className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>
                      Qual é o seu estado? <span className="text-red-500">*</span>
                    </label>
                    <select required className={inputClass}>
                      {ESTADOS.map((uf) => (
                        <option key={uf} value={uf}>{uf}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Conta maior que R$ 300 */}
                <div className="flex flex-col gap-2.5">
                  <label className={labelClass}>
                    O valor da sua conta é maior que R$ 300,00? <span className="text-red-500">*</span>
                  </label>
                  <SimNao value={contaMaior300} onChange={setContaMaior300} />
                </div>

                {/* Tarifa Social */}
                <div className="flex flex-col gap-2.5">
                  <label className={labelClass}>
                    Você possui benefício da Tarifa Social de Energia Elétrica? <span className="text-red-500">*</span>
                  </label>
                  <SimNao value={tarifaSocial} onChange={setTarifaSocial} />
                </div>

                {/* Warning: Tarifa Social */}
                {tarifaSocial === "Sim" && (
                  <div className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-pink-700 leading-relaxed">
                    Infelizmente não conseguimos oferecer desconto para quem já possui a
                    Tarifa Social, pois o benefício do governo já é o limite máximo permitido.
                    Qualquer dúvida, estou à disposição.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-full inline-flex items-center justify-center gap-2 text-white font-bold text-base transition-opacity hover:opacity-90 mt-1"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Enviar
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <p className="text-gray-400 text-xs text-center leading-relaxed">
                  Ao clicar em enviar você concorda que entraremos em contato com você, bem como com a nossa{" "}
                  <a href="#" className="text-[#F0416E] underline">Política de Privacidade</a>.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
