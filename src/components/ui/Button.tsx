import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/cn';


interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'solid-brutal' | 'glass' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'solid-brutal', size = 'md', children, ...props }, ref) => {
        const variants = {
            'solid-brutal': 'bg-primary text-secondary border-2 border-primary hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_var(--color-accent)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200',
            'glass': 'bg-surface backdrop-blur-md border border-white/20 text-text hover:bg-white/40 active:bg-white/50 transition-colors',
            'outline': 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-secondary transition-colors',
            'ghost': 'bg-transparent text-text hover:bg-black/5 transition-colors',
        };

        const sizes = {
            'sm': 'px-3 py-1.5 text-sm',
            'md': 'px-6 py-3 text-base',
            'lg': 'px-8 py-4 text-lg font-bold',
        };

        return (
            <motion.button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center font-display font-medium disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    className
                )}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';
