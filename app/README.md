# Conecta Intercâmbio — Protótipo navegável (Sprint 2)

Protótipo *mobile-first* do app, com a identidade visual do Unifor Mobile. Detalhes, wireframes e roteiro de demonstração estão em [`../docs/prototipo.md`](../docs/prototipo.md).

```bash
npm install
npm run dev     # servidor local
npm run build   # build de produção em dist/
```

| Pasta | Conteúdo |
| :--- | :--- |
| `src/pages/` | Telas: Login, Explore, Chats, Unifor, Menu, Profile |
| `src/components/ui.tsx` | Componentes compartilhados (avatar, barras, sheet, denúncia) |
| `src/state/AppContext.tsx` | Estado global (tema, idioma, privacidade, conversas…) salvo em `localStorage` |
| `src/i18n/strings.ts` | Dicionários pt / en / es (RNF08) |
| `src/data/mock.ts` | Dados fictícios |

Os requisitos implementados estão comentados no código (ex.: `// RF18 — …`).
