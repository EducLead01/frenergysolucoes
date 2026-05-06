"use client";

const products = [
  {
    title: "Investidores",
    description: "Invista em usinas solares e gere renda passiva com alta rentabilidade e retorno previsível.",
    img: "/images/Investidores.jpg",
  },
  {
    title: "Comercial",
    description: "Reduza custos operacionais e melhore a competitividade do seu negócio com energia solar.",
    img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
  },
  {
    title: "Industrial",
    description: "Grandes projetos para indústrias que buscam eficiência energética e redução de custos.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    title: "Agro",
    description: "Energia solar para o agronegócio. Irrigação, refrigeração e operações com energia limpa.",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80",
  },
];

export function ProductsSection() {
  return (
    <section id="servicos" className="bg-[#fafafa] py-20">
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
            <span style={{ color: "#F0416E" }}>cada necessidade</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0f0f0] flex flex-col hover:shadow-md transition-shadow duration-200"
            >
              {/* Cover image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Subtle bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-bold text-[#4D4D4D] text-base">{p.title}</h3>
                <p className="text-[#787878] text-sm leading-relaxed flex-1">{p.description}</p>
                <a
                  href="#contato"
                  className="self-start inline-flex items-center gap-1.5 text-white text-xs font-bold px-4 py-2 rounded-full transition-opacity hover:opacity-90 mt-1"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Saiba mais
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
