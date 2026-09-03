"use client";

import { useState, type ReactNode } from "react";
import { Home, Building2, Wheat, BatteryCharging } from "lucide-react";
import { trackLead } from "@/lib/metaPixel";

const WHATSAPP_NUMBER = "5562996426626";

const TIPOS: { label: string; icon: ReactNode }[] = [
  { label: "Residencial", icon: <Home size={26} /> },
  { label: "Empresarial", icon: <Building2 size={26} /> },
  { label: "Agronegócio", icon: <Wheat size={26} /> },
  { label: "Sem conexão com a rede", icon: <BatteryCharging size={26} /> },
];

const arrowIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function fmt(n: number) {
  return Math.round(n).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function SimuladorSolar() {
  const [tipo, setTipo] = useState<string | null>(null);
  const [localizacao, setLocalizacao] = useState("");
  const [conta, setConta] = useState("");
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sent, setSent] = useState(false);

  const localizacaoLiberada = !!tipo;
  const contaLiberada = localizacaoLiberada && localizacao.trim().length > 2;

  const contaNum = Number(conta) || 0;
  const temResultado = contaLiberada && contaNum > 0;
  const monthly = contaNum * 0.9;
  const annual = monthly * 12;

  const leadBloqueado = !nome.trim() || !whatsapp.trim();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (leadBloqueado || !temResultado) return;

    trackLead();

    fetch("https://formspree.io/f/mpqnznzz", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        Nome: nome,
        WhatsApp: whatsapp,
        "Tipo de local": tipo,
        Localização: localizacao,
        "Conta de luz informada": fmt(contaNum),
        "Economia mensal estimada": fmt(monthly),
        "Economia anual estimada": fmt(annual),
        Origem: "Simulador",
      }),
    });

    const msg = [
      "Olá! Simulei minha economia no site da Frenergy e quero um orçamento.",
      "",
      `Meu Nome: *${nome}*`,
      `WhatsApp: ${whatsapp}`,
      "",
      `Tipo de local: *${tipo}*`,
      `Localização: *${localizacao}*`,
      `Conta de luz informada: *${fmt(contaNum)}*`,
      "",
      `Economia estimada por mês: *${fmt(monthly)}*`,
      `Economia estimada por ano: *${fmt(annual)}*`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");

    setSent(true);
  }

  return (
    <section id="simulador" className="relative z-10 -mt-24 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">

          {/* Pergunta 1 — tipo de local */}
          <p className="font-extrabold text-[#1a1a1a] text-base md:text-lg mb-5">
            1. Qual é o tipo do local que irá instalar o gerador?
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {TIPOS.map((t) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setTipo(t.label)}
                className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-5 text-center transition-all"
                style={{
                  border: tipo === t.label ? "2px solid #FF5900" : "2px solid #e5e7eb",
                  background: tipo === t.label ? "rgba(255,89,0,0.06)" : "#fff",
                  color: tipo === t.label ? "#FF5900" : "#6b7280",
                }}
              >
                {t.icon}
                <span className="text-xs font-bold leading-tight">{t.label}</span>
              </button>
            ))}
          </div>

          {/* Pergunta 2 — localização */}
          <p className={`font-extrabold text-base md:text-lg mb-3 transition-colors ${localizacaoLiberada ? "text-[#1a1a1a]" : "text-gray-300"}`}>
            2. Onde pretende realizar a instalação?
          </p>
          <input
            type="text"
            disabled={!localizacaoLiberada}
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            placeholder="Digite sua cidade e estado"
            className="w-full border-2 rounded-xl px-4 py-3 text-base outline-none mb-10 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
            style={{ borderColor: "#e5e7eb", color: "#1a1a1a" }}
          />

          {/* Pergunta 3 — conta de luz */}
          <p className={`font-extrabold text-base md:text-lg mb-1 transition-colors ${contaLiberada ? "text-[#1a1a1a]" : "text-gray-300"}`}>
            3. Quanto é o seu gasto médio mensal com conta de luz?
          </p>
          <p className={`text-xs mb-3 ${contaLiberada ? "text-gray-400" : "text-gray-200"}`}>*Dados fornecidos na sua conta de luz</p>
          <div
            className="flex items-center gap-2 border-2 rounded-xl px-4 py-3 mb-2 transition-colors"
            style={{ borderColor: "#e5e7eb", background: contaLiberada ? "#fff" : "#f9fafb" }}
          >
            <span className="text-lg font-bold text-gray-400">R$</span>
            <input
              type="number"
              min={0}
              disabled={!contaLiberada}
              value={conta}
              onChange={(e) => setConta(e.target.value)}
              placeholder="0"
              className="w-full text-lg font-bold outline-none bg-transparent disabled:cursor-not-allowed"
              style={{ color: "#1a1a1a" }}
            />
          </div>

          {/* Resultado em tempo real */}
          {temResultado && (
            <div className="mt-8 mb-10 rounded-2xl p-6 text-center" style={{ background: "#F7F7F7" }}>
              <p className="text-sm font-semibold text-[#4D4D4D] mb-1">Você pode economizar por ano até</p>
              <p className="text-4xl md:text-5xl font-extrabold mb-1" style={{ color: "#FF5900" }}>{fmt(annual)}</p>
              <p className="text-xs text-gray-400">≈ {fmt(monthly)} por mês · simulação baseada em 90% de economia solar</p>
            </div>
          )}

          {/* Dados de contato */}
          {temResultado && !sent && (
            <form onSubmit={submit} className="flex flex-col gap-4 pt-2 border-t border-gray-100 mt-2">
              <p className="font-extrabold text-[#1a1a1a] text-base md:text-lg mt-6 mb-1">
                Quase lá! Informe seus dados para receber a simulação completa.
              </p>
              <div className="flex flex-col gap-4 md:flex-row">
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome completo"
                  required
                  className="flex-1 border-2 rounded-xl px-4 py-3 text-sm outline-none"
                  style={{ borderColor: "#e5e7eb", color: "#1a1a1a" }}
                />
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="(62) 99999-9999"
                  required
                  className="flex-1 border-2 rounded-xl px-4 py-3 text-sm outline-none"
                  style={{ borderColor: "#e5e7eb", color: "#1a1a1a" }}
                />
              </div>
              <button
                type="submit"
                disabled={leadBloqueado}
                className="inline-flex items-center justify-center gap-2 w-full text-white font-bold py-4 rounded-full text-base transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
              >
                Simular e falar com um especialista
                {arrowIcon}
              </button>
              <p className="text-[11px] text-gray-400 text-center">
                Em caso de áreas remotas, nossa equipe entra em contato para avaliar seu caso.
              </p>
            </form>
          )}

          {sent && (
            <div className="text-center pt-2 border-t border-gray-100 mt-2 pt-8">
              <div className="text-5xl mb-3">✅</div>
              <p className="font-extrabold text-lg text-[#1a1a1a] mb-1">Simulação enviada!</p>
              <p className="text-sm text-gray-500">Abrimos o WhatsApp para você falar direto com nossa equipe.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
