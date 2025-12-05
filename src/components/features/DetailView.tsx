import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const DetailView = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="mb-8">
                    <Button variant="ghost" className="mb-8">← Back to Listing</Button>
                    <span className="text-accent font-bold tracking-wider uppercase">Feature Focus</span>
                    <h1 className="text-5xl md:text-7xl font-display font-black mt-4 mb-8">
                        THE GLASS <br /> PROTOCOL
                    </h1>
                </div>

                <div className="aspect-video w-full bg-black/5 rounded-2xl mb-12 border-2 border-black/10" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 prose prose-lg">
                        <p className="text-xl leading-relaxed mb-6">
                            Glassmorphism isn't just about blur. It's about depth, hierarchy, and the subtle interplay of light and shadow.
                            Combined with Brutalism, it creates a unique tension between the ethereal and the concrete.
                        </p>
                        <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8">
                            <li>Backdrop filter blur effects</li>
                            <li>High contrast borders</li>
                            <li>Asymmetric grid layouts</li>
                            <li>Micro-interactions with physics</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <Card variant="brutal" className="p-6">
                            <h4 className="font-bold mb-4 uppercase tracking-wider">Project Stats</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="opacity-60">Version</span>
                                    <span className="font-mono">1.0.0</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="opacity-60">License</span>
                                    <span className="font-mono">MIT</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="opacity-60">Downloads</span>
                                    <span className="font-mono">12k+</span>
                                </div>
                            </div>
                            <Button className="w-full mt-6" variant="solid-brutal">Download</Button>
                        </Card>
                    </div>
                </div>
            </motion.div>
        </article>
    );
};
