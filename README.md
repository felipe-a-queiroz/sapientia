## Sapientia

Sapientia é uma aplicação web desenvolvida em React, utilizando Vite para build e desenvolvimento rápido. O projeto implementa autenticação de usuários via JWT e navegação entre páginas utilizando React Router.

### Funcionalidades
- Autenticação de usuários com JWT
- Contexto global de autenticação (`AuthContext`)
- Rotas protegidas e públicas
- Páginas de Login e Home

### Tecnologias Utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [jwt-decode](https://github.com/auth0/jwt-decode)

### Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador.

### Estrutura de Pastas
- `src/pages` — Páginas principais (Home, Login)
- `src/contexts` — Contextos globais (ex: autenticação)
- `src/routes` — Definição das rotas da aplicação

---
Projeto inicial para autenticação e navegação em React.
