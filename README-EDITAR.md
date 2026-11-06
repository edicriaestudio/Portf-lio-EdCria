# EdCria — Guia rápido de edição

## Você precisa publicar antes?
Não. O site pode ser editado e revisado localmente antes de qualquer publicação. A publicação só é necessária quando você quiser colocar uma versão final no ar.

## Como abrir em outra plataforma
1. Extraia o arquivo ZIP.
2. Abra a pasta extraída no editor ou plataforma de sua preferência.
3. Instale as dependências com `pnpm install` ou `npm install`.
4. Rode `pnpm dev` ou `npm run dev` para abrir a versão local.
5. Rode `pnpm build` ou `npm run build` quando quiser gerar a versão final.

O projeto usa React, TypeScript e Vite. O servidor de desenvolvimento escuta na porta 3000.

## Onde editar
- `src/main.tsx`: nome EdCria, textos, nomes de projetos, serviços, depoimentos, FAQ, etapas e links.
- `src/styles.css`: tipografia, espaçamento, cores, animações, marquee e efeito de sobreposição no scroll.
- `public/media/portfolio-reference.mp4`: vídeo usado na seção “Em vídeo”. Substitua este arquivo mantendo o mesmo nome ou atualize `videoSource` em `src/main.tsx`.
- `public/manus-routes.json`: manifesto de rotas do site.

## Como colocar seus projetos reais
Substitua as URLs de imagem no objeto `images` ou coloque seus arquivos em `public/media`. Depois, atualize o array `projects` com título, categoria, ano e caminho da imagem. Para vídeos adicionais, adicione novos arquivos em `public/media` e crie novos blocos `<video>`.

## Observação sobre o vídeo
O ZIP inclui uma cópia leve, em 640×360, do vídeo de referência para facilitar o transporte e a edição. O arquivo original enviado pode ser usado no lugar dele se você quiser uma versão com mais qualidade.
