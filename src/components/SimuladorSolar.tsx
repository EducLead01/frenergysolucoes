"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Home, Building2, Wheat, BatteryCharging, LocateFixed, Zap, Ruler, Wallet, Sun, Clock, ShieldCheck, TrendingUp } from "lucide-react";
import { trackLead } from "@/lib/metaPixel";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const WHATSAPP_NUMBER = "5562996426626";

// Constantes usadas para estimar o dimensionamento do sistema — valores aproximados de mercado,
// ajustar aqui se a Frenergy tiver dados mais precisos (preço/kWp real, irradiação local etc.)
const TARIFA_MEDIA_KWH = 0.85; // R$ por kWh (média nacional aproximada)
const GERACAO_KWH_POR_KWP_MES = 135; // kWh gerados por kWp instalado, por mês (irradiação Centro-Oeste)
const AREA_M2_POR_KWP = 4.3; // m² de telhado por kWp instalado
const PRECO_MIN_POR_KWP = 2750; // R$/kWp — sistema de 8 kWp em telhado (dado real Frenergy)
const PRECO_MAX_POR_KWP = 3390.47; // R$/kWp — sistema de 8 kWp instalado em solo (dado real Frenergy, mais caro por causa da estrutura)

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

type Municipio = { nome: string; uf: string };

const MUNICIPIOS_CACHE_KEY = "frenergy_municipios_v1";
let municipiosMemCache: Municipio[] | null = null;

function normalizar(s: string) {
  return s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

export function SimuladorSolar() {
  const [tipo, setTipo] = useState<string | null>(null);
  const [localizacao, setLocalizacao] = useState("");
  const [conta, setConta] = useState("");
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sent, setSent] = useState(false);

  const [municipios, setMunicipios] = useState<Municipio[] | null>(municipiosMemCache);
  const [sugestoesAbertas, setSugestoesAbertas] = useState(false);
  const [localizando, setLocalizando] = useState(false);
  const [erroLocalizacao, setErroLocalizacao] = useState<string | null>(null);
  const [avisoTipo, setAvisoTipo] = useState(false);
  const [avisoConta, setAvisoConta] = useState(false);
  const municipiosFetchIniciado = useRef(false);
  const avisoTipoTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const avisoContaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const localizacaoLiberada = !!tipo;
  const contaLiberada = localizacaoLiberada && localizacao.trim().length > 2;

  function avisarParaEscolherTipo() {
    setAvisoTipo(true);
    if (avisoTipoTimeout.current) clearTimeout(avisoTipoTimeout.current);
    avisoTipoTimeout.current = setTimeout(() => setAvisoTipo(false), 2800);
  }

  function avisarParaPreencherEtapasAnteriores() {
    setAvisoConta(true);
    if (avisoContaTimeout.current) clearTimeout(avisoContaTimeout.current);
    avisoContaTimeout.current = setTimeout(() => setAvisoConta(false), 2800);
  }

  useEffect(() => {
    if (tipo) setAvisoTipo(false);
  }, [tipo]);

  useEffect(() => {
    if (contaLiberada) setAvisoConta(false);
  }, [contaLiberada]);

  // Carrega a lista de municípios do IBGE (gratuito, sem chave) só quando o usuário chega nessa etapa
  useEffect(() => {
    if (!localizacaoLiberada || municipiosFetchIniciado.current) return;
    municipiosFetchIniciado.current = true;

    if (municipiosMemCache) {
      setMunicipios(municipiosMemCache);
      return;
    }

    const cached = localStorage.getItem(MUNICIPIOS_CACHE_KEY);
    if (cached) {
      try {
        const lista: Municipio[] = JSON.parse(cached);
        municipiosMemCache = lista;
        setMunicipios(lista);
        return;
      } catch {
        // cache corrompido, cai para o fetch abaixo
      }
    }

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome")
      .then((r) => r.json())
      .then((data: Array<{ nome: string; microrregiao?: { mesorregiao?: { UF?: { sigla?: string } } } }>) => {
        const lista: Municipio[] = data.map((m) => ({
          nome: m.nome,
          uf: m.microrregiao?.mesorregiao?.UF?.sigla ?? "",
        }));
        municipiosMemCache = lista;
        setMunicipios(lista);
        try {
          localStorage.setItem(MUNICIPIOS_CACHE_KEY, JSON.stringify(lista));
        } catch {
          // localStorage indisponível/cheio, sem problema — só perde o cache
        }
      })
      .catch(() => {
        // sem internet ou API fora do ar: campo continua funcionando em texto livre
      });
  }, [localizacaoLiberada]);

  const sugestoes = useMemo(() => {
    const q = normalizar(localizacao.trim());
    if (!municipios || q.length < 2) return [];
    const iniciaCom: Municipio[] = [];
    const contem: Municipio[] = [];
    for (const m of municipios) {
      const nomeNormalizado = normalizar(m.nome);
      if (nomeNormalizado.startsWith(q)) iniciaCom.push(m);
      else if (nomeNormalizado.includes(q)) contem.push(m);
    }
    return [...iniciaCom, ...contem].slice(0, 8);
  }, [localizacao, municipios]);

  function selecionarMunicipio(m: Municipio) {
    setLocalizacao(`${m.nome}, ${m.uf}`);
    setSugestoesAbertas(false);
  }

  function usarMinhaLocalizacao() {
    if (!navigator.geolocation) {
      setErroLocalizacao("Geolocalização não é suportada pelo seu navegador.");
      return;
    }
    setErroLocalizacao(null);
    setLocalizando(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`
          );
          const data = await res.json();
          // "locality" é o nome do município; "city" às vezes vem como região metropolitana (ex.: "Região Metropolitana de São Paulo")
          const cidade: string | undefined = data.locality || data.city;
          const uf: string | undefined = data.principalSubdivisionCode?.replace("BR-", "");
          if (cidade) {
            setLocalizacao(uf ? `${cidade}, ${uf}` : cidade);
            setSugestoesAbertas(false);
          } else {
            setErroLocalizacao("Não conseguimos identificar sua cidade. Digite manualmente.");
          }
        } catch {
          setErroLocalizacao("Não conseguimos identificar sua cidade. Digite manualmente.");
        } finally {
          setLocalizando(false);
        }
      },
      () => {
        setErroLocalizacao("Não conseguimos acessar sua localização. Digite manualmente.");
        setLocalizando(false);
      },
      { timeout: 10000 }
    );
  }

  const contaNum = Number(conta) || 0;
  const temResultado = contaLiberada && contaNum > 0;
  const monthly = contaNum * 0.9;
  const annual = monthly * 12;

  // Dimensionamento aproximado do sistema a partir da economia estimada
  const producaoMensalKwh = monthly / TARIFA_MEDIA_KWH;
  const potenciaKwp = producaoMensalKwh / GERACAO_KWH_POR_KWP_MES;
  const areaM2 = potenciaKwp * AREA_M2_POR_KWP;
  const valorSistemaMin = potenciaKwp * PRECO_MIN_POR_KWP;
  const valorSistemaMax = potenciaKwp * PRECO_MAX_POR_KWP;
  const tempoRetornoAnos = (valorSistemaMin + valorSistemaMax) / 2 / annual;
  const tempoRetornoBaixo = Math.max(1, Math.floor(tempoRetornoAnos));
  const tempoRetornoAlto = tempoRetornoBaixo + 1;

  const leadBloqueado = !nome.trim() || !whatsapp.trim();

  const whatsappMsg = [
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
    `Potência estimada: *${potenciaKwp.toFixed(2)} kWp*`,
    `Valor estimado do sistema: *${fmt(valorSistemaMin)} a ${fmt(valorSistemaMax)}*`,
  ].join("\n");
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

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
        "Potência estimada (kWp)": potenciaKwp.toFixed(2),
        "Área mínima estimada (m²)": Math.round(areaM2),
        "Valor estimado do sistema": `${fmt(valorSistemaMin)} a ${fmt(valorSistemaMax)}`,
        "Retorno estimado (anos)": `${tempoRetornoBaixo} a ${tempoRetornoAlto}`,
        Origem: "Simulador",
      }),
    });

    setSent(true);
  }

  return (
    <section id="simulador" className="relative z-10 -mt-24 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 font-inter">

          {/* Pergunta 1 — tipo de local */}
          <p className="font-extrabold text-[#1a1a1a] text-base md:text-lg mb-5">
            1. Selecione qual é o seu perfil para liberar as próximas opções
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
          <div className="mb-10 relative">
            {avisoTipo && (
              <div className="absolute z-30 left-0 -top-2 -translate-y-full bg-[#1a1a1a] text-white text-xs font-semibold rounded-lg px-4 py-2.5 shadow-lg max-w-[280px]">
                Clique no tipo de imóvel para liberar a localização
                <div
                  className="absolute left-6 top-full w-0 h-0"
                  style={{ borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid #1a1a1a" }}
                />
              </div>
            )}
            <p className={`font-extrabold text-base md:text-lg mb-3 transition-colors ${localizacaoLiberada ? "text-[#1a1a1a]" : "text-gray-300"}`}>
              2. Onde pretende realizar a instalação?
            </p>
            <div className="relative">
              <input
                type="text"
                disabled={!localizacaoLiberada}
                value={localizacao}
                onChange={(e) => { setLocalizacao(e.target.value); setSugestoesAbertas(true); }}
                onFocus={() => setSugestoesAbertas(true)}
                onBlur={() => setTimeout(() => setSugestoesAbertas(false), 150)}
                placeholder="Digite sua cidade e estado"
                autoComplete="off"
                className="w-full border-2 rounded-xl px-4 py-3 text-base outline-none transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                style={{ borderColor: "#e5e7eb", color: "#1a1a1a" }}
              />
              {!localizacaoLiberada && (
                <div
                  className="absolute inset-0 cursor-not-allowed"
                  onClick={avisarParaEscolherTipo}
                />
              )}
              {sugestoesAbertas && sugestoes.length > 0 && (
                <div
                  className="absolute z-20 left-0 right-0 top-full mt-1 bg-white border rounded-xl shadow-lg overflow-hidden"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  {sugestoes.map((m) => (
                    <button
                      key={`${m.nome}-${m.uf}`}
                      type="button"
                      onMouseDown={() => selecionarMunicipio(m)}
                      className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b last:border-b-0"
                      style={{ borderColor: "#f3f4f6", color: "#374151" }}
                    >
                      {m.nome}, {m.uf}, Brasil
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={usarMinhaLocalizacao}
              disabled={!localizacaoLiberada || localizando}
              className="inline-flex items-center gap-1.5 text-sm font-semibold mt-3 disabled:opacity-40"
              style={{ color: "#FF5900" }}
            >
              <LocateFixed size={16} />
              {localizando ? "Localizando..." : "Usar minha localização"}
            </button>
            {erroLocalizacao && <p className="text-xs text-red-500 mt-2">{erroLocalizacao}</p>}
          </div>

          {/* Pergunta 3 — conta de luz */}
          <div className="relative">
            {avisoConta && (
              <div className="absolute z-30 left-0 -top-2 -translate-y-full bg-[#1a1a1a] text-white text-xs font-semibold rounded-lg px-4 py-2.5 shadow-lg max-w-[280px]">
                Preencha as etapas anteriores para liberar esse campo
                <div
                  className="absolute left-6 top-full w-0 h-0"
                  style={{ borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid #1a1a1a" }}
                />
              </div>
            )}
            <p className={`font-extrabold text-base md:text-lg mb-1 transition-colors ${contaLiberada ? "text-[#1a1a1a]" : "text-gray-300"}`}>
              3. Quanto é o seu gasto médio mensal com conta de luz?
            </p>
            <p className={`text-xs mb-3 ${contaLiberada ? "text-gray-400" : "text-gray-200"}`}>*Dados fornecidos na sua conta de luz</p>
            <div className="relative">
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
              {!contaLiberada && (
                <div
                  className="absolute inset-0 cursor-not-allowed"
                  onClick={avisarParaPreencherEtapasAnteriores}
                />
              )}
            </div>
          </div>

          {/* Dados de contato — precisa preencher pra liberar o resultado */}
          {temResultado && !sent && (
            <form onSubmit={submit} className="flex flex-col gap-4 pt-8 border-t border-gray-100 mt-8">
              <p className="font-extrabold text-[#1a1a1a] text-base md:text-lg mb-1">
                Quase lá! Informe seus dados para ver sua simulação completa.
              </p>
              <div className="flex flex-col gap-4 md:flex-row">
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome"
                  autoComplete="name"
                  required
                  className="flex-1 border-2 rounded-xl px-4 py-3 text-sm outline-none"
                  style={{ borderColor: "#e5e7eb", color: "#1a1a1a" }}
                />
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="WhatsApp"
                  autoComplete="tel"
                  required
                  className="flex-1 border-2 rounded-xl px-4 py-3 text-sm outline-none"
                  style={{ borderColor: "#e5e7eb", color: "#1a1a1a" }}
                />
              </div>
              <button
                type="submit"
                disabled={leadBloqueado}
                className="inline-flex items-center justify-center gap-2 w-full text-white font-bold py-4 rounded-full text-base transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ background: "#115e59" }}
              >
                Ver minha simulação completa
                {arrowIcon}
              </button>
              <p className="text-[11px] text-gray-400 text-center">
                Em caso de áreas remotas, nossa equipe entra em contato para avaliar seu caso.
              </p>
            </form>
          )}

          {/* Resultado completo — só aparece depois de enviar nome e WhatsApp */}
          {sent && (
            <div className="pt-8 border-t border-gray-100 mt-8">
              <div className="mb-8 rounded-2xl p-6 text-center" style={{ background: "#F5EFE7" }}>
                <p className="text-sm font-black mb-1" style={{ color: "#0A0F2E" }}>Você pode economizar por ano até</p>
                <p className="text-4xl md:text-5xl font-black mb-1" style={{ color: "#E8821E" }}>{fmt(annual)}</p>
                <p className="text-xs" style={{ color: "#8a8175" }}>≈ {fmt(monthly)} por mês · simulação baseada em 90% de economia solar</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: <Zap size={26} />, label: "Potência instalada*", valor: `${potenciaKwp.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kWp` },
                  { icon: <Ruler size={26} />, label: "Área mínima necessária*", valor: `${Math.round(areaM2)} m²` },
                  { icon: <Wallet size={26} />, label: "Valor aproximado do sistema com instalação*", valor: `Entre ${fmt(valorSistemaMin)} e ${fmt(valorSistemaMax)}` },
                  { icon: <Sun size={26} />, label: "Produção mensal*", valor: `${producaoMensalKwh.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kWh/mês` },
                  { icon: <TrendingUp size={26} />, label: "Economia anual aproximada*", valor: fmt(annual) },
                  { icon: <Clock size={26} />, label: "Tempo aproximado de retorno do investimento*", valor: `Entre ${tempoRetornoBaixo} e ${tempoRetornoAlto} anos` },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center gap-2 rounded-2xl p-5"
                    style={{ background: "#fff", border: "1px solid #A98F5C" }}
                  >
                    <div style={{ color: "#E8821E" }}>{item.icon}</div>
                    <p className="text-xs leading-snug" style={{ color: "#8a8175" }}>{item.label}</p>
                    <p className="font-black text-sm md:text-base" style={{ color: "#0A0F2E" }}>{item.valor}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 rounded-xl p-5 mb-8" style={{ background: "#FFF8E8", borderLeft: "4px solid #FFC10E" }}>
                <ShieldCheck size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#FFC10E" }} />
                <p className="text-sm text-[#4D4D4D] leading-relaxed">
                  Parcele o investimento em até 60x com as melhores condições do mercado, aprovação rápida e sem burocracia. Praticamente trocando sua conta de luz pela parcela do sistema — e ao final, a energia é sua.
                </p>
              </div>

              <WhatsAppLink
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 w-full text-white font-bold py-4 rounded-full text-base transition-opacity hover:opacity-90 mb-8"
                style={{ background: "#115e59" }}
              >
                Receber a simulação detalhada no WhatsApp
                {arrowIcon}
              </WhatsAppLink>

              <p className="text-[11px] text-gray-400 leading-relaxed">
                *Importante: os valores exibidos são aproximados, calculados a partir de médias de mercado (tarifa de energia, irradiação solar e custo de equipamentos) e servem apenas como referência inicial. O valor final pode variar conforme o tipo de telhado, condições do local, consumo real e equipamentos escolhidos. Solicite uma visita técnica para um orçamento personalizado e preciso.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
