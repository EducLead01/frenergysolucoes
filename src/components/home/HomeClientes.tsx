"use client";

const clientes = [
  { nome: "Cliente 1" },
  { nome: "Cliente 2" },
  { nome: "Cliente 3" },
  { nome: "Cliente 4" },
  { nome: "Cliente 5" },
  { nome: "Cliente 6" },
  { nome: "Cliente 7" },
  { nome: "Cliente 8" },
];

const track = [...clientes, ...clientes];

export function HomeClientes() {
  return (
    <div className="w-full py-12 bg-[#fafafa] overflow-hidden">
      <div
        className="flex gap-6"
        style={{
          width: "max-content",
          animation: "marquee 28s linear infinite",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")}
      >
        {track.map((c, i) => (
          <div
            key={i}
            className="w-[200px] h-[100px] bg-white rounded-xl shadow-sm flex items-center justify-center text-sm font-bold text-[#4D4D4D] shrink-0 border border-[#f0f0f0]"
          >
            {c.nome}
          </div>
        ))}
      </div>
    </div>
  );
}
