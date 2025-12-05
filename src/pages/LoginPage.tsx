import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, Loader } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useAuthStore } from '../store/authStore';
import { useToast } from '../components/ui/Toast';

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const { login, isLoading } = useAuthStore();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            showToast('Please fill in all fields', 'error');
            return;
        }

        try {
            await login(email, password);
            showToast('Welcome back!', 'success');
            navigate('/dashboard');
        } catch (error) {
            showToast('Login failed. Please try again.', 'error');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-accent/10 to-primary/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold mb-2">🎓 EduSphere</h1>
                    <p className="text-black/60">Sign in to your account</p>
                </div>

                {/* Login Card */}
                <Card variant="brutal">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                <LogIn className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold">Welcome Back</h2>
                        </div>

                        <Input
                            type="email"
                            label="Email"
                            placeholder="your.email@university.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            required
                        />

                        <Input
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                            required
                        />

                        <Button
                            type="submit"
                            variant="solid-brutal"
                            size="lg"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <LogIn className="w-5 h-5 mr-2" />
                                    Sign In
                                </>
                            )}
                        </Button>

                        <div className="text-center text-sm">
                            <span className="text-black/60">Don't have an account? </span>
                            <Link to="/signup" className="font-bold text-accent hover:underline">
                                Sign up
                            </Link>
                        </div>

                        <div className="text-center text-sm">
                            <Link to="/" className="text-black/60 hover:text-black hover:underline">
                                ← Back to home
                            </Link>
                        </div>
                    </form>
                </Card>

                {/* Demo Credentials */}
                <Card variant="glass" className="mt-4">
                    <div className="text-sm text-center">
                        <p className="font-bold mb-2">Demo Credentials:</p>
                        <p className="text-black/60">Email: admin@edusphere.com</p>
                        <p className="text-black/60">Password: admin123</p>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
};
