import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    BookOpen, Trophy, Users, Video, Award, GraduationCap,
    ArrowRight, CheckCircle, Star, Zap
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: BookOpen,
            title: 'Interactive Courses',
            description: 'Access courses with progress tracking, offline support, and downloadable materials.',
            color: 'bg-blue-500',
        },
        {
            icon: Trophy,
            title: 'Competitions & Challenges',
            description: 'Participate in coding challenges, hackathons, and win amazing prizes.',
            color: 'bg-yellow-500',
        },
        {
            icon: Award,
            title: 'Gamification System',
            description: 'Earn points, unlock badges, and climb the leaderboard as you learn.',
            color: 'bg-purple-500',
        },
        {
            icon: Video,
            title: 'Virtual Classrooms',
            description: 'Join live sessions with video, chat, polls, and collaborative tools.',
            color: 'bg-green-500',
        },
        {
            icon: Users,
            title: 'Collaborative Learning',
            description: 'Work on group projects, peer reviews, and team assignments.',
            color: 'bg-pink-500',
        },
        {
            icon: GraduationCap,
            title: 'Online Exams',
            description: 'Take proctored exams with auto-save and multiple question types.',
            color: 'bg-red-500',
        },
    ];

    const stats = [
        { value: '10,000+', label: 'Students' },
        { value: '500+', label: 'Courses' },
        { value: '50+', label: 'Competitions' },
        { value: '98%', label: 'Satisfaction' },
    ];

    const benefits = [
        'Track your progress in real-time',
        'Compete with peers globally',
        'Earn certificates and badges',
        'Access materials offline',
        'Join live virtual sessions',
        'Get instant feedback',
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="border-b-2 border-black bg-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-3xl">🎓</span>
                        <h1 className="text-2xl font-bold">EduSphere</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="md"
                            onClick={() => navigate('/login')}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="solid-brutal"
                            size="md"
                            onClick={() => navigate('/signup')}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-6xl md:text-7xl font-bold mb-6">
                            Learn, Compete, <span className="text-accent">Excel</span>
                        </h1>
                        <p className="text-xl text-black/70 mb-8">
                            The ultimate educational platform combining courses, competitions,
                            and gamification to make learning engaging and rewarding.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="solid-brutal"
                                size="lg"
                                onClick={() => navigate('/signup')}
                            >
                                Start Learning Free
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => navigate('/login')}
                            >
                                Sign In
                            </Button>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card variant="brutal" className="text-center">
                                    <div className="text-4xl font-bold text-accent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-black/60">{stat.label}</div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 bg-white border-y-2 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
                        <p className="text-xl text-black/60">
                            Powerful features designed for modern education
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card variant="brutal" className="h-full hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                                    <div
                                        className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                                    >
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-black/70">{feature.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                Why Choose EduSphere?
                            </h2>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                                        <span className="text-lg">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <Card variant="brutal" className="bg-gradient-to-br from-accent/10 to-primary/5">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Star className="w-8 h-8 text-yellow-500" />
                                    <div>
                                        <div className="font-bold text-2xl">4.9/5</div>
                                        <div className="text-sm text-black/60">Average Rating</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Zap className="w-8 h-8 text-accent" />
                                    <div>
                                        <div className="font-bold text-2xl">50K+</div>
                                        <div className="text-sm text-black/60">Active Learners</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Trophy className="w-8 h-8 text-yellow-600" />
                                    <div>
                                        <div className="font-bold text-2xl">1000+</div>
                                        <div className="text-sm text-black/60">Competitions Held</div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Join thousands of students already learning on EduSphere
                    </p>
                    <Button
                        variant="solid-brutal"
                        size="lg"
                        className="bg-accent text-white border-accent hover:shadow-[8px_8px_0px_0px_rgba(255,0,255,1)]"
                        onClick={() => navigate('/signup')}
                    >
                        Create Free Account
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-2 border-black bg-white py-8 px-6">
                <div className="max-w-7xl mx-auto text-center text-black/60">
                    <p>© 2024 EduSphere. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};
