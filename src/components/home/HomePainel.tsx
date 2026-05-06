"use client";
import Image from "next/image";
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
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      {/* blades decorative */}
      <Image
        src="/images/assinestore/blades_body.svg"
        alt=""
        width={600}
        height={400}
        style={{
          position: "absolute",
          left: "-1%",
          top: "33%",
          width: "54%",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />

      {/* container-full */}
      <div
        className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-0"
        style={{
          position: "relative",
          width: "100%",
          marginTop: "60px",
          marginBottom: "60px",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          justifyContent: "space-between",
        }}
      >
        {/* container-left */}
        <div
          ref={leftRef}
          className="w-full lg:w-[50%]"
          style={{
            position: "relative",
            display: "flex",
            minHeight: "300px",
            paddingRight: "30px",
            paddingLeft: "30px",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            alignSelf: "stretch",
            color: "#fff",
            ...reveal,
          }}
        >
          <Image
            src="/images/assinestore/admin_analytics2x.png"
            alt="Painel de monitoramento solar"
            width={525}
            height={350}
            style={{ maxWidth: "92%", alignSelf: "flex-start" }}
          />
          <div
            style={{
              display: "flex",
              marginTop: "10px",
              marginLeft: "10px",
              alignItems: "flex-start",
              alignSelf: "flex-start",
              fontSize: "16px",
              lineHeight: "20px",
              color: "#555",
            }}
          >
            <Image
              src="/images/assinestore/white_star.svg"
              alt=""
              width={20}
              height={20}
              style={{ marginRight: "10px", marginTop: "2px" }}
            />
            <div>Monitoramento completo e<br />instalações com garantia.</div>
          </div>

          <Image
            src="/images/assinestore/mate_mobile2x.png"
            alt=""
            width={177}
            height={280}
            style={{
              position: "absolute",
              right: "11%",
              bottom: "5%",
              maxWidth: "160px",
            }}
          />
        </div>

        {/* container-right */}
        <div
          className="w-full lg:w-[44%]"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <h2
            ref={h2Ref}
            style={{
              fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
              fontSize: "36px",
              lineHeight: "40px",
              fontWeight: 300,
              marginTop: 0,
              marginBottom: 0,
              ...reveal,
            }}
          >
            Tudo o que você precisa para começar a
            <span style={{ color: "#007bcc" }}><strong> Economizar com Solar</strong></span>
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
              maxWidth: "450px",
              marginBottom: "30px",
              fontSize: "16px",
              lineHeight: "26px",
              ...reveal,
            }}
          >
            Tire seu projeto solar do papel e venha economizar com a Frenergy Soluções.
          </div>

          <a
            ref={btnRef}
            href="#contato"
            style={{
              display: "flex",
              height: "60px",
              paddingRight: "35px",
              paddingLeft: "35px",
              alignItems: "center",
              borderRadius: "300px",
              backgroundColor: "#007bcc",
              color: "#fff",
              fontSize: "16px",
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
            Conheça nossos planos
          </a>
        </div>
      </div>

    </section>
  );
}
