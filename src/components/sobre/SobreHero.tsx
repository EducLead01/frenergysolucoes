"use client";

import Image from "next/image";

export function SobreHero() {
  return (
    <section
      style={{
        height: "680px",
        backgroundImage: 'url("/images/assinestore/hero_bg_1440_3.svg")',
        backgroundSize: "auto",
        backgroundPosition: "center left",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: "90px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "48px",
          width: "100%",
        }}
        className="flex-col md:flex-row"
      >
        <div className="flex-1 flex flex-col">
          <h1
            style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "42px",
              fontWeight: 800,
              lineHeight: "52px",
              color: "white",
              textAlign: "left",
            }}
            className="text-center md:text-left"
          >
            A empresa que simplifica a{" "}
            <strong style={{ textDecoration: "underline white" }}>
              energia solar
            </strong>{" "}
            para você.
          </h1>

          <div
            style={{
              width: "40px",
              height: "3px",
              backgroundColor: "white",
              marginTop: "16px",
            }}
            className="mx-auto md:mx-0"
          />

          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.9)",
              lineHeight: "26px",
              maxWidth: "500px",
              marginTop: "16px",
            }}
            className="text-center md:text-left mx-auto md:mx-0"
          >
            Na Frenergy, <strong>a economia vem em 1º lugar</strong>. Tenha seu
            sistema fotovoltaico completo — projeto, instalação, monitoramento e
            suporte, sem complicação.
          </p>

          <a
            href="#contato"
            style={{
              backgroundColor: "white",
              color: "rgb(0,123,204)",
              padding: "12px 36px",
              borderRadius: "300px",
              border: "1px solid rgb(0,123,204)",
              fontSize: "16px",
              fontWeight: 700,
              height: "52px",
              display: "inline-flex",
              alignItems: "center",
              marginTop: "24px",
              transition: "background-color 0.2s, color 0.2s",
              alignSelf: "flex-start",
              textDecoration: "none",
            }}
            className="mx-auto md:mx-0 hover:[background-color:rgb(0,123,204)] hover:[color:white]"
          >
            Solicitar orçamento gratuito
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "24px",
            }}
            className="mx-auto md:mx-0"
          >
            <Image
              src="/images/portalsolar-casa-solar.webp"
              alt="Cliente satisfeito"
              width={52}
              height={52}
              style={{
                borderRadius: "50%",
                border: "2px solid white",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ color: "#F5A623", fontSize: "16px" }}>★★★★★</div>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.9)",
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                "Ótima empresa! Atendimento rápido e eficiente."
              </p>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "white",
                  margin: 0,
                }}
              >
                José Carlos | Goiânia/GO
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          <Image
            src="/images/assinestore/hero_visual.svg"
            alt="Ilustração energia solar"
            width={520}
            height={480}
            style={{
              maxWidth: "50vw",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}
