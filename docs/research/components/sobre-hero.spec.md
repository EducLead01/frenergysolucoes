# SobreHero Specification

## Overview
- **Target file:** `src/components/sobre/SobreHero.tsx`
- **Screenshot:** `docs/design-references/assinestore-sobre/s1-hero.png`
- **Interaction model:** static

## DOM Structure
```
<section> — container full-width, 680px height, SVG bg diagonal
  <div> — content wrapper, max-width 1200px, centered, flex row
    <div> — left col (~50%), flex column, justify center, gap 24px
      <h1> — heading branco, Gilroy/Montserrat
      <div> — decorative line (2px white, width 40px)
      <p> — subtext branco
      <a> — CTA button pill
      <div> — testimonial row (avatar + stars + quote + name)
    </div>
    <div> — right col (~50%), illustration image
  </div>
</section>
```

## Computed Styles (exact values)

### Container (.hero-section)
- width: 100%
- height: 680px
- position: relative
- overflow: hidden
- backgroundImage: url("/images/assinestore/hero_bg_1440_3.svg")
- backgroundSize: auto
- backgroundPosition: 0% 50%
- display: flex
- alignItems: center

### Content wrapper
- maxWidth: 1200px
- margin: 0 auto
- padding: 90px 40px 0 (top = navbar height)
- display: flex
- flexDirection: row
- alignItems: center
- gap: 40px
- width: 100%

### H1
- fontFamily: var(--font-montserrat), sans-serif
- fontSize: 42px (adaptado de 36px para Montserrat)
- fontWeight: 800
- lineHeight: 52px
- color: rgb(255, 255, 255)
- width: ~550px

  Texto Frenergy:
  "**A empresa** que simplifica a **energia solar** para você."
  (negrito nas palavras-chave)

### Decorative line
- width: 40px
- height: 2px
- backgroundColor: #ffffff
- margin: 8px 0

### Subtext paragraph
- fontFamily: Open Sans, sans-serif
- fontSize: 16px
- fontWeight: 400
- lineHeight: 26px
- color: rgba(255, 255, 255, 0.9)
- maxWidth: 500px

  Texto:
  "Na Frenergy, **a economia vem em 1º lugar**. Tenha seu sistema fotovoltaico completo — projeto, instalação, monitoramento e suporte, sem complicação."

### CTA Button
- fontFamily: Open Sans, sans-serif
- fontSize: 16px
- fontWeight: 700
- color: rgb(0, 123, 204)
- backgroundColor: rgb(255, 255, 255)
- padding: 9px 35px
- height: 60px
- display: flex
- alignItems: center
- borderRadius: 300px
- border: 1px solid rgb(0, 123, 204)
- cursor: pointer
- width: fit-content
- transition: all 0.2s ease

  Hover: backgroundColor → rgb(0, 123, 204), color → white

  Texto: "Solicitar orçamento gratuito"
  href: "/sobre#contato" ou scroll to form

### Testimonial row
- display: flex
- alignItems: center
- gap: 12px
- marginTop: 16px

  Avatar:
  - width: 52px, height: 52px
  - borderRadius: 50%
  - border: 2px solid white
  - objectFit: cover
  - src: "/images/portalsolar-casa-solar.webp" (usar imagem existente ou placeholder)

  Stars image (⭐⭐⭐⭐⭐):
  - 5 estrelas laranja usando Lucide `Star` filled, color #F5A623, size 16

  Quote text:
  - fontFamily: Open Sans
  - fontSize: 13px
  - color: rgba(255,255,255,0.9)
  - "Ótima empresa! Atendimento rápido e eficiente."

  Name:
  - fontWeight: 700
  - fontSize: 13px
  - color: white
  - "José Carlos | Goiânia/GO"

### Right column (illustration)
- width: ~50%
- display: flex
- alignItems: center
- justifyContent: flex-end
- position: relative

  Imagem principal:
  - src: "/images/assinestore/hero_visual.svg" (baixar) ou usar imagem de painel solar existente
  - width: 580px aprox.
  - objectFit: contain

## Assets
- Background SVG: baixar `https://www.assinestore.com.br/images/hero_bg_1440_3.svg` → `public/images/assinestore/hero_bg_1440_3.svg`
- Hero visual: baixar `https://www.assinestore.com.br/images/hero_visual.svg` → `public/images/assinestore/hero_visual.svg`
- Blob: baixar `https://www.assinestore.com.br/images/blobo_1024.svg` → `public/images/assinestore/blob.svg`
- Avatar: usar `/images/portalsolar-casa-solar.webp` existente ou qualquer imagem de pessoa

## Responsive Behavior
- **Desktop (1440px):** layout flex row, hero 680px, illustration visível
- **Mobile (390px):** flex column, illustration oculta, texto centralizado, padding menor
- **Breakpoint:** `md` (768px) — abaixo disso: flex column, sem imagem

## Text Content (verbatim Frenergy)
- H1: "A empresa que simplifica a energia solar para você."
- Subtext: "Na Frenergy, a economia vem em 1º lugar. Tenha seu sistema fotovoltaico completo — projeto, instalação, monitoramento e suporte, sem complicação."
- CTA: "Solicitar orçamento gratuito"
- Quote: "Ótima empresa! Atendimento rápido e eficiente."
- Author: "José Carlos | Goiânia/GO"
