import Image from "next/image";
import { ShieldCheck, Award, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

export default function PanificadoraParaguai() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24" style={{ fontFamily: "'Open Sans', sans-serif" }}>

        {/* Hero */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              <div className="flex-1 flex flex-col gap-5">
                <span
                  className="inline-block self-start text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
                >
                  Case de Sucesso
                </span>
                <p className="text-sm font-semibold text-[#FF5900] uppercase tracking-widest">Agronegócio · Goiânia/GO</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-snug">
                  Panificadora Paraguai
                </h1>
                <p className="text-[#787878] text-base leading-relaxed">
                  Empresa de Goiânia com usina instalada na zona rural da região metropolitana, operando em consumo remoto. Sistema de grande porte projetado para alta geração e máxima segurança.
                </p>
              </div>

              <div className="flex-1 w-full relative">
                <div
                  className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                  style={{ background: "linear-gradient(135deg, #F0416E, #FF5900)" }}
                />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/panificadora02.jpeg"
                    alt="Panificadora Paraguai"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Números */}
        <section className="py-14" style={{ background: "#f7f7f7" }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { valor: "227,63", unidade: "kWp", label: "Potência instalada" },
                { valor: "28.000", unidade: "kWh/mês", label: "Produção média" },
                { valor: "358", unidade: "módulos", label: "JÁ 635W cada" },
                { valor: "2", unidade: "inversores", label: "SolarEdge 75 kW" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <p className="font-black text-3xl leading-none" style={{ color: "#FF5900" }}>{item.valor}</p>
                  <p className="text-xs font-bold text-[#FF5900] mt-1">{item.unidade}</p>
                  <p className="text-xs text-[#9ca3af] mt-2 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="flex flex-col gap-5">
              {[
                {
                  Icon: ShieldCheck,
                  titulo: "Aprovado pelo Corpo de Bombeiros",
                  texto: "O sistema utiliza otimizadores de potência entre os módulos e os inversores, atendendo à nova norma de segurança contra incêndio exigida pelo Corpo de Bombeiros.",
                },
                {
                  Icon: Award,
                  titulo: "Garantia de 12 anos",
                  texto: "Equipamentos com garantia muito acima da média do mercado, assegurando proteção de longo prazo para o investimento.",
                },
                {
                  Icon: Clock,
                  titulo: "Reposição em até 15 dias",
                  texto: "Em caso de acionamento de garantia, a peça é reposta na planta em média 15 dias após a aprovação — tempo recorde no setor.",
                },
              ].map(({ Icon, titulo, texto }) => (
                <div key={titulo} className="flex gap-5 items-start p-6 rounded-2xl bg-[#f7f7f7]">
                  <Icon size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#FF5900" }} />
                  <div>
                    <p className="font-bold text-[#1a1a1a] text-base mb-1">{titulo}</p>
                    <p className="text-[#787878] text-sm leading-relaxed">{texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-14" style={{ background: "#111" }}>
          <div className="container mx-auto px-6 max-w-xl text-center">
            <p className="text-white font-bold text-xl mb-2">Quer um projeto assim?</p>
            <p className="text-white/60 text-sm mb-8">Faça um orçamento gratuito e descubra quanto você pode economizar.</p>
            <a
              href="/orcamentos"
              className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #F0416E, #FF5900)" }}
            >
              Quero economizar também
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </section>

      </main>
      <EsferaFooter />
    </>
  );
}
