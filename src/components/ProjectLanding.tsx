import React from 'react';

export default function ProjectLanding() {
  return (
    <div className="bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-neutral-100 overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
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
            Deep beneath the surface of Barcelona's property market lies a treasure trove of data. 
            This intelligence system aggregates, analyzes, and illuminates market patterns across all districts—from 
            the depths of <span className="text-emerald-300 font-semibold">data acquisition</span> to crystalline <span className="text-cyan-300 font-semibold">market insights</span>.
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
            <div className="text-4xl font-bold text-emerald-300 font-geologica mb-2">Real-time</div>
            <div className="text-neutral-300 font-geologica">Market Updates</div>
            <div className="text-neutral-500 font-geologica text-sm mt-2">Fresh intelligence</div>
          </div>
        </section>
      </div>
    </div>
  );
}