import React from 'react';
import { Tabs } from '../components/ui/Tabs';
import { CompetitionCard } from '../components/competitions/CompetitionCard';
import { mockCompetitions } from '../data/mockData';

export const CompetitionsPage: React.FC = () => {
    const activeCompetitions = mockCompetitions.filter((c) => c.status === 'active');
    const upcomingCompetitions = mockCompetitions.filter((c) => c.status === 'upcoming');
    const endedCompetitions = mockCompetitions.filter((c) => c.status === 'ended');

    const tabs = [
        {
            id: 'active',
            label: `Active (${activeCompetitions.length})`,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeCompetitions.map((competition) => (
                        <CompetitionCard
                            key={competition.id}
                            competition={competition}
                            onClick={(id) => console.log('Competition clicked:', id)}
                        />
                    ))}
                    {activeCompetitions.length === 0 && (
                        <div className="col-span-full text-center py-16 text-black/60">
                            No active competitions
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: 'upcoming',
            label: `Upcoming (${upcomingCompetitions.length})`,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingCompetitions.map((competition) => (
                        <CompetitionCard
                            key={competition.id}
                            competition={competition}
                            onClick={(id) => console.log('Competition clicked:', id)}
                        />
                    ))}
                    {upcomingCompetitions.length === 0 && (
                        <div className="col-span-full text-center py-16 text-black/60">
                            No upcoming competitions
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: 'past',
            label: `Past (${endedCompetitions.length})`,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {endedCompetitions.map((competition) => (
                        <CompetitionCard
                            key={competition.id}
                            competition={competition}
                            onClick={(id) => console.log('Competition clicked:', id)}
                        />
                    ))}
                    {endedCompetitions.length === 0 && (
                        <div className="col-span-full text-center py-16 text-black/60">
                            No past competitions
                        </div>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">Competitions</h1>
                    <p className="text-black/60">
                        Compete with peers and win amazing prizes
                    </p>
                </div>

                {/* Tabs */}
                <Tabs tabs={tabs} defaultTab="active" />
            </div>
        </div>
    );
};
