import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Bookmark, Share2, MoreVertical, Wifi, WifiOff } from 'lucide-react';
import { Card } from '../ui/Card';
import { Progress } from '../ui/Progress';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import type { Course } from '../../types';
import { cn } from '../../lib/cn';

interface CourseCardProps {
    course: Course;
    onBookmark?: (courseId: string) => void;
    onToggleOffline?: (courseId: string) => void;
    onClick?: (courseId: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
    course,
    onBookmark,
    onToggleOffline,
    onClick,
}) => {
    const [showActions, setShowActions] = React.useState(false);

    return (
        <Card
            variant="brutal"
            className="group hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            onClick={() => onClick?.(course.id)}
        >
            {/* Thumbnail */}
            <div className="relative h-40 -m-6 mb-4 bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center overflow-hidden">
                {course.thumbnail ? (
                    <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <BookOpen className="w-16 h-16 text-accent/40" />
                )}

                {/* Offline Badge */}
                {course.isOffline && (
                    <Badge
                        variant="success"
                        size="sm"
                        className="absolute top-2 right-2"
                    >
                        <WifiOff className="w-3 h-3 mr-1" />
                        Offline
                    </Badge>
                )}

                {/* Bookmark Icon */}
                {course.isBookmarked && (
                    <div className="absolute top-2 left-2">
                        <Bookmark className="w-5 h-5 fill-accent text-accent" />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                        <Badge size="sm" className="mb-2">
                            {course.code}
                        </Badge>
                        <h3 className="font-bold text-lg line-clamp-2">{course.title}</h3>
                        <p className="text-sm text-black/60 mt-1">{course.instructor}</p>
                    </div>

                    {/* Actions Menu */}
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowActions(!showActions);
                            }}
                            aria-label="Course actions"
                        >
                            <MoreVertical className="w-4 h-4" />
                        </Button>

                        {showActions && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="absolute right-0 top-full mt-2 bg-white border-2 border-black rounded-lg shadow-lg p-2 z-10 min-w-[150px]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => {
                                        onBookmark?.(course.id);
                                        setShowActions(false);
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-black/5 rounded text-sm font-medium"
                                >
                                    <Bookmark className="w-4 h-4" />
                                    {course.isBookmarked ? 'Unbookmark' : 'Bookmark'}
                                </button>
                                <button
                                    onClick={() => {
                                        onToggleOffline?.(course.id);
                                        setShowActions(false);
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-black/5 rounded text-sm font-medium"
                                >
                                    {course.isOffline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
                                    {course.isOffline ? 'Remove Offline' : 'Save Offline'}
                                </button>
                                <button
                                    onClick={() => setShowActions(false)}
                                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-black/5 rounded text-sm font-medium"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Materials
                                </button>
                                <button
                                    onClick={() => setShowActions(false)}
                                    className="w-full flex items-center gap-2 px-3 py-2 hover:bg-black/5 rounded text-sm font-medium"
                                >
                                    <Share2 className="w-4 h-4" />
                                    Share
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Department & Semester */}
                <div className="flex gap-2">
                    <Badge variant="info" size="sm">
                        {course.department}
                    </Badge>
                    <Badge variant="default" size="sm">
                        {course.semester}
                    </Badge>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Progress</span>
                        <span className="font-bold">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} variant="linear" size="md" />
                </div>
            </div>
        </Card>
    );
};
