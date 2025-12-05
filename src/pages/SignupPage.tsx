import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, Loader } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { useAuthStore } from '../store/authStore';
import { useToast } from '../components/ui/Toast';

export const SignupPage: React.FC = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const { signup, isLoading } = useAuthStore();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [department, setDepartment] = useState('Computer Science');

    const departments = [
        { value: 'Computer Science', label: 'Computer Science' },
        { value: 'Mathematics', label: 'Mathematics' },
        { value: 'Physics', label: 'Physics' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Business', label: 'Business' },
        { value: 'Arts', label: 'Arts' },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            showToast('Please fill in all fields', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showToast('Passwords do not match', 'error');
            return;
        }

        if (password.length < 6) {
            showToast('Password must be at least 6 characters', 'error');
            return;
        }

        try {
            await signup(name, email, password, department);
            showToast('Account created successfully!', 'success');
            navigate('/dashboard');
        } catch (error) {
            showToast('Signup failed. Please try again.', 'error');
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
                    <p className="text-black/60">Create your account</p>
                </div>

                {/* Signup Card */}
                <Card variant="brutal">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                <UserPlus className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold">Join EduSphere</h2>
                        </div>

                        <Input
                            type="text"
                            label="Full Name"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isLoading}
                            required
                        />

                        <Input
                            type="email"
                            label="Email"
                            placeholder="your.email@university.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            required
                        />

                        <Select
                            label="Department"
                            options={departments}
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            disabled={isLoading}
                        />

                        <Input
                            type="password"
                            label="Password"
                            placeholder="At least 6 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                            required
                        />

                        <Input
                            type="password"
                            label="Confirm Password"
                            placeholder="Re-enter your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                                    Creating account...
                                </>
                            ) : (
                                <>
                                    <UserPlus className="w-5 h-5 mr-2" />
                                    Create Account
                                </>
                            )}
                        </Button>

                        <div className="text-center text-sm">
                            <span className="text-black/60">Already have an account? </span>
                            <Link to="/login" className="font-bold text-accent hover:underline">
                                Sign in
                            </Link>
                        </div>

                        <div className="text-center text-sm">
                            <Link to="/" className="text-black/60 hover:text-black hover:underline">
                                ← Back to home
                            </Link>
                        </div>
                    </form>
                </Card>
            </motion.div>
        </div>
    );
};
