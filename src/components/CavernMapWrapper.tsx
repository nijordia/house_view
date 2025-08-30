import React from 'react';

interface CavernMapWrapperProps {
    children: React.ReactNode;
}

export const CavernMapWrapper: React.FC<CavernMapWrapperProps> = ({ children }) => (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-neutral-100">
        {/* Deep cavern atmospheric elements */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse" />
            <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-teal-300/35 rounded-full animate-pulse animation-delay-1500" />
            <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-emerald-400/25 rounded-full animate-pulse animation-delay-2500" />
            
            {/* Additional floating particles for depth */}
            <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-blue-400/20 rounded-full animate-pulse animation-delay-1000" />
            <div className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-teal-400/15 rounded-full animate-pulse animation-delay-4000" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
            {children}
        </div>
    </div>
);