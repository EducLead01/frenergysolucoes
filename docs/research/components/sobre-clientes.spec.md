# SobreClientes Specification

## Overview
- **Target file:** `src/components/sobre/SobreClientes.tsx`
- **Screenshot:** `docs/design-references/assinestore-sobre/s2-clientes-logos.png`
- **Interaction model:** static

## DOM Structure
```
<section> — gray bg #eeeeee, padding 40px 0 60px
  <div> — max-width 1200px, centered, text-center
    <h2> — "Confiança de mais de <span>200 clientes</span>"
    <p> — subtítulo
  </div>
  <div> — logo grid, max-width 1200px, centered
    6x <div> — card branco, logo img centralizada
  </div>
  <div> — testimonial row, max-width 800px, centered
    <img> — avatar circular
    <div> — stars + quote + author name
  </div>
</section>
```

## Computed Styles

### Container
- backgroundColor: rgb(238, 238, 238)
- padding: 40px 0px 60px
- width: 100%

### Inner wrapper
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 40px

### H2
- fontFamily: var(--font-montserrat), sans-serif
- fontSize: 36px
- fontWeight: 400 (palavra-chave em bold 700)
- color: rgb(33, 37, 41)
- textAlign: center
- lineHeight: 40px

  Texto: "Confiança de mais de **200 clientes** atendidos"
  Span azul: color: rgb(0, 123, 204) ou var(--color-bc-teal)

### Subtext
- fontFamily: Open Sans
- fontSize: 16px
- textAlign: center
- color: rgb(33, 37, 41)
- marginTop: 16px

  Texto: "Os melhores projetos de energia solar estão aqui, na Frenergy!"

### Logo grid
- display: grid
- gridTemplateColumns: repeat(6, 1fr) — desktop
- gridTemplateColumns: repeat(3, 1fr) — mobile
- gap: 16px
- marginTop: 32px

### Logo card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 12px
- boxShadow: rgba(0,0,0,0.06) 0px 4px 16px
- padding: 16px
- display: flex
- alignItems: center
- justifyContent: center
- height: 80px

  Logos a usar (parceiros Frenergy existentes ou placeholder):
  - Usar logos de clientes reais se disponíveis em public/
  - Fallback: boxes com initials ou ícone solar

### Testimonial block
- display: flex
- alignItems: center
- gap: 16px
- maxWidth: 700px
- margin: 32px auto 0
- padding: 0 40px

  Avatar:
  - width: 64px, height: 64px
  - borderRadius: 50%
  - objectFit: cover

  Stars: 5x Star icon, color #F5A623, size 18

  Quote:
  - fontSize: 15px
  - fontStyle: italic
  - color: rgb(33, 37, 41)

  Author:
  - fontWeight: 700
  - fontSize: 14px

## Assets
- 6 logo images: usar imagens de parceiros/clientes em `public/` ou SVG placeholders
- Avatar photo: usar foto existente no projeto

## Text Content (Frenergy)
- H2: "Confiança de mais de **200 clientes** atendidos"
- Sub: "Os melhores projetos de energia solar estão aqui, na Frenergy!"
- Logos: Petropol, Clube Jundiaiense, ou outros clientes reais (usar do EsferaClientLogos)
- Quote: "Equipe super profissional, atendimento rápido e muito prestativo."
- Author: "Carlos Mendes | Empresário, Goiânia/GO"

## Responsive Behavior
- **Desktop:** 6 colunas de logos
- **Tablet (768px):** 3 colunas
- **Mobile (390px):** 2 colunas, testimonial empilhado
