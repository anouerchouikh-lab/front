import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, FileText } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Progress } from '../ui/Progress';
import type { Assignment } from '../../types';
import { format } from 'date-fns';

interface AssignmentCardProps {
    assignment: Assignment;
    courseName?: string;
    onClick?: (id: string) => void;
}

export const AssignmentCard: React.FC<AssignmentCardProps> = ({
    assignment,
    courseName,
    onClick,
}) => {
    const getStatusVariant = (status: Assignment['status']) => {
        switch (status) {
            case 'not-started':
                return 'default';
            case 'in-progress':
                return 'warning';
            case 'submitted':
                return 'info';
            case 'graded':
                return 'success';
        }
    };

    const getStatusLabel = (status: Assignment['status']) => {
        return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const daysUntilDue = Math.ceil(
        (new Date(assignment.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );

    return (
        <Card
            variant="brutal"
            className="hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            onClick={() => onClick?.(assignment.id)}
        >
            <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant={getStatusVariant(assignment.status)} size="sm">
                                {getStatusLabel(assignment.status)}
                            </Badge>
                            {assignment.type === 'group' && (
                                <Badge variant="info" size="sm">
                                    <Users className="w-3 h-3 mr-1" />
                                    Group
                                </Badge>
                            )}
                        </div>
                        <h3 className="text-xl font-bold line-clamp-2">{assignment.title}</h3>
                        {courseName && (
                            <p className="text-sm text-black/60 mt-1">{courseName}</p>
                        )}
                    </div>
                    <FileText className="w-8 h-8 text-accent" />
                </div>

                {/* Description */}
                <p className="text-sm text-black/70 line-clamp-2">
                    {assignment.description}
                </p>

                {/* Due Date */}
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-black/60" />
                        <span className="font-medium">
                            Due: {format(new Date(assignment.dueDate), 'MMM dd, yyyy')}
                        </span>
                    </div>
                    {daysUntilDue >= 0 && (
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-black/60" />
                            <span className={daysUntilDue <= 3 ? 'text-red-600 font-bold' : ''}>
                                {daysUntilDue === 0
                                    ? 'Due today'
                                    : `${daysUntilDue} day${daysUntilDue > 1 ? 's' : ''} left`}
                            </span>
                        </div>
                    )}
                </div>

                {/* Score */}
                {assignment.status === 'graded' && assignment.score !== undefined ? (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Your Score</span>
                            <span className="font-bold text-lg">
                                {assignment.score}/{assignment.maxScore}
                            </span>
                        </div>
                        <Progress
                            value={assignment.score}
                            max={assignment.maxScore}
                            variant="linear"
                            size="md"
                        />
                    </div>
                ) : (
                    <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Max Score</span>
                        <span className="font-bold">{assignment.maxScore} points</span>
                    </div>
                )}

                {/* Action Button */}
                {assignment.status !== 'graded' && (
                    <Button
                        variant="solid-brutal"
                        size="md"
                        className="w-full"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClick?.(assignment.id);
                        }}
                    >
                        {assignment.status === 'not-started' && 'Start Assignment'}
                        {assignment.status === 'in-progress' && 'Continue Working'}
                        {assignment.status === 'submitted' && 'View Submission'}
                    </Button>
                )}
            </div>
        </Card>
    );
};
