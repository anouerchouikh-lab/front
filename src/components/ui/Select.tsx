import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/cn';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: { value: string; label: string }[];
    error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, options, error, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-bold mb-1 ml-1 uppercase tracking-wider">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <select
                        ref={ref}
                        className={cn(
                            'w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-black/10 rounded-lg',
                            'focus:outline-none focus:border-black focus:ring-0 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
                            'transition-all duration-200 appearance-none cursor-pointer',
                            error && 'border-red-500 focus:border-red-500',
                            className
                        )}
                        {...props}
                    >
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
                </div>
                {error && (
                    <p className="text-red-500 text-xs mt-1 ml-1 font-bold">{error}</p>
                )}
            </div>
        );
    }
);

Select.displayName = 'Select';
