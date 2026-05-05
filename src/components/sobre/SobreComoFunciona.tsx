import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Modelos de projeto prontos para você personalizar",
    desc: "Escolha dentre as opções disponíveis que mais se aproxime com seu objetivo. Nossa equipe cria e personaliza seu projeto, alterando especificações, equipamentos e layout de acordo com sua necessidade.",
    img: "/images/portalsolar-casa-solar.webp",
    alt: "Atendimento personalizado Frenergy",
  },
  {
    number: "2",
    title: "Visita técnica + Clube de Energia Solar",
    desc: "Tenha uma visita técnica completa ao local do seu sistema. Um engenheiro vai até o local para avaliar o telhado, a estrutura elétrica e o potencial de geração solar.",
    img: "/images/portalsolar-tmp2.webp",
    alt: "Visita técnica gratuita",
  },
  {
    number: "3",
    title: "Projeto e homologação transparente",
    desc: (
      <>
        Elaboramos o projeto elétrico completo e cuidamos de toda a documentação junto à concessionária. Você não precisa fazer nada.
        <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
          {["• Projeto elétrico com ART", "• Documentação para concessionária", "• Aprovação junto à distribuidora", "• Para pessoa física e jurídica", "• Sem burocracia para você"].map((item) => (
            <li key={item} style={{ fontSize: 15, color: "rgb(33, 37, 41)", fontFamily: "var(--font-open-sans)" }}>{item}</li>
          ))}
        </ul>
      </>
    ),
    img: "/images/portalsolar-tmp3.webp",
    alt: "Projeto e aprovação solar",
  },
  {
    number: "4",
    title: "Conta do cliente no sistema Frenergy",
    desc: "Após a instalação, seu cliente tem acesso ao app Frenergy com controle total sobre o sistema, podendo visualizar geração, consumo, economia e solicitar suporte técnico a qualquer momento.",
    img: "/images/portalsolar-casa-solar.webp",
    alt: "Conta do cliente no app",
  },
  {
    number: "5",
    title: "Painel de controle exclusivo",
    desc: (
      <>
        Controle seu sistema solar através de um painel completo e intuitivo. Monitore geração, faça relatórios e tenha acesso a funcionalidades avançadas.
        <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
          {["• Monitoramento em tempo real", "• Relatórios de geração e economia", "• Alertas de falha automáticos", "• Histórico de desempenho", "• Suporte técnico 24h"].map((item) => (
            <li key={item} style={{ fontSize: 15, color: "rgb(33, 37, 41)", fontFamily: "var(--font-open-sans)" }}>{item}</li>
          ))}
        </ul>
      </>
    ),
    img: "/images/portalsolar-tmp2.webp",
    alt: "Painel de controle",
    textOnly: true,
  },
  {
    number: "6",
    title: "Cobrança automática e financiamento",
    desc: "Sistema de financiamento e pagamento automático de acordo com o plano escolhido. Parcele em até 60x com as melhores condições e aprovação rápida.",
    img: null,
    alt: "",
    textOnly: true,
  },
  {
    number: "7",
    title: "Conciliação financeira e ROI",
    desc: "Fique no controle e tenha relatórios sobre o retorno do seu investimento. Filtre por mês e faça download de planilhas para acompanhamento da economia gerada.",
    img: null,
    alt: "",
    textOnly: true,
  },
  {
    number: "8",
    title: "Ampliação e upgrade do sistema",
    desc: "Deixe que seu cliente expanda seu sistema solar conforme sua necessidade crescer, adicionando mais painéis e aumentando a capacidade instalada sem complicação.",
    img: null,
    alt: "",
    textOnly: true,
  },
];

export function SobreComoFunciona() {
  return (
    <section style={{ backgroundColor: "white", padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <h2
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: 36,
            fontWeight: 300,
            textAlign: "center",
            lineHeight: "44px",
            marginBottom: 64,
            color: "rgb(33, 37, 41)",
          }}
        >
          Como instalar um sistema solar com a{" "}
          <strong style={{ fontWeight: 700, color: "rgb(0, 123, 204)" }}>Frenergy?</strong>
        </h2>

        {steps.map((step, i) => {
          const isEven = i % 2 === 1;

          if (step.textOnly && !step.img) {
            return (
              <div
                key={step.number}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 24,
                  marginBottom: 64,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    backgroundColor: "rgb(247, 157, 52)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    fontWeight: 800,
                    color: "white",
                    flexShrink: 0,
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {step.number}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: 26,
                      fontWeight: 700,
                      color: "rgb(33, 37, 41)",
                      lineHeight: "32px",
                      margin: 0,
                    }}
                  >
                    {step.title}
                  </h3>
                  <hr
                    style={{
                      width: 60,
                      height: 2,
                      backgroundColor: "rgb(247, 157, 52)",
                      border: "none",
                      margin: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-open-sans)",
                      fontSize: 15,
                      lineHeight: "26px",
                      color: "rgb(80, 80, 80)",
                      maxWidth: 700,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          }

          return (
            <div
              key={step.number}
              className={isEven ? "flex flex-col md:flex-row-reverse" : "flex flex-col md:flex-row"}
              style={{ alignItems: "center", gap: 60, marginBottom: 80 }}
            >
              {/* Text side */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flex: 1 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    backgroundColor: "rgb(247, 157, 52)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    fontWeight: 800,
                    color: "white",
                    flexShrink: 0,
                    fontFamily: "var(--font-montserrat)",
                  }}
                >
                  {step.number}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: 26,
                      fontWeight: 700,
                      color: "rgb(33, 37, 41)",
                      lineHeight: "32px",
                      margin: 0,
                    }}
                  >
                    {step.title}
                  </h3>
                  <hr
                    style={{
                      width: 60,
                      height: 2,
                      backgroundColor: "rgb(247, 157, 52)",
                      border: "none",
                      margin: 0,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "var(--font-open-sans)",
                      fontSize: 15,
                      lineHeight: "26px",
                      color: "rgb(80, 80, 80)",
                      maxWidth: 460,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </div>
                </div>
              </div>

              {/* Image side */}
              {step.img && (
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div
                    style={{
                      background: "linear-gradient(135deg, #003399 0%, #1a6fd4 100%)",
                      borderRadius: 16,
                      padding: 32,
                      width: "100%",
                      maxWidth: 520,
                    }}
                  >
                    <Image
                      src={step.img}
                      alt={step.alt}
                      width={520}
                      height={340}
                      style={{
                        borderRadius: 12,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
