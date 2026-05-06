import Image from "next/image";

export function PhoneMockupGroup() {
  return (
    <div className="relative flex justify-center items-end" style={{ height: "480px", minWidth: "260px" }}>

      {/* ── Phone (main) ── */}
      <div
        className="absolute"
        style={{ left: "50%", transform: "translateX(-50%)", bottom: "0px", zIndex: 2 }}
      >
        <div
          className="relative rounded-[36px] overflow-hidden border-[7px] shadow-2xl bg-black"
          style={{ borderColor: "#1a1a1a", width: "200px", aspectRatio: "9/19" }}
        >
          {/* pill notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-10 flex items-center justify-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#333]" />
            <div className="w-2 h-2 rounded-full bg-[#2a2a2a]" />
          </div>
          {/* screen */}
          <div className="w-full h-full overflow-hidden">
            <Image
              src="/images/app2.png"
              alt="App Frenergy"
              fill
              className="object-cover"
              style={{ objectPosition: "88% center" }}
            />
          </div>
        </div>
        {/* side buttons */}
        <div className="absolute right-[-8px] top-20 w-1.5 h-8 bg-[#111] rounded-r-md" />
        <div className="absolute left-[-8px] top-16 w-1.5 h-6 bg-[#111] rounded-l-md" />
        <div className="absolute left-[-8px] top-28 w-1.5 h-6 bg-[#111] rounded-l-md" />
      </div>

      {/* ── Floating metric card ── */}
      <div
        className="absolute rounded-2xl px-4 py-3 shadow-2xl"
        style={{
          bottom: "10px",
          left: "-20px",
          zIndex: 5,
          backgroundColor: "#1a1a1a",
          minWidth: "160px",
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="white" stroke="none" />
            </svg>
          </div>
          <span className="text-white text-[11px] font-semibold">Energia Economizada</span>
        </div>
        <p
          className="text-2xl font-bold"
          style={{ color: "#FF5900" }}
        >
          R$1.200,35
        </p>
        <p className="text-[10px] mt-0.5" style={{ color: "#FF5900" }}>
          Ver histórico →
        </p>
      </div>

      {/* glow bg */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-3xl opacity-20 rounded-full pointer-events-none"
        style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
      />
    </div>
  );
}
