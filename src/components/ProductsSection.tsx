"use client";

const products = [
  {
    title: "Investidores",
    description: "Invista em usinas solares e gere renda passiva com alta rentabilidade, retorno previsível e impacto positivo no planeta.",
    img: "/images/Investidores.jpg",
    href: "#contato",
  },
  {
    title: "Comercial",
    description: "Sistemas de 20 a 75 kWp para empresas e comércios. Projeto elétrico completo, homologação ANEEL e acompanhamento dedicado.",
    img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
    href: "#contato",
  },
  {
    title: "Industrial",
    description: "Acima de 75 kWp para indústrias e grandes consumidores. Consultoria energética e engenheiro dedicado ao projeto.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    href: "#contato",
  },
  {
    title: "Agro",
    description: "Energia solar para o agronegócio. Irrigação, refrigeração e operações agrícolas com energia limpa e economia real.",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80",
    href: "/produtos/agro",
  },
  {
    title: "Residencial",
    description: "Sistemas de 3 a 20 kWp para casas e apartamentos. Retorno de investimento em até 4 anos com economia real na conta de luz.",
    img: "/images/08.png",
    href: "#contato",
  },
];

export function ProductsSection() {
  return (
    <section id="servicos" className="py-20 bg-white overflow-hidden">
      <style>{`
        @keyframes marquee-frenergy {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-frenergy {
          animation: marquee-frenergy 25s linear infinite;
        }
        .marquee-frenergy:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <span
            className="inline-block text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
          >
            Produtos
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
            Soluções em energia solar para{" "}
            <span style={{ color: "#FF5900" }}>cada necessidade</span>
          </h2>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-frenergy flex" style={{ gap: "20px", width: "max-content" }}>
          {[...products, ...products].map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-md border border-[#eee]"
              style={{ width: "280px", flexShrink: 0 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-bold text-base" style={{ color: "#0d3347" }}>{p.title}</h3>
                <p className="text-[#787878] text-sm leading-relaxed flex-1">{p.description}</p>
                <a
                  href={p.href}
                  className="self-start text-white text-xs font-bold px-5 py-2 rounded-full transition-opacity hover:opacity-90 mt-1"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
