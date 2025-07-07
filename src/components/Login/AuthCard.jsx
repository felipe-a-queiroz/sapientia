import React from 'react';

function AuthCard({ children }) {
  return (
    <div className="relative bg-white/95 p-8 pt-16 rounded-3xl shadow-2xl w-full max-w-md border border-slate-300 hover:shadow-3xl transition-all duration-300">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 shadow-xl border-4 border-white">
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z" />
        </svg>
      </div>
      {children}
    </div>
  );
}

export default AuthCard;
