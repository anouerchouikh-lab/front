import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-display font-black leading-none mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        BUILD <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            BREAK
                        </span> <br />
                        CREATE
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-black/60 mb-8 max-w-lg"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        The ultimate hackathon starter kit. Glassomorphic Brutalism for the modern web.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Button size="lg" variant="solid-brutal">Start Hacking</Button>
                        <Button size="lg" variant="outline">Documentation</Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <Card variant="glass" className="p-8 rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-12 h-12 bg-accent rounded-full" />
                            <div className="text-4xl font-bold">01</div>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Ready to Deploy</h3>
                        <p className="text-lg opacity-70">
                            Pre-configured with Vite, Tailwind, and Framer Motion. Just clone and code.
                        </p>
                    </Card>

                    <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-black rounded-xl bg-transparent" />
                </motion.div>
            </div>
        </section>
    );
};
