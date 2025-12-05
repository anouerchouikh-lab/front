import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, className }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

    return (
        <div className={cn('w-full', className)}>
            {/* Tab Headers */}
            <div className="flex gap-2 border-b-2 border-black mb-4" role="tablist">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        aria-controls={`panel-${tab.id}`}
                        id={`tab-${tab.id}`}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            'relative px-4 py-2 font-bold transition-colors',
                            activeTab === tab.id
                                ? 'text-primary'
                                : 'text-black/50 hover:text-black/70'
                        )}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                layoutId="activeTab"
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div
                role="tabpanel"
                id={`panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
            >
                {activeContent}
            </div>
        </div>
    );
};
