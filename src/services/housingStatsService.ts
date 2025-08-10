import fs from 'fs';
import path from 'path';

export class HousingStatsService {
    private housingData: any[];

    constructor() {
        const dataPath = path.join(__dirname, '..', '..', 'public', 'latest_data.json');
        this.housingData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    }

    public getStatsByCommune(commune: string): any | null {
        // Return the latest entry for the commune
        const stats = this.housingData
            .filter(item => item.commune === commune)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        return stats.length > 0 ? stats[0] : null;
    }
}