"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const experts = [
  { name: "Especialista 1", role: "Consultoria de Energia" },
  { name: "Especialista 2", role: "Mercado Livre de Energia" },
  { name: "Especialista 3", role: "Gestão Energética" },
  { name: "Especialista 4", role: "Engenharia Solar" },
  { name: "Especialista 5", role: "Análise de Viabilidade" },
  { name: "Especialista 6", role: "Projetos Fotovoltaicos" },
];

function ExpertCard({ name, role }: { name: string; role: string }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col justify-end"
      style={{ aspectRatio: "310/480" }}
    >
      {/* Placeholder background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #0d4f4c 0%, #1a7a74 60%, #115e59 100%)" }}
      />
      {/* Person silhouette */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 130" className="w-2/3 opacity-20" fill="white">
          <circle cx="50" cy="38" r="28" />
          <path d="M5 130 C5 90 95 90 95 130 Z" />
        </svg>
      </div>
      {/* Name overlay */}
      <div
        className="relative z-10 p-4"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }}
      >
        <p className="text-white font-bold text-sm leading-tight">{name}</p>
        <p className="text-white/70 text-xs mt-0.5">{role}</p>
      </div>
    </div>
  );
}

export function EsferaExperts() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#4D4D4D]">
            Veja alguns dos nossos projetos
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mt-12 experts-swiper">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              640:  { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="pb-12"
          >
            {experts.map((e, i) => (
              <SwiperSlide key={i}>
                <ExpertCard name={e.name} role={e.role} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-base transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
          >
            Agendar uma demonstração
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
