'use client'
import React from 'react';

const WelcomePage: React.FC = () => {
  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleCreateGIA = () => {
    console.log('Create GIA clicked');
  };

  const handleReVerifyGIA = () => {
    console.log('Re-Verify GIA clicked');
  };

  return (
    <div className="relative w-[90vw] max-w-6xl h-[90vh] max-h-[800px] flex flex-col items-center justify-center">
      
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
      <div className="absolute bottom-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
      
      {/* Fan ornaments */}
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 w-20 h-20 opacity-60">
          <svg viewBox="0 0 80 80" className="w-full h-full">
          <path d="M10 40 Q20 20 40 40 Q60 20 70 40" fill="none" stroke="#d4af37" strokeWidth="1.5" />
          <path d="M15 45 Q25 25 40 45 Q55 25 65 45" fill="none" stroke="#d4af37" strokeWidth="1.5" />
          <path d="M20 50 Q30 30 40 50 Q50 30 60 50" fill="none" stroke="#d4af37" strokeWidth="1.5" />
          <path d="M25 55 Q35 35 40 55 Q45 35 55 55" fill="none" stroke="#d4af37" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="3" fill="#d4af37" />
          </svg>
      </div>
      
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 scale-x-[-1] w-20 h-20 opacity-60">
          <svg viewBox="0 0 80 80" className="w-full h-full">
          <path d="M10 40 Q20 20 40 40 Q60 20 70 40" fill="none" stroke="#d4af37" strokeWidth="1.5" />
          <path d="M15 45 Q25 25 40 45 Q55 25 65 45" fill="none" stroke="#d4af37" strokeWidth="1.5" />
          <path d="M20 50 Q30 30 40 50 Q50 30 60 50" fill="none" stroke="#d4af37" strokeWidth="1.5" />
          <path d="M25 55 Q35 35 40 55 Q45 35 55 55" fill="none" stroke="#d4af37" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="3" fill="#d4af37" />
          </svg>
      </div>
      
      {/* Main content */}
      <div className="text-center text-yellow-600 mb-12 z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.3em] mb-4 drop-shadow-lg">
          WELCOME
          </h1>
          <div className="text-2xl font-normal tracking-[0.2em] my-4 opacity-90">
          TO
          </div>
          <div className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-[0.2em] drop-shadow-lg">
          GUINEVERE
          </div>
      </div>
      
      <div className="flex flex-col gap-6 z-10">
          <button 
          onClick={handleLogin}
          className="group relative bg-transparent border-2 border-yellow-600 text-yellow-600 px-12 py-4 font-serif text-xl font-semibold tracking-[0.2em] uppercase min-w-[300px] transition-all duration-300 hover:bg-yellow-600/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-600/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
          LOGIN
          </button>
          
          <button 
          onClick={handleCreateGIA}
          className="group relative bg-transparent border-2 border-yellow-600 text-yellow-600 px-12 py-4 font-serif text-xl font-semibold tracking-[0.2em] uppercase min-w-[300px] transition-all duration-300 hover:bg-yellow-600/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-600/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
          CREATE GIA
          </button>
          
          <button 
          onClick={handleReVerifyGIA}
          className="group relative bg-transparent border-2 border-yellow-600 text-yellow-600 px-12 py-4 font-serif text-xl font-semibold tracking-[0.2em] uppercase min-w-[300px] transition-all duration-300 hover:bg-yellow-600/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-600/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
          RE-VERIFY GIA
          </button>
      </div>
    </div>
  );
};

export default WelcomePage;