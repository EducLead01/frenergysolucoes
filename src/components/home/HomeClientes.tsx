import Image from "next/image";

const clientes = [
  { src: "/images/clientes/cliente1.png", alt: "Cliente 1", width: 120 },
  { src: "/images/clientes/cliente2.png", alt: "Cliente 2", width: 120 },
  { src: "/images/clientes/cliente3.png", alt: "Cliente 3", width: 100 },
  { src: "/images/clientes/cliente4.png", alt: "Cliente 4", width: 100 },
  { src: "/images/clientes/cliente5.png", alt: "Cliente 5", width: 120 },
];

export function HomeClientes() {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "60px",
        paddingBottom: "60px",
        backgroundColor: "#e7eaf1",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          marginRight: "auto",
          marginLeft: "auto",
          paddingRight: "20px",
          paddingLeft: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Label */}
        <div
          style={{
            display: "flex",
            marginRight: "80px",
            alignItems: "center",
            fontFamily: "var(--font-montserrat), Gilroy, sans-serif",
            color: "#007bcc",
            fontSize: "18px",
            lineHeight: "22px",
            fontWeight: 800,
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/assinestore/star_clients.svg"
            alt=""
            width={30}
            height={30}
            style={{ marginRight: "10px" }}
          />
          <div>
            Clientes<br />de sucesso
          </div>
        </div>

        {/* Logos */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
            gap: "20px",
          }}
        >
          {clientes.map((c) => (
            <div
              key={c.alt}
              style={{
                width: c.width,
                height: 60,
                backgroundColor: "#d0d5dd",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                color: "#666",
                fontWeight: 600,
              }}
            >
              {c.alt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
