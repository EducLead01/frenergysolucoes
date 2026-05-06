import Image from "next/image";

export function PhoneMockupGroup() {
  return (
    <div className="relative flex justify-center items-end" style={{ height: "480px", minWidth: "300px" }}>

      {/* ── Phone back-left (tilted, behind) ── */}
      <div
        className="absolute"
        style={{
          left: "0px",
          bottom: "20px",
          zIndex: 1,
          transform: "rotate(-8deg) scale(0.88)",
          transformOrigin: "bottom center",
        }}
      >
        <div
          className="relative rounded-[36px] overflow-hidden border-[7px] shadow-xl bg-black"
          style={{ borderColor: "#1a1a1a", width: "180px", aspectRatio: "9/19" }}
        >
          {/* notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full z-10" />
          {/* screen: app list view */}
          <div className="w-full h-full bg-white flex flex-col overflow-hidden">
            {/* status bar */}
            <div className="bg-[#FF5900] px-3 pt-5 pb-2 flex items-center justify-between shrink-0">
              <span className="text-white text-[9px] font-bold">08:00</span>
              <span className="text-white text-[9px]">⚡ 100%</span>
            </div>
            {/* list header */}
            <div className="bg-[#FF5900] px-3 pb-3 shrink-0">
              <p className="text-white text-[10px] font-bold uppercase tracking-wide">Detalhados</p>
            </div>
            {/* list items */}
            <div className="flex-1 overflow-hidden px-3 py-2 flex flex-col gap-2 bg-[#fafafa]">
              {[
                { mes: "ABRIL", val: "R$ 418,15" },
                { mes: "MARÇO", val: "R$ 482,74" },
                { mes: "FEVEREIRO", val: "R$ 420,05" },
                { mes: "JANEIRO", val: "R$ 813,25" },
                { mes: "DEZEMBRO", val: "R$ 585,80" },
                { mes: "NOVEMBRO", val: "R$ 468,42" },
              ].map((item) => (
                <div key={item.mes} className="flex justify-between items-center py-1 border-b border-gray-100">
                  <div>
                    <p className="text-[8px] font-bold text-[#4D4D4D]">{item.mes}</p>
                    <p className="text-[7px] text-[#787878]">Economizado</p>
                  </div>
                  <p className="text-[8px] font-bold text-[#FF5900]">{item.val}</p>
                </div>
              ))}
            </div>
            {/* bottom nav */}
            <div className="flex justify-around items-center py-2 border-t border-gray-100 bg-white shrink-0">
              <div className="w-5 h-5 rounded-full bg-[#FF5900] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              </div>
              <div className="w-5 h-5 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
            </div>
          </div>
        </div>
        {/* side buttons */}
        <div className="absolute right-[-8px] top-16 w-1.5 h-8 bg-[#111] rounded-r-md" />
      </div>

      {/* ── Phone front-right (main) ── */}
      <div
        className="absolute"
        style={{ right: "0px", bottom: "0px", zIndex: 2 }}
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
          left: "60px",
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
