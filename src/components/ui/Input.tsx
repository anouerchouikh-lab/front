import React from 'react';
import { cn } from '../../lib/cn';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-bold mb-1 ml-1 uppercase tracking-wider">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={cn(
                        'w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-black/10 rounded-lg',
                        'focus:outline-none focus:border-black focus:ring-0 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
                        'transition-all duration-200 placeholder:text-black/30',
                        error && 'border-red-500 focus:border-red-500',
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="text-red-500 text-xs mt-1 ml-1 font-bold">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
