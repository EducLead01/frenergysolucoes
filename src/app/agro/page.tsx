import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

export default function Agro() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            background: "url('/images/fazenda-solar.jpg') center/cover no-repeat",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />

          {/* Fazendeiro — ancorado na base direita */}
          <div style={{ position: "absolute", bottom: 0, right: "8%", zIndex: 1, display: "flex", alignItems: "flex-end" }}>
            <Image
              src="/images/Fazendeiro.png"
              alt="Fazendeiro"
              width={340}
              height={520}
              className="h-[70vh] w-auto object-contain object-bottom"
              priority
            />
          </div>

          <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "120px 32px 80px" }}>
            <p style={{ color: "#FFC10E", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
              Energia solar para o agronegócio
            </p>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 4.5vw, 62px)", fontWeight: 900, maxWidth: 760, lineHeight: 1.15, marginBottom: 20 }}>
              Usinas solares em fazendas que geram energia e lucro.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 560, lineHeight: 1.65, marginBottom: 40 }}>
              Reduza o custo operacional da sua propriedade rural com energia limpa, renovável e de alta performance.
            </p>
            <a
              href="#contato"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(90deg, #F0416E, #FF5900)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                padding: "16px 36px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              Solicitar estudo para minha fazenda
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <EsferaFooter />
    </>
  );
}
