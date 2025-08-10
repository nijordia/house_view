import React, { useState, useRef, useEffect } from 'react';
import Plotly from 'plotly.js-dist-min';
import { housingDataService } from '../services/housingDataService';
import { HousingStats } from '../types';

export const svgToDataCommune: Record<string, string> = {
    "Ciutat Vella": "ciutat-vella",
    "Eixample": "eixample",
    "Sants-Montjuïc": "sants-montjuic",
    "Les Corts": "les-corts",
    "Sarrià-Sant Gervasi": "sarria-sant-gervasi",
    "Gràcia": "gracia",
    "Horta-Guinardó": "horta-guinardo",
    "Nou Barris": "nou-barris",
    "Sant Andreu": "sant-andreu",
    "Sant Martí": "sant-marti"
};


const districtPaths = [
    {
        label: "Ciutat Vella",
        d: "M650,513 L640,503 L612,524 L600,524 L582,546 L557,543 L548,591 L571,616 L609,619 L609,627 L642,647 L647,639 L622,622 L644,586 L648,600 L640,614 L647,621 L657,605 L650,581 L656,579 L664,586 L667,613 L656,616 L656,631 L653,630 L656,632 L653,630 L656,632 L660,633 L665,618 L669,620 L666,626 L670,629 L669,635 L661,634 L661,639 L667,646 L655,644 L657,662 L661,663 L662,649 L668,650 L665,670 L656,681 L664,689 L661,684 L671,668 L678,672 L665,694 L654,730 L658,731 L670,693 L691,651 L683,653 L679,645 L686,616 L699,604 L696,595 L705,579 L717,582 L709,578 L711,574 L719,577 L709,573 L712,563 L725,551 L731,551 L711,532 L700,543 L667,508 L656,519 L650,513"
    },
    {
        label: "Eixample",
        d: "M668,440 L656,428 L662,423 L612,371 L578,405 L594,422 L571,445 L565,439 L530,474 L456,500 L445,577 L482,615 L571,616 L548,591 L553,547 L557,543 L582,546 L600,524 L612,524 L640,503 L645,508 L667,487 L668,440"
    },
    {
        label: "Sants-Montjuïc",
        d: "M474,607 L445,577 L447,544 L429,560 L387,579 L342,609 L385,649 L400,690 L409,699 L397,714 L398,739 L392,742 L418,788 L233,870 L260,890 L291,936 L315,955 L383,973 L478,974 L491,959 L499,928 L500,931 L501,927 L524,927 L525,932 L550,861 L556,863 L557,858 L550,858 L555,846 L558,846 L557,840 L561,839 L543,831 L544,835 L536,833 L528,825 L515,832 L474,913 L459,906 L466,888 L451,881 L458,869 L478,868 L485,804 L490,804 L490,809 L494,805 L497,829 L548,790 L565,800 L596,738 L581,724 L586,714 L608,725 L615,712 L599,702 L611,680 L628,692 L635,677 L614,668 L620,634 L609,627 L609,619 L482,615 L474,607 M607,783 L649,694 L646,681 L590,788 L587,818 L592,820 L588,845 L591,846 L589,856 L585,857 L584,887 L580,886 L585,888 L576,938 L592,1000 L579,937 L607,783"
    },
    {
        label: "Les Corts",
        d: "M252,440 L238,457 L224,487 L234,500 L237,524 L246,530 L240,533 L251,549 L240,558 L243,571 L261,587 L264,585 L274,592 L280,607 L322,608 L340,594 L342,609 L347,609 L387,579 L429,560 L447,544 L454,498 L428,507 L384,497 L339,514 L334,506 L322,499 L327,489 L323,480 L300,466 L284,480 L278,458 L268,447 L252,440"
    },
    {
        label: "Sarrià-Sant Gervasi",
        d: "M101,211 L103,204 L97,206 L94,214 L95,227 L103,243 L121,256 L103,264 L101,279 L128,281 L142,287 L138,294 L114,300 L122,307 L125,323 L131,321 L135,342 L123,349 L114,364 L97,373 L93,387 L97,396 L86,399 L100,425 L129,425 L138,407 L163,382 L184,391 L214,395 L222,387 L231,388 L239,392 L245,413 L254,419 L250,440 L270,449 L279,459 L284,480 L300,466 L323,480 L327,489 L322,499 L334,506 L339,514 L384,497 L428,507 L512,479 L490,446 L484,428 L485,410 L477,405 L462,376 L439,371 L416,348 L417,343 L407,332 L397,326 L389,328 L386,319 L373,320 L380,333 L342,311 L338,298 L342,277 L322,274 L303,259 L264,257 L253,262 L243,250 L233,248 L232,237 L218,227 L192,256 L168,255 L151,243 L149,237 L142,243 L138,235 L114,228 L112,212 L101,211 M33,211 L27,208 L30,249 L26,270 L0,284 L20,304 L22,339 L10,352 L12,364 L21,377 L32,372 L28,360 L54,356 L62,339 L60,326 L89,321 L86,279 L73,271 L77,250 L61,247 L53,223 L38,220 L33,211"
    },
    {
        label: "Gràcia",
        d: "M417,293 L412,284 L409,303 L386,299 L397,317 L391,320 L386,316 L382,320 L387,319 L389,328 L397,326 L407,332 L417,343 L416,348 L439,371 L462,376 L477,405 L485,410 L484,428 L490,446 L512,479 L530,474 L565,439 L571,445 L594,422 L553,379 L542,358 L530,353 L523,341 L511,351 L490,333 L494,316 L482,315 L483,306 L455,316 L445,307 L436,315 L424,310 L426,298 L417,293"
    },
    {
        label: "Horta-Guinardó",
        d: "M338,297 L342,311 L380,333 L374,320 L397,317 L386,299 L409,303 L412,284 L426,298 L424,310 L436,315 L445,307 L455,316 L483,306 L482,315 L494,316 L490,333 L511,351 L523,341 L531,355 L542,358 L553,379 L578,405 L637,346 L639,316 L616,283 L554,264 L566,254 L552,239 L558,210 L552,208 L555,200 L545,190 L549,177 L533,170 L525,153 L516,148 L523,145 L522,136 L534,123 L533,116 L524,122 L509,123 L497,139 L479,140 L463,132 L448,139 L427,132 L411,134 L401,154 L387,164 L378,227 L350,258 L338,297"
    },
    {
        label: "Nou Barris",
        d: "M516,148 L525,153 L533,170 L549,177 L545,190 L555,200 L552,208 L558,210 L552,239 L566,254 L554,264 L616,283 L622,282 L622,265 L657,268 L649,241 L681,116 L676,75 L681,72 L675,57 L673,3 L657,0 L635,4 L631,0 L632,11 L641,22 L612,28 L595,48 L574,49 L575,54 L558,81 L565,110 L557,121 L533,116 L534,123 L522,136 L523,145 L516,148"
    },
    {
        label: "Sant Andreu",
        d: "M676,41 L676,60 L681,72 L676,75 L681,116 L649,241 L657,268 L622,265 L622,282 L616,283 L639,316 L637,346 L651,333 L679,361 L690,349 L696,355 L702,350 L701,341 L723,259 L738,253 L770,270 L766,239 L789,231 L767,163 L732,114 L686,66 L676,41"
    },
    {
        label: "Sant Martí",
        d: "M772,273 L743,254 L727,255 L718,271 L701,351 L696,355 L690,349 L679,361 L651,333 L612,371 L662,423 L656,428 L668,440 L667,487 L645,508 L656,519 L667,508 L700,543 L711,532 L731,551 L724,539 L735,529 L742,537 L733,546 L736,549 L744,539 L746,541 L727,560 L729,562 L750,535 L749,530 L747,534 L740,527 L743,520 L755,511 L761,516 L757,507 L764,513 L760,508 L777,484 L792,485 L786,479 L788,474 L801,458 L811,462 L806,454 L814,440 L820,436 L828,443 L819,433 L826,424 L835,419 L844,430 L850,418 L844,426 L838,419 L857,410 L862,414 L858,405 L864,409 L873,393 L872,390 L865,404 L860,405 L869,385 L838,366 L840,364 L825,338 L791,309 L793,307 L780,285 L772,287 L765,283 L772,273"
    }
];

const districtLabels = [
    { label: "Ciutat Vella", x: 630, y: 558 },
    { label: "Eixample", x: 557, y: 496 },
    { label: "Sants-Montjuïc", x: 490, y: 688 },
    { label: "Les Corts", x: 330, y: 548 },
    { label: "Sarrià-Sant Gervasi", x: 330, y: 390 },
    { label: "Gràcia", x: 510, y: 390 },
    { label: "Horta-Guinardó", x: 470, y: 235 },
    { label: "Nou Barris", x: 600, y: 149 },
    { label: "Sant Andreu", x: 710, y: 226 },
    { label: "Sant Martí", x: 730, y: 400 }
];

const getPriceColor = (commune: string, allStats: HousingStats[]): string => {
    const stats = allStats.find(stat => stat.commune === commune);
    if (!stats) return '#F1F5F9'; // Light gray for no data
    
    const price = getMedianPrice(stats);
    
    // Get min and max prices from current dataset for relative scaling
    const prices = allStats.map(s => getMedianPrice(s));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    
    // Calculate relative position (0-1)
    const relative = (price - minPrice) / (maxPrice - minPrice);
    
    // Apply color based on relative position
    if (relative < 0.2) return '#DBEAFE'; // Light blue (cheapest 20%)
    if (relative < 0.4) return '#93C5FD'; // Medium blue
    if (relative < 0.6) return '#60A5FA'; // Blue
    if (relative < 0.8) return '#FBBF24'; // Yellow/orange
    return '#EF4444'; // Red (most expensive 20%)
};

const isRentalOperation = (operation: string): boolean => {
    return operation === 'alquiler' || operation === 'alquiler_habitacion';
};

const getMedianPrice = (stats: HousingStats): number => {
    return isRentalOperation(stats.operation) 
        ? stats.median_price! 
        : stats.median_price_per_sqm!;
};

const getMeanPrice = (stats: HousingStats): number => {
    return isRentalOperation(stats.operation) 
        ? stats.mean_price! 
        : stats.mean_price_per_sqm!;
};

const getMinPrice = (stats: HousingStats): number => {
    return isRentalOperation(stats.operation) 
        ? stats.min_price! 
        : stats.min_price_per_sqm!;
};

const getMaxPrice = (stats: HousingStats): number => {
    return isRentalOperation(stats.operation) 
        ? stats.max_price! 
        : stats.max_price_per_sqm!;
};

const getStdDev = (stats: HousingStats): number => {
    return isRentalOperation(stats.operation) 
        ? stats.std_dev_price! 
        : stats.std_dev_price_per_sqm!;
};

const getPriceLabel = (operation: string): string => {
    return isRentalOperation(operation) ? 'Price' : 'Price per sqm';
};

const getPriceUnit = (operation: string): string => {
    return '€';
    //return isRentalOperation(operation) ? '€' : '€/sqm';
};


function renderNormalCurve(stats: HousingStats, container: HTMLDivElement) {
    const mean = getMeanPrice(stats);
    const sd = getStdDev(stats);
    const min = getMinPrice(stats);
    const max = getMaxPrice(stats);

    // Choose number of points for smoothness, capped for performance
    const numPoints = 10;
    const binWidth = (max - min) / numPoints;

    const x: number[] = [];
    const y: number[] = [];

    for (let i = 0; i <= numPoints; i++) {
        const val = min + (i / numPoints) * (max - min);
        x.push(val);

        // PDF of normal distribution
        const pdf = Math.exp(-0.5 * Math.pow((val - mean) / sd, 2)) / (sd * Math.sqrt(2 * Math.PI));
        // Scale density to estimated count per bin
        const estimatedCount = pdf * stats.num_observations * binWidth;
        y.push(estimatedCount);
    }

    const priceUnit = getPriceUnit(stats.operation);
    
    Plotly.newPlot(container, [{
        x,
        y,
        type: 'scatter',
        mode: 'lines',
        line: { color: 'rgba(59, 130, 246, 0.8)', width: 3 },
        fill: 'tozeroy',
        fillcolor: 'rgba(59, 130, 246, 0.1)',
        hovertemplate: `${priceUnit}: %{x:,.0f}<br>Listings: %{y:,.0f}<extra></extra>`
    }], {
        margin: { t: 20, b: 40, l: 50, r: 20 },
        xaxis: {
            title: { text: `${getPriceLabel(stats.operation)} (${priceUnit})`, font: { family: 'Inter', size: 12, color: '#64748B' } },
            showgrid: true,
            gridcolor: '#F1F5F9',
            tickformat: ',d',
            tickfont: { family: 'Inter', size: 10, color: '#64748B' },
            fixedrange: true
        },
        yaxis: {
            title: { text: 'Estimated Listings', font: { family: 'Inter', size: 12, color: '#64748B' } },
            showticklabels: true,
            showgrid: true,
            gridcolor: '#F1F5F9',
            tickformat: ',0f',
            tick0: 0,
            dtick: Math.ceil(Math.max(...y) / 5),
            tickfont: { family: 'Inter', size: 10, color: '#64748B' },
            fixedrange: true
        },
        plot_bgcolor: '#FAFAFA',
        paper_bgcolor: 'white',
        height: 200,
        font: { family: 'Inter' }
    }, {
        displayModeBar: false,
    });
}

export default function HousingMap() {
    const [stats, setStats] = useState<HousingStats | null>(null);
    const [allStats, setAllStats] = useState<HousingStats[]>([]);
    const [showCard, setShowCard] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
    const [searchType, setSearchType] = useState<string>('vivienda');
    const [operation, setOperation] = useState<string>('compra');
    const plotRef = useRef<HTMLDivElement>(null);

    const handleDistrictClick = async (e: React.MouseEvent<SVGPathElement>) => {
        const label = e.currentTarget.getAttribute('data-label');
        if (!label) return;

        const communeId = svgToDataCommune[label];

        setSelectedDistrict(label);
        setShowCard(true);

        if (communeId) {
            try {
                const data = await housingDataService.getStatsByCommune(communeId, searchType, operation);
                setStats(data);
            } catch {
                setStats(null);
            }
        } else {
            setStats(null);
        }
    };

    const handleClose = () => {
        setShowCard(false);
        setStats(null);
        setSelectedDistrict(null);
    };

    // Load all data on mount for coloring
    useEffect(() => {
        const loadAllStats = async () => {
            await housingDataService.loadData();
            // Get all stats for coloring with current filters
            const allData: HousingStats[] = [];
            for (const commune of Object.values(svgToDataCommune)) {
                const data = await housingDataService.getStatsByCommune(commune, searchType, operation);
                if (data) allData.push(data);
            }
            setAllStats(allData);
        };
        loadAllStats();
    }, [searchType, operation]); // Re-load when filters change
    
    useEffect(() => {
        if (selectedDistrict && showCard) {
            const communeId = svgToDataCommune[selectedDistrict];
            if (communeId) {
                housingDataService.getStatsByCommune(communeId, searchType, operation)
                    .then(data => setStats(data))
                    .catch(() => setStats(null));
            }
        }
    }, [searchType, operation, selectedDistrict, showCard]);
    
    useEffect(() => {
        if (stats && plotRef.current) {
            renderNormalCurve(stats, plotRef.current);
        }
    }, [stats]);

    return (
        <div id="main-layout">
            <div id="map">
                <div>
                    <h1 style={{color:'#0F172A', fontWeight: 600, fontSize: '1.5rem'}}>
                        Barcelona Housing Market
                    </h1>
                    
                    {/* Filter Controls */}
                    <div style={{ 
                        display: 'flex', 
                        gap: '16px', 
                        marginBottom: '16px',
                        alignItems: 'center'
                    }}>
                        <div>
                            <label style={{ 
                                fontSize: '14px', 
                                fontWeight: '500', 
                                color: '#374151',
                                marginRight: '8px'
                            }}>
                                Property Type:
                            </label>
                            <select 
                                value={searchType} 
                                onChange={(e) => setSearchType(e.target.value)}
                                style={{
                                    padding: '6px 12px',
                                    border: '1px solid #D1D5DB',
                                    borderRadius: '6px',
                                    fontSize: '14px',
                                    backgroundColor: 'white'
                                }}
                            >
                                <option value="vivienda">Residential</option>
                                <option value="comercial">Commercial</option>
                            </select>
                        </div>
                        
                        <div>
                            <label style={{ 
                                fontSize: '14px', 
                                fontWeight: '500', 
                                color: '#374151',
                                marginRight: '8px'
                            }}>
                                Operation:
                            </label>
                        <select 
                            value={operation} 
                            onChange={(e) => setOperation(e.target.value)}
                            style={{
                                padding: '6px 12px',
                                border: '1px solid #D1D5DB',
                                borderRadius: '6px',
                                fontSize: '14px',
                                backgroundColor: 'white'
                            }}
                        >
                            <option value="compra">Purchase</option>
                            <option value="alquiler">Rent</option>
                            {searchType === 'vivienda' && (
                                <option value="alquiler_habitacion">Room Rent</option>
                            )}
                        </select>
                        </div>
                    </div>
                    
                    <svg width="600" height="600" viewBox="0 0 1000 1000">
                        {districtPaths.map(({ label, d }) => (
                            <path
                                key={label}
                                className={`district ${selectedDistrict === label ? 'selected' : ''}`}
                                data-label={label}
                                d={d}
                                onClick={handleDistrictClick}
                                style={{ 
                                    cursor: 'pointer',
                                    fill: getPriceColor(svgToDataCommune[label], allStats)
                                }}
                            />
                        ))}
                        {districtLabels.map(({ label, x, y }) => (
                            <text className="label" x={x} y={y} key={label}>{label}</text>
                        ))}
                    </svg>
                </div>
            </div>

            {showCard && (
                <div className="info-card">
                    <button onClick={handleClose} style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        border: 'none',
                        background: '#F1F5F9',
                        borderRadius: '6px',
                        padding: '4px 8px',
                        cursor: 'pointer'
                    }}>✕</button>

                    {!stats ? (
                        <div><p>No data available.</p></div>
                    ) : (
                        <div>
                            <h2>{stats.commune.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2>
                            <p className="date">{new Date(stats.date).toLocaleDateString()}</p>
                            <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '16px' }}>
                                {stats.search_type === 'vivienda' ? 'Residential' : 'Commercial'} • 
                                {stats.operation === 'compra' ? ' Purchase' : 
                                stats.operation === 'alquiler' ? ' Rent' : ' Room Rent'}
                            </p>
                            
                            <div className="stat">
                                <span className="stat-label">Median {getPriceLabel(stats.operation)}:</span>
                                <span className="stat-value">
                                    {getPriceUnit(stats.operation)}{Math.round(getMedianPrice(stats)).toLocaleString('en-US')}
                                </span>
                            </div>
                            <div className="stat">
                                <span className="stat-label">Mean {getPriceLabel(stats.operation)}:</span>
                                <span className="stat-value">
                                    {getPriceUnit(stats.operation)}{Math.round(getMeanPrice(stats)).toLocaleString('en-US')}
                                </span>
                            </div>
                            <div className="stat">
                                <span className="stat-label">Observations:</span>
                                <span className="stat-value">{stats.num_observations.toLocaleString('en-US')}</span>
                            </div>
                            
                            {/* Show square meter info only for non-room rentals */}
                            {stats.operation !== 'alquiler_habitacion' && stats.avg_square_m && (
                                <div className="stat">
                                    <span className="stat-label">Avg. Size:</span>
                                    <span className="stat-value">{Math.round(stats.avg_square_m)} m²</span>
                                </div>
                            )}
                            
                            <div ref={plotRef} style={{ width: '100%', height: 200, marginTop: 16 }} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}