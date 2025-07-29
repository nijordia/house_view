export function showInfoCard(stats) {
    const infoCard = document.getElementById('info-card');
    const introContent = document.getElementById('intro-content');
    const statsContent = document.getElementById('stats-content');
    const closeBtn = document.getElementById('close-card');

    if (!stats || stats.message) {
        statsContent.innerHTML = `<p>No data available.</p>`;
    } else {
        statsContent.innerHTML = `
            <p><strong>District:</strong> ${stats.commune.replace(/-/g, ' ')}</p>
            <p><strong>Date:</strong> ${stats.date}</p>
            <p><strong>Median Price per sqm:</strong> €${stats.median_price_per_sqm.toFixed(0)}</p>
            <p><strong>Mean Price per sqm:</strong> €${stats.mean_price_per_sqm.toFixed(0)}</p>
            <p><strong>Observations:</strong> ${stats.num_observations}</p>
            <div id="curve" style="width:240px;height:80px;"></div>
        `;
        renderNormalCurve(stats);
    }
    introContent.style.display = 'none';
    statsContent.style.display = '';
    closeBtn.style.display = '';
    infoCard.classList.remove('hidden');
}

export function hideInfoCard() {
    const introContent = document.getElementById('intro-content');
    const statsContent = document.getElementById('stats-content');
    const closeBtn = document.getElementById('close-card');
    introContent.style.display = '';
    statsContent.style.display = 'none';
    closeBtn.style.display = 'none';
}

// In infoCard.js
function renderNormalCurve(stats) {
    const mean = stats.mean_price_per_sqm;
    const sd = stats.std_dev_price_per_sqm;
    const min = stats.min_price_per_sqm;
    const max = stats.max_price_per_sqm;

    // Generate x and y for normal curve
    const x = [];
    const y = [];
    for (let i = 0; i <= 100; i++) {
        const val = min + (i / 100) * (max - min);
        x.push(val);
        y.push(Math.exp(-0.5 * Math.pow((val - mean) / sd, 2)) / (sd * Math.sqrt(2 * Math.PI)));
    }

    Plotly.newPlot('curve', [{
        x,
        y,
        type: 'scatter',
        mode: 'lines',
        line: { color: '#1e90ff' },
        hovertemplate: '€/sqm: %{x:.0f}<extra></extra>'
    }], {
        margin: { t: 10, b: 30, l: 30, r: 10 },
        xaxis: {
            title: '€/sqm',
            showgrid: false,
            tickformat: ',d',
            tickangle: 0, 
            fixedrange: true // Prevent zoom/pan
        },
        yaxis: {
            showticklabels: false,
            showgrid: false,
            fixedrange: true // Prevent zoom/pan
        },
        height: 120,
        width: 260
    }, {
        displayModeBar: false, // Hide toolbar
        // staticPlot: true      // Disable all interactivity
    });
}
function normalPDF(x, mean, sd) {
    return Math.exp(-0.5 * Math.pow((x - mean) / sd, 2)) / (sd * Math.sqrt(2 * Math.PI));
}

function drawVLine(ctx, value, min, max, width, height, padding, color) {
    const x = padding + ((value - min) / (max - min)) * width;
    ctx.beginPath();
    ctx.moveTo(x, padding);
    ctx.lineTo(x, padding + height);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
}