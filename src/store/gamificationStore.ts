import { create } from 'zustand';
import type { User, Badge, PointActivity, Rank } from '../types';

interface GamificationState {
    currentUser: User | null;
    leaderboard: any[];
    pointActivities: PointActivity[];
    ranks: Rank[];

    setCurrentUser: (user: User) => void;
    setLeaderboard: (leaderboard: any[]) => void;
    addPoints: (points: number, activity: string, category: PointActivity['category']) => void;
    unlockBadge: (badgeId: string) => void;
}

export const useGamificationStore = create<GamificationState>((set) => ({
    currentUser: null,
    leaderboard: [],
    pointActivities: [],
    ranks: [],

    setCurrentUser: (user) => set({ currentUser: user }),

    setLeaderboard: (leaderboard) => set({ leaderboard }),

    addPoints: (points, activity, category) => {
        set((state) => {
            if (!state.currentUser) return state;

            const newActivity: PointActivity = {
                id: Math.random().toString(),
                userId: state.currentUser.id,
                points,
                activity,
                timestamp: new Date(),
                category,
            };

            return {
                currentUser: {
                    ...state.currentUser,
                    points: state.currentUser.points + points,
                },
                pointActivities: [newActivity, ...state.pointActivities],
            };
        });
    },

    unlockBadge: (badgeId) => {
        set((state) => {
            if (!state.currentUser) return state;

            return {
                currentUser: {
                    ...state.currentUser,
                    badges: state.currentUser.badges.map((badge) =>
                        badge.id === badgeId
                            ? { ...badge, isLocked: false, earnedAt: new Date() }
                            : badge
                    ),
                },
            };
        });
    },
}));
