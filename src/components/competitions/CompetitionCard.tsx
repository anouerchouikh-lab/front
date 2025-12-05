import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Gift } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useCountdown } from '../../hooks/useCountdown';
import type { Competition } from '../../types';

interface CompetitionCardProps {
    competition: Competition;
    onClick?: (id: string) => void;
}

export const CompetitionCard: React.FC<CompetitionCardProps> = ({
    competition,
    onClick,
}) => {
    const countdown = useCountdown(
        competition.status === 'active' ? competition.endDate : competition.startDate
    );

    const getStatusVariant = (status: Competition['status']) => {
        switch (status) {
            case 'upcoming':
                return 'info';
            case 'active':
                return 'success';
            case 'ended':
                return 'default';
        }
    };

    return (
        <Card
            variant="brutal"
            className="hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            onClick={() => onClick?.(competition.id)}
        >
            <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <Badge variant={getStatusVariant(competition.status)} size="sm" className="mb-2">
                            {competition.status.toUpperCase()}
                        </Badge>
                        <h3 className="text-xl font-bold line-clamp-2">{competition.title}</h3>
                    </div>
                    <Trophy className="w-8 h-8 text-yellow-500" />
                </div>

                {/* Description */}
                <p className="text-sm text-black/70 line-clamp-2">
                    {competition.description}
                </p>

                {/* Countdown */}
                {!countdown.isExpired && (
                    <div className="bg-accent/10 rounded-lg p-4">
                        <p className="text-xs font-bold text-black/60 mb-2">
                            {competition.status === 'active' ? 'ENDS IN' : 'STARTS IN'}
                        </p>
                        <div className="grid grid-cols-4 gap-2 text-center">
                            <div>
                                <div className="text-2xl font-bold">{countdown.days}</div>
                                <div className="text-xs text-black/60">Days</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{countdown.hours}</div>
                                <div className="text-xs text-black/60">Hours</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{countdown.minutes}</div>
                                <div className="text-xs text-black/60">Mins</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{countdown.seconds}</div>
                                <div className="text-xs text-black/60">Secs</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-black/60" />
                        <span>{competition.participants} participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-black/60" />
                        <span>Team of {competition.maxTeamSize}</span>
                    </div>
                </div>

                {/* Prize */}
                {competition.prize && (
                    <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-3 flex items-center gap-3">
                        <Gift className="w-5 h-5 text-yellow-600" />
                        <div>
                            <p className="text-xs font-bold text-black/60">PRIZE</p>
                            <p className="font-bold text-sm">{competition.prize}</p>
                        </div>
                    </div>
                )}

                {/* Action Button */}
                <Button
                    variant="solid-brutal"
                    size="md"
                    className="w-full"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick?.(competition.id);
                    }}
                >
                    {competition.status === 'upcoming' && 'Register Now'}
                    {competition.status === 'active' && 'Join Competition'}
                    {competition.status === 'ended' && 'View Results'}
                </Button>
            </div>
        </Card>
    );
};
