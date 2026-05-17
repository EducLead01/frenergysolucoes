"use client";

import { useState } from "react";
import { Home, Building2, Warehouse, Wheat, type LucideIcon } from "lucide-react";

const TIPO_ICONS: Record<string, LucideIcon> = {
  "Residencial": Home,
  "Comercial": Building2,
  "Industrial": Warehouse,
  "Agronegócio": Wheat,
};

const STEPS = [
  {
    pct: 20,
    question: "Você possui benefício da Tarifa Social de Energia Elétrica?",
    field: "tarifaSocial",
    options: ["Sim", "Não"],
  },
  {
    pct: 40,
    question: "Qual o tipo do seu imóvel?",
    field: "tipo",
    options: ["Residencial", "Comercial", "Industrial", "Agronegócio"],
  },
  {
    pct: 60,
    question: "Qual é o seu estado?",
    field: "estado",
    options: ["GO", "DF", "MT", "MG", "TO", "Outro"],
  },
  {
    pct: 80,
    question: "Qual o valor médio da sua conta de energia?",
    field: "conta",
    options: [
      "Abaixo de R$ 300",
      "Entre R$ 300 e R$ 1.000",
      "Entre R$ 1.000 e R$ 3.000",
      "Entre R$ 3.000 e R$ 5.000",
      "Acima de R$ 5.000",
    ],
  },
  {
    pct: 90,
    question: "O valor da sua conta é maior que R$ 1.000,00?",
    field: "contaMaior",
    options: ["Sim", "Não"],
  },
];

type Answers = Record<string, string>;

export function EsferaContactForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const isLastQuestion = step === STEPS.length;
  const current = STEPS[step];
  const pct = isLastQuestion ? 100 : (current?.pct ?? 100);

  const selected = current ? answers[current.field] : null;

  const blocked =
    !isLastQuestion && !selected
      ? true
      : isLastQuestion && (!nome || !whatsapp || !email)
      ? true
      : false;

  function choose(opt: string) {
    if (!current) return;
    setAnswers((a) => ({ ...a, [current.field]: opt }));
    if (current.field === "tarifaSocial" && opt === "Sim") {
      setStep(STEPS.length + 1);
    }
  }

  function next() {
    setStep((s) => s + 1);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (step === STEPS.length + 1) {
    return (
      <section id="contato" style={{ background: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80') center/cover no-repeat", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.75)" }} />
        <div style={{ position: "relative", zIndex: 1, padding: "80px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, lineHeight: 1.2 }}>Orçamento personalizado</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, marginTop: 8 }}>leva menos de 30 segundos</p>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, padding: "40px 28px", width: "100%", maxWidth: 580, boxShadow: "0 20px 60px rgba(0,0,0,0.4)", textAlign: "center" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>⚠️</div>
            <p style={{ fontWeight: 800, fontSize: 20, color: "#1a1a1a", marginBottom: 10 }}>Não conseguimos ajudar neste caso</p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.65, marginBottom: 28 }}>
              Quem possui Tarifa Social já tem o benefício máximo permitido pelo governo. Qualquer dúvida, entre em contato conosco.
            </p>
            <button
              type="button"
              onClick={() => { setStep(0); setAnswers({}); }}
              style={{ background: "none", border: "2px solid #e5e7eb", borderRadius: 12, color: "#6b7280", fontSize: 14, fontWeight: 600, cursor: "pointer", padding: "12px 24px" }}
            >
              ← Voltar ao início
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (sent) {
    return (
      <section id="contato" style={{ background: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80') center/cover no-repeat", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.75)" }} />
        <div style={{ position: "relative", zIndex: 1, padding: "80px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <div style={{ background: "#fff", borderRadius: 20, padding: "48px 28px", width: "100%", maxWidth: 580, boxShadow: "0 20px 60px rgba(0,0,0,0.4)", textAlign: "center" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
            <p style={{ fontWeight: 800, fontSize: 22, color: "#1a1a1a", marginBottom: 10 }}>Orçamento solicitado!</p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.6 }}>Em breve nossa equipe entrará em contato com você.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" style={{ background: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80') center/cover no-repeat", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.75)" }} />
      <div style={{ position: "relative", zIndex: 1, padding: "80px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>

        {/* Título acima do card */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#FFC10E", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Orçamento gratuito</p>
          <h2 style={{ color: "#fff", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, lineHeight: 1.2 }}>
            Rápido e sem compromisso!
          </h2>
        </div>

        {/* Card */}
        <div style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", width: "100%", maxWidth: 580, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>

          {/* Progress bar */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ background: "#e5e7eb", borderRadius: 999, height: 12, overflow: "hidden", position: "relative" }}>
              <div
                style={{
                  height: "100%",
                  borderRadius: 999,
                  background: "linear-gradient(90deg, #F0416E, #FF5900)",
                  width: `${pct}%`,
                  transition: "width 0.4s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: 8,
                }}
              >
                <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>{pct}%</span>
              </div>
            </div>
          </div>

          {!isLastQuestion ? (
            <>
              {/* Pergunta */}
              <p style={{ fontWeight: 800, fontSize: "clamp(16px, 2.5vw, 20px)", color: "#1a1a1a", marginBottom: 20, lineHeight: 1.3 }}>
                {current.question}
              </p>

              {/* Opções */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {current.options.map((opt) => {
                  const Icon = current.field === "tipo" ? TIPO_ICONS[opt] : undefined;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => choose(opt)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "14px 18px",
                        borderRadius: 12,
                        border: selected === opt ? "2px solid #FF5900" : "2px solid #e5e7eb",
                        background: selected === opt ? "rgba(255,89,0,0.06)" : "#fff",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.15s",
                        fontWeight: selected === opt ? 700 : 500,
                        color: selected === opt ? "#FF5900" : "#374151",
                        fontSize: 15,
                      }}
                    >
                      {Icon ? (
                        <Icon size={20} style={{ color: selected === opt ? "#FF5900" : "#9ca3af", flexShrink: 0 }} />
                      ) : (
                        <span style={{
                          width: 20, height: 20, borderRadius: "50%",
                          border: selected === opt ? "2px solid #FF5900" : "2px solid #d1d5db",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                          background: selected === opt ? "#FF5900" : "transparent",
                        }}>
                          {selected === opt && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff", display: "block" }} />}
                        </span>
                      )}
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Botão próximo */}
              <button
                type="button"
                onClick={next}
                disabled={!selected}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: 12,
                  border: "none",
                  background: selected ? "linear-gradient(90deg, #F0416E, #FF5900)" : "#e5e7eb",
                  color: selected ? "#fff" : "#9ca3af",
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: selected ? "pointer" : "default",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                Próximo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>

              {/* Voltar */}
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  style={{ marginTop: 12, background: "none", border: "none", color: "#9ca3af", fontSize: 13, cursor: "pointer", width: "100%", textAlign: "center" }}
                >
                  ← Voltar
                </button>
              )}
            </>
          ) : (
            /* Etapa final: dados pessoais */
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontWeight: 800, fontSize: "clamp(16px, 2.5vw, 20px)", color: "#1a1a1a", marginBottom: 4, lineHeight: 1.3 }}>
                Quase lá! Informe seus dados para receber o orçamento.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Qual o seu nome?</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome completo"
                  required
                  style={{ border: "2px solid #e5e7eb", borderRadius: 12, padding: "12px 16px", fontSize: 14, outline: "none", transition: "border 0.2s", color: "#1a1a1a" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Qual o seu WhatsApp?</label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="(62) 99999-9999"
                  required
                  style={{ border: "2px solid #e5e7eb", borderRadius: 12, padding: "12px 16px", fontSize: 14, outline: "none", transition: "border 0.2s", color: "#1a1a1a" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Qual o seu e-mail?</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  style={{ border: "2px solid #e5e7eb", borderRadius: 12, padding: "12px 16px", fontSize: 14, outline: "none", transition: "border 0.2s", color: "#1a1a1a" }}
                />
              </div>

              <button
                type="submit"
                disabled={blocked}
                style={{
                  marginTop: 4,
                  width: "100%",
                  padding: "16px",
                  borderRadius: 12,
                  border: "none",
                  background: !blocked ? "linear-gradient(90deg, #F0416E, #FF5900)" : "#e5e7eb",
                  color: !blocked ? "#fff" : "#9ca3af",
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: !blocked ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                Solicitar orçamento grátis
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>

              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                style={{ background: "none", border: "none", color: "#9ca3af", fontSize: 13, cursor: "pointer", textAlign: "center" }}
              >
                ← Voltar
              </button>

              <p style={{ color: "#9ca3af", fontSize: 11, textAlign: "center", lineHeight: 1.5 }}>
                Ao solicitar você concorda com a nossa{" "}
                <a href="#" style={{ color: "#F0416E" }}>Política de Privacidade</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
