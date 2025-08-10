import { HousingStats } from '../types';

class HousingDataService {
  private data: HousingStats[] | null = null;

  async loadData(): Promise<void> {
    if (this.data) return;
    
    try {
      const response = await fetch('/latest_data.json');
      this.data = await response.json();
    } catch (error) {
      console.error('Failed to load housing data:', error);
      this.data = [];
    }
  }

  async getStatsByCommune(commune: string): Promise<HousingStats | null> {
    await this.loadData();
    
    if (!this.data) return null;

    const stats = this.data
      .filter(item => item.commune === commune)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return stats.length > 0 ? stats[0] : null;
  }
}

export const housingDataService = new HousingDataService();