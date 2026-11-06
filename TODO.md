# TODO — EdCria / Portfólio Editorial

## 1. Estrutura visual e navegação
- [x] A página inicial deve recriar o portfólio do vídeo como um fluxo vertical responsivo em preto absoluto e tipografia branca.
- [x] O cabeçalho deve permanecer sticky e oferecer links para Começo, Galeria, Trabalhos e Contato.
- [x] O hero deve exibir o wordmark `EdCria™`, metadados editoriais, imagem em destaque e CTA circular `VIEW`.
- [x] O botão `CONTATO` deve levar à seção de contato por âncora.

## 2. Conteúdo editorial
- [x] A página deve conter manifesto sobre transformar ideias em identidades marcantes.
- [x] A seção Serviços deve apresentar seis frentes com título, descrição e índice.
- [x] A seção de histórico deve apresentar estúdios, funções, cidades e anos.
- [x] A seção Depoimentos deve apresentar citações e nomes com cards de leitura.
- [x] A seção de projetos deve apresentar cards com nome, categoria, ano e imagem.
- [x] A página deve conter clientes, planos, artigo em destaque, FAQ e cinco etapas do processo.
- [x] O footer deve conter retorno ao topo, links rápidos, redes e wordmark grande.

## 3. Interações e animação
- [x] Blocos e imagens devem surgir com reveal fade-in-up quando entram no viewport.
- [x] Imagens de projetos devem ter escala/translate sutis ao scroll e hover.
- [x] O marquee deve rodar continuamente em loop horizontal.
- [x] O cursor `VIEW` deve aparecer nos cards de projeto no desktop e não bloquear o clique.
- [x] O FAQ deve abrir e fechar respostas individualmente.
- [x] O site deve suportar `prefers-reduced-motion`.

## 4. Qualidade de entrega
- [x] O site deve iniciar em `0.0.0.0:3000` e servir `GET /manus-routes.json` com a rota `/`.
- [x] O layout deve ser legível em viewport mobile próxima de 390 px e em desktop.
- [x] O projeto deve passar no build de produção do Vite.
- [x] As imagens demonstrativas devem ficar isoladas nos arrays de conteúdo para troca posterior pelos assets reais.
