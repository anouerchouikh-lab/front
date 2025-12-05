import React, { useEffect } from 'react';
import { PersonalStatsCard } from '../components/gamification/PersonalStatsCard';
import { LeaderboardTable } from '../components/gamification/LeaderboardTable';
import { BadgeCollection } from '../components/gamification/BadgeCollection';
import { Card } from '../components/ui/Card';
import { useGamificationStore } from '../store/gamificationStore';
import { useAuthStore } from '../store/authStore';
import { mockLeaderboard, mockRanks, mockCurrentUser } from '../data/mockData';
import { Trophy, TrendingUp, Award, Target } from 'lucide-react';

export const DashboardPage: React.FC = () => {
    const { currentUser, leaderboard, setCurrentUser, setLeaderboard } = useGamificationStore();
    const { user } = useAuthStore();

    useEffect(() => {
        // Use authenticated user or mock user
        const userToUse = user || mockCurrentUser;
        setCurrentUser(userToUse);
        setLeaderboard(mockLeaderboard);
    }, [user, setCurrentUser, setLeaderboard]);

    if (!currentUser) return null;

    const currentRank = mockRanks.find(
        (r) => currentUser.points >= r.minPoints && currentUser.points <= r.maxPoints
    ) || mockRanks[0];

    const nextRank = mockRanks.find((r) => r.minPoints > currentUser.points);

    // Quick stats
    const quickStats = [
        {
            icon: Trophy,
            label: 'Your Rank',
            value: `#${currentUser.rank}`,
            change: '+2 this week',
            color: 'text-yellow-500',
            bgColor: 'bg-yellow-500/10',
        },
        {
            icon: Target,
            label: 'Total Points',
            value: currentUser.points.toLocaleString(),
            change: '+280 this week',
            color: 'text-accent',
            bgColor: 'bg-accent/10',
        },
        {
            icon: Award,
            label: 'Badges Earned',
            value: currentUser.badges.filter(b => !b.isLocked).length,
            change: `${currentUser.badges.filter(b => b.isLocked).length} locked`,
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
        },
        {
            icon: TrendingUp,
            label: 'Current Streak',
            value: '7 days',
            change: 'Keep it up!',
            color: 'text-green-500',
            bgColor: 'bg-green-500/10',
        },
    ];

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Welcome Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">
                        Welcome back, {currentUser.name.split(' ')[0]}! 👋
                    </h1>
                    <p className="text-black/60">
                        Here's your performance overview and leaderboard standings
                    </p>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {quickStats.map((stat) => (
                        <Card key={stat.label} variant="brutal">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-black/60 uppercase mb-2">
                                        {stat.label}
                                    </p>
                                    <p className="text-3xl font-bold mb-1">{stat.value}</p>
                                    <p className="text-xs text-black/50">{stat.change}</p>
                                </div>
                                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Personal Stats */}
                <PersonalStatsCard
                    user={currentUser}
                    currentRank={currentRank}
                    nextRank={nextRank}
                />

                {/* Leaderboard Section */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-3xl font-bold">Global Leaderboard</h2>
                            <p className="text-black/60">Top performers this month</p>
                        </div>
                    </div>
                    <LeaderboardTable
                        entries={leaderboard}
                        currentUserId={currentUser.id}
                    />
                </div>

                {/* Badges Section */}
                <div>
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold mb-2">Your Achievements</h2>
                        <p className="text-black/60">
                            {currentUser.badges.filter(b => !b.isLocked).length} of {currentUser.badges.length} badges unlocked
                        </p>
                    </div>
                    <BadgeCollection badges={currentUser.badges} />
                </div>

                {/* Recent Activity */}
                <Card variant="brutal">
                    <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 pb-3 border-b-2 border-black/10">
                            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                                <Trophy className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">Completed CS101 Assignment 3</p>
                                <p className="text-sm text-black/60">Earned 100 points</p>
                            </div>
                            <span className="text-sm text-black/40">2 hours ago</span>
                        </div>
                        <div className="flex items-center gap-3 pb-3 border-b-2 border-black/10">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <Award className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">Unlocked "Code Master" badge</p>
                                <p className="text-sm text-black/60">Achieved 100% on 3 assignments</p>
                            </div>
                            <span className="text-sm text-black/40">1 day ago</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-purple-600" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">Moved up 2 ranks</p>
                                <p className="text-sm text-black/60">Now ranked #12 globally</p>
                            </div>
                            <span className="text-sm text-black/40">3 days ago</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
