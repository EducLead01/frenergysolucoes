# SobreFuncionalidades Specification

## Overview
- **Target file:** `src/components/sobre/SobreFuncionalidades.tsx`
- **Screenshot:** `docs/design-references/assinestore-sobre/s8-features-grid.png`
- **Interaction model:** static

## DOM Structure
```
<section> — branco, padding 80px 0
  <div> — max-width 1200px, centered
    <h2> — heading centralizado
    <div> — decorative line azul, centralizado
    <div> — 3-column grid de cards
      10x <div> — feature card
        <div> — ícone circular laranja
        <h3> — título feature
        <hr> — linha separadora
        <p> — descrição
```

## Computed Styles

### Container
- backgroundColor: transparent
- padding: 80px 0

### Inner wrapper
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 40px

### H2
- fontFamily: var(--font-montserrat), sans-serif
- fontSize: 36px
- fontWeight: 400
- textAlign: center
- lineHeight: 44px

  Texto: "Funcionalidades para **crescer e gerenciar** seu sistema solar"
  Span azul: "crescer e gerenciar"

### Decorative underline
- width: 60px
- height: 3px
- backgroundColor: rgb(0, 123, 204)
- margin: 16px auto 48px
- borderRadius: 2px

### Feature grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr) — desktop
- gap: 24px

### Feature card
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 16px
- boxShadow: rgba(0, 0, 0, 0.07) 0px 16px 32px 0px
- padding: 28px 24px
- display: flex
- flexDirection: column
- gap: 12px
- transition: box-shadow 0.2s ease

  Hover:
  - boxShadow: rgba(0, 0, 0, 0.14) 0px 20px 40px 0px

### Icon circle
- width: 56px
- height: 56px
- borderRadius: 50%
- backgroundColor: #F5A623
- display: flex
- alignItems: center
- justifyContent: center
- flexShrink: 0

  Icon: Lucide icon, color white, size 24

### Feature H3
- fontFamily: var(--font-montserrat), sans-serif
- fontSize: 18px
- fontWeight: 700
- color: rgb(33, 37, 41)
- lineHeight: 24px

### Separator
- width: 100%
- height: 1px
- backgroundColor: rgb(235, 235, 235)
- border: none

### Feature description
- fontFamily: Open Sans, sans-serif
- fontSize: 14px
- lineHeight: 22px
- color: rgb(90, 90, 90)

## Feature Data (Frenergy — 10 features, 3+3+2+2 layout)

1. **Projeto & Engenharia** — `Ruler` icon
   "Elaboramos o projeto elétrico completo com ART, dimensionamento e documentação para homologação."

2. **Instalação Certificada** — `ShieldCheck` icon
   "Equipe técnica certificada com normas ABNT NBR 16690. Segurança e qualidade em cada instalação."

3. **Monitoramento 24h** — `Activity` icon
   "Acompanhe sua geração em tempo real pelo app. Alertas automáticos em caso de falha ou queda de desempenho."

4. **Pós-venda & Manutenção** — `Wrench` icon
   "Suporte técnico contínuo após a instalação. Manutenção preventiva e corretiva com equipe especializada."

5. **App Frenergy** — `Smartphone` icon
   "Visualize geração, consumo, economia e ROI diretamente do seu celular. Disponível para iOS e Android."

6. **Financiamento** — `Banknote` icon
   "Parcele o investimento em até 60x com as melhores condições de mercado. Aprovação rápida e sem burocracia."

7. **Equipamentos de 1ª linha** — `Sun` icon
   "Trabalhamos com as marcas líderes do mercado solar: Risen, Canadian, Fronius, Growatt e outras."

8. **Retorno Garantido** — `TrendingUp` icon
   "Retorno médio do investimento entre 3 e 5 anos. Vida útil do sistema superior a 25 anos."

9. **Homologação Completa** — `FileCheck` icon
   "Cuidamos de toda a burocracia junto à concessionária. Você não precisa se preocupar com nada."

10. **Cupons e Indicações** — `Gift` icon
    "Programa de indicação: ganhe descontos indicando amigos e familiares para a Frenergy."

## Responsive Behavior
- **Desktop (1440px):** 3 colunas
- **Tablet (768px):** 2 colunas
- **Mobile (390px):** 1 coluna
- Breakpoints: `md` 768px, `lg` 1024px
