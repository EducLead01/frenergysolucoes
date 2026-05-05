import Image from "next/image";

const clients = [
  "Cond. Sol Maior",
  "Fazenda Boa Vista",
  "Mercado Oliveira",
  "Escola Verde Luz",
  "Ind. Novak",
  "Auto Peças SP",
  "Clínica Saúde+",
  "Hotel Bela Vista",
  "Agro Santa Fé",
  "Construtora Lima",
];

const ticker = [...clients, ...clients];

export function SobreClientes() {
  return (
    <section style={{ backgroundColor: "rgb(238, 238, 238)", padding: "40px 0 60px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", textAlign: "center", marginBottom: 20 }}>
        <h2
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: 36,
            fontWeight: 300,
            lineHeight: "40px",
            color: "rgb(33, 37, 41)",
            margin: "0 0 8px",
          }}
        >
          Confiança de mais de<br />
          <strong style={{ fontWeight: 700, color: "rgb(0, 123, 204)" }}>
            200 clientes atendidos
          </strong>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-open-sans)",
            fontSize: 16,
            color: "rgb(33, 37, 41)",
            margin: "16px 0 0",
          }}
        >
          Os melhores projetos de energia solar estão aqui, na <strong>Frenergy!</strong>
        </p>
      </div>

      {/* Infinite scroll ticker */}
      <div style={{ overflow: "hidden", marginTop: 32 }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 45s linear infinite",
          }}
        >
          {ticker.map((name, i) => (
            <div
              key={i}
              style={{
                width: 200,
                height: 120,
                marginRight: 30,
                flexShrink: 0,
                backgroundColor: "white",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 12px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#999",
                  textAlign: "center",
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div
        style={{
          maxWidth: 1200,
          margin: "40px auto 0",
          padding: "0 40px",
          display: "flex",
          alignItems: "flex-start",
          gap: 16,
        }}
      >
        <Image
          src="/images/portalsolar-tmp2.webp"
          alt="Cliente Frenergy"
          width={64}
          height={64}
          style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ color: "#F79D34", fontSize: 18 }}>★★★★★</div>
          <p
            style={{
              fontFamily: "var(--font-open-sans)",
              fontSize: 16,
              lineHeight: "24px",
              color: "rgb(33, 37, 41)",
              margin: 0,
            }}
          >
            Equipe super profissional, atendimento rápido e muito prestativo em todos os momentos.
          </p>
          <p
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
              fontSize: 14,
              color: "rgb(33, 37, 41)",
              margin: 0,
            }}
          >
            Carlos Mendes{" "}
            <span style={{ fontWeight: 400 }}>| Empresário, Goiânia/GO</span>
          </p>
        </div>
      </div>
    </section>
  );
}
