import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Trophy, Medal, Award } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { cn } from '../../lib/cn';

interface LeaderboardEntry {
    rank: number;
    previousRank?: number;
    userId: string;
    name: string;
    avatar?: string;
    department: string;
    points: number;
    weeklyPoints: number;
}

interface LeaderboardTableProps {
    entries: LeaderboardEntry[];
    currentUserId?: string;
}

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({
    entries,
    currentUserId,
}) => {
    const getRankIcon = (rank: number) => {
        if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
        if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
        if (rank === 3) return <Award className="w-6 h-6 text-orange-600" />;
        return null;
    };

    const getRankChange = (current: number, previous?: number) => {
        if (!previous || current === previous) {
            return <Minus className="w-4 h-4 text-black/30" />;
        }
        if (current < previous) {
            return (
                <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-bold">+{previous - current}</span>
                </div>
            );
        }
        return (
            <div className="flex items-center gap-1 text-red-600">
                <TrendingDown className="w-4 h-4" />
                <span className="text-xs font-bold">-{current - previous}</span>
            </div>
        );
    };

    return (
        <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Table Header */}
            <div className="bg-black text-white px-6 py-4 grid grid-cols-12 gap-4 items-center font-bold text-sm">
                <div className="col-span-1">Rank</div>
                <div className="col-span-1">Change</div>
                <div className="col-span-4">Student</div>
                <div className="col-span-2">Department</div>
                <div className="col-span-2 text-right">Total Points</div>
                <div className="col-span-2 text-right">Weekly</div>
            </div>

            {/* Table Body */}
            <div className="divide-y-2 divide-black/10">
                {entries.map((entry, index) => {
                    const isCurrentUser = entry.userId === currentUserId;

                    return (
                        <motion.div
                            key={entry.userId}
                            className={cn(
                                'px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-accent/5 transition-colors',
                                isCurrentUser && 'bg-accent/10 font-bold'
                            )}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {/* Rank */}
                            <div className="col-span-1 flex items-center gap-2">
                                {getRankIcon(entry.rank) || (
                                    <span className="text-lg font-bold">#{entry.rank}</span>
                                )}
                            </div>

                            {/* Change */}
                            <div className="col-span-1">
                                {getRankChange(entry.rank, entry.previousRank)}
                            </div>

                            {/* Student */}
                            <div className="col-span-4 flex items-center gap-3">
                                <Avatar
                                    src={entry.avatar}
                                    alt={entry.name}
                                    size="md"
                                    fallback={entry.name}
                                />
                                <span className="font-medium truncate">{entry.name}</span>
                                {isCurrentUser && (
                                    <Badge variant="info" size="sm">
                                        You
                                    </Badge>
                                )}
                            </div>

                            {/* Department */}
                            <div className="col-span-2">
                                <Badge size="sm">{entry.department}</Badge>
                            </div>

                            {/* Total Points */}
                            <div className="col-span-2 text-right">
                                <span className="text-lg font-bold text-accent">
                                    {entry.points.toLocaleString()}
                                </span>
                            </div>

                            {/* Weekly Points */}
                            <div className="col-span-2 text-right">
                                <span className="text-sm text-black/60">
                                    +{entry.weeklyPoints}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
