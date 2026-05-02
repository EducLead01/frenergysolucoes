"use client";

import { useState } from "react";

export function EsferaContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato-esfera" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: text */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] mb-4 leading-snug">
              Entre em contato e saiba como sua empresa irá economizar
            </h2>
            <p className="text-[#787878] text-base leading-relaxed mb-6">
              Aproveite para tirar todas as suas dúvidas sobre o Mercado Livre de Energia e entender como a Esfera ajuda você a economizar com a melhor energia.
            </p>
            <p className="text-[#F0416E] font-semibold text-sm">
              Retornaremos em até 1 dia útil.
            </p>
          </div>

          {/* Right: form */}
          <div className="flex-1 w-full">
            {sent ? (
              <div className="text-center py-12">
                <p className="text-2xl font-bold text-[#F0416E]">Mensagem enviada!</p>
                <p className="text-[#787878] mt-2">Em breve entraremos em contato.</p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <input
                  type="text"
                  placeholder="Nome completo"
                  required
                  className="border border-gray-200 rounded-xl px-5 py-4 text-[#4D4D4D] text-sm outline-none focus:border-[#F0416E] transition-colors"
                />
                <input
                  type="email"
                  placeholder="E-mail corporativo"
                  required
                  className="border border-gray-200 rounded-xl px-5 py-4 text-[#4D4D4D] text-sm outline-none focus:border-[#F0416E] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Telefone / WhatsApp"
                  className="border border-gray-200 rounded-xl px-5 py-4 text-[#4D4D4D] text-sm outline-none focus:border-[#F0416E] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Nome da empresa"
                  className="border border-gray-200 rounded-xl px-5 py-4 text-[#4D4D4D] text-sm outline-none focus:border-[#F0416E] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-full inline-flex items-center justify-center gap-2 text-white font-bold text-base transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Enviar
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-[#787878] text-xs text-center leading-relaxed">
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
