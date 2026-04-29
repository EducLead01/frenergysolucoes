"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Home, Building2, Factory, Tractor } from "lucide-react";

type Product = {
  title: string;
  icon: React.ElementType;
  description: string;
  bullets: string[];
  images: [string, string];
};

const products: Product[] = [
  {
    title: "Residencial",
    icon: Home,
    description:
      "Soluções personalizadas para sua casa, reduzindo até 95% da conta de luz e valorizando seu imóvel.",
    bullets: ["Economia mensal garantida", "Valorização do imóvel", "Instalação rápida"],
    images: [
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    ],
  },
  {
    title: "Comercial",
    icon: Building2,
    description:
      "Maximize os lucros do seu negócio com energia solar. Reduza custos operacionais e melhore sua competitividade.",
    bullets: ["ROI acelerado", "Benefícios fiscais", "Imagem sustentável"],
    images: [
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
      "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=800&q=80",
    ],
  },
  {
    title: "Industrial",
    icon: Factory,
    description:
      "Grandes projetos para indústrias que buscam eficiência energética e redução significativa de custos.",
    bullets: ["Alta capacidade", "Projetos sob medida", "Monitoramento 24h"],
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      "https://images.unsplash.com/photo-1548336234-065daf7e5b0a?w=800&q=80",
    ],
  },
  {
    title: "Agro",
    icon: Tractor,
    description:
      "Energia solar para o agronegócio. Irrigação, refrigeração e operações agrícolas com energia limpa.",
    bullets: ["Bombeamento solar", "Irrigação eficiente", "Independência energética"],
    images: [
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    ],
  },
];

function ProductCard({ product }: { product: Product }) {
  const [idx, setIdx] = useState(0);
  const Icon = product.icon;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">

      {/* Image carousel */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        {product.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${product.title} ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Icon badge */}
        <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-teal-800 rounded-lg flex items-center justify-center shadow-md">
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Prev arrow */}
        <button
          onClick={() => setIdx(0)}
          disabled={idx === 0}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all disabled:opacity-30 disabled:cursor-default"
        >
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>

        {/* Next arrow */}
        <button
          onClick={() => setIdx(1)}
          disabled={idx === 1}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all disabled:opacity-30 disabled:cursor-default"
        >
          <ChevronRight className="w-4 h-4 text-gray-700" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx ? "w-5 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-teal-800 mb-2">{product.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>

        <ul className="space-y-2 mb-6 flex-1">
          {product.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2.5 text-sm text-gray-600">
              <span className="w-2 h-2 rounded-full bg-[#ea592d] flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <a
            href="#contato"
            className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 text-gray-700 font-semibold text-sm px-3 py-2.5 rounded-lg hover:border-teal-800 hover:text-teal-800 transition-colors"
          >
            Ver Detalhes <span>→</span>
          </a>
          <a
            href="#contato"
            className="flex-1 flex items-center justify-center bg-[#ea592d] text-white font-bold text-sm px-3 py-2.5 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <>
      <section className="bg-white px-6 pt-16 pb-28 relative">
        <div className="container mx-auto">
          <p className="text-center text-xs font-bold tracking-widest uppercase text-[#ea592d] mb-3">
            PRODUTOS
          </p>
          <h2 className="text-center text-4xl font-bold text-teal-800 mb-4 max-w-3xl mx-auto uppercase leading-tight">
            Soluções em energia solar para cada necessidade
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto text-sm">
            Projetos personalizados que garantem máxima eficiência e o menor tempo de retorno do seu investimento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Arrow divider */}
      <div
        className="relative h-20 z-10 -mt-1 bg-white"
        style={{
          backgroundImage: "url('/img/global/section-arrow-down-white.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "contain",
        }}
      />
    </>
  );
}
