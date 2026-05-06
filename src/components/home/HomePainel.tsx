"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HomePainel() {
  const leftRef = useScrollReveal<HTMLDivElement>(0);
  const h2Ref = useScrollReveal<HTMLHeadingElement>(100);
  const dropRef = useScrollReveal<HTMLDivElement>(150);
  const subRef = useScrollReveal<HTMLDivElement>(200);
  const btnRef = useScrollReveal<HTMLAnchorElement>(250);

  const reveal = {
    opacity: 0 as const,
    transform: "translateY(20px)",
    transition: "opacity 600ms ease, transform 600ms ease",
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT — news card */}
          <div ref={leftRef} className="flex-1 w-full" style={reveal}>
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] bg-white max-w-[480px] mx-auto">

              {/* Browser chrome */}
              <div className="bg-[#f2f2f2] px-4 py-2.5 flex items-center gap-2 border-b border-[#e0e0e0]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-[11px] text-[#888] border border-[#e0e0e0]">
                  portalsolar.com.br
                </div>
              </div>

              {/* Hero image area */}
              <div
                className="h-48 flex items-end p-5 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #4D4D4D 60%, #787878 100%)" }}
              >
                <div className="absolute top-0 right-0 w-44 h-44 rounded-full -translate-y-16 translate-x-16 bg-white/5" />
                <div className="absolute top-5 right-10 w-24 h-24 rounded-full bg-white/[0.07]" />
                {/* sun icon */}
                <svg className="absolute top-6 left-6 opacity-[0.12]" width="80" height="80" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="5" />
                  {[0,45,90,135,180,225,270,315].map((deg) => (
                    <line key={deg}
                      x1={12 + 8 * Math.cos((deg * Math.PI) / 180)}
                      y1={12 + 8 * Math.sin((deg * Math.PI) / 180)}
                      x2={12 + 10 * Math.cos((deg * Math.PI) / 180)}
                      y2={12 + 10 * Math.sin((deg * Math.PI) / 180)}
                      stroke="white" strokeWidth="2" strokeLinecap="round"
                    />
                  ))}
                </svg>
                <span
                  className="text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Energia Solar
                </span>
              </div>

              {/* Article body */}
              <div className="p-7">
                <h3 className="font-bold text-[#4D4D4D] text-lg leading-7 mb-3">
                  Conheça a empresa Goiana que vem ganhando espaço no centro-oeste na geração de energia solar
                </h3>
                <p className="text-[#787878] text-sm leading-5 mb-5">
                  A Frenergy Soluções se destaca pela qualidade das instalações e pelo acompanhamento próximo aos clientes em todo o centro-oeste...
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f0]">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                    >F</div>
                    <span className="text-sm font-semibold text-[#4D4D4D]">Frenergy Soluções</span>
                  </div>
                  <span className="text-xs text-[#aaa]">2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — text */}
          <div className="flex-1 flex flex-col gap-5">
            <span
              className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
            >
              Frenergy na Mídia
            </span>

            <h2
              ref={h2Ref}
              className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] leading-snug"
              style={reveal}
            >
              Nossa história já foi destaque nos principais portais de{" "}
              <span style={{ color: "#F0416E" }}>energia solar do Brasil</span>
            </h2>

            <div
              ref={dropRef}
              className="w-14 h-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)", ...reveal }}
            />

            <p
              ref={subRef}
              className="text-[#787878] text-base leading-relaxed"
              style={reveal}
            >
              A Frenergy Soluções cresce no centro-oeste com instalações de qualidade, atendimento próximo e resultados reais para cada cliente.
            </p>

            <a
              ref={btnRef}
              href="#contato"
              className="self-start inline-flex items-center gap-2 px-8 py-4 rounded-[70px] text-white font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)", ...reveal }}
            >
              Quero economizar também
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
