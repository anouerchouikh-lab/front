import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useThemeStore } from '../../store/themeStore';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { } = useThemeStore();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-surface/80 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Hexagon className="w-8 h-8 fill-black" />
                        <span className="font-display font-bold text-xl tracking-tighter">
                            NUIT<span className="text-accent">INFO</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#" className="font-bold hover:text-accent transition-colors">Challenges</a>
                        <a href="#" className="font-bold hover:text-accent transition-colors">Teams</a>
                        <a href="#" className="font-bold hover:text-accent transition-colors">Resources</a>
                        <Button size="sm" variant="solid-brutal">Join Now</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-6 flex flex-col gap-4 md:hidden"
                    >
                        <a href="#" className="text-lg font-bold border-b-2 border-black/5 pb-2">Challenges</a>
                        <a href="#" className="text-lg font-bold border-b-2 border-black/5 pb-2">Teams</a>
                        <a href="#" className="text-lg font-bold border-b-2 border-black/5 pb-2">Resources</a>
                        <Button className="w-full">Join Now</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
