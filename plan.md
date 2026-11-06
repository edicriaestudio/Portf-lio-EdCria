# Plano — EdCria / Portfólio Editorial

## Escopo
Recriar o portfólio do vídeo de referência como uma landing page responsiva, navegável e interativa. A referência é um site Framer visto em viewport mobile: preto absoluto, wordmark grande, navegação de links rápidos, retrato/obra em destaque, tipografia editorial branca, blocos de serviços, histórico, depoimentos, galeria, artigos, FAQ, etapas e footer.

## Abordagem de implementação
- Stack: React + TypeScript + Vite, sem backend ou banco nesta primeira versão.
- Uma única página com IDs semânticos para `começo`, `galeria`, `trabalhos` e `contato`.
- Conteúdo estruturado em arrays no componente principal para facilitar substituição de texto e imagens.
- CSS customizado com breakpoints mobile-first, `scroll-behavior: smooth`, marquee via keyframes, grid editorial e imagens com `object-fit: cover`.
- `IntersectionObserver` para aplicar reveals `fade-in-up` e um progressivo parallax leve nas imagens da galeria.
- Cursor circular `VIEW` no desktop ao passar por cards clicáveis; no mobile, o CTA permanece visível.
- FAQ controlado por estado React com acordeão acessível.
- `public/manus-routes.json` com a rota `/`.

## Design

### Direção escolhida
**Editorial tech-brutalist / estúdio de direção de arte digital** — a estética da referência, construída em preto, branco e cinza, com contraste radical e espaço negativo.

### Princípios
1. Escala tipográfica grande e cortes inesperados criam ritmo sem depender de ornamento.
2. Linhas, números e metadados transformam o conteúdo em uma publicação de design.
3. A imagem aparece como matéria: recortes verticais, hover de escala e contraste alto.
4. Toda animação serve à leitura: revelar, deslocar, acompanhar e retornar.

### Filosofia de cor
Preto `#050505` como tela e branco `#F5F5F2` como matéria impressa. Cinzas frios organizam metadados e bordas; um verde-lima muito discreto aparece apenas como sinal de estado para o cursor e o foco, sem competir com as imagens.

### Paradigma de layout
Fluxo vertical assimétrico, com colunas editoriais e alinhamentos alternados. A página deve parecer uma revista digital com capítulos, não um dashboard centralizado.

### Elementos de assinatura
- Wordmark `EdCria™` em escala de pôster.
- Etiquetas minúsculas com idioma misto (`© CAPACIDADES`, `DIGITAL EXECUTION`).
- Botão circular `VIEW` flutuante e marquee textual contínuo.

### Interação e animação
- Header sticky com blur e borda inferior.
- Reveals de baixo para cima, com delay incremental em listas.
- Cards de projeto com zoom de imagem, deslocamento vertical sutil e botão circular.
- Marquee infinito em duas direções.
- A imagem hero reage levemente ao scroll, sem bloquear o conteúdo.
- Respeitar `prefers-reduced-motion` com transições reduzidas.

### Tipografia
- `Inter Tight` para títulos, wordmark e números.
- `IBM Plex Mono` para metadados e microcopy.
- Títulos em peso 600–800, tracking negativo; corpo em 400–500 e largura confortável.

### Essência da marca
Um estúdio independente que transforma ideias em identidades marcantes para marcas que querem presença, ritmo e clareza. Personalidade: preciso, autoral, inquieto.

### Voz
Direta, segura e visual. Exemplo: “Ideias boas merecem uma forma impossível de ignorar.” / “Vamos tirar sua marca do modo rascunho.”

### Wordmark
Texto largo `EdCria™`, com o `™` elevado e uma composição que encosta nas bordas da tela em desktop.

### Cor proprietária
Verde-lima sinal `#D7FF55`, usado apenas no indicador de status e foco.

## Estrutura de arquivos
- `src/main.tsx`: composição da página, dados de conteúdo, estado do FAQ e observers.
- `src/styles.css`: sistema visual completo, responsividade e keyframes.
- `public/manus-routes.json`: manifesto de rotas do site.
- `app.config.ts`: metadado de logo do projeto.
- `plan.md` e `TODO.md`: registro de escopo e critérios.
