import React from 'react';
import { cn } from '../../lib/cn';

interface AvatarProps {
    src?: string;
    alt: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    fallback?: string;
    className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    size = 'md',
    fallback,
    className,
}) => {
    const sizes = {
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-12 h-12 text-base',
        xl: 'w-16 h-16 text-lg',
    };

    const initials = fallback || alt.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

    return (
        <div
            className={cn(
                'relative inline-flex items-center justify-center rounded-full overflow-hidden bg-accent text-white font-bold',
                sizes[size],
                className
            )}
        >
            {src ? (
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            ) : (
                <span>{initials}</span>
            )}
        </div>
    );
};
