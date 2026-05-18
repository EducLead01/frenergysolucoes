import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaContactForm } from "@/components/esfera/EsferaContactForm";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

export default function Agro() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            background: "url('/images/fazenda-solar.jpg') center/cover no-repeat",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />

          {/* Fazendeiro — ancorado na base direita */}
          <div style={{ position: "absolute", bottom: 0, right: "8%", zIndex: 1, display: "flex", alignItems: "flex-end" }}>
            <Image
              src="/images/agro02.jpg"
              alt="Agronegócio com energia solar"
              width={340}
              height={520}
              className="h-[70vh] w-auto object-contain object-bottom"
              priority
            />
          </div>

          <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "120px 32px 80px" }}>
            <p style={{ color: "#FFC10E", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
              Energia solar para o agronegócio
            </p>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 4.5vw, 62px)", fontWeight: 900, maxWidth: 760, lineHeight: 1.15, marginBottom: 20 }}>
              Usinas solares em fazendas que geram energia e lucro.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 560, lineHeight: 1.65, marginBottom: 40 }}>
              Reduza o custo operacional da sua propriedade rural com energia limpa, renovável e de alta performance.
            </p>
            <a
              href="#contato"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(90deg, #F0416E, #FF5900)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                padding: "16px 36px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              Solicitar estudo para minha fazenda
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Intro — imagem + texto */}
        <section className="pt-20 pb-20 bg-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 relative">
                <div className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3" style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }} />
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
                <span className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full" style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}>
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
                <a href="#contato" className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90" style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}>
                  Solicitar proposta
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios — 3 cards */}
        <section className="py-20 bg-[#F7F7F7]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
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
                  icon: <svg width="32" height="32" viewBox="0 0 30 31" fill="none"><rect x="1" y="17.9" width="5.96" height="8.9" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/><rect x="12.08" y="13.08" width="5.96" height="13.73" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/><rect x="23.04" y="3.81" width="5.96" height="23" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/></svg>,
                  title: "Redução de custos",
                  text: "Economize até 95% na conta de energia elétrica, com retorno do investimento em 3 a 5 anos.",
                },
                {
                  icon: <svg width="32" height="32" viewBox="0 0 30 30" fill="none"><path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2"/><path d="M15 8v7l4.5 2.5" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  title: "Energia previsível",
                  text: "Proteção contra reajustes tarifários e interrupções no fornecimento em áreas remotas.",
                },
                {
                  icon: <svg width="32" height="32" viewBox="0 0 30 31" fill="none"><path d="M4 15.64C4 9.38 9.07 4.31 15.33 4.31c6.26 0 11.34 5.07 11.34 11.33 0 6.26-5.08 11.34-11.34 11.34C9.07 26.98 4 21.9 4 15.64z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2"/><path d="M11.82 16.82l2.33 2.33 4.66-4.66" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
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

        {/* Contato */}
        <div id="contato">
          <EsferaContactForm />
        </div>

      </main>
      <EsferaFooter />
    </>
  );
}
