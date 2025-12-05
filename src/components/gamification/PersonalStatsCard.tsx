import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Progress } from '../ui/Progress';
import { Trophy, Target, Flame, Star } from 'lucide-react';
import type { User, Rank } from '../../types';

interface PersonalStatsCardProps {
    user: User;
    currentRank: Rank;
    nextRank?: Rank;
}

export const PersonalStatsCard: React.FC<PersonalStatsCardProps> = ({
    user,
    currentRank,
    nextRank,
}) => {
    const progressToNextRank = nextRank
        ? ((user.points - currentRank.minPoints) / (nextRank.minPoints - currentRank.minPoints)) * 100
        : 100;

    const stats = [
        { icon: Trophy, label: 'Global Rank', value: `#${user.rank}`, color: 'text-yellow-500' },
        { icon: Target, label: 'Total Points', value: user.points.toLocaleString(), color: 'text-accent' },
        { icon: Flame, label: 'Current Streak', value: '7 days', color: 'text-orange-500' },
        { icon: Star, label: 'Badges Earned', value: user.badges.filter(b => !b.isLocked).length, color: 'text-blue-500' },
    ];

    return (
        <Card variant="brutal" className="overflow-visible">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold">Your Stats</h3>
                        <p className="text-black/60">Keep up the great work!</p>
                    </div>
                    <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                        style={{ backgroundColor: currentRank.color }}
                    >
                        {currentRank.level}
                    </div>
                </div>

                {/* Rank Progress */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold text-black/60">Current Rank</p>
                            <p className="text-xl font-bold" style={{ color: currentRank.color }}>
                                {currentRank.name}
                            </p>
                        </div>
                        {nextRank && (
                            <div className="text-right">
                                <p className="text-sm font-bold text-black/60">Next Rank</p>
                                <p className="text-xl font-bold" style={{ color: nextRank.color }}>
                                    {nextRank.name}
                                </p>
                            </div>
                        )}
                    </div>

                    {nextRank && (
                        <>
                            <Progress value={progressToNextRank} variant="linear" size="lg" />
                            <p className="text-sm text-black/60 text-center">
                                <span className="font-bold text-black">
                                    {nextRank.minPoints - user.points}
                                </span>{' '}
                                points to {nextRank.name}
                            </p>
                        </>
                    )}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="bg-black/5 rounded-lg p-4 space-y-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            <p className="text-xs font-bold text-black/60 uppercase">
                                {stat.label}
                            </p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Card>
    );
};
