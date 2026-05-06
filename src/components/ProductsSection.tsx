"use client";

import { useRef, useEffect } from "react";

const products = [
  {
    title: "Investidores",
    description: "Invista em usinas solares e gere renda passiva com alta rentabilidade, retorno previsível e impacto positivo no planeta.",
    img: "/images/Investidores.jpg",
    href: "/produtos/investidores",
  },
  {
    title: "Comercial",
    description: "Sistemas de 20 a 75 kWp para empresas e comércios. Projeto elétrico completo, homologação ANEEL e acompanhamento dedicado.",
    img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
    href: "/produtos/comercial",
  },
  {
    title: "Industrial",
    description: "Acima de 75 kWp para indústrias e grandes consumidores. Consultoria energética e engenheiro dedicado ao projeto.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    href: "/produtos/industrial",
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
    href: "/produtos/residencial",
  },
];

const SPEED = 1; // px per frame

export function ProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function tick() {
      if (el && !dragging.current) {
        el.scrollLeft += SPEED;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  function onMouseDown(e: React.MouseEvent) {
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = scrollRef.current?.scrollLeft ?? 0;
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!dragging.current || !scrollRef.current) return;
    const dx = e.clientX - dragStartX.current;
    let next = dragStartScroll.current - dx;
    const half = scrollRef.current.scrollWidth / 2;
    if (next < 0) next += half;
    if (next >= half) next -= half;
    scrollRef.current.scrollLeft = next;
  }

  function onMouseUp() {
    dragging.current = false;
  }

  function onTouchStart(e: React.TouchEvent) {
    dragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartScroll.current = scrollRef.current?.scrollLeft ?? 0;
  }

  function onTouchMove(e: React.TouchEvent) {
    if (!dragging.current || !scrollRef.current) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    let next = dragStartScroll.current - dx;
    const half = scrollRef.current.scrollWidth / 2;
    if (next < 0) next += half;
    if (next >= half) next -= half;
    scrollRef.current.scrollLeft = next;
  }

  function onTouchEnd() {
    dragging.current = false;
  }

  return (
    <section id="servicos" className="py-20 bg-white">

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

      <div
        ref={scrollRef}
        className="overflow-x-scroll select-none cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex px-6" style={{ gap: "20px", width: "max-content" }}>
          {[...products, ...products].map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-md border border-[#FF5900]/20"
              style={{ width: "280px", flexShrink: 0 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  draggable={false}
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
