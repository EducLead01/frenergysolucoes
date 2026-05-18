"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Quanto custa instalar energia solar?",
    a: "Para descobrir a resposta, basta preencher o formulário com as suas informações e o nosso Simulador Solar vai fazer todo o cálculo, trazendo as informações que você precisa com clareza e simplicidade.",
  },
  {
    q: "Preciso ser uma empresa para instalar energia solar?",
    a: "Não, pessoas físicas e pessoas jurídicas contam com a oportunidade de economizar com a energia solar.",
  },
  {
    q: "Consigo instalar energia solar em apartamento?",
    a: "A melhor localização para instalar energia solar em apartamento é na cobertura do condomínio, onde há uma ampla área livre e alta incidência do sol.",
  },
  {
    q: "Será feito alguma obra ou mudança elétrica na casa?",
    a: "Nenhuma obra é necessária. As placas são instaladas geralmente no telhado com uma estrutura simples — sem quebradeira, sem sujeira e sem qualquer reforma. O sistema é integrado diretamente à rede elétrica já existente do imóvel, sem alterar nada no projeto arquitetônico. O processo é rápido e o seu dia a dia não é interrompido.",
  },
];

export function EsferaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] text-center mb-12">
          Dúvidas Frequentes
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#4D4D4D] text-sm lg:text-base">{faq.q}</span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-lg font-bold transition-transform"
                  style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[#787878] text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/orcamentos"
            className="inline-flex items-center gap-2 text-white font-bold uppercase text-sm px-8 py-4 rounded-full transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
          >
            Quero economizar
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
