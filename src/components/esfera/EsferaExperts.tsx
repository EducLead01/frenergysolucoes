"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const experts = [
  { name: "Especialista 1", role: "Consultoria de Energia" },
  { name: "Especialista 2", role: "Mercado Livre de Energia" },
  { name: "Especialista 3", role: "Gestão Energética" },
  { name: "Especialista 4", role: "Engenharia Solar" },
  { name: "Especialista 5", role: "Análise de Viabilidade" },
  { name: "Especialista 6", role: "Projetos Fotovoltaicos" },
];

function ChevronLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function NavBtn({ onClick, children, side }: { onClick: () => void; children: React.ReactNode; side: "left" | "right" }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full text-white transition-all hover:brightness-110 active:scale-95"
      style={{
        background: "#115e59",
        boxShadow: "0 4px 16px rgba(17,94,89,0.45)",
        [side === "left" ? "left" : "right"]: "-18px",
      }}
    >
      {children}
    </button>
  );
}

function ExpertCard({ name, role }: { name: string; role: string }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col justify-end"
      style={{ aspectRatio: "310/480" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #0d4f4c 0%, #1a7a74 60%, #115e59 100%)" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 130" className="w-2/3 opacity-20" fill="white">
          <circle cx="50" cy="38" r="28" />
          <path d="M5 130 C5 90 95 90 95 130 Z" />
        </svg>
      </div>
      <div
        className="relative z-10 p-4 flex flex-col gap-3"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 100%)" }}
      >
        <div>
          <p className="text-white font-bold text-sm leading-tight">{name}</p>
          <p className="text-white/70 text-xs mt-0.5">{role}</p>
        </div>
        <a
          href="/cases"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white font-bold text-xs transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
        >
          Acessar projetos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function EsferaExperts() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D] text-center mb-12">
          Veja alguns dos nossos projetos
        </h2>

        {/* Carousel with side buttons */}
        <div className="relative px-6">
          <NavBtn side="left" onClick={() => swiperRef.current?.slidePrev()}>
            <ChevronLeft />
          </NavBtn>
          <NavBtn side="right" onClick={() => swiperRef.current?.slideNext()}>
            <ChevronRight />
          </NavBtn>

        <Swiper
          onSwiper={(s) => { swiperRef.current = s; }}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            640:  { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {experts.map((e, i) => (
            <SwiperSlide key={i}>
              <ExpertCard name={e.name} role={e.role} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

      </div>
    </section>
  );
}
