import React, { useEffect } from 'react';
import { Tabs } from '../components/ui/Tabs';
import { PersonalStatsCard } from '../components/gamification/PersonalStatsCard';
import { LeaderboardTable } from '../components/gamification/LeaderboardTable';
import { BadgeCollection } from '../components/gamification/BadgeCollection';
import { useGamificationStore } from '../store/gamificationStore';
import { mockCurrentUser, mockLeaderboard, mockRanks } from '../data/mockData';

export const LeaderboardPage: React.FC = () => {
    const { currentUser, leaderboard, setCurrentUser, setLeaderboard } = useGamificationStore();

    useEffect(() => {
        setCurrentUser(mockCurrentUser);
        setLeaderboard(mockLeaderboard);
    }, [setCurrentUser, setLeaderboard]);

    if (!currentUser) return null;

    const currentRank = mockRanks.find(
        (r) => currentUser.points >= r.minPoints && currentUser.points <= r.maxPoints
    ) || mockRanks[0];

    const nextRank = mockRanks.find((r) => r.minPoints > currentUser.points);

    const tabs = [
        {
            id: 'leaderboard',
            label: 'Leaderboard',
            content: (
                <LeaderboardTable
                    entries={leaderboard}
                    currentUserId={currentUser.id}
                />
            ),
        },
        {
            id: 'badges',
            label: 'Badges',
            content: (
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Your Badges</h3>
                        <p className="text-black/60">
                            Collect badges by completing challenges and achievements
                        </p>
                    </div>
                    <BadgeCollection badges={currentUser.badges} />
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">Leaderboard & Achievements</h1>
                    <p className="text-black/60">
                        Track your progress and compete with peers
                    </p>
                </div>

                {/* Personal Stats */}
                <PersonalStatsCard
                    user={currentUser}
                    currentRank={currentRank}
                    nextRank={nextRank}
                />

                {/* Tabs */}
                <Tabs tabs={tabs} defaultTab="leaderboard" />
            </div>
        </div>
    );
};
