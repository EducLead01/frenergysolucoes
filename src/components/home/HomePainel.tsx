"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HomePainel() {
  const leftRef = useScrollReveal<HTMLDivElement>(0);
  const h2Ref = useScrollReveal<HTMLHeadingElement>(100);
  const dropRef = useScrollReveal<HTMLDivElement>(150);
  const subRef = useScrollReveal<HTMLDivElement>(200);
  const btnRef = useScrollReveal<HTMLAnchorElement>(250);

  const reveal = {
    opacity: 0 as const,
    transform: "translateY(20px)",
    transition: "opacity 600ms ease, transform 600ms ease",
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "80px",
        paddingBottom: "80px",
        backgroundColor: "#fff",
      }}
    >
      {/* container-full */}
      <div
        className="flex flex-col lg:flex-row items-center gap-12"
        style={{
          position: "relative",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* LEFT — news card */}
        <div
          ref={leftRef}
          className="w-full lg:w-[50%]"
          style={{ ...reveal }}
        >
          {/* News card wrapper */}
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 40px 0 rgba(0,0,0,0.12)",
              backgroundColor: "#fff",
              maxWidth: "480px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Browser chrome bar */}
            <div
              style={{
                backgroundColor: "#f2f2f2",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <div style={{ display: "flex", gap: "6px" }}>
                <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#ff5f57" }} />
                <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#febc2e" }} />
                <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#28c840" }} />
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  color: "#888",
                  border: "1px solid #e0e0e0",
                }}
              >
                portalsolar.com.br
              </div>
            </div>

            {/* Hero gradient image area */}
            <div
              style={{
                height: "200px",
                background: "linear-gradient(135deg, #0f3460 0%, #007bcc 50%, #00b4d8 100%)",
                display: "flex",
                alignItems: "flex-end",
                padding: "20px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* decorative circles */}
              <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)" }} />
              <div style={{ position: "absolute", top: "20px", right: "40px", width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)" }} />
              {/* solar icon */}
              <svg
                style={{ position: "absolute", top: "24px", left: "24px", opacity: 0.15 }}
                width="80" height="80" viewBox="0 0 24 24" fill="white"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="21" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="1" y1="12" x2="3" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="21" y1="12" x2="23" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {/* category tag */}
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#f79d34",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  padding: "4px 10px",
                  borderRadius: "4px",
                }}
              >
                Energia Solar
              </span>
            </div>

            {/* Article content */}
            <div style={{ padding: "24px 28px 28px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
                  fontSize: "18px",
                  lineHeight: "27px",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginTop: 0,
                  marginBottom: "16px",
                }}
              >
                Conheça a empresa Goiana que vem ganhando espaço no centro-oeste na geração de energia solar
              </h3>
              <p style={{ fontSize: "13px", lineHeight: "20px", color: "#777", marginBottom: "20px" }}>
                A Frenergy Soluções se destaca pela qualidade das instalações e pelo acompanhamento próximo aos clientes em todo o centro-oeste...
              </p>
              {/* Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  borderTop: "1px solid #f0f0f0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #007bcc, #00b4d8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#fff",
                    }}
                  >
                    F
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#444" }}>Frenergy Soluções</span>
                </div>
                <span style={{ fontSize: "12px", color: "#aaa" }}>2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — text */}
        <div
          className="w-full lg:w-[44%]"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#e8f4fd",
              color: "#007bcc",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              padding: "5px 12px",
              borderRadius: "4px",
              marginBottom: "20px",
            }}
          >
            Frenergy na Mídia
          </span>

          <h2
            ref={h2Ref}
            style={{
              fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
              fontSize: "34px",
              lineHeight: "42px",
              fontWeight: 300,
              marginTop: 0,
              marginBottom: 0,
              ...reveal,
            }}
          >
            Nossa história já foi destaque nos principais
            <span style={{ color: "#007bcc" }}><strong> portais de energia solar</strong></span>
          </h2>

          {/* blue-drop */}
          <div
            ref={dropRef}
            style={{
              width: "60px",
              height: "5px",
              marginTop: "15px",
              marginBottom: "25px",
              borderRadius: "200px",
              backgroundColor: "#007bcc",
              ...reveal,
            }}
          />

          <div
            ref={subRef}
            style={{
              maxWidth: "420px",
              marginBottom: "30px",
              fontSize: "16px",
              lineHeight: "26px",
              color: "#555",
              ...reveal,
            }}
          >
            A Frenergy Soluções cresce no centro-oeste com instalações de qualidade, atendimento próximo e resultados reais para cada cliente.
          </div>

          <a
            ref={btnRef}
            href="#contato"
            style={{
              display: "flex",
              height: "56px",
              paddingRight: "32px",
              paddingLeft: "32px",
              alignItems: "center",
              borderRadius: "300px",
              backgroundColor: "#007bcc",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              ...reveal,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f79d34";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#007bcc";
            }}
          >
            Quero economizar também
          </a>
        </div>
      </div>
    </section>
  );
}
