const plans = [
  {
    name: "Micro Solar",
    tag: "Para Residências",
    highlight: false,
    features: [
      { label: "Sistema até 5 kWp", items: ["Painéis de alta eficiência", "Inversor string monofásico", "Estrutura de fixação inclusa"] },
      { label: "Projeto completo", items: ["Projeto elétrico com ART", "Documentação para concessionária", "Aprovação na distribuidora"] },
      { label: "Pós-instalação", items: ["Monitoramento via app", "Suporte técnico 12 meses"] },
    ],
    cta: "Quero economizar",
  },
  {
    name: "Confort Solar",
    tag: "Para Comércios",
    highlight: true,
    features: [
      { label: "Sistema de 5 a 15 kWp", items: ["Painéis premium selecionados", "Inversor de alta performance", "Estrutura com garantia estendida"] },
      { label: "Projeto completo", items: ["Projeto elétrico com ART", "Documentação e aprovação", "Estudo de viabilidade gratuito"] },
      { label: "Pós-instalação", items: ["Monitoramento 24h via app", "Suporte técnico 24 meses", "Relatórios mensais de economia"] },
    ],
    cta: "Quero economizar",
  },
  {
    name: "Prime Solar",
    tag: "Para Indústrias",
    highlight: false,
    features: [
      { label: "Sistema acima de 15 kWp", items: ["Painéis de primeira linha", "Inversor trifásico industrial", "Estrutura personalizada"] },
      { label: "Projeto completo", items: ["Projeto elétrico completo", "Gestão de toda a burocracia", "Estudo de expansão incluso"] },
      { label: "Pós-instalação", items: ["Monitoramento premium 24h", "Gerente de conta dedicado", "Suporte prioritário 36 meses"] },
    ],
    cta: "Quero economizar",
  },
];

export function SobrePlanos() {
  return (
    <section
      id="planos"
      style={{
        background: "linear-gradient(-45deg, #1e3b8e, #0b006b, #037bcc, #0a202a)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
        padding: "50px 0 80px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <h2
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: 36,
            fontWeight: 300,
            textAlign: "center",
            lineHeight: "40px",
            color: "white",
            margin: "0 0 48px",
          }}
        >
          Planos para todos os tipos de{" "}
          <strong style={{ fontWeight: 700 }}>Sistemas Solares</strong>
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 24 }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: "30px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                boxShadow: "rgba(0,0,0,0.2) 0px 8px 32px",
                position: "relative",
                ...(plan.highlight
                  ? { outline: "3px solid rgb(0, 123, 204)", outlineOffset: -3 }
                  : {}),
              }}
            >
              {plan.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "rgb(0, 123, 204)",
                    color: "white",
                    fontSize: 11,
                    fontWeight: 700,
                    fontFamily: "var(--font-montserrat)",
                    padding: "4px 14px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Mais Popular
                </div>
              )}

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-open-sans)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "rgb(0, 123, 204)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 4,
                  }}
                >
                  {plan.tag}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: 24,
                    fontWeight: 800,
                    color: "rgb(33, 37, 41)",
                    margin: 0,
                  }}
                >
                  {plan.name}
                </h3>
              </div>

              <hr style={{ border: "none", height: 1, backgroundColor: "rgb(235,235,235)", margin: 0 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {plan.features.map((group) => (
                  <div key={group.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "rgb(33, 37, 41)",
                        marginBottom: 6,
                      }}
                    >
                      {group.label}
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
                      {group.items.map((item) => (
                        <li
                          key={item}
                          style={{
                            fontFamily: "var(--font-open-sans)",
                            fontSize: 14,
                            color: "rgb(80, 80, 80)",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 6,
                          }}
                        >
                          <span style={{ color: "rgb(247, 157, 52)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <a
                href="/orcamentos"
                style={{
                  marginTop: "auto",
                  display: "block",
                  textAlign: "center",
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "rgb(0, 123, 204)",
                  textDecoration: "none",
                  paddingTop: 16,
                }}
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            href="/orcamentos"
            style={{
              display: "inline-block",
              backgroundColor: "rgb(247, 157, 52)",
              color: "white",
              fontFamily: "var(--font-montserrat)",
              fontSize: 16,
              fontWeight: 700,
              padding: "14px 40px",
              borderRadius: 30,
              textDecoration: "none",
              boxShadow: "rgba(0,0,0,0.2) 0px 4px 16px",
            }}
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
