import { Home, Building2, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const segments: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Home,
    title: "Instalação Residencial",
    desc: "Reduza até 95% na conta de luz da sua casa. Sistema completo com projeto, instalação e monitoramento inclusos.",
  },
  {
    icon: Building2,
    title: "Instalação Comercial",
    desc: "Aumente a competitividade do seu negócio reduzindo custos operacionais com energia solar fotovoltaica.",
  },
  {
    icon: Factory,
    title: "Industrial & Agronegócio",
    desc: "Grandes demandas energéticas com retorno de investimento acelerado e geração solar em larga escala.",
  },
];

export function SobreSegmentos() {
  return (
    <section style={{ backgroundColor: "rgba(0, 0, 0, 0)", padding: "60px 0 40px" }}>
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
          <b style={{ fontWeight: 700 }}>Frenergy</b> pensada<br />
          <strong style={{ fontWeight: 700, color: "rgb(0, 123, 204)" }}>
            para todos os tipos de projeto solar
          </strong>
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 24 }}
        >
          {segments.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderRadius: 24,
                boxShadow: "rgba(0, 0, 0, 0.07) 0px 16px 32px 0px",
                padding: 15,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 300,
                  backgroundColor: "rgb(247, 157, 52)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={26} color="white" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "rgb(33, 37, 41)",
                  margin: "15px 0 0",
                  lineHeight: "36px",
                }}
              >
                {title}
              </h3>
              <hr
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: "rgb(221, 221, 221)",
                  border: "none",
                  margin: "15px 0 25px",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-open-sans)",
                  fontSize: 16,
                  lineHeight: "26px",
                  color: "rgb(33, 37, 41)",
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
