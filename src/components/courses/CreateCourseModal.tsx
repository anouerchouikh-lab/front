import React, { useState } from 'react';
import { X, Loader, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useCoursesStore } from '../../store/coursesStore';
import { useToast } from '../ui/Toast';

interface CreateCourseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateCourseModal: React.FC<CreateCourseModalProps> = ({ isOpen, onClose }) => {
    const { createCourse } = useCoursesStore();
    const { showToast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        code: '',
        description: '',
        department: '',
        semester: '',
        credits: 3,
        capacity: 30
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await createCourse({
                ...formData,
                instructor: 'Admin User', // Default for now
                credits: Number(formData.credits),
                capacity: Number(formData.capacity)
            });
            showToast('Course created successfully!', 'success');
            onClose();
            // Reset form
            setFormData({
                title: '',
                code: '',
                description: '',
                department: '',
                semester: '',
                credits: 3,
                capacity: 30
            });
        } catch (error) {
            showToast('Failed to create course', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-lg"
                >
                    <Card variant="flat" className="relative">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">Create New Course</h2>
                                <p className="text-sm text-black/60">Add a new course to the catalog</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    label="Course Code"
                                    name="code"
                                    placeholder="e.g. CS101"
                                    value={formData.code}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    label="Title"
                                    name="title"
                                    placeholder="e.g. Intro to CS"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-black/60 mb-1">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    rows={3}
                                    className="w-full px-4 py-2 rounded-lg border-2 border-black/5 focus:border-accent focus:outline-none transition-colors resize-none"
                                    placeholder="Course description..."
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    label="Department"
                                    name="department"
                                    placeholder="e.g. Computer Science"
                                    value={formData.department}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    label="Semester"
                                    name="semester"
                                    placeholder="e.g. Fall 2024"
                                    value={formData.semester}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    label="Credits"
                                    name="credits"
                                    type="number"
                                    min="1"
                                    max="6"
                                    value={formData.credits}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    label="Capacity"
                                    name="capacity"
                                    type="number"
                                    min="1"
                                    value={formData.capacity}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="pt-4 flex gap-3">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={onClose}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="solid-brutal"
                                    className="flex-1"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader className="w-4 h-4 mr-2 animate-spin" />
                                            Creating...
                                        </>
                                    ) : (
                                        'Create Course'
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
