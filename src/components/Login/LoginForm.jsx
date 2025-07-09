import React from 'react';
import '../../pages/LoginPage/LoginPage.css'; 

function LoginForm({ username, setUsername, password, setPassword, error, isLoading, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-6" autoComplete="on">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z"/></svg>
        </span>
        <input
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-slate-50 text-slate-800 text-base shadow-sm transition-all duration-200 placeholder-slate-400"
          placeholder="Usuário"
          autoFocus
          autoComplete="username"
          required
        />
      </div>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M12 17a5 5 0 0 0 5-5V9a5 5 0 1 0-10 0v3a5 5 0 0 0 5 5Zm-7 2a7 7 0 0 1 14 0v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1Z"/></svg>
        </span>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none bg-slate-50 text-slate-800 text-base shadow-sm transition-all duration-200 placeholder-slate-400"
          placeholder="Senha"
          autoComplete="current-password"
          required
        />
      </div>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-2 text-sm text-center animate-shake shadow-sm">
          <span className="font-semibold">{error}</span>
        </div>
      )}
      <div className="LoginForm-button-center">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold text-lg shadow-lg hover:from-cyan-700 hover:to-blue-800 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          <span className="absolute left-0 top-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm" />
          <span className="relative z-10">{isLoading ? 'Entrando...' : 'Entrar'}</span>
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
