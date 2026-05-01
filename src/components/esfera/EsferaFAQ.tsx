"use client";

import { useState } from "react";

const faqs = [
  {
    q: "O que é a migração para o Mercado Livre de Energia no Modelo Varejista?",
    a: "A modalidade Varejista permite economia com simplicidade, onde a Comercializadora Varejista assume responsabilidades burocráticas e legais da migração. Você economiza sem precisar se preocupar com a parte técnica e jurídica do processo.",
  },
  {
    q: "Quais são os pré-requisitos para migrar no Modelo Varejista?",
    a: "Desde janeiro de 2024, todos os consumidores de média e alta tensão podem migrar. Mais de 175 mil empresas têm essa possibilidade. Requer-se um estudo de viabilidade desenvolvido pela Comercializadora.",
  },
  {
    q: "Qual a diferença entre a migração no Modelo Tradicional e no Modelo Varejista?",
    a: "Modelo Tradicional: burocrático, exige associação à CCEE e responsabilidades financeiras diretas. Modelo Varejista: simples e ágil, com suporte completo da Comercializadora — você não precisa se envolver na operação.",
  },
  {
    q: "Quais são as vantagens de migrar no Modelo Varejista?",
    a: "Economia garantida, simplicidade, liberdade da burocracia, sem exposição a riscos de mercado, previsibilidade orçamentária e preço fixo estabelecido em contrato.",
  },
  {
    q: "Quais são os custos envolvidos na migração?",
    a: "Dois custos possíveis: contratação de Comercializadora Varejista (despesa baixa) e adequação do sistema de medição de energia (apenas em casos específicos).",
  },
  {
    q: "No Mercado Cativo, tenho de pagar mensalmente somente uma conta de luz. Migrando para o Mercado Livre, no Modelo Varejista, o que vai mudar na minha rotina?",
    a: "A rotina muda minimamente: você passa a ter duas contas mensais — uma para a distribuidora e outra com a energia com desconto — versus uma única conta anteriormente.",
  },
  {
    q: "A migração é arriscada e pode levar a empresa a ter perdas financeiras?",
    a: "Não. A Comercializadora assume boa parte dos riscos, a qualidade de fornecimento continua exatamente igual e há apenas economia. Não há risco de falta de energia.",
  },
  {
    q: "Se eu me arrepender da migração, vou poder voltar para o Mercado Cativo?",
    a: "Sim, é possível voltar, mas com uma espera de até 5 anos pela distribuidora. Essa situação é rara e geralmente ocorre por má escolha da Comercializadora — por isso escolha bem.",
  },
];

export function EsferaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] text-center mb-12">
          Quer saber mais sobre o Esfera Simplifica?
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
      </div>
    </section>
  );
}
