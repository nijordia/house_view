import { Router } from 'express';
import { MapController } from '../controllers/mapController';
import { HousingStatsService } from '../services/housingStatsService';

export function setMapRoutes(app: Router) {
    const housingStatsService = new HousingStatsService();
    const mapController = new MapController(housingStatsService);
    app.get('/api/housing-stats/:communeId', mapController.getHousingStats);
}