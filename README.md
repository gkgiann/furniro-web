# Furniro

Projeto frontend desenvolvido com React, TypeScript e Vite para apresentar uma landing page de e-commerce de móveis. A interface foi construída com foco visual, layout responsivo e componentes reutilizáveis, simulando uma vitrine de produtos com seções institucionais e de destaque.

## Visão Geral

O app renderiza uma página única com as seguintes áreas:

- Header fixo com navegação e versão mobile com menu responsivo.
- Hero banner com chamada principal para a coleção.
- Grade de categorias com ambientes como Dining, Living e Bedroom.
- Seção de produtos consumidos a partir de uma API local simulada.
- Carousel de inspiração de ambientes.
- Mosaic final para compartilhar montagens com a hashtag da marca.
- Footer com links, redes sociais e newsletter.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- clsx
- Embla Carousel
- React Toastify
- Zod
- json-server para mock local de dados

## Funcionalidades

- Layout responsivo para desktop e mobile.
- Menu mobile expansível no header.
- Listagem de categorias com cards visuais.
- Consumo de produtos por `fetch` em `http://localhost:3000/products`.
- Exibição de cards de produto com ação de destaque.
- Carousel horizontal para inspirar combinações de ambientes.
- Galeria final com mosaico de imagens.
- Newsletter com validação e feedback visual.
- Toasts para interações do usuário.

## Pré-requisitos

Antes de rodar o projeto, tenha instalado:

- Node.js 18+.
- npm.

## Instalação

1. Clone o repositório.

```bash
git clone https://github.com/gkgiann/furniro-web.git
cd furniro-web
```

2. Instale as dependências.

```bash
npm install
```

## Como Rodar

O projeto depende de uma API local simulada para listar os produtos. Por isso, você precisa subir o mock antes de abrir a aplicação.

1. Inicie o json-server apontando para o arquivo `products.json` na raiz do projeto.

```bash
npx json-server products.json --port 3000
```

2. Em outra aba do terminal, rode o app em modo de desenvolvimento.

```bash
npm run dev
```

3. Acesse o projeto no navegador.

```bash
http://localhost:5173
```

## Scripts Disponíveis

```bash
npm run dev      # Inicia o ambiente de desenvolvimento com Vite
npm run build    # Gera a build de produção
npm run lint     # Executa o ESLint
npm run preview  # Visualiza a build gerada localmente
```

## Estrutura do Projeto

```text
src/
  components/
    Header/
    Discover/
    CategoryGrid/
    Products/
    RoomsInspiration/
    Mosaic/
    Footer/
  types/
```

## Dados dos Produtos

Os produtos exibidos na seção principal vêm do arquivo `products.json`. O app espera a rota:

```bash
http://localhost:3000/products
```

Se o mock local não estiver ativo, a listagem de produtos não será carregada.

## Build de Produção

Para gerar a versão otimizada da aplicação:

```bash
npm run build
```

Depois, caso queira testar o resultado final localmente:

```bash
npm run preview
```

## Observações

- O projeto é uma landing page frontend, não uma aplicação com rotas complexas.
- Algumas ações da interface são apenas demonstrativas e exibem feedback visual via toast.
- O conteúdo e as imagens foram organizados para reforçar a identidade visual da vitrine Furniro.

## Licença

Projeto desenvolvido para fins de estudo e desafio técnico.
