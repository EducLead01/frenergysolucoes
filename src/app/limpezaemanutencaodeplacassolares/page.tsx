import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);


export default function LimpezaManutencao() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: "'Open Sans', sans-serif" }}>

        {/* Hero */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: "url('/images/limpeza_01.jpg') center/cover no-repeat" }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "120px 32px 80px" }}>
            <p style={{ color: "#FFC10E", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
              Limpeza e Manutenção
            </p>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 4.5vw, 62px)", fontWeight: 900, maxWidth: 760, lineHeight: 1.15, marginBottom: 20 }}>
              Placas sujas perdem até 30% da geração.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 560, lineHeight: 1.65, marginBottom: 40 }}>
              A Frenergy realiza a limpeza profissional e manutenção preventiva do seu sistema fotovoltaico — garantindo máxima performance ao longo de toda a vida útil.
            </p>
            <a
              href="/orcamentos"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(90deg, #F0416E, #FF5900)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "16px 36px", borderRadius: 999, textDecoration: "none" }}
            >
              Agendar visita técnica
              {arrowIcon}
            </a>
          </div>
        </section>

        {/* Cards alternados */}
        {[
          {
            badge: "LIMPEZA PROFISSIONAL",
            titulo: "Sujeira silenciosa custa dinheiro todo mês",
            texto: "Poeira, fuligem e excrementos de aves se acumulam sobre os módulos e bloqueiam a incidência solar. Mesmo uma camada fina já reduz a geração — e você só percebe na conta de luz.",
            imagem: "/images/limpeza_01.jpg",
            alt: "Limpeza profissional de placas solares",
          },
          {
            badge: "EQUIPAMENTO IDEAL",
            subtitulo: "Não é qualquer equipamento",
            titulo: "Cerdas ultrafinas e macias acopladas a cabos telescópicos com passagem de água",
            texto: "Na Frenergy utilizamos modelos com cerdas de nylon ou microfibra acopladas a cabos telescópicos com passagem de água. Nossas Cerdas Extramacias evitam micro-riscos no vidro temperado, o que poderia danificar suas placas, acumular sujeira ou criar pontos de sombra e diminuir significativamente sua geração.",
            imagem: "/images/limpeza_04.jpg",
            alt: "Equipamento de limpeza de placas solares",
          },
          {
            badge: "MANUTENÇÃO PREVENTIVA",
            titulo: "Vistoria técnica antes que o problema apareça",
            texto: "Nossa equipe identifica pontos quentes, cabos danificados e conectores oxidados antes que virem falhas graves. Manutenção preventiva evita prejuízos maiores e prolonga a vida útil do sistema.",
            imagem: "/images/limpeza_02.jpg",
            alt: "Manutenção preventiva em painéis solares",
          },
          {
            badge: "EQUIPE CERTIFICADA",
            titulo: "Técnicos especializados com segurança total",
            texto: "Todos os nossos técnicos são treinados para trabalho em altura e utilizam equipamentos de proteção individuais adequados. Segurança para a sua propriedade e para a nossa equipe em campo.",
            imagem: "/images/limpeza_03.jpg",
            alt: "Técnico especializado em manutenção solar",
          },
        ].map((card, i) => (
          <section key={card.titulo} className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]"}`}>
            <div className="container mx-auto px-6 max-w-5xl">
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>

                {/* Imagem */}
                <div className="flex-1 w-full relative">
                  <div
                    className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                    style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                  />
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <Image src={card.imagem} alt={card.alt} fill className="object-cover" />
                  </div>
                </div>

                {/* Texto */}
                <div className="flex-1 flex flex-col gap-5">
                  <span
                    className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                    style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                  >
                    {card.badge}
                  </span>
                  {"subtitulo" in card && (
                    <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#FF5900" }}>
                      {(card as typeof card & { subtitulo: string }).subtitulo}
                    </p>
                  )}
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] leading-snug">
                    {card.titulo}
                  </h2>
                  <p className="text-[#787878] text-base leading-relaxed">{card.texto}</p>
                  {i === 0 && (
                    <a
                      href="/orcamentos"
                      className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                      style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                    >
                      Solicitar orçamento
                      {arrowIcon}
                    </a>
                  )}
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* CTA final */}
        <section className="py-14" style={{ background: "#111" }}>
          <div className="container mx-auto px-6 max-w-xl text-center">
            <p className="text-white font-bold text-xl mb-2">Sua usina está rendendo tudo que pode?</p>
            <p className="text-white/60 text-sm mb-8">
              Agende uma vistoria técnica gratuita e descubra quanto você está perdendo com placas sujas.
            </p>
            <a
              href="/orcamentos"
              className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
            >
              Agendar vistoria gratuita
              {arrowIcon}
            </a>
          </div>
        </section>

      </main>
      <EsferaFooter />
    </>
  );
}
