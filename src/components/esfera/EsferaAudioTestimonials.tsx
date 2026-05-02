"use client";

const audios = [
  { label: "Depoimento 1", src: "/audios/depoimento-1.mp3" },
  { label: "Depoimento 2", src: "/audios/depoimento-2.mp3" },
  { label: "Depoimento 3", src: "/audios/depoimento-3.mp3" },
];

function AudioPlayer({ label, src }: { label: string; src: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white/70 text-xs font-semibold uppercase tracking-wide">{label}</p>
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3">
        {/* Waveform icon */}
        <div className="flex items-end gap-[3px] h-6 flex-shrink-0">
          {[3, 5, 8, 5, 10, 7, 4, 9, 6, 3, 7, 5].map((h, i) => (
            <div
              key={i}
              className="w-[3px] bg-white/60 rounded-full"
              style={{ height: `${h * 2}px` }}
            />
          ))}
        </div>
        {/* Native audio */}
        <audio
          controls
          src={src}
          className="flex-1 h-8"
          style={{ filter: "invert(1) brightness(2) opacity(0.85)" }}
        >
          Seu navegador não suporta áudio.
        </audio>
      </div>
    </div>
  );
}

export function EsferaAudioTestimonials() {
  return (
    <section className="py-16" style={{ background: "linear-gradient(135deg, #F0416E 0%, #FF5900 100%)" }}>
      <div className="container mx-auto px-6 max-w-2xl flex flex-col items-center gap-8">

        <h2 className="text-white text-2xl lg:text-3xl font-bold text-center">
          Ouça quem já economizou com a Frenergy
        </h2>

        <div className="w-full flex flex-col gap-4">
          {audios.map((a) => (
            <AudioPlayer key={a.label} label={a.label} src={a.src} />
          ))}
        </div>

        <a
          href="/cases"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base animate-pulse hover:animate-none hover:opacity-90 transition-opacity"
          style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
        >
          Veja mais depoimentos
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

      </div>
    </section>
  );
}
