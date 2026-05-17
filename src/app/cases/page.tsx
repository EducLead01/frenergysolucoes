import { Navbar } from "@/components/Navbar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";
import { EsferaContactForm } from "@/components/esfera/EsferaContactForm";
import { HomeModelos } from "@/components/home/HomeModelos";

export default function Cases() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ fontFamily: "'Open Sans', sans-serif", color: "#212529" }}>

        {/* Hero */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80') center/cover no-repeat" }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "120px 32px 80px" }}>
            <p style={{ color: "#FFC10E", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Cases de sucesso</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 4.5vw, 62px)", fontWeight: 900, maxWidth: 760, lineHeight: 1.15, marginBottom: 20 }}>
              Empresas que já economizam com energia solar.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 560, lineHeight: 1.65, marginBottom: 40 }}>
              Conheça os clientes que transformaram sua conta de energia com a Frenergy — instalações residenciais, comerciais e industriais com resultados reais.
            </p>
            <a href="/orcamentos" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(90deg, #F0416E, #FF5900)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "16px 36px", borderRadius: 999, textDecoration: "none" }}>
              Quero economizar também
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </section>

        <HomeModelos />
        <div id="contato">
          <EsferaContactForm />
        </div>
      </main>
      <EsferaFooter />
    </>
  );
}
