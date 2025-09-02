// ...existing code...
import React, { useState } from 'react';

export default function TechnicalArchitecture() {
  const [activeLayer, setActiveLayer] = useState<string>('data-collection');

  const architectureLayers = [
    {
      id: 'data-collection',
      title: 'Market Intelligence Gathering',
      icon: '🕷️',
      color: 'emerald',
      description: 'Intelligent data acquisition from leading Spanish property platforms',
      technologies: ['Python', 'Beautiful Soup', 'Requests', 'Rate Limiting', 'Git'],
      details: [
        'Crawling algorithms and countermeasures for data ingestion pipeline',
        'Multi-threaded data collection with exponential backoff strategies',
        'Robust error handling and automatic retry mechanisms',
        'Data validation and deduplication at collection point',
        'Geographic coordinate mapping and district classification',
        'Version control for data collection scripts using Git'
      ],
      challenge: "Challenge: Acquire comprehensive market data while respecting platform policies and maintaining data quality."
    },
    {
      id: 'data-processing',
      title: 'Statistical Refinement Pipeline',
      icon: '⚗️',
      color: 'cyan',
      description: 'ETL processes that transform raw listings into market intelligence',
      technologies: ['Pandas', 'NumPy', 'SciPy', 'Statistical Analysis', 'Data Validation', 'Git'],
      details: [
        'Advanced outlier detection using IQR and Z-score methods',
        'Price normalization across property types and operations',
        'Statistical distribution analysis (quartiles, std dev, skewness)',
        'Time-series aggregation for trend analysis',
        'Version control for processing scripts and notebooks with Git'
      ],
      challenge: "Challenge: Clean and normalize heterogeneous property data while preserving statistical integrity."
    },
    {
      id: 'data-storage',
      title: 'Knowledge Repository',
      icon: '🗄️',
      color: 'teal',
      description: 'Optimized data structures for lightning-fast market analysis',
      technologies: ['JSON Optimization', 'Data Compression', 'Indexing Strategies', 'Frontend Caching', 'Git'],
      details: [
        'Hierarchical data organization by district, type, and operation',
        'Compressed JSON format for efficient browser loading',
        'Client-side caching with intelligent cache invalidation',
        'Optimized data structures for statistical calculations',
        'Repository versioning and schema tracking with Git'
      ],
      challenge: "Challenge: Balance data richness with frontend performance and loading speed."
    },
    {
      id: 'visualization',
      title: 'Market Illumination Interface',
      icon: '📊',
      color: 'blue',
      description: 'Interactive visualization bringing market patterns to life',
      technologies: ['React', 'TypeScript', 'SVG Maps', 'Plotly.js', 'Responsive Design', 'Git'],
      details: [
        'Custom SVG Barcelona district map with interactive hover states',
        'Real-time statistical distribution visualization with Plotly',
        'Dynamic color coding based on relative price performance',
        'Responsive design adapting to all screen sizes and devices',
        'Smooth transitions and loading states for enhanced UX',
        'Version control for frontend codebase using Git'
      ],
      challenge: "Challenge: Present complex market data in an intuitive, interactive interface that reveals insights at a glance."
    }
  ];

const colorConfig = {
  emerald: {
    bg: 'from-teal-500/20 to-teal-600/30',
    border: 'border-teal-500/30',
    text: 'text-teal-300',
    dot: 'bg-teal-400',
    glow: 'shadow-teal-500/20'
  },
  cyan: {
    bg: 'from-sky-500/20 to-sky-600/30',
    border: 'border-sky-500/30',
    text: 'text-sky-300',
    dot: 'bg-sky-400',
    glow: 'shadow-sky-500/20'
  },
  teal: {
    bg: 'from-teal-500/20 to-teal-600/30',
    border: 'border-teal-500/30',
    text: 'text-teal-300',
    dot: 'bg-teal-400',
    glow: 'shadow-teal-500/20'
  },
  blue: {
    bg: 'from-blue-500/20 to-blue-600/30',
    border: 'border-blue-500/30',
    text: 'text-blue-300',
    dot: 'bg-blue-400',
    glow: 'shadow-blue-500/20'
  }
};

  return (
    <section id="technical-architecture" className="py-20 bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 mb-6 font-geologica">
            Technical Architecture
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto font-geologica">
            A four-layer system that transforms raw market signals into actionable intelligence—each layer solving complex challenges in data acquisition, processing, storage, and visualization.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Architecture Layers Navigation */}
<div className="space-y-4">
  {architectureLayers.map((layer, index) => {
    const colors = colorConfig[layer.color as keyof typeof colorConfig];
    const isActive = activeLayer === layer.id;

    return (
      <div
        key={layer.id}
        className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${
          isActive 
            ? `bg-gradient-to-r ${colors.bg} ${colors.border} shadow-lg ${colors.glow} ${colors.text}`
            : 'bg-black/20 border-neutral-800/50 hover:border-neutral-700/50 text-neutral-300'
        }`}
        onClick={() => setActiveLayer(layer.id)}
      >
        <div className="flex items-center gap-4 mb-3">
          <div className={`text-3xl transform transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
            {layer.icon}
          </div>
          <div>
            <h3 className={`text-xl font-bold font-geologica ${isActive ? colors.text : 'text-neutral-300 group-hover:text-neutral-100'}`}>
              Layer {index + 1}: {layer.title}
            </h3>
          </div>
        </div>
        
        <p className={`font-geologica text-sm ${isActive ? 'text-neutral-300' : 'text-neutral-300'}`}>
          {layer.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {layer.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`px-3 py-1 rounded-lg text-xs font-geologica transition-colors duration-300 ${
                isActive 
                  ? `${colors.text} bg-black/30` 
                  : 'text-neutral-200 bg-neutral-800/40'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  })}
</div>

          {/* Layer Details */}
          <div className="lg:sticky lg:top-8">
            {architectureLayers.map((layer) => {
              const colors = colorConfig[layer.color as keyof typeof colorConfig];
              const isVisible = activeLayer === layer.id;
              
              if (!isVisible) return null;
              
              return (
                <div
                  key={layer.id}
                  className={`bg-black/40 backdrop-blur-sm border ${colors.border} rounded-2xl p-8 shadow-2xl transition-all duration-500 ${colors.glow}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{layer.icon}</div>
                    <h3 className={`text-2xl font-bold ${colors.text} font-geologica`}>
                      {layer.title}
                    </h3>
                  </div>

                  <div className="mb-6 p-4 bg-gradient-to-r from-neutral-800/40 to-neutral-900/40 rounded-lg border-l-4 border-l-orange-500/60">
                    <div className="text-orange-300 font-semibold text-sm mb-2 font-geologica">ENGINEERING CHALLENGE</div>
                    <p className="text-neutral-300 text-sm font-geologica italic">{layer.challenge}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className={`text-lg font-semibold ${colors.text} font-geologica`}>Implementation Details:</h4>
                    {layer.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2 flex-shrink-0 animate-pulse`} 
                             style={{animationDelay: `${index * 200}ms`}} />
                        <p className="text-neutral-300 font-geologica leading-relaxed text-sm">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-gradient-to-r from-neutral-800/30 to-neutral-900/30 rounded-lg border border-neutral-700/30">
                    <div className="text-sm text-neutral-400 font-geologica mb-2">Key Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {layer.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 ${colors.text} bg-black/30 rounded-lg text-sm font-geologica border ${colors.border}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}