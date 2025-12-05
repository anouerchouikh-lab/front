import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface ProgressProps {
    value: number;
    max?: number;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'circular' | 'linear';
    showLabel?: boolean;
    className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
    value,
    max = 100,
    size = 'md',
    variant = 'linear',
    showLabel = false,
    className,
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const sizes = {
        sm: variant === 'circular' ? 'w-12 h-12' : 'h-1',
        md: variant === 'circular' ? 'w-16 h-16' : 'h-2',
        lg: variant === 'circular' ? 'w-24 h-24' : 'h-3',
    };

    if (variant === 'circular') {
        const circleSize = size === 'sm' ? 48 : size === 'md' ? 64 : 96;
        const strokeWidth = size === 'sm' ? 4 : size === 'md' ? 6 : 8;
        const radius = (circleSize - strokeWidth) / 2;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;

        return (
            <div className={cn('relative inline-flex items-center justify-center', className)}>
                <svg className={sizes[size]} viewBox={`0 0 ${circleSize} ${circleSize}`}>
                    <circle
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        className="text-black/10"
                    />
                    <motion.circle
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="text-accent"
                        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    />
                </svg>
                {showLabel && (
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                        {Math.round(percentage)}%
                    </span>
                )}
            </div>
        );
    }

    return (
        <div className={cn('w-full bg-black/10 rounded-full overflow-hidden', sizes[size], className)}>
            <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />
        </div>
    );
};
