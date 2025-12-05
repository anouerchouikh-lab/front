import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BookOpen, FileText, Video, Trophy, Award, GraduationCap, Home, LogOut } from 'lucide-react';
import { cn } from '../../lib/cn';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../ui/Button';

const navItems = [
    { to: '/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/courses', icon: BookOpen, label: 'Courses' },
    { to: '/assignments', icon: FileText, label: 'Assignments' },
    { to: '/sessions', icon: Video, label: 'Sessions' },
    { to: '/competitions', icon: Trophy, label: 'Competitions' },
    { to: '/leaderboard', icon: Award, label: 'Leaderboard' },
    { to: '/exams', icon: GraduationCap, label: 'Exams' },
];

export const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const { logout, user } = useAuthStore();

    const handleLogout = () => {
        logout();
        navigate('/landing');
    };

    return (
        <aside className="w-64 bg-white border-r-2 border-black min-h-screen p-6 flex flex-col">
            {/* Logo */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <span className="text-3xl">🎓</span>
                    EduSphere
                </h1>
                <p className="text-xs text-black/60 mt-1">Educational Platform</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            cn(
                                'flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all',
                                isActive
                                    ? 'bg-accent text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                                    : 'hover:bg-black/5'
                            )
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon className={cn('w-5 h-5', isActive && 'text-white')} />
                                <span>{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* User Info & Logout */}
            <div className="mt-auto pt-6 border-t-2 border-black/10 space-y-4">
                {user && (
                    <div className="space-y-3">
                        <div className="text-sm">
                            <p className="font-bold truncate">{user.name}</p>
                            <p className="text-black/60 text-xs truncate">{user.email}</p>
                        </div>

                        {/* Gamification Stats */}
                        <div className="bg-accent/5 p-3 rounded-lg border border-accent/20">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-bold text-accent">Level {Math.floor((user.points || 0) / 100) + 1}</span>
                                <span className="text-xs text-accent">{(user.points || 0)} XP</span>
                            </div>
                            <div className="h-1.5 bg-accent/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-accent transition-all duration-500"
                                    style={{ width: `${(user.points || 0) % 100}%` }}
                                />
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full mt-2 text-xs h-7"
                                onClick={async () => {
                                    try {
                                        const { gamificationService } = await import('../../services/gamificationService');
                                        const res = await gamificationService.simulateActivity();
                                        // Update user in store with new points
                                        useAuthStore.getState().setUser(res.data.user);
                                        // Show toast if possible, or just log
                                        console.log(res.message);
                                    } catch (e) {
                                        console.error(e);
                                    }
                                }}
                            >
                                ✨ Earn XP
                            </Button>
                        </div>
                    </div>
                )}
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={handleLogout}
                >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                </Button>
                <p className="text-xs text-black/40 text-center">
                    © 2024 EduSphere
                </p>
            </div>
        </aside>
    );
};
