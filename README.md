# ER.IA - Site institucional

Site oficial da ER.IA Tecnologia e porta de entrada para o ecossistema ER.IA Echo.

## Desenvolvimento

```bash
npm ci
npm run dev
```

Crie um arquivo `.env` local usando as variáveis abaixo quando precisar testar formulários:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Validação

```bash
npm run check
npm audit --omit=dev
```

## Estrutura

- `/`: apresentação institucional e visão geral do ecossistema.
- `/ecossistema`: ER.IA Hub, Sign, GeraDoc, Helpy e Flow.
- `/sites`, `/sistemas`, `/agentes-ia`: serviços sob medida.
- `/sobre`: empresa, visão e fundadores.
- `/politica-privacidade`, `/politica-cookies`: páginas legais.

O deploy de produção está associado ao domínio `eria.tec.br`.
