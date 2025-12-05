import React from 'react';
import { GraduationCap, Clock, AlertCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const ExamsPage: React.FC = () => {
    const upcomingExams = [
        {
            id: '1',
            title: 'CS101 Midterm Exam',
            course: 'Introduction to Computer Science',
            date: new Date('2024-12-15T10:00:00'),
            duration: 120,
            questions: 50,
        },
        {
            id: '2',
            title: 'MATH201 Final Exam',
            course: 'Linear Algebra',
            date: new Date('2024-12-20T14:00:00'),
            duration: 180,
            questions: 40,
        },
    ];

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">Exams</h1>
                    <p className="text-black/60">
                        View and take your scheduled exams
                    </p>
                </div>

                {/* Important Notice */}
                <Card variant="brutal" className="bg-yellow-50">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-lg mb-2">Exam Guidelines</h3>
                            <ul className="space-y-1 text-sm text-black/70">
                                <li>• Ensure stable internet connection before starting</li>
                                <li>• Exams are auto-saved every 30 seconds</li>
                                <li>• Camera and microphone may be required for proctored exams</li>
                                <li>• You cannot pause once started</li>
                            </ul>
                        </div>
                    </div>
                </Card>

                {/* Upcoming Exams */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Upcoming Exams</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {upcomingExams.map((exam) => (
                            <Card key={exam.id} variant="brutal">
                                <div className="space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <Badge variant="warning" size="sm" className="mb-2">
                                                UPCOMING
                                            </Badge>
                                            <h3 className="text-xl font-bold">{exam.title}</h3>
                                            <p className="text-sm text-black/60 mt-1">{exam.course}</p>
                                        </div>
                                        <GraduationCap className="w-8 h-8 text-accent" />
                                    </div>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-black/60" />
                                            <span>
                                                {exam.date.toLocaleDateString()} at{' '}
                                                {exam.date.toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span>Duration: {exam.duration} minutes</span>
                                            <span>Questions: {exam.questions}</span>
                                        </div>
                                    </div>

                                    <Button variant="solid-brutal" size="md" className="w-full">
                                        Start Exam
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Past Exams */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Past Exams</h2>
                    <div className="text-center py-16 text-black/60">
                        No past exams to display
                    </div>
                </div>
            </div>
        </div>
    );
};
