
# Sapientia

>Sapientia é uma aplicação web moderna desenvolvida em React, focada em autenticação de usuários via JWT, navegação protegida e experiência de desenvolvimento ágil com Vite e TailwindCSS.

## Visão Geral
O projeto Sapientia implementa um fluxo completo de autenticação, gerenciamento de sessão e navegação entre páginas protegidas e públicas. Utiliza React Context para controle global de autenticação e React Router DOM para roteamento.

## Funcionalidades
- Autenticação de usuários com JWT
- Contexto global de autenticação (`AuthContext`)
- Rotas protegidas e públicas (`ProtectedRoute`)
- Páginas de Login e Home
- Consumo de API com Axios
- Interface responsiva com TailwindCSS

## Tecnologias Utilizadas
- [React 19](https://react.dev/)
- [Vite 7](https://vitejs.dev/)
- [React Router DOM 7](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [jwt-decode](https://github.com/auth0/jwt-decode)
- [TailwindCSS 4](https://tailwindcss.com/)

## Estrutura de Pastas
- `src/pages` — Páginas principais (Home, Login)
- `src/contexts` — Contextos globais (ex: autenticação)
- `src/routes` — Definição das rotas da aplicação
- `src/components` — Componentes reutilizáveis (ex: LoginForm, AuthCard)
- `src/api` — Configuração de integração com API
- `src/assets` — Imagens e recursos estáticos
- `src/utils` — Funções utilitárias

## Scripts Disponíveis
No diretório do projeto, você pode rodar:

- `npm install` — Instala todas as dependências
- `npm run dev` — Inicia o servidor de desenvolvimento (Vite)
- `npm run build` — Gera a build de produção
- `npm run preview` — Visualiza a build de produção localmente
- `npm run lint` — Executa o linter (ESLint)

## Variáveis de Ambiente
O projeto utiliza variáveis de ambiente para configuração da API:

```
VITE_API_URL=http://localhost:3001
```
Defina-as no arquivo `.env.local` na raiz do projeto.

## Requisitos
- Node.js 18+
- npm 9+

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o arquivo `.env.local` conforme exemplo acima.
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:5173` no navegador.

## Como contribuir
1. Faça um fork do repositório
2. Crie uma branch para sua feature ou correção
3. Envie um pull request com uma descrição clara das mudanças

## Licença
Este projeto é privado e para fins de estudo.

---
Projeto inicial para autenticação, navegação e boas práticas em React.
