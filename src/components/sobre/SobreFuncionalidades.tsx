import {
  Ruler,
  ShieldCheck,
  Activity,
  Wrench,
  Smartphone,
  Banknote,
  Sun,
  TrendingUp,
  FileCheck,
  Gift,
  Zap,
  type LucideIcon,
} from "lucide-react";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Ruler,
    title: "Projeto & Engenharia",
    desc: "Elaboramos o projeto elétrico completo com ART, dimensionamento e documentação para homologação junto à concessionária.",
  },
  {
    icon: ShieldCheck,
    title: "Instalação Certificada",
    desc: "Equipe técnica certificada com normas ABNT NBR 16690. Segurança e qualidade em cada instalação residencial, comercial ou industrial.",
  },
  {
    icon: Activity,
    title: "Monitoramento 24h",
    desc: "Acompanhe sua geração em tempo real pelo app. Alertas automáticos em caso de falha ou queda de desempenho.",
  },
  {
    icon: Wrench,
    title: "Pós-venda & Manutenção",
    desc: "Suporte técnico contínuo após a instalação. Manutenção preventiva e corretiva com equipe especializada sempre disponível.",
  },
  {
    icon: Smartphone,
    title: "App Frenergy",
    desc: "Visualize geração, consumo, economia e ROI do seu celular. Disponível para iOS e Android.",
  },
  {
    icon: Banknote,
    title: "Financiamento",
    desc: "Parcele o investimento em até 60x com as melhores condições do mercado. Aprovação rápida e sem burocracia.",
  },
  {
    icon: Sun,
    title: "Equipamentos de 1ª linha",
    desc: "Trabalhamos com as marcas líderes: Risen, Canadian Solar, Fronius, Growatt e outras com garantia de fábrica.",
  },
  {
    icon: TrendingUp,
    title: "Retorno Garantido",
    desc: "Retorno médio do investimento entre 3 e 5 anos. Vida útil superior a 25 anos com degradação mínima dos painéis.",
  },
  {
    icon: FileCheck,
    title: "Homologação Completa",
    desc: "Cuidamos de toda a burocracia junto à concessionária. Você não precisa se preocupar com nada.",
  },
  {
    icon: Gift,
    title: "Programa de Indicação",
    desc: "Ganhe descontos e benefícios exclusivos indicando amigos e familiares para a Frenergy.",
  },
  {
    icon: Zap,
    title: "Sempre ilimitado",
    desc: "Sem custo adicional por volume de geração. Mensalidade fixa e previsível, com performance garantida por contrato.",
  },
];

export function SobreFuncionalidades() {
  return (
    <section style={{ backgroundColor: "rgba(0, 0, 0, 0)", padding: "120px 0 60px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <h2
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: 36,
            fontWeight: 300,
            textAlign: "center",
            lineHeight: "40px",
            color: "rgb(33, 37, 41)",
            margin: 0,
          }}
        >
          Funcionalidades para{" "}
          <strong style={{ fontWeight: 700, color: "rgb(0, 123, 204)" }}>
            crescer e administrar
          </strong>
          <br />
          seus projetos solares
        </h2>

        <div
          style={{
            width: 60,
            height: 5,
            backgroundColor: "rgb(0, 123, 204)",
            borderRadius: 200,
            margin: "15px auto 25px",
          }}
        />

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 24, marginTop: 40 }}
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              style={{
                backgroundColor: "white",
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
                <Icon size={24} color="white" />
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "rgb(33, 37, 41)",
                  margin: "15px 0 0",
                  lineHeight: "34px",
                }}
              >
                {title}
              </h4>
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
