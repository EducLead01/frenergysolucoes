import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaContactForm } from "@/components/esfera/EsferaContactForm";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

export default function ProdutoAgro() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: "'Open Sans', sans-serif" }}>

        {/* Intro — imagem + texto */}
        <section className="pt-32 pb-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              <div className="flex-1 relative">
                <div
                  className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                  style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=900&q=80"
                    alt="Energia solar no agronegócio"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-5">
                <span
                  className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Por que solar no campo?
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] leading-snug">
                  Sua propriedade produz mais{" "}
                  <span style={{ color: "#FF5900" }}>gastando menos</span>
                </h2>
                <p className="text-[#787878] text-base leading-relaxed">
                  O agronegócio é um dos maiores consumidores de energia elétrica do Brasil. Sistemas de irrigação, armazenamento em câmaras frias, secadores de grãos e toda a infraestrutura rural representam uma fatia expressiva do custo operacional.
                </p>
                <p className="text-[#787878] text-base leading-relaxed">
                  A Frenergy projeta e instala sistemas fotovoltaicos de médio e grande porte, dimensionados para a realidade da sua fazenda, com retorno de investimento comprovado e acompanhamento técnico dedicado.
                </p>
                <a
                  href="#contato"
                  className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Solicitar proposta
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* Benefícios — 3 cards */}
        <section className="py-20 bg-[#F7F7F7]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
                O que a energia solar faz pela{" "}
                <span style={{ color: "#FF5900" }}>sua produção</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 30 31" fill="none">
                      <rect x="1" y="17.9" width="5.96" height="8.9" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2" />
                      <rect x="12.08" y="13.08" width="5.96" height="13.73" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2" />
                      <rect x="23.04" y="3.81" width="5.96" height="23" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2" />
                    </svg>
                  ),
                  title: "Redução de custos",
                  text: "Economize até 95% na conta de energia elétrica, com retorno do investimento em 3 a 5 anos.",
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 30 30" fill="none">
                      <path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2" />
                      <path d="M15 8v7l4.5 2.5" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: "Energia previsível",
                  text: "Proteção contra reajustes tarifários e interrupções no fornecimento em áreas remotas.",
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 30 31" fill="none">
                      <path d="M4 15.64C4 9.38 9.07 4.31 15.33 4.31c6.26 0 11.34 5.07 11.34 11.33 0 6.26-5.08 11.34-11.34 11.34C9.07 26.98 4 21.9 4 15.64z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2" />
                      <path d="M11.82 16.82l2.33 2.33 4.66-4.66" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: "Projeto completo",
                  text: "Da engenharia à homologação ANEEL: cuidamos de todo o processo para você.",
                },
              ].map((b, i) => (
                <div key={i} className="bg-white rounded-2xl p-7 shadow-sm flex flex-col gap-4">
                  {b.icon}
                  <h3 className="font-bold text-[#4D4D4D] text-base">{b.title}</h3>
                  <p className="text-[#787878] text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20" style={{ background: "#0d3347" }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
              {[
                { num: "+200", label: "projetos rurais entregues" },
                { num: "R$8M+", label: "em economia gerada para clientes" },
                { num: "98%", label: "de satisfação no pós-venda" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-4xl lg:text-5xl font-bold" style={{ color: "#FF5900" }}>{s.num}</span>
                  <span className="text-white/70 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-3 rounded-full transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
              >
                Saiba mais
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Soluções */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
                Nossas <span style={{ color: "#FF5900" }}>soluções para o campo</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Irrigação Solar",
                  text: "Sistemas fotovoltaicos dimensionados para bombas de irrigação de qualquer porte, com ou sem conexão à rede.",
                  img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=80",
                },
                {
                  title: "Energia Rural",
                  text: "Abastecimento completo de sede, galpões, câmaras frias e infraestrutura da propriedade.",
                  img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
                },
                {
                  title: "Monitoramento",
                  text: "Acompanhe em tempo real a geração, consumo e economia da sua usina pelo app da Frenergy.",
                  img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
                },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-[#eee] flex flex-col">
                  <div className="h-44 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1" style={{ background: "#0d3347" }}>
                    <h3 className="font-bold text-white text-base">{s.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed flex-1">{s.text}</p>
                    <a
                      href="#contato"
                      className="self-start text-white text-xs font-bold px-5 py-2 rounded-full transition-opacity hover:opacity-90 mt-1"
                      style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <div id="contato">
          <EsferaContactForm />
        </div>

      </main>
      <EsferaFooter />
    </>
  );
}
