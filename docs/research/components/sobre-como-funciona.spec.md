# SobreComoFunciona Specification

## Overview
- **Target file:** `src/components/sobre/SobreComoFunciona.tsx`
- **Screenshot:** `docs/design-references/assinestore-sobre/s6-como-funciona.png`
- **Interaction model:** static (alternating left/right layout)

## DOM Structure
```
<section> — branco, padding 80px 0
  <div> — max-width 1200px, centered
    <h2> — "Como a Frenergy instala energia solar?"
    <div> — steps list
      5x <div> — step row (alternating direction)
        <div> — step number badge (círculo laranja)
        <div> — text content (title + separator + description)
        <div> — image mockup (screenshot/foto em fundo azul diagonal)
```

## Computed Styles

### Container
- backgroundColor: transparent
- padding: 80px 0

### Inner wrapper
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 40px

### Section H2
- fontFamily: var(--font-montserrat), sans-serif
- fontSize: 36px
- fontWeight: 400
- textAlign: center
- lineHeight: 44px
- marginBottom: 60px

  Texto: "Como a **Frenergy** instala seu sistema solar?"
  Span azul: "Frenergy"

### Step row
- display: flex
- flexDirection: row (ímpar) ou row-reverse (par) — alternando esquerda/direita
- alignItems: center
- gap: 60px
- marginBottom: 80px
- width: 100%

### Step number badge
- width: 56px
- height: 56px
- borderRadius: 50%
- backgroundColor: #F5A623
- display: flex
- alignItems: center
- justifyContent: center
- fontSize: 24px
- fontWeight: 800
- color: white
- flexShrink: 0

### Text content div
- flex: 1
- display: flex
- flexDirection: column
- gap: 16px

### Step H3
- fontFamily: var(--font-montserrat), sans-serif
- fontSize: 26px
- fontWeight: 700
- color: rgb(33, 37, 41)
- lineHeight: 32px

### Step separator
- width: 60px
- height: 2px
- backgroundColor: #F5A623
- border: none

### Step description
- fontFamily: Open Sans, sans-serif
- fontSize: 15px
- lineHeight: 26px
- color: rgb(80, 80, 80)
- maxWidth: 460px

### Image mockup container
- flex: 1
- position: relative
- display: flex
- alignItems: center
- justifyContent: center

  Inner (fundo azul diagonal, visual similar ao hero):
  - background: linear-gradient(135deg, #003399 60%, #1a6fd4 100%)
  - borderRadius: 16px
  - padding: 32px
  - overflow: hidden
  - width: 100%
  - maxWidth: 520px

  Image:
  - borderRadius: 12px
  - boxShadow: 0 8px 32px rgba(0,0,0,0.3)
  - width: 100%
  - objectFit: cover

## Steps Data (Frenergy — 5 passos)

### Passo 1 — Atendimento Personalizado
- Badge: "1"
- Title: "Atendimento Personalizado"
- Description: "Nossa equipe entra em contato para entender sua necessidade. Análise do perfil de consumo, localização e objetivos de economia."
- Image: usar screenshot de app ou foto de atendimento (ex: `public/images/portalsolar-casa-solar.webp`)
- Layout: texto esquerda, imagem direita

### Passo 2 — Visita Técnica
- Badge: "2"
- Title: "Visita Técnica Gratuita"
- Description: "Um engenheiro vai até o local para avaliar o telhado, a estrutura elétrica e o potencial de geração solar."
- Image: usar foto de instalação ou engenheiro (ex: imagem da página cases)
- Layout: imagem esquerda, texto direita

### Passo 3 — Projeto e Aprovação
- Badge: "3"
- Title: "Projeto e Aprovação"
- Description: "Elaboramos o projeto elétrico completo e cuidamos de toda a documentação junto à concessionária de energia. Você não precisa fazer nada."
- Image: screenshot de projeto/diagrama solar
- Layout: texto esquerda, imagem direita

### Passo 4 — Instalação Certificada
- Badge: "4"
- Title: "Instalação Certificada"
- Description: "Equipe técnica certificada realiza a instalação com segurança e agilidade. Padrão de qualidade garantido com equipamentos de primeira linha."
- Image: foto de instalação de painéis
- Layout: imagem esquerda, texto direita

### Passo 5 — Acompanhamento e Suporte
- Badge: "5"
- Title: "Acompanhamento e Suporte"
- Description: "Após a instalação, você acompanha tudo pelo app Frenergy em tempo real. Monitoramento 24h e suporte técnico sempre que precisar."
- Image: screenshot do app ou mockup de dashboard
- Layout: texto esquerda, imagem direita

## Assets
- Usar imagens já existentes em `public/images/`:
  - `portalsolar-casa-solar.webp`
  - `portalsolar-tmp2.webp`
  - `portalsolar-tmp3.webp`
  - `frame_3025.webp`
  - Qualquer outra disponível
- Criar containers azuis diagonais como wrapper de cada imagem

## Responsive Behavior
- **Desktop:** alternating flex-row / flex-row-reverse
- **Tablet:** manter alternating mas reduzir gap
- **Mobile:** todas as linhas em flex-column (imagem acima, texto abaixo), badge centralizado
- Breakpoint: `md` (768px)
