import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/cn';


interface CardProps extends HTMLMotionProps<"div"> {
    variant?: 'glass' | 'brutal' | 'flat';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'glass', children, ...props }, ref) => {
        const variants = {
            'glass': 'bg-surface backdrop-blur-lg border border-white/30 shadow-lg',
            'brutal': 'bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
            'flat': 'bg-white border border-gray-200',
        };

        return (
            <motion.div
                ref={ref}
                className={cn(
                    'rounded-xl p-6 overflow-hidden',
                    variants[variant],
                    className
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = 'Card';
