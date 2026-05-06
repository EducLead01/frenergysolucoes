"use client";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const modelos = [
  {
    titulo: "Residencial",
    descricao: "Sistemas de 3 a 20 kWp para casas e apartamentos. Retorno de investimento em até 4 anos.",
    img: "/images/assinestore/tela_personalizado.png",
  },
  {
    titulo: "Comercial",
    descricao: "Sistemas de 20 a 75 kWp para empresas, comércios e estabelecimentos de médio porte.",
    img: "/images/assinestore/admin_analytics2x.png",
  },
  {
    titulo: "Industrial",
    descricao: "Sistemas acima de 75 kWp para indústrias e grandes consumidores com alta demanda.",
    img: "/images/assinestore/tela_personalizado.png",
  },
];

export function HomeModelos() {
  const h2Ref = useScrollReveal<HTMLHeadingElement>(0);
  const dropRef = useScrollReveal<HTMLDivElement>(100);

  return (
    <section
      style={{
        width: "100%",
        paddingTop: "120px",
        paddingBottom: "10px",
      }}
    >
      {/* Heading */}
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginBottom: "60px",
          textAlign: "center",
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
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <strong style={{ color: "#007bcc" }}>Tipos de projetos</strong> para o seu sistema solar
        </h2>
        <div
          ref={dropRef}
          style={{
            width: "60px",
            height: "5px",
            margin: "15px auto 25px",
            borderRadius: "200px",
            backgroundColor: "#007bcc",
            opacity: 0,
            transform: "translateY(10px)",
            transition: "opacity 600ms ease 100ms, transform 600ms ease 100ms",
          }}
        />
      </div>

      {/* Slider-style row */}
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "80px",
        }}
      >
        {modelos.map((m, i) => (
          <div
            key={m.titulo}
            style={{
              flex: "0 0 340px",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 3px 20px 0 rgba(0,0,0,0.1)",
              transition: "transform 200ms ease, box-shadow 200ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px 0 rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 3px 20px 0 rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ height: "200px", overflow: "hidden", backgroundColor: "#e7eaf1" }}>
              <Image
                src={m.img}
                alt={m.titulo}
                width={340}
                height={200}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "24px" }}>
              <div
                style={{
                  fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#007bcc",
                  marginBottom: "10px",
                }}
              >
                {m.titulo}
              </div>
              <div style={{ fontSize: "14px", lineHeight: "22px", color: "#555" }}>
                {m.descricao}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "100% personalizado" section */}
      <div
        style={{
          backgroundColor: "#e7eaf1",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "20px",
            paddingRight: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <div style={{ flex: 1 }}>
            <Image
              src="/images/assinestore/tela_personalizado.png"
              alt="Projeto solar personalizado"
              width={500}
              height={350}
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
                fontSize: "28px",
                lineHeight: "34px",
                fontWeight: 300,
                marginTop: 0,
                color: "#212529",
              }}
            >
              Ou tenha um projeto solar <strong style={{ color: "#007bcc" }}>100% personalizado</strong>
            </h3>
            <div
              style={{
                width: "60px",
                height: "5px",
                marginTop: "15px",
                marginBottom: "25px",
                borderRadius: "200px",
                backgroundColor: "#007bcc",
              }}
            />
            <p style={{ fontSize: "16px", lineHeight: "26px", color: "#555", marginBottom: "30px" }}>
              Nossa equipe cria do zero um projeto solar exclusivo para a sua necessidade, seja residencial, comercial ou industrial.
            </p>
            <a
              href="#contato"
              style={{
                display: "inline-flex",
                height: "60px",
                paddingRight: "35px",
                paddingLeft: "35px",
                alignItems: "center",
                borderRadius: "300px",
                backgroundColor: "#007bcc",
                transition: "background-color 300ms ease-in-out",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "15px",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f79d34")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#007bcc")}
            >
              Projeto personalizado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
