import React from 'react';

function AuthCard({ children }) {
  return (
    <div className="w-full max-w-md p-8 bg-white/70 rounded-3xl shadow-2xl flex flex-col items-center border border-slate-200 backdrop-blur-xl" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'}}>
      {children}
    </div>
  );
}

export default AuthCard;
