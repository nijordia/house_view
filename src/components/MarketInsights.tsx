import React, { useState, useEffect } from 'react';
import { HousingStats } from '../types';

interface MarketInsightsProps {
  allStats: HousingStats[];
}

export default function MarketInsights({ allStats }: MarketInsightsProps) {
  const [insights, setInsights] = useState<any>(null);

  useEffect(() => {
    if (allStats.length > 0) {
      // Calculate market insights
      const purchaseStats = allStats.filter(stat => stat.operation === 'compra' && stat.search_type === 'vivienda');
      const rentalStats = allStats.filter(stat => stat.operation === 'alquiler' && stat.search_type === 'vivienda');
      
      // Fix: Add initial value and check for empty arrays
      const mostExpensivePurchase = purchaseStats.length > 0 ? purchaseStats.reduce((prev, current) => 
        (prev.mean_price_per_sqm || prev.mean_price || 0) > (current.mean_price_per_sqm || current.mean_price || 0) ? prev : current
      ) : null;
      
      const mostExpensiveRental = rentalStats.length > 0 ? rentalStats.reduce((prev, current) => 
        (prev.mean_price || 0) > (current.mean_price || 0) ? prev : current
      ) : null;

      const cheapestPurchase = purchaseStats.length > 0 ? purchaseStats.reduce((prev, current) => 
        (prev.mean_price_per_sqm || prev.mean_price || Infinity) < (current.mean_price_per_sqm || current.mean_price || Infinity) ? prev : current
      ) : null;

      setInsights({
        mostExpensivePurchase,
        mostExpensiveRental,
        cheapestPurchase,
        totalProperties: allStats.reduce((sum, stat) => sum + stat.num_observations, 0),
        districtsAnalyzed: new Set(allStats.map(stat => stat.commune)).size
      });
    }
  }, [allStats]);

  if (!insights || !insights.mostExpensivePurchase) {
    return (
      <section className="py-20 bg-gradient-to-b from-neutral-950 to-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-cyan-300 font-geologica">Loading market insights...</div>
        </div>
      </section>
    );
  }

  const insightCards = [
    {
      title: "Most Premium District",
      subtitle: "Purchase Market",
      value: `€${Math.round(insights.mostExpensivePurchase?.mean_price_per_sqm || insights.mostExpensivePurchase?.mean_price || 0).toLocaleString()}/m²`,
      district: insights.mostExpensivePurchase.commune.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
      icon: "💎",
      color: "emerald"
    },
    {
      title: "Value Opportunity",
      subtitle: "Entry Point",
      value: `€${Math.round(insights.cheapestPurchase?.mean_price_per_sqm || insights.cheapestPurchase?.mean_price || 0).toLocaleString()}/m²`,
      district: insights.cheapestPurchase?.commune.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A',
      icon: "📈",
      color: "teal"
    },
    {
      title: "Market Coverage",
      subtitle: "Data Depth",
      value: `${insights.totalProperties.toLocaleString()} properties`,
      district: `${insights.districtsAnalyzed} districts analyzed`,
      icon: "🔍",
      color: "cyan"
    },
    {
      title: "Intelligence Source",
      subtitle: "Data Pipeline",
      value: "Web Listings",
      district: "Market aggregation system",
      icon: "🤖",
      color: "blue"
    }
  ];


  return (
    <section className="bg-gradient-to-b from-neutral-950 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 mb-6 font-geologica">
            Market Intelligence Insights
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto font-geologica">
            Key discoveries from the depths of Barcelona's property market data
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
{insightCards.map((card, index) => {
  const isHighlight = card.title === "Most Premium District" || card.title === "Market Coverage";
  return (
    <div
      key={index}
      className={`group bg-black/40 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300
        ${card.color === 'emerald' ? 'border-teal-500/30' : ''}
        ${card.color === 'cyan' ? 'border-sky-500/30' : ''}
        ${card.color === 'teal' ? 'border-teal-500/30' : ''}
        ${card.color === 'blue' ? 'border-blue-500/30' : ''}
        border
        ${card.color === 'emerald' ? 'hover:shadow-teal-500/10' : ''}
        ${card.color === 'cyan' ? 'hover:shadow-sky-500/10' : ''}
        ${card.color === 'teal' ? 'hover:shadow-teal-500/10' : ''}
        ${card.color === 'blue' ? 'hover:shadow-blue-500/10' : ''}
      `}
    >
      <div className="text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {card.icon}
        </div>
        <h3 className={`text-lg font-bold font-geologica mb-2 ${
          isHighlight ? 'text-sky-200'
          : card.color === 'emerald' ? 'text-teal-300'
          : card.color === 'cyan' ? 'text-sky-300'
          : card.color === 'teal' ? 'text-teal-300'
          : card.color === 'blue' ? 'text-blue-300'
          : 'text-neutral-100'
        }`}>
          {card.title}
        </h3>
        <p className="text-neutral-400 text-sm font-geologica mb-4">
          {card.subtitle}
        </p>
        <div className="text-2xl font-bold text-neutral-100 font-geologica mb-2 drop-shadow-lg">
          {card.value}
        </div>
        <p className="text-neutral-200 text-sm font-geologica">
          {card.district}
        </p>
      </div>
    </div>
  );
          })}
        </div>
      </div>
    </section>
  );
}