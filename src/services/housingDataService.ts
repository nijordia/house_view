import { HousingStats } from '../types';

class HousingDataService {
  private data: HousingStats[] | null = null;

  async loadData(): Promise<void> {
    if (this.data) return;
    
    try {
      const response = await fetch('/latest_data.json');
      this.data = await response.json();
      console.log('Loaded data:', this.data.length, 'entries');
    } catch (error) {
      console.error('Failed to load housing data:', error);
      this.data = [];
    }
  }

  async getStatsByCommune(commune: string, searchType: string = 'vivienda', operation: string = 'compra'): Promise<HousingStats | null> {
    await this.loadData();
    
    if (!this.data) return null;

    // Filter data - some entries use date-based IDs, others use commune names
    const stats = this.data
      .filter(item => {
        // Handle both date-based commune IDs and actual commune names
        const communeMatch = item.commune === commune || 
                           (typeof item.commune === 'string' && item.commune.includes(commune));
        
        return communeMatch && 
               item.search_type === searchType && 
               item.operation === operation;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    console.log(`Found ${stats.length} entries for commune: ${commune}, type: ${searchType}, operation: ${operation}`);
    
    return stats.length > 0 ? stats[0] : null;
  }

  // Add debug method
  async getAllCommuneIds(): Promise<string[]> {
    await this.loadData();
    if (!this.data) return [];
    
    const communes = [...new Set(this.data.map(item => item.commune))];
    console.log('Available commune IDs:', communes);
    return communes;
  }
}

export const housingDataService = new HousingDataService();