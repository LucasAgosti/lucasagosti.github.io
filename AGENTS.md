# AGENTS.md

Este arquivo orienta agentes e colaboradores que forem trabalhar neste portfólio. O objetivo é preservar a arquitetura atual, evitar regressões de rota/i18n/deploy e manter a direção visual do projeto.

## 1. Contexto do projeto

Este repositório é o portfólio pessoal de Lucas Fernandes.

Hoje ele funciona como uma SPA bilíngue (`pt` e `en`) com foco em:

- apresentação pessoal;
- listagem de cases;
- páginas detalhadas de case study;
- contato profissional.

O projeto atual já está estruturado para os cases e para o deploy em GitHub Pages. Alterações futuras devem respeitar essa base.

## 2. Stack do projeto

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- Motion
- Lucide React

Arquivos principais da stack:

- `package.json`
- `vite.config.ts`
- `src/main.tsx`
- `src/app/App.tsx`

## 3. Arquitetura de páginas

### Entrada da aplicação

- `src/main.tsx`: inicializa o app
- `src/app/App.tsx`: injeta o `RouterProvider`
- `src/app/routes.ts`: define todas as rotas PT/EN

### Layout global

- `src/app/components/Layout.tsx`: casca global da aplicação
- `src/app/components/Header.tsx`: header/nav + alternância PT/EN
- `src/app/components/Footer.tsx`: footer global

### Páginas principais

- `src/app/pages/Home.tsx`
- `src/app/pages/Sobre.tsx`
- `src/app/pages/Cases.tsx`
- `src/app/pages/CaseStudy.tsx`
- `src/app/pages/Contato.tsx`

### Rotas atuais

PT:

- `/`
- `/sobre`
- `/cases`
- `/cases/:slug`
- `/contato`

EN:

- `/en`
- `/en/about`
- `/en/cases`
- `/en/cases/:slug`
- `/en/contact`

## 4. Onde ficam os textos PT/EN

### Textos institucionais

- `src/app/data/i18n/pt/site.ts`
- `src/app/data/i18n/en/site.ts`

### Conteúdo dos projetos/cases

- `src/app/data/i18n/pt/projects.ts`
- `src/app/data/i18n/en/projects.ts`

### Agregação dos dicionários

- `src/app/data/i18n/index.ts`
- `src/app/data/projects.ts`

### Observação importante

Parte do texto ainda existe inline em componentes/páginas, especialmente em:

- `src/app/components/Header.tsx`
- `src/app/pages/Cases.tsx`
- `src/app/pages/CaseStudy.tsx`

Ao editar conteúdo, prefira mover texto novo para a camada de i18n/dados em vez de espalhar strings pelo JSX.

## 5. Onde ficam os assets

### Assets de projetos

- `src/app/assets/projects/auralize/`
- `src/app/assets/projects/arvorar/`
- `src/app/assets/projects/asavac/`

### Asset de perfil

- `src/app/assets/profile/`

### Mapeamento/import central dos assets

- `src/app/data/i18n/projectAssets.ts`

Regra: ao adicionar ou trocar imagens de um case, atualizar primeiro os arquivos físicos em `src/app/assets/projects/...` e depois o mapeamento em `src/app/data/i18n/projectAssets.ts`.

## 6. Projetos principais do portfólio

Este portfólio deve considerar como projetos principais:

- Auralize
- SmartDyn
- Arvorar
- AsaVac
- LoveMyPet

### Estado atual importante

No código atual, os cases claramente conectados ao fluxo principal são:

- Auralize
- Arvorar
- AsaVac

Se SmartDyn e LoveMyPet forem adicionados ou reintroduzidos:

- seguir o mesmo padrão de dados em `src/app/data/i18n/pt/projects.ts` e `src/app/data/i18n/en/projects.ts`;
- registrar assets em `src/app/data/i18n/projectAssets.ts`;
- manter `slug` consistente entre PT e EN;
- validar navegação em `/cases/:slug` e `/en/cases/:slug`.

## 7. Como funciona o deploy

O deploy acontece via GitHub Actions para GitHub Pages.

Arquivo principal:

- `.github/workflows/deploy.yml`

Fluxo atual:

1. dispara em push para `master`
2. instala dependências com `npm ci`
3. executa build com `npm run build`
4. copia `dist/index.html` para `dist/404.html`
5. publica `dist/` no GitHub Pages

### Por que existe o `404.html`

Isso é necessário para o fallback da SPA no GitHub Pages. Sem isso, refresh direto em rotas como `/cases/slug` ou `/en/cases/slug` pode quebrar.

## 8. Regras para não quebrar React Router

- Não trocar `createBrowserRouter` por outra estratégia sem revisar também o deploy do GitHub Pages.
- Não remover as rotas em par PT/EN.
- Não alterar slugs de cases sem atualizar todos os links internos e o conteúdo traduzido.
- Não criar caminhos em inglês/português “soltos” fora da lógica de `src/app/utils/localePaths.ts`.
- Sempre revisar:
  - `src/app/routes.ts`
  - `src/app/utils/localePaths.ts`
  - `src/app/components/Header.tsx`
- Ao criar nova página, adicionar sua rota em PT e EN, ou documentar explicitamente por que ela não é bilíngue.

## 9. Regras para não quebrar i18n

- `pt` e `en` devem continuar sendo os únicos locales canônicos, salvo decisão explícita de expansão.
- Todo conteúdo novo de página deve existir nos dois idiomas.
- Não usar traduções parciais em produção.
- Preferir manter estrutura espelhada entre:
  - `src/app/data/i18n/pt/site.ts`
  - `src/app/data/i18n/en/site.ts`
  - `src/app/data/i18n/pt/projects.ts`
  - `src/app/data/i18n/en/projects.ts`
- Não alterar nomes de chaves sem atualizar todos os consumidores.
- Se uma string ainda estiver inline, considere migrá-la para i18n ao tocar naquela área.

## 10. Regras para não quebrar GitHub Pages

- Não remover a etapa que copia `index.html` para `404.html`.
- Não assumir suporte de servidor para rewrites, porque o deploy atual é estático.
- Não introduzir dependência de backend/server runtime no app.
- Não configurar caminhos absolutos incompatíveis com Pages.
- Como o repositório é publicado no domínio raiz do usuário, evite adicionar `base` no Vite sem necessidade real.

## 11. Regras para não quebrar o build

- Toda mudança deve terminar com validação obrigatória:

```bash
npm run build
```

- Não deixar imports órfãos.
- Não referenciar assets inexistentes.
- Não depender de variáveis de ambiente que não existam no build do GitHub Actions.
- Ao adicionar novo projeto, confirmar:
  - imports de imagem válidos;
  - `slug` válido;
  - conteúdo PT e EN presentes;
  - renderização da listagem de cases;
  - renderização de `CaseStudy`.

## 12. Identidade visual

Direção visual do portfólio:

- dark
- editorial
- alto contraste
- atmosfera sóbria e premium
- acento principal em verde `#B9F53E`

### Regras visuais

- preservar fundo escuro como base do produto;
- preservar o verde `#B9F53E` como cor de destaque principal;
- evitar visual genérico de dashboard/SaaS;
- evitar clarear a interface sem motivo forte;
- evitar excesso de cores concorrentes com o verde;
- priorizar tipografia forte, ritmo vertical generoso e blocos com presença editorial;
- manter sensação de portfólio autoral, não template genérico.

### Linguagem visual atual

O projeto atual usa:

- fundos escuros (`#0C0D0C`, `#141514`)
- bordas discretas
- texto com opacidades variadas
- títulos grandes e pesados
- detalhes geométricos e brilhos suaves com verde

Mudanças novas devem conversar com essa lógica.

## 13. Convenções para novos cases

Ao adicionar um novo projeto:

1. adicionar assets em `src/app/assets/projects/<slug>/`
2. registrar imports em `src/app/data/i18n/projectAssets.ts`
3. criar objeto do projeto em PT
4. criar objeto equivalente em EN
5. inserir o projeto em `src/app/data/i18n/index.ts`
6. validar listagem em `Cases`
7. validar detalhe em `CaseStudy`
8. executar `npm run build`

### Estrutura esperada

Cada projeto deve manter coerência de:

- `id`
- `slug`
- `name`
- `description`
- `coverImage`
- `caseStudy`

Evitar divergência estrutural entre idiomas.

## 14. Áreas mais sensíveis do projeto

Tratar com cuidado especial:

- `src/app/routes.ts`
- `src/app/utils/localePaths.ts`
- `src/app/data/i18n/index.ts`
- `src/app/data/i18n/pt/projects.ts`
- `src/app/data/i18n/en/projects.ts`
- `src/app/data/i18n/projectAssets.ts`
- `src/app/pages/CaseStudy.tsx`
- `.github/workflows/deploy.yml`

Esses pontos concentram a maior parte do risco de quebrar navegação, conteúdo, assets ou publicação.

## 15. Regra final de trabalho

Ao concluir qualquer alteração neste projeto:

```bash
npm run build
```

Se o build falhar, a tarefa não está concluída.
