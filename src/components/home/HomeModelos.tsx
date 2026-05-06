"use client";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const modelos = [
  {
    badge: "RESIDENCIAL",
    titulo: "Sistema solar residencial",
    descricao: "Sistemas de 3 a 20 kWp para casas e apartamentos. Retorno de investimento em até 4 anos com economia real na conta de luz.",
    img: "/images/assinestore/tela_personalizado.png",
    reverse: false,
  },
  {
    badge: "COMERCIAL",
    titulo: "Sistema solar comercial",
    descricao: "Sistemas de 20 a 75 kWp para empresas e comércios. Estudo de viabilidade, projeto elétrico completo e homologação ANEEL.",
    img: "/images/assinestore/admin_analytics2x.png",
    reverse: true,
  },
  {
    badge: "INDUSTRIAL",
    titulo: "Sistema solar industrial",
    descricao: "Sistemas acima de 75 kWp para indústrias e grandes consumidores. Consultoria energética e engenheiro dedicado ao projeto.",
    img: "/images/assinestore/tela_personalizado.png",
    reverse: false,
  },
];

export function HomeModelos() {
  const h2Ref = useScrollReveal<HTMLHeadingElement>(0);

  return (
    <section id="tipos-projeto" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">

        <h2
          ref={h2Ref}
          className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] mb-12"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          Tipos de projetos para o seu{" "}
          <span style={{ color: "#F0416E" }}>sistema solar</span>
        </h2>

        <div className="flex flex-col gap-12">
          {modelos.map((m) => (
            <div
              key={m.badge}
              className={`flex flex-col ${m.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col gap-3">
                <span
                  className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  {m.badge}
                </span>
                <h3 className="text-xl font-bold text-[#4D4D4D]">{m.titulo}</h3>
                <p className="text-[#787878] text-sm leading-relaxed">{m.descricao}</p>
                <a
                  href="#contato"
                  className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-[70px] text-white font-bold text-sm transition-opacity hover:opacity-90 mt-2"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Solicitar orçamento
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Image with gradient offset border */}
              <div className="flex-1 w-full relative">
                <div
                  className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                  style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#f2f2f2]">
                  <Image
                    src={m.img}
                    alt={m.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 100% personalizado */}
        <div className="mt-20 flex flex-col lg:flex-row items-center gap-12 bg-[#fafafa] rounded-2xl p-8 lg:p-12">
          <div className="flex-1 flex flex-col gap-4">
            <span
              className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
            >
              Personalizado
            </span>
            <h3 className="text-xl lg:text-2xl font-bold text-[#4D4D4D] leading-snug">
              Ou tenha um projeto solar{" "}
              <span style={{ color: "#F0416E" }}>100% personalizado</span>
            </h3>
            <p className="text-[#787878] text-sm leading-relaxed">
              Nossa equipe cria do zero um projeto solar exclusivo para a sua necessidade, seja residencial, comercial ou industrial.
            </p>
            <a
              href="#contato"
              className="self-start inline-flex items-center gap-2 px-8 py-4 rounded-[70px] text-white font-bold text-base transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
            >
              Projeto personalizado
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="flex-1 w-full relative">
            <div
              className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
              style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
            />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#f2f2f2]">
              <Image
                src="/images/assinestore/tela_personalizado.png"
                alt="Projeto solar personalizado"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
