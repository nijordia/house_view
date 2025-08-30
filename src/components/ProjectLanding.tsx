import React from 'react';

export default function ProjectLanding() {
  return (
    <div className="bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-neutral-100 overflow-hidden relative">
      {/* Deep cavern atmospheric elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cave depth shadows */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-neutral-800/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-neutral-700/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        
        {/* Bioluminescent cave atmosphere */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-cyan-500/2 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}} />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-teal-500/1 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s'}} />
        
        {/* Floating data particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-teal-300/25 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-emerald-400/15 rounded-full animate-pulse" style={{animationDelay: '2.5s'}} />
      </div>

      {/* Periscope Background Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden lg:block">
        <svg 
          width="300" 
          height="600" 
          viewBox="0 0 300 600" 
          className="filter drop-shadow-2xl"
        >
          <defs>
            {/* Gradient definitions for the periscope */}
            <linearGradient id="periscopeBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#1e293b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#334155" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="periscopeLens" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
            <radialGradient id="lensGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#0891b2" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Main periscope shaft */}
          <rect 
            x="140" 
            y="150" 
            width="20" 
            height="350" 
            rx="10" 
            fill="url(#periscopeBody)"
            className="animate-pulse"
            style={{animationDelay: '1s', animationDuration: '4s'}}
          />
          
          {/* Periscope head housing */}
          <ellipse 
            cx="150" 
            cy="120" 
            rx="50" 
            ry="35" 
            fill="url(#periscopeBody)"
            className="animate-pulse"
            style={{animationDelay: '1.5s', animationDuration: '5s'}}
          />
          
          {/* Main observation lens */}
          <circle 
            cx="150" 
            cy="120" 
            r="25" 
            fill="url(#periscopeLens)"
            className="animate-pulse"
            style={{animationDelay: '0.5s', animationDuration: '3s'}}
          />
          
          {/* Inner lens reflection */}
          <circle 
            cx="150" 
            cy="120" 
            r="18" 
            fill="url(#lensGlow)"
            className="animate-pulse"
            style={{animationDelay: '2s', animationDuration: '6s'}}
          />
          
          {/* Side eyepiece */}
          <rect 
            x="200" 
            y="110" 
            width="60" 
            height="20" 
            rx="10" 
            fill="url(#periscopeBody)"
            className="animate-pulse"
            style={{animationDelay: '2.5s', animationDuration: '4.5s'}}
          />
          
          {/* Eyepiece lens */}
          <circle 
            cx="250" 
            cy="120" 
            r="8" 
            fill="url(#periscopeLens)"
            className="animate-pulse"
            style={{animationDelay: '3s', animationDuration: '3.5s'}}
          />
          
          {/* Base/handle */}
          <rect 
            x="125" 
            y="480" 
            width="50" 
            height="25" 
            rx="12" 
            fill="url(#periscopeBody)"
            className="animate-pulse"
            style={{animationDelay: '1.2s', animationDuration: '4.2s'}}
          />
          
          {/* Scanning light beam effect */}
          <path 
            d="M 170 120 L 280 60 L 280 180 Z" 
            fill="url(#lensGlow)" 
            opacity="0.1"
            className="animate-pulse"
            style={{animationDelay: '0s', animationDuration: '8s'}}
          />
          
          {/* Data stream particles */}
          <circle cx="190" cy="140" r="2" fill="#22d3ee" opacity="0.6" className="animate-ping" style={{animationDelay: '1s'}} />
          <circle cx="210" cy="110" r="1.5" fill="#0891b2" opacity="0.4" className="animate-ping" style={{animationDelay: '3s'}} />
          <circle cx="180" cy="160" r="1" fill="#06b6d4" opacity="0.5" className="animate-ping" style={{animationDelay: '5s'}} />
          
          {/* Lens reflections for depth */}
          <ellipse 
            cx="140" 
            cy="110" 
            rx="8" 
            ry="12" 
            fill="#ffffff" 
            opacity="0.1"
            className="animate-pulse"
            style={{animationDelay: '0.8s', animationDuration: '4s'}}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Navigation Buttons - Top Right */}
        <div className="absolute top-5 right-10 hidden md:flex gap-4">
          <a
            href="https://www.codecongrio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neutral-800/60 to-neutral-900/60 border border-neutral-700/50 text-neutral-300 rounded-xl font-semibold hover:from-emerald-800/60 hover:to-teal-900/60 hover:border-emerald-500/30 hover:text-emerald-200 transition-all duration-300 font-geologica backdrop-blur-sm shadow-lg"
          >
            <span className="text-lg">🏠</span>
            <span>CodeCongrio</span>
            <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
          <a
            href="https://www.codecongrio.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600/80 to-teal-700/80 border border-emerald-500/30 text-emerald-100 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 hover:text-white transition-all duration-300 font-geologica backdrop-blur-sm shadow-lg hover:shadow-emerald-500/20 transform hover:scale-105"
          >
            <span className="text-lg">🤝</span>
            <span>Collaborate</span>
            <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="md:hidden flex flex-col gap-3 mb-8">
          <a
            href="https://www.codecongrio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-neutral-800/60 to-neutral-900/60 border border-neutral-700/50 text-neutral-300 rounded-xl font-semibold hover:from-emerald-800/60 hover:to-teal-900/60 hover:border-emerald-500/30 hover:text-emerald-200 transition-all duration-300 font-geologica backdrop-blur-sm shadow-lg"
          >
            <span className="text-lg">🏠</span>
            <span>Visit CodeCongrio Main Site</span>
            <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
          <a
            href="https://www.codecongrio.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600/80 to-teal-700/80 border border-emerald-500/30 text-emerald-100 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 hover:text-white transition-all duration-300 font-geologica backdrop-blur-sm shadow-lg hover:shadow-emerald-500/20 transform hover:scale-105"
          >
            <span className="text-lg">🤝</span>
            <span>Start a Collaboration</span>
            <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
        </div>

        {/* Hero Section */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-teal-600/20 border border-cyan-500/30 text-cyan-300 rounded-full text-sm font-semibold font-geologica backdrop-blur-sm">
              🏠 Market Intelligence System
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 mb-6 font-geologica drop-shadow-lg">
            Barcelona Property Periscope
          </h1>
          
          <p className="text-xl text-neutral-300 max-w-4xl mx-auto font-geologica leading-relaxed mb-8">
            An eye in the sky for navigating turbulent property market.  
            This intelligence system aggregates, analyzes, and illuminates market patterns across all districts—from 
            the depths of <span className="text-emerald-300 font-semibold">data acquisition</span> to crystalline <span className="text-cyan-300 font-semibold">market insights</span>.
            <br />

          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#interactive-map"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 font-geologica border border-cyan-500/30 backdrop-blur-sm"
            >
              Explore Market Depths
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#technical-architecture"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal-400/40 text-teal-200 rounded-xl font-semibold hover:bg-teal-500/20 hover:border-teal-300 hover:text-teal-100 transition-all duration-300 font-geologica backdrop-blur-sm"
            >
              📊 View Technical Stack
            </a>
          </div>
        </header>

        {/* Key Statistics */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-black/40 to-neutral-900/60 rounded-2xl border border-cyan-500/20 shadow-2xl">
            <div className="text-4xl font-bold text-cyan-300 font-geologica mb-2">10</div>
            <div className="text-neutral-300 font-geologica">Barcelona Districts</div>
            <div className="text-neutral-500 font-geologica text-sm mt-2">Complete coverage</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-black/40 to-neutral-900/60 rounded-2xl border border-teal-500/20 shadow-2xl">
            <div className="text-4xl font-bold text-teal-300 font-geologica mb-2">15K+</div>
            <div className="text-neutral-300 font-geologica">Properties Tracked</div>
            <div className="text-neutral-500 font-geologica text-sm mt-2">Continuous monitoring</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-black/40 to-neutral-900/60 rounded-2xl border border-emerald-500/20 shadow-2xl">
            <div className="text-4xl font-bold text-emerald-300 font-geologica mb-2">Monthly</div>
            <div className="text-neutral-300 font-geologica">Market Updates</div>
            <div className="text-neutral-500 font-geologica text-sm mt-2">Fresh intelligence</div>
          </div>
        </section>

      </div>
    </div>
  );
}