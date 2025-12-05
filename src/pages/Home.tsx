import { Hero } from '../components/features/Hero';
import { CardGrid } from '../components/features/CardGrid';

const FEATURED_ITEMS = [
    { id: 1, title: 'Glass Card', description: 'A beautiful glassmorphic card component with hover effects.', category: 'UI' },
    { id: 2, title: 'Neo Button', description: 'Brutalist button with hard shadows and click animations.', category: 'Input' },
    { id: 3, title: 'Fluid Type', description: 'Typography system that scales perfectly across devices.', category: 'System' },
];

export const Home = () => {
    return (
        <div className="animate-in fade-in duration-500">
            <Hero />
            <CardGrid items={FEATURED_ITEMS} />

            <section className="py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                        READY TO BUILD?
                    </h2>
                    <p className="text-xl opacity-70 max-w-2xl mx-auto mb-12">
                        This prototype is designed to be taken apart, broken, and rebuilt.
                        The code is yours. The design is yours. The night is yours.
                    </p>
                </div>
            </section>
        </div>
    );
};
