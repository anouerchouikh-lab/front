import { apiClient } from '../lib/api/client';
import type { Competition } from '../types';

export const competitionsService = {
    async getCompetitions(): Promise<{ success: boolean; data: Competition[] }> {
        return apiClient.get('/competitions');
    },

    async getActive(): Promise<{ success: boolean; data: Competition[] }> {
        return apiClient.get('/competitions/active');
    },

    async getUpcoming(): Promise<{ success: boolean; data: Competition[] }> {
        return apiClient.get('/competitions/upcoming');
    },

    async getPast(): Promise<{ success: boolean; data: Competition[] }> {
        return apiClient.get('/competitions/past');
    },

    async getCompetitionById(competitionId: string): Promise<{ success: boolean; data: Competition }> {
        return apiClient.get(`/competitions/${competitionId}`);
    },

    async register(competitionId: string): Promise<void> {
        return apiClient.post(`/competitions/${competitionId}/register`);
    },

    async unregister(competitionId: string): Promise<void> {
        return apiClient.post(`/competitions/${competitionId}/unregister`);
    },

    async getLeaderboard(competitionId: string): Promise<{ success: boolean; data: any[] }> {
        return apiClient.get(`/competitions/${competitionId}/leaderboard`);
    },

    async submitEntry(competitionId: string, data: FormData): Promise<any> {
        return apiClient.post(`/competitions/${competitionId}/submit`, data, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    },
};
