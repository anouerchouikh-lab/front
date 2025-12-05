import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { Badge } from '../../types';

interface BadgeCollectionProps {
    badges: Badge[];
}

export const BadgeCollection: React.FC<BadgeCollectionProps> = ({ badges }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {badges.map((badge, index) => (
                <motion.div
                    key={badge.id}
                    className={cn(
                        'relative bg-white border-2 border-black rounded-xl p-4 text-center space-y-2',
                        badge.isLocked
                            ? 'opacity-50 grayscale'
                            : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                    )}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: badge.isLocked ? 0.5 : 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={!badge.isLocked ? { scale: 1.05 } : {}}
                >
                    {/* Badge Icon */}
                    <div className="text-4xl">{badge.icon}</div>

                    {/* Badge Name */}
                    <h4 className="font-bold text-sm">{badge.name}</h4>

                    {/* Badge Description */}
                    <p className="text-xs text-black/60 line-clamp-2">
                        {badge.description}
                    </p>

                    {/* Earned Date */}
                    {badge.earnedAt && !badge.isLocked && (
                        <p className="text-xs text-accent font-bold">
                            {new Date(badge.earnedAt).toLocaleDateString()}
                        </p>
                    )}

                    {/* Lock Overlay */}
                    {badge.isLocked && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/80 rounded-full p-3">
                                <Lock className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};
