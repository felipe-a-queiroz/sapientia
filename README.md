# Sapientia

> Sapientia is a modern web application built with React, focused on user authentication via JWT, protected navigation, and an agile development experience with Vite and TailwindCSS.

## Overview

The Sapientia project implements a complete flow of authentication, session management, and navigation between protected and public pages. It uses React Context for global authentication control and React Router DOM for routing.

## Features

* User authentication with JWT
* Global authentication context (`AuthContext`)
* Protected and public routes (`ProtectedRoute`)
* Login and Home pages
* API consumption with Axios
* Responsive interface with TailwindCSS

## Technologies Used

* [React 19](https://react.dev/)
* [Vite 7](https://vitejs.dev/)
* [React Router DOM 7](https://reactrouter.com/)
* [Axios](https://axios-http.com/)
* [jwt-decode](https://github.com/auth0/jwt-decode)
* [TailwindCSS 4](https://tailwindcss.com/)

## Folder Structure

* `src/pages` — Main pages (Home, Login)
* `src/contexts` — Global contexts (e.g., authentication)
* `src/routes` — Application route definitions
* `src/components` — Reusable components (e.g., LoginForm, AuthCard)
* `src/api` — API integration configuration
* `src/assets` — Images and static resources
* `src/utils` — Utility functions

## Available Scripts

In the project directory, you can run:

* `npm install` — Installs all dependencies
* `npm run dev` — Starts the development server (Vite)
* `npm run build` — Builds the production version
* `npm run preview` — Previews the production build locally
* `npm run lint` — Runs the linter (ESLint)

## Environment Variables

The project uses environment variables to configure the API:

```
VITE_API_URL=http://localhost:3001
```

Define them in the `.env.local` file at the project root.

## Requirements

* Node.js 18+
* npm 9+

## How to Run the Project

1. Install the dependencies:

   ```bash
   npm install
   ```
2. Set up the `.env.local` file as shown above.
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## How to Contribute

1. Fork the repository
2. Create a branch for your feature or fix
3. Submit a pull request with a clear description of the changes

## License

This project is private and intended for educational purposes.
