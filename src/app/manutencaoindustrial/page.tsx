import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const WA = "https://wa.me/5562996426626?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20Manutenção%20de%20Placas%20Solares%20para%20minha%20empresa%2Findústria.";

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);


export default function ManutencaoIndustrial() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <style>{`
          @keyframes blink-red { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
          .blink-red { animation: blink-red 0.9s step-end infinite; color: #e00; }
        `}</style>

        {/* Hero */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: "url('/images/limpeza_01.jpg') center/cover no-repeat" }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "120px 32px 80px" }}>
            <p style={{ color: "#FFC10E", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
              Manutenção para Indústrias, Empresas e Galpões
            </p>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 4.5vw, 62px)", fontWeight: 900, maxWidth: 760, lineHeight: 1.15, marginBottom: 20 }}>
              Cada dia sem manutenção é energia que sua operação paga e não recebe.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 560, lineHeight: 1.65, marginBottom: 40 }}>
              A Frenergy faz a limpeza técnica e manutenção preventiva de usinas solares de grande porte — sem parar sua produção, com equipe certificada para trabalho em altura e ambientes industriais.
            </p>
            <WhatsAppLink
              href={WA}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(90deg, #F0416E, #FF5900)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "16px 36px", borderRadius: 999, textDecoration: "none" }}
            >
              Solicitar visita técnica
              {arrowIcon}
            </WhatsAppLink>
          </div>
        </section>

        {/* Cards alternados */}
        {[
          {
            badge: "PERDA EM ESCALA INDUSTRIAL",
            titulo: "Numa usina grande, cada % de sujeira vira milhares de reais por mês",
            texto: "Fuligem industrial, poeira de pátio, resíduos de processo e maresia se acumulam sobre centenas ou milhares de módulos. Em plantas de grande porte, essa perda de geração deixa de ser um detalhe e passa a pesar diretamente no resultado da operação.",
            imagem: "/images/limpeza_01.jpg",
            alt: "Limpeza técnica de usina solar industrial",
          },
          {
            badge: "ESTRUTURA PARA GRANDE PORTE",
            subtitulo: "Feito para escala industrial",
            titulo: "Equipe, equipamento e cronograma dimensionados para o seu galpão",
            texto: "Utilizamos cerdas de nylon ou microfibra extramacia acopladas a cabos telescópicos com passagem de água, além de equipes múltiplas para cobrir grandes áreas em janelas de tempo curtas — sem parar o funcionamento do seu galpão, indústria ou centro de distribuição.",
            imagem: "/images/limpeza_04.jpg",
            alt: "Equipe de manutenção em telhado industrial",
          },
          {
            badge: "MANUTENÇÃO PROGRAMADA",
            titulo: "Contrato de manutenção preventiva com relatório técnico",
            texto: "Inspecionamos pontos quentes, cabos, conectores e estruturas de fixação antes que virem parada não planejada. Empresas com contrato de manutenção recebem relatório técnico a cada visita, com histórico da usina e recomendações objetivas.",
            imagem: "/images/limpeza_02.jpg",
            alt: "Inspeção técnica preventiva em painéis solares industriais",
          },
          {
            badge: "SEGURANÇA E CONFORMIDADE",
            titulo: "Equipe certificada para trabalho em altura e ambiente industrial",
            texto: "Técnicos treinados conforme NR-35 (trabalho em altura) e NR-10, com todos os EPIs exigidos para operar em telhados metálicos, galpões e áreas industriais — protegendo sua equipe, sua planta e a nossa.",
            imagem: "/images/limpeza_03.jpg",
            alt: "Técnico certificado em manutenção solar industrial",
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
                    <p className="blink-red text-sm font-bold uppercase tracking-widest">
                      {(card as typeof card & { subtitulo: string }).subtitulo}
                    </p>
                  )}
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] leading-snug">
                    {card.titulo}
                  </h2>
                  <p className="text-[#787878] text-base leading-relaxed">{card.texto}</p>
                  {i === 0 && (
                    <WhatsAppLink
                      href={WA}
                      className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                      style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                    >
                      Solicitar orçamento
                      {arrowIcon}
                    </WhatsAppLink>
                  )}
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* CTA final */}
        <section className="py-14" style={{ background: "#111" }}>
          <div className="container mx-auto px-6 max-w-xl text-center">
            <p className="text-white font-bold text-xl mb-2">Sua indústria ou galpão está gerando tudo que pode?</p>
            <p className="text-white/60 text-sm mb-8">
              Agende uma vistoria técnica e descubra quanto sua empresa está perdendo com placas sujas e sem manutenção.
            </p>
            <WhatsAppLink
              href={WA}
              className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
            >
              Agendar vistoria técnica
              {arrowIcon}
            </WhatsAppLink>
          </div>
        </section>

      </main>
      <EsferaFooter />

      {/* Botão WhatsApp exclusivo desta página — sobrepõe o global (z-50) */}
      <WhatsAppLink
        href={WA}
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-[51] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-400 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </WhatsAppLink>
    </>
  );
}
