import React from 'react';
import { motion } from 'framer-motion';
import { CourseCard } from './CourseCard';
import { Skeleton } from '../ui/Skeleton';
import type { Course } from '../../types';

interface CourseGridProps {
    courses: Course[];
    isLoading?: boolean;
    onCourseClick?: (courseId: string) => void;
    onBookmark?: (courseId: string) => void;
    onToggleOffline?: (courseId: string) => void;
}

export const CourseGrid: React.FC<CourseGridProps> = ({
    courses,
    isLoading = false,
    onCourseClick,
    onBookmark,
    onToggleOffline,
}) => {
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="space-y-4 p-6 border-2 border-black rounded-xl">
                        <Skeleton variant="rectangular" height="160px" />
                        <Skeleton variant="text" width="60%" />
                        <Skeleton variant="text" width="80%" />
                        <Skeleton variant="text" width="40%" />
                        <Skeleton variant="rectangular" height="8px" />
                    </div>
                ))}
            </div>
        );
    }

    if (courses.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 mx-auto mb-4 bg-black/5 rounded-full flex items-center justify-center">
                        <span className="text-4xl">📚</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">No courses found</h3>
                    <p className="text-black/60">
                        Try adjusting your filters or search query to find courses.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.05,
                    },
                },
            }}
        >
            {courses.map((course) => (
                <motion.div
                    key={course.id}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <CourseCard
                        course={course}
                        onClick={onCourseClick}
                        onBookmark={onBookmark}
                        onToggleOffline={onToggleOffline}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};
