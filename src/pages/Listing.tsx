import { CardGrid } from '../components/features/CardGrid';
import { Input } from '../components/ui/Input';

const ALL_ITEMS = [
    { id: 1, title: 'Glass Card', description: 'A beautiful glassmorphic card component.', category: 'UI' },
    { id: 2, title: 'Neo Button', description: 'Brutalist button with hard shadows.', category: 'Input' },
    { id: 3, title: 'Fluid Type', description: 'Typography system that scales perfectly.', category: 'System' },
    { id: 4, title: 'Modal View', description: 'Accessible modal with backdrop blur.', category: 'Overlay' },
    { id: 5, title: 'Grid System', description: 'Responsive grid layout with auto-fill.', category: 'Layout' },
    { id: 6, title: 'Theme Store', description: 'Zustand store for global theme management.', category: 'State' },
];

export const Listing = () => {
    return (
        <div className="pt-12 animate-in fade-in duration-500">
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <h1 className="text-5xl font-display font-black mb-8">COMPONENT LIBRARY</h1>
                <div className="max-w-md">
                    <Input placeholder="Search components..." label="Filter" />
                </div>
            </div>
            <CardGrid items={ALL_ITEMS} />
        </div>
    );
};
