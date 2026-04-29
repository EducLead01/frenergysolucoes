"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Home, Building2, Factory, Tractor } from "lucide-react";

type Product = {
  title: string;
  icon: React.ElementType;
  description: string;
  images: [string, string];
};

const products: Product[] = [
  {
    title: "Residencial",
    icon: Home,
    description:
      "Soluções personalizadas para sua casa, reduzindo até 95% da conta de luz e valorizando seu imóvel.",
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
    <div className="group flex flex-col overflow-hidden rounded-lg bg-[#ea592d] text-center">

      {/* Image carousel */}
      <div className="relative h-60 overflow-hidden">
        {product.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${product.title} ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              i === idx
                ? "opacity-100 group-hover:scale-110"
                : "opacity-0"
            }`}
          />
        ))}

        {/* Icon centered on image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Icon className="w-14 h-14 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" />
        </div>

        {/* Prev arrow */}
        <button
          onClick={() => setIdx(0)}
          disabled={idx === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-all disabled:opacity-0"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>

        {/* Next arrow */}
        <button
          onClick={() => setIdx(1)}
          disabled={idx === 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-all disabled:opacity-0"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === idx ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 items-center">
        <h4 className="text-[30px] font-bold text-white text-center leading-tight">
          {product.title}
        </h4>
        <p className="text-white text-center text-sm mt-3 flex-1">
          {product.description}
        </p>
        <a
          href="#contato"
          className="mt-6 bg-white text-[#ea592d] font-bold uppercase px-6 py-3 text-sm hover:bg-gray-100 transition-colors"
        >
          SAIBA MAIS
        </a>
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <>
      <section className="bg-white px-6 pt-10 pb-24 relative">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-light tracking-widest uppercase text-teal-800 mb-4">
            PRODUTOS
          </h2>
          <h3 className="text-center text-4xl font-bold text-teal-800 mb-12 max-w-4xl mx-auto uppercase">
            Soluções em energia solar para cada necessidade
          </h3>

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
