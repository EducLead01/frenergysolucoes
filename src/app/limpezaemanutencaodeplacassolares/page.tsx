import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2" />
    <path d="M8 12l2.5 2.5L16 9" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const beneficios = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 30 31" fill="none">
        <rect x="1" y="17.9" width="5.96" height="8.9" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2" />
        <rect x="12.08" y="13.08" width="5.96" height="13.73" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2" />
        <rect x="23.04" y="3.81" width="5.96" height="23" rx="2.98" fill="#FF5900" fillOpacity="0.2" stroke="#FF5900" strokeWidth="2" />
      </svg>
    ),
    titulo: "Até 30% mais geração",
    texto: "Sujeira, poeira e excrementos de aves reduzem drasticamente a produção. A limpeza profissional restaura a eficiência máxima do sistema.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 30 30" fill="none">
        <path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2" />
        <path d="M10 15l3.5 3.5L20 10" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    titulo: "Equipamentos protegidos",
    texto: "A manutenção preventiva identifica pontos quentes, cabos danificados e conectores oxidados antes que virem falhas graves e custosas.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 30 30" fill="none">
        <path d="M15 3l11 4v8c0 6-5 11-11 13C9 26 4 21 4 15V7l11-4z" fill="#FF5900" fillOpacity="0.15" stroke="#FF5900" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 15l3.5 3.5L20 10" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    titulo: "Garantia preservada",
    texto: "Os fabricantes exigem manutenção periódica para manter a garantia dos módulos válida. Nosso laudo técnico comprova o serviço realizado.",
  },
];

const etapas = [
  {
    numero: "01",
    titulo: "Agendamento",
    texto: "Entre em contato e agende a visita no melhor horário para você. Atendemos residências, comércios e usinas industriais.",
  },
  {
    numero: "02",
    titulo: "Vistoria técnica",
    texto: "Nossa equipe realiza inspeção visual completa: módulos, cabos, inversores, conectores e estrutura de fixação.",
  },
  {
    numero: "03",
    titulo: "Limpeza profissional",
    texto: "Uso de água purificada, produtos específicos para painéis fotovoltaicos e técnicas que não danificam o vidro temperado.",
  },
  {
    numero: "04",
    titulo: "Relatório de geração",
    texto: "Entregamos um laudo técnico com as medições antes e depois, comprovando o ganho de geração obtido com a manutenção.",
  },
];

const incluso = [
  "Inspeção visual dos módulos e estrutura",
  "Limpeza com água deionizada e escova macia",
  "Verificação de cabos, conectores e string box",
  "Leitura dos parâmetros do inversor",
  "Relatório técnico com laudo de geração",
  "Registro fotográfico completo",
];

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

        {/* Intro */}
        <section className="pt-20 pb-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 w-full relative">
                <div
                  className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                  style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/limpeza_02.jpg"
                    alt="Limpeza de placas solares"
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
                  Por que manter sua usina?
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] leading-snug">
                  Sujeira silenciosa custa <span style={{ color: "#FF5900" }}>dinheiro todo mês</span>
                </h2>
                <p className="text-[#787878] text-base leading-relaxed">
                  Poeira, fuligem, excrementos de aves e resíduos de folhas se acumulam sobre os módulos fotovoltaicos e bloqueiam a incidência solar. Mesmo uma camada fina já reduz a geração — e você só percebe na conta de luz.
                </p>
                <p className="text-[#787878] text-base leading-relaxed">
                  Além da limpeza, a manutenção preventiva detecta pontos quentes, cabos danificados e inversores com falha antes que causem prejuízo. A Frenergy cuida de tudo, do projeto à manutenção.
                </p>
                <a
                  href="/orcamentos"
                  className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Solicitar orçamento
                  {arrowIcon}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-[#F7F7F7]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
                O que a manutenção faz pelo <span style={{ color: "#FF5900" }}>seu sistema</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {beneficios.map((b) => (
                <div key={b.titulo} className="bg-white rounded-2xl p-7 shadow-sm flex flex-col gap-4">
                  {b.icon}
                  <h3 className="font-bold text-[#4D4D4D] text-base">{b.titulo}</h3>
                  <p className="text-[#787878] text-sm leading-relaxed">{b.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que está incluso */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-14">
              <div className="flex-1 flex flex-col gap-5">
                <span
                  className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Serviço completo
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] leading-snug">
                  O que está incluso no <span style={{ color: "#FF5900" }}>atendimento</span>
                </h2>
                <p className="text-[#787878] text-base leading-relaxed">
                  Cada visita técnica da Frenergy segue um protocolo completo de inspeção e limpeza, garantindo que nada passe despercebido.
                </p>
                <ul className="flex flex-col gap-3">
                  {incluso.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      {checkIcon}
                      <span className="text-[#4D4D4D] text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/orcamentos"
                  className="self-start inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full transition-opacity hover:opacity-90 mt-2"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Agendar agora
                  {arrowIcon}
                </a>
              </div>

              {/* Etapas */}
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-lg font-bold text-[#4D4D4D] mb-2">Como funciona</h3>
                {etapas.map((e) => (
                  <div key={e.numero} className="flex gap-5 items-start p-5 rounded-2xl bg-[#F7F7F7]">
                    <span
                      className="flex-shrink-0 font-black text-xl leading-none"
                      style={{ color: "#FF5900", minWidth: 32 }}
                    >
                      {e.numero}
                    </span>
                    <div>
                      <p className="font-bold text-[#4D4D4D] text-sm mb-1">{e.titulo}</p>
                      <p className="text-[#787878] text-sm leading-relaxed">{e.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="py-16 bg-[#F7F7F7]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
                Nosso <span style={{ color: "#FF5900" }}>trabalho</span> em campo
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { src: "/images/limpeza_01.jpg", alt: "Limpeza de placas solares 1" },
                { src: "/images/limpeza_02.jpg", alt: "Limpeza de placas solares 2" },
                { src: "/images/limpeza_03.jpg", alt: "Limpeza de placas solares 3" },
                { src: "/images/limpeza_04.jpg", alt: "Limpeza de placas solares 4" },
              ].map((foto) => (
                <div key={foto.src} className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image src={foto.src} alt={foto.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

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
