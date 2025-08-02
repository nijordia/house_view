import { Request, Response } from 'express';
import { HousingStatsService } from '../services/housingStatsService';

export class MapController {
    private housingStatsService: HousingStatsService;

    constructor(housingStatsService: HousingStatsService) {
        this.housingStatsService = housingStatsService;
    }

    public getHousingStats = (req: Request, res: Response): void => {
        const { communeId } = req.params;
        const stats = this.housingStatsService.getStatsByCommune(communeId);
        if (stats) {
            res.status(200).json(stats);
        } else {
            res.status(404).json({ message: 'Commune not found' });
        }
    };
}