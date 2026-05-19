"use client";

import { useState, useEffect, useRef } from "react";

function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const pct = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - pct, 3);
          setValue(Math.floor(eased * target));
          if (pct < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}
import Image from "next/image";
import { Award, Clock, TrendingUp, ShieldCheck, ChevronLeft, ChevronRight, Shield, Sun, HardHat, FileCheck, Camera } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

const fotos = [
  "/images/itapoa02.jpeg",
  "/images/itapoa03.jpeg",
  "/images/itapoa04.jpeg",
  "/images/itapoa05.jpeg",
  "/images/itapoa06.jpeg",
  "/images/itapoa07.jpeg",
  "/images/itapoa08.jpeg",
];

export default function Itapoa() {
  const [idx, setIdx] = useState(0);
  const { value: renda, ref: rendaRef } = useCountUp(8730);

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
                <p className="text-sm font-semibold text-[#FF5900] uppercase tracking-widest">Usina de Investimento · Goiânia/GO</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-snug">
                  Usinas I e II Itapoã
                </h1>
                <p className="text-[#787878] text-base leading-relaxed">
                  Projeto de investimento em usinas fotovoltaicas com geração de renda passiva mensal. Sistema de médio porte com alta eficiência, monitoramento completo e retorno previsível ao investidor.
                </p>
                <div className="flex items-center gap-3 bg-[#f7f7f7] rounded-2xl px-5 py-4 self-center lg:self-start">
                  <TrendingUp size={20} style={{ color: "#FF5900", flexShrink: 0 }} />
                  <div ref={rendaRef}>
                    <p className="text-xs font-bold text-[#4D4D4D] uppercase tracking-wide">Renda mensal líquida para o investidor</p>
                    <p className="text-xl font-black" style={{ color: "#FF5900" }}>
                      R$ {renda.toLocaleString("pt-BR")},00
                    </p>
                  </div>
                </div>
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
                    alt={`Itapoã ${idx + 1}`}
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

        {/* O que está incluso */}
        <section className="py-10 bg-[#F7F7F7]">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-xl lg:text-2xl font-bold text-[#4D4D4D] text-center mb-6">
              O que está incluso no <span style={{ color: "#FF5900" }}>investimento</span>
            </h2>
            <p className="text-[#787878] text-sm text-center mb-8 leading-relaxed">
              Projeto de investimento em usinas fotovoltaicas com geração de renda passiva mensal. Sistema de médio porte com alta eficiência, monitoramento completo e retorno previsível ao investidor.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Cercamento",                            Icon: Shield    },
                { label: "Material solar",                        Icon: Sun       },
                { label: "Mão de obra de execução com britamento", Icon: HardHat  },
                { label: "Projetos e homologação",                Icon: FileCheck },
                { label: "Monitoramento de câmeras com DVRs",     Icon: Camera    },
              ].map(({ label, Icon }) => (
                <div key={label} className="bg-white rounded-2xl shadow-sm flex items-center gap-4 px-6 py-5">
                  <Icon size={20} className="flex-shrink-0" style={{ color: "#FF5900" }} />
                  <span className="font-semibold text-[#4D4D4D] text-sm lg:text-base">{label}</span>
                </div>
              ))}
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
            Quero investir também
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Números */}
        <section className="py-14" style={{ background: "#f7f7f7" }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { valor: "84", unidade: "kWp", label: "Potência instalada" },
                { valor: "10.752", unidade: "kWh/mês", label: "Produção média" },
                { valor: "120", unidade: "módulos", label: "Trina 700W cada" },
                { valor: "2", unidade: "inversores", label: "Solis 30 kW" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <p className="font-black text-3xl leading-none" style={{ color: "#FF5900" }}>{item.valor}</p>
                  <p className="text-xs font-bold text-[#FF5900] mt-1">{item.unidade}</p>
                  <p className="text-sm font-semibold text-[#4D4D4D] mt-2 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Investimento */}
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm text-center">
              <p className="text-sm font-semibold text-[#4D4D4D] uppercase tracking-wide mb-1">Investimento total (sem terreno)</p>
              <p className="font-black text-3xl" style={{ color: "#FF5900" }}>R$ 320.000,00</p>
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
                  titulo: "Garantia de 10 anos",
                  texto: "Garantia de 10 anos e excelente pós-venda, garantindo um prazo muito acima da média dos outros produtos existentes no mercado.",
                },
                {
                  Icon: Clock,
                  titulo: "Reposição em até 45 dias úteis",
                  texto: "Média de prazo de reposição dos componentes de 45 dias úteis após validação da garantia.",
                },
              ].map(({ Icon, titulo, texto }) => (
                <div key={titulo} className="flex gap-5 items-start p-6 rounded-2xl bg-[#f7f7f7]">
                  <Icon size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#FF5900" }} />
                  <div>
                    <p className="font-bold text-[#1a1a1a] text-base mb-1">{titulo}</p>
                    <p className="text-[#787878] text-sm leading-relaxed whitespace-pre-line">{texto}</p>
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
