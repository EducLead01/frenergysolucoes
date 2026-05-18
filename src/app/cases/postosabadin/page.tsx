"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Award, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

const fotos = [
  "/images/posto02.png",
  "/images/posto03.png",
  "/images/posto04.png",
  "/images/posto06.png",
  "/images/posto07.png",
];

export default function PostoSabadin() {
  const [idx, setIdx] = useState(0);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24" style={{ fontFamily: "'Open Sans', sans-serif" }}>

        {/* Hero */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              <div className="flex-1 flex flex-col gap-5">
                <span
                  className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Case de Sucesso
                </span>
                <p className="text-sm font-semibold text-[#FF5900] uppercase tracking-widest">Posto de Combustível · Auto Consumo · Goiânia/GO</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-snug">
                  Posto Sabadin
                </h1>
                <p className="text-[#787878] text-base leading-relaxed">
                  Sistema fotovoltaico de grande porte instalado em auto consumo, projetado para alta geração e máxima segurança, atendendo às exigências do Corpo de Bombeiros.
                </p>
              </div>

              {/* Carrossel */}
              <div className="flex-1 w-full relative">
                <div
                  className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                  style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={fotos[idx]}
                    alt={`Posto Sabadin ${idx + 1}`}
                    fill
                    className="object-cover transition-opacity duration-300"
                    priority
                  />

                  {fotos.length > 1 && (
                    <>
                      <button
                        onClick={() => setIdx(i => Math.max(0, i - 1))}
                        disabled={idx === 0}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white shadow-lg transition-opacity disabled:opacity-30"
                        style={{ background: "rgba(0,0,0,0.45)" }}
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => setIdx(i => Math.min(fotos.length - 1, i + 1))}
                        disabled={idx === fotos.length - 1}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white shadow-lg transition-opacity disabled:opacity-30"
                        style={{ background: "rgba(0,0,0,0.45)" }}
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {fotos.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setIdx(i)}
                            className="rounded-full transition-all duration-300"
                            style={{ width: idx === i ? 20 : 6, height: 6, background: idx === i ? "#FF5900" : "rgba(255,255,255,0.6)" }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex justify-center py-10 bg-white">
          <a
            href="/orcamentos"
            className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-full transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
          >
            Quero economizar
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Números */}
        <section className="py-14" style={{ background: "#f7f7f7" }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { valor: "99,06", unidade: "kWp", label: "Potência instalada" },
                { valor: "12.600", unidade: "kWh/mês", label: "Produção média" },
                { valor: "156", unidade: "módulos", label: "JÁ 635W cada" },
                { valor: "1", unidade: "inversor", label: "SolarEdge 75 kW" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <p className="font-black text-3xl leading-none" style={{ color: "#FF5900" }}>{item.valor}</p>
                  <p className="text-xs font-bold text-[#FF5900] mt-1">{item.unidade}</p>
                  <p className="text-sm font-semibold text-[#4D4D4D] mt-2 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="flex flex-col gap-5">
              {[
                {
                  Icon: ShieldCheck,
                  titulo: "Aprovado pelo Corpo de Bombeiros",
                  texto: "O sistema possui otimizadores de potência ligados entre os módulos e os inversores, atendendo à nova norma de segurança contra incêndio exigida pelo Corpo de Bombeiros.",
                },
                {
                  Icon: Award,
                  titulo: "Garantia de 12 anos",
                  texto: "Equipamentos com garantia muito acima da média do mercado, garantindo um prazo muito acima dos outros produtos existentes no mercado e excelente pós-venda.",
                },
                {
                  Icon: Clock,
                  titulo: "Reposição em até 15 dias",
                  texto: "Prazo com reposição em média de 15 dias entre a aprovação da garantia e a reposição na planta — tempo recorde no setor.",
                },
              ].map(({ Icon, titulo, texto }) => (
                <div key={titulo} className="flex gap-5 items-start p-6 rounded-2xl bg-[#f7f7f7]">
                  <Icon size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#FF5900" }} />
                  <div>
                    <p className="font-bold text-[#1a1a1a] text-base mb-1">{titulo}</p>
                    <p className="text-[#787878] text-sm leading-relaxed">{texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-14" style={{ background: "#111" }}>
          <div className="container mx-auto px-6 max-w-xl text-center">
            <p className="text-white font-bold text-xl mb-2">Quer um projeto assim?</p>
            <p className="text-white/60 text-sm mb-8">Faça um orçamento gratuito e descubra quanto você pode economizar.</p>
            <a
              href="/orcamentos"
              className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
            >
              Quero economizar também
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </section>

      </main>
      <EsferaFooter />
    </>
  );
}
