"use client";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HomeHero() {
  const headingRef = useScrollReveal<HTMLHeadingElement>(0);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "680px",
        marginTop: "90px",
        backgroundImage: "url('/images/assinestore/hero_bg_1440_3.svg')",
        backgroundPosition: "0% 50%",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero container */}
      <div
        style={{
          position: "relative",
          display: "flex",
          height: "100%",
          maxWidth: "1200px",
          marginRight: "auto",
          marginLeft: "auto",
          paddingRight: "20px",
          paddingLeft: "20px",
          justifyContent: "space-between",
        }}
      >
        {/* Left text */}
        <div
          style={{
            display: "flex",
            width: "40%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            color: "#fff",
          }}
        >
          <h1
            ref={headingRef}
            style={{
              fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
              fontSize: "43px",
              lineHeight: "56px",
              fontWeight: 300,
              marginTop: 0,
              marginBottom: 0,
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 600ms ease, transform 600ms ease",
            }}
          >
            Instale <strong>Energia Solar</strong> e pare de pagar caro na conta de luz.
          </h1>

          {/* hero-drop */}
          <div
            style={{
              width: "60px",
              height: "5px",
              marginTop: "15px",
              marginBottom: "25px",
              borderRadius: "200px",
              backgroundColor: "#fff",
            }}
          />

          <div
            style={{
              maxWidth: "430px",
              marginBottom: "30px",
              fontSize: "19px",
              lineHeight: "32px",
              fontWeight: 400,
            }}
          >
            Tenha o seu sistema de energia solar completo e sem mensalidade. Atendemos residências, comércios e indústrias em Goiânia e região.
          </div>

          <a
            href="#contato"
            style={{
              display: "flex",
              height: "60px",
              paddingRight: "35px",
              paddingLeft: "35px",
              alignItems: "center",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#007bcc",
              borderRadius: "300px",
              backgroundColor: "#fff",
              transition: "color 350ms ease, background-color 30ms ease-in-out",
              color: "#007bcc",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "16px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f79d34";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#f79d34";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.color = "#007bcc";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#007bcc";
            }}
          >
            Conheça nossos projetos
          </a>
        </div>

        {/* Right visual */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Image
            src="/images/assinestore/hero_visual.svg"
            alt="Sistema de energia solar"
            width={500}
            height={400}
            style={{ maxWidth: "85%" }}
            priority
          />
        </div>
      </div>

      {/* blob */}
      <Image
        src="/images/assinestore/blob.svg"
        alt=""
        width={800}
        height={600}
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          zIndex: -10,
          width: "66%",
          maxWidth: "100%",
        }}
      />
    </section>
  );
}
