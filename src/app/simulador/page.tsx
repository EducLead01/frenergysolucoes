import { Navbar } from "@/components/Navbar";
import { SimuladorSolar } from "@/components/SimuladorSolar";
import { EsferaFooter } from "@/components/esfera/EsferaFooter";

export default function Simulador() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: "'Open Sans', sans-serif" }}>

        {/* Hero */}
        <section
          style={{
            position: "relative",
            minHeight: "min(56vh, 520px)",
            display: "flex",
            alignItems: "center",
            paddingTop: 140,
            paddingBottom: 64,
            background: "url('/images/comercial02.jpg') center/cover no-repeat",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.7) 100%)" }} />
          <div className="relative z-10 container mx-auto px-6 text-center">
            <p style={{ color: "#FFC10E", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
              Simulador de energia solar
            </p>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, lineHeight: 1.15 }}>
              Economize até 90%<br />na sua conta de luz
            </h1>
          </div>
        </section>

        <SimuladorSolar />
      </main>
      <EsferaFooter />
    </>
  );
}
