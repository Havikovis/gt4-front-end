# Digital Store (Drip Store)

Projeto final de Front-end (Geração Tech). Loja virtual em React com 3 páginas: Home, Listagem de produtos e Visualização do produto, baseada no [repositório base](https://github.com/digitalcollegebr/projeto-digital-store) e no design do Figma.

## Tecnologias

- React 19 + Vite
- React Router DOM (rotas e `NavLink`)
- CSS Modules (sem biblioteca de UI)
- JavaScript

## Como rodar

Pré-requisito: Node.js 20.19 ou superior (recomendado: versão LTS mais recente).

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist
npm run preview  # serve o build localmente
```

## Rotas

| Rota | Página |
|---|---|
| `/` | Home: destaque com 4 slides, coleções, categorias, produtos em alta e banner |
| `/products` | Listagem com busca (`?filter=`), ordenação e filtros |
| `/product/:id` | Visualização do produto e recomendados |
| `/produtos` | Redireciona para `/products` |
| demais rotas | Aviso "Página em construção" (Categorias, Meus Pedidos, Entrar, Cadastre-se, carrinho) |

## Estrutura

```
src/
├── components/   Logo, Header, Footer, FooterInfo, Section, ProductCard,
│                 ProductListing, Gallery, FilterGroup, ProductOptions, BuyBox
├── pages/        Layout, HomePage, ProductListingPage, ProductViewPage, ComingSoonPage
├── data/         products.js (produtos, filtros e imagens)
├── assets/       logos e ícones SVG
└── styles/       global.css (cores, tipografia base e container)
```

## Funcionalidades

- Busca no cabeçalho redireciona para `/products?filter=termo` (ignora acentos e caixa).
- Listagem com ordenação por menor e maior preço e filtros por marca, categoria, gênero e estado.
  O título mostra o total de produtos encontrados e muda conforme os filtros.
- Galeria com setas, setas desabilitadas nas pontas e miniaturas com borda `primary` na selecionada.
- Opções de produto (tamanho e cor) com borda de 2px na seleção.
- Layout responsivo (referências do Figma: 1440px desktop e 375px mobile) com menu hambúrguer.

## Decisões

- Os dados dos produtos são locais (`src/data/products.js`). Não há consumo de API.
- Escopo: as 3 páginas da Sprint 1 do Figma. Carrinho, login, cadastro e pedidos (Sprints 2 e 3) ficam fora.
- A rota da listagem é `/products` (a mesma usada pela busca e pelo link "Ver todos").
- Os preços seguem o Figma (`$100`, `$599.90`). A imagem do destaque da Home usa fotos do repositório base, não o recorte do Figma.

## Autoria

Projeto individual.
