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
    <div
      style={{
        width: "100%",
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "#e7eaf1",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "24px",
          width: "max-content",
          animation: "marquee 28s linear infinite",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")}
      >
        {track.map((c, i) => (
          <div
            key={i}
            style={{
              width: "200px",
              height: "100px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 3px 20px 0 rgba(0,0,0,0.07)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: 700,
              color: "#007bcc",
              flexShrink: 0,
            }}
          >
            {c.nome}
          </div>
        ))}
      </div>
    </div>
  );
}
