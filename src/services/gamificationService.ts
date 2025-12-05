import { db, delay } from '../lib/mock/db';
import type { Badge, PointActivity } from '../types';

export const gamificationService = {
    async getLeaderboard(type: 'global' | 'department' | 'course' = 'global', id?: string): Promise<{ success: boolean; data: any[] }> {
        await delay();
        return { success: true, data: db.users.sort((a, b) => b.points - a.points).slice(0, 10) };
    },

    async getMyPoints(): Promise<{ success: boolean; data: any }> {
        await delay();
        const user = db.users[0]; // Assuming current user is first for now or found by session
        return {
            success: true,
            data: {
                points: user.points,
                level: Math.floor(user.points / 100) + 1,
                nextLevelPercentage: user.points % 100
            }
        };
    },

    async simulateActivity(type: string = 'daily_login'): Promise<{ success: boolean; data: { points: number; user: any }; message: string }> {
        await delay();
        const user = db.users[0];
        const pointsAwarded = Math.floor(Math.random() * 20) + 10;

        user.points += pointsAwarded;
        db.saveUser(user);

        // Record activity
        db.addPointActivity({
            id: Math.random().toString(),
            userId: user.id,
            points: pointsAwarded,
            activity: 'Simulated Activity: ' + type,
            timestamp: new Date(),
            category: 'participation'
        });

        return {
            success: true,
            data: { points: user.points, user },
            message: `You earned ${pointsAwarded} XP (Local)!`
        };
    },

    async getPointsHistory(): Promise<{ success: boolean; data: PointActivity[] }> {
        await delay();
        return { success: true, data: db.pointActivities };
    },

    async getMyBadges(): Promise<{ success: boolean; data: Badge[] }> {
        await delay();
        return { success: true, data: [] };
    },

    async getAvailableBadges(): Promise<{ success: boolean; data: Badge[] }> {
        await delay();
        return { success: true, data: [] };
    },

    async getMyStreak(): Promise<{ success: boolean; data: any }> {
        await delay();
        return { success: true, data: { current: 5, longest: 10 } };
    },

    async getMyStats(): Promise<{ success: boolean; data: any }> {
        await delay();
        return { success: true, data: { coursesCompleted: 1, totalPoints: 1200 } };
    },
};
