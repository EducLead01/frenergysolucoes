const partners = [
  {
    name: "Risen Energy",
    logo: "RISEN",
    logoColor: "#e63225",
    desc: "Painéis solares de alta eficiência com garantia de 25 anos. Um dos maiores fabricantes de módulos fotovoltaicos do mundo, presente em mais de 100 países.",
  },
  {
    name: "Canadian Solar",
    logo: "CANADIAN",
    logoColor: "#c8191b",
    desc: "Fabricante global com mais de 20 anos de experiência no mercado solar. Qualidade e confiabilidade comprovadas em instalações residenciais e comerciais.",
  },
  {
    name: "Fronius",
    logo: "FRONIUS",
    logoColor: "#e2000f",
    desc: "Inversores solares austríacos reconhecidos mundialmente pela inovação e confiabilidade. Tecnologia de ponta com monitoramento inteligente integrado.",
  },
  {
    name: "Growatt",
    logo: "GROWATT",
    logoColor: "#1a7c3e",
    desc: "Inversores compactos e eficientes com aplicativo de monitoramento integrado. Solução completa para acompanhamento do sistema em tempo real.",
  },
  {
    name: "SMA Solar",
    logo: "SMA",
    logoColor: "#004b8d",
    desc: "Referência mundial em tecnologia de inversores fotovoltaicos há mais de 40 anos. Confiabilidade e performance comprovadas em todo o Brasil.",
  },
  {
    name: "WEG",
    logo: "WEG",
    logoColor: "#0055a5",
    desc: "A maior multinacional industrial brasileira com equipamentos elétricos de alta qualidade para sistemas solares fotovoltaicos de todos os portes.",
  },
];

export function SobreParceiros() {
  return (
    <section style={{ backgroundColor: "rgb(224, 229, 236)", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <h2
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: 36,
            fontWeight: 300,
            textAlign: "center",
            lineHeight: "40px",
            color: "rgb(33, 37, 41)",
            margin: "0 0 48px",
          }}
        >
          Equipamentos e{" "}
          <strong style={{ fontWeight: 700, color: "rgb(0, 123, 204)" }}>
            Parceiros Frenergy
          </strong>
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 24 }}
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 15px 0px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Orange top bar */}
              <div
                style={{
                  height: 5,
                  backgroundColor: "rgb(247, 157, 52)",
                  borderRadius: "10px 10px 0 0",
                  flexShrink: 0,
                }}
              />

              {/* Card content */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "10px 30px",
                  gap: 24,
                  minHeight: 155,
                }}
              >
                {/* Logo area */}
                <div
                  style={{
                    width: 140,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: 22,
                      fontWeight: 900,
                      color: partner.logoColor,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {partner.logo}
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: 1,
                    alignSelf: "stretch",
                    backgroundColor: "rgb(238, 238, 238)",
                    flexShrink: 0,
                  }}
                />

                {/* Text */}
                <p
                  style={{
                    fontFamily: "var(--font-open-sans)",
                    fontSize: 14,
                    lineHeight: "22px",
                    color: "rgb(80, 80, 80)",
                    margin: 0,
                  }}
                >
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
