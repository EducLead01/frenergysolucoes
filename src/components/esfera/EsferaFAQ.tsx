"use client";

import { useState } from "react";

const faqs: { q: string; a: string }[] = [];

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
      </div>
    </section>
  );
}
