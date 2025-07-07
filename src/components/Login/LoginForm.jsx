import React from 'react';

function LoginForm({ username, setUsername, password, setPassword, error, isLoading, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="username" className="block text-sm font-semibold text-slate-700 mb-1">Usuário</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full px-6 py-4 text-lg bg-slate-50 border border-slate-300 rounded-xl shadow-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
          placeholder="Digite seu usuário"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1">Senha</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-6 py-4 text-lg bg-slate-50 border border-slate-300 rounded-xl shadow-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
          placeholder="Digite sua senha"
          required
        />
      </div>
      {error && (
        <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg px-3 py-2 text-sm text-center animate-pulse shadow-sm">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 disabled:bg-slate-400 disabled:from-slate-400 disabled:to-slate-400 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}

export default LoginForm;
