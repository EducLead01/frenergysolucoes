import Image from "next/image";

export function PhoneMockupGroup() {
  return (
    <div className="relative flex justify-center items-end" style={{ height: "480px", minWidth: "220px" }}>

      {/* ── Phone ── */}
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

    </div>
  );
}
