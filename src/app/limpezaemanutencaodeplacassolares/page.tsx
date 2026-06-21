import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

const WA = "https://wa.me/5562996426626?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20Limpeza%20e%20Manutenção%20de%20Placas%20Solares.";

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
        <style>{`
          @keyframes blink-red { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
          .blink-red { animation: blink-red 0.9s step-end infinite; color: #e00; }
        `}</style>

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
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
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
                    <p className="blink-red text-sm font-bold uppercase tracking-widest">
                      {(card as typeof card & { subtitulo: string }).subtitulo}
                    </p>
                  )}
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] leading-snug">
                    {card.titulo}
                  </h2>
                  <p className="text-[#787878] text-base leading-relaxed">{card.texto}</p>
                  {i === 0 && (
                    <a
                      href={WA}
                      target="_blank"
                      rel="noopener noreferrer"
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
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
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

      {/* Botão WhatsApp exclusivo desta página — sobrepõe o global (z-50) */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-[51] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-400 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
