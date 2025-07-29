import { svgToDataCommune } from './communeMap.js';
import { showInfoCard, hideInfoCard } from './infoCard.js';

const closeBtn = document.getElementById('close-card');

document.querySelectorAll('svg .district').forEach((path) => {
    path.addEventListener('click', () => {
        const label = path.getAttribute('data-label');
        const communeId = svgToDataCommune[label];
        if (communeId) {
            fetch(`/api/housing-stats/${communeId}`)
                .then(response => response.json())
                .then(data => showInfoCard(data))
                .catch(() => showInfoCard(null));
        } else {
            showInfoCard(null);
        }
    });
});

closeBtn.addEventListener('click', hideInfoCard);