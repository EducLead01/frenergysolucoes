# SobreSegmentos Specification

## Overview
- **Target file:** `src/components/sobre/SobreSegmentos.tsx`
- **Screenshot:** `docs/design-references/assinestore-sobre/s3-tipos-clube.png`
- **Interaction model:** static

## DOM Structure
```
<section> — branco, padding 60px 0
  <div> — max-width 1200px, centered
    <h2> — heading centralizado
    <div> — 3-column card grid
      3x <div> — card
        <div> — ícone circular laranja
        <h3> — título do segmento
        <hr> — linha separadora
        <p> — descrição
    </div>
    <div> — stats row (4 números)
      4x <div> — stat item
        <div> — ícone highlight (SVG circular laranja)
        <span> — número azul grande
        <span> — label cinza
  </div>
</section>
```

## Computed Styles

### Container
- backgroundColor: transparent (branco do body)
- padding: 60px 0 40px

### Inner wrapper
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 40px

### H2
- fontFamily: var(--font-montserrat), sans-serif
- fontSize: 36px
- fontWeight: 400
- textAlign: center
- lineHeight: 40px

  Texto: "**Frenergy** pensada para todos os tipos de **projeto solar**"
  Span azul: "projeto solar"

### Cards grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 24px
- marginTop: 40px

### Card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 24px
- boxShadow: rgba(0, 0, 0, 0.07) 0px 16px 32px 0px
- padding: 24px
- display: flex
- flexDirection: column
- alignItems: flex-start
- gap: 16px
- minHeight: 280px

### Icon circle
- width: 64px
- height: 64px
- borderRadius: 50%
- backgroundColor: #F5A623 (Frenergy yellow/orange)
- display: flex
- alignItems: center
- justifyContent: center

  Icon: Lucide icon, color white, size 28

### Card H3
- fontFamily: var(--font-montserrat), sans-serif
- fontSize: 20px
- fontWeight: 700
- color: rgb(33, 37, 41)
- lineHeight: 26px

### Separator line
- width: 100%
- height: 1px
- backgroundColor: rgb(230, 230, 230)
- border: none

### Card description
- fontFamily: Open Sans, sans-serif
- fontSize: 15px
- fontWeight: 400
- lineHeight: 24px
- color: rgb(80, 80, 80)

### Stats row (.highlights-container)
- maxWidth: 1200px
- margin: 48px auto 0
- display: flex
- flexDirection: row
- justifyContent: space-around
- alignItems: center
- padding: 32px 40px
- borderTop: 2px solid #eeeeee (ou sem borda, apenas espaçamento)

### Stat item
- width: 25%
- height: 137px
- display: flex
- flexDirection: column
- alignItems: center
- justifyContent: center
- gap: 8px

### Stat number
- fontFamily: var(--font-montserrat), sans-serif
- fontSize: 36px
- fontWeight: 800
- color: rgb(0, 123, 204) (azul) ou var(--color-fr-yellow)

### Stat label
- fontFamily: Open Sans
- fontSize: 14px
- color: rgb(100, 100, 100)

## Card Data (Frenergy)

### Card 1 — Residencial
- Icon: `Home` (Lucide)
- Title: "Residencial"
- Description: "Reduza até 95% na conta de luz da sua casa. Sistema completo com projeto, instalação e monitoramento."

### Card 2 — Comercial
- Icon: `Building2` (Lucide)
- Title: "Comercial"
- Description: "Aumente a competitividade do seu negócio reduzindo custos operacionais com energia solar."

### Card 3 — Industrial / Agro
- Icon: `Factory` (Lucide)
- Title: "Industrial & Agronegócio"
- Description: "Grandes demandas energéticas com retorno de investimento acelerado e geração em larga escala."

## Stats Data (Frenergy)
1. "+ 200" / "Projetos Instalados"
2. "+ 1.500 kWp" / "Potência Instalada"
3. "95%" / "Economia Média"
4. "+ 5 anos" / "Experiência"

## Assets
- Stat icons: baixar highlight1-4.svg de AssineStore OU usar Lucide icons
  - highlight1.svg: `https://www.assinestore.com.br/images/highlight1.svg`
  - highlight2.svg: `https://www.assinestore.com.br/images/highlight2.svg`
  - highlight3.svg: `https://www.assinestore.com.br/images/highlight3.svg`
  - highlight4.svg: `https://www.assinestore.com.br/images/highlight4.svg`
  Salvar em: `public/images/assinestore/`

## Responsive Behavior
- **Desktop:** 3 colunas cards, 4 colunas stats
- **Tablet:** 2 colunas cards, 2 colunas stats
- **Mobile:** 1 coluna cards, 2 colunas stats
