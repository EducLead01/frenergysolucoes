import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

export default function ProdutoComercial() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: "'Open Sans', sans-serif" }}>

        {/* Hero */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: "url('https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1600&q=80') center/cover no-repeat" }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "120px 32px 80px" }}>
            <p style={{ color: "#FFC10E", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Energia solar comercial</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 4.5vw, 62px)", fontWeight: 900, maxWidth: 760, lineHeight: 1.15, marginBottom: 20 }}>
              Reduza os custos do seu negócio com energia solar.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 560, lineHeight: 1.65, marginBottom: 40 }}>
              Sistemas de 20 a 75 kWp para empresas e comércios — retorno do investimento em 3 a 5 anos com projeto completo.
            </p>
            <a href="/orcamentos" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(90deg, #F0416E, #FF5900)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "16px 36px", borderRadius: 999, textDecoration: "none" }}>
              Solicitar proposta comercial
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-20 pb-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 relative">
                <div className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3" style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }} />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=900&q=80" alt="Energia solar comercial" fill className="object-cover" />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <span className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full" style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}>Comercial</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] leading-snug">Reduza os custos do seu negócio com <span style={{ color: "#FF5900" }}>energia solar</span></h2>
                <p className="text-[#787878] text-base leading-relaxed">Para empresas e estabelecimentos comerciais, a conta de energia é um dos maiores custos fixos do mês. Sistemas fotovoltaicos de 20 a 75 kWp são ideais para supermercados, galpões, escritórios, clínicas e comércios em geral.</p>
                <p className="text-[#787878] text-base leading-relaxed">A Frenergy cuida de todo o processo: dimensionamento, projeto elétrico, homologação na ANEEL e instalação com acompanhamento técnico dedicado. Retorno do investimento em 3 a 5 anos.</p>
                <a href="/orcamentos" className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90" style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}>
                  Solicitar proposta
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-[#F7F7F7]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">O que sua empresa <span style={{ color: "#FF5900" }}>ganha com solar</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <svg width="32" height="32" viewBox="0 0 30 31" fill="none"><rect x="1" y="17.9" width="5.96" height="8.9" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/><rect x="12.08" y="13.08" width="5.96" height="13.73" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/><rect x="23.04" y="3.81" width="5.96" height="23" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2"/></svg>, title: "Economia imediata", text: "Reduza até 90% da conta de energia logo no primeiro mês após a instalação do sistema." },
                { icon: <svg width="32" height="32" viewBox="0 0 30 30" fill="none"><path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2"/><path d="M15 8v7l4.5 2.5" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Projeto completo", text: "Engenharia, homologação ANEEL e instalação com garantia de 25 anos nos painéis." },
                { icon: <svg width="32" height="32" viewBox="0 0 30 31" fill="none"><path d="M4 15.64C4 9.38 9.07 4.31 15.33 4.31c6.26 0 11.34 5.07 11.34 11.33 0 6.26-5.08 11.34-11.34 11.34C9.07 26.98 4 21.9 4 15.64z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2"/><path d="M11.82 16.82l2.33 2.33 4.66-4.66" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "ESG e valorização", text: "Demonstre compromisso ambiental e valorize seu imóvel comercial com energia limpa." },
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

      </main>
      <EsferaFooter />
    </>
  );
}
