import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface Item {
    id: number;
    title: string;
    description: string;
    category: string;
}

interface CardGridProps {
    items: Item[];
}

export const CardGrid = ({ items }: CardGridProps) => {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">LATEST DROPS</h2>
                    <p className="text-xl opacity-60">Fresh components for your next project.</p>
                </div>
                <Button variant="outline">View All</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                    <Card
                        key={item.id}
                        variant="glass"
                        className="group hover:bg-white/60 transition-colors cursor-pointer"
                    >
                        <div className="aspect-video bg-black/5 rounded-lg mb-6 group-hover:bg-accent/10 transition-colors" />
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider border border-black px-2 py-1 rounded-full">
                                {item.category}
                            </span>
                            <span className="font-mono text-sm opacity-50">#{item.id.toString().padStart(3, '0')}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                        <p className="opacity-60 mb-6">{item.description}</p>
                        <Button size="sm" variant="ghost" className="pl-0 hover:pl-2 transition-all">
                            Read More →
                        </Button>
                    </Card>
                ))}
            </div>
        </section>
    );
};
