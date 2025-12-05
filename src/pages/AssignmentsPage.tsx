import React from 'react';
import { Tabs } from '../components/ui/Tabs';
import { AssignmentCard } from '../components/assignments/AssignmentCard';
import { mockAssignments, mockCourses } from '../data/mockData';

export const AssignmentsPage: React.FC = () => {
    const activeAssignments = mockAssignments.filter(
        (a) => a.status === 'not-started' || a.status === 'in-progress'
    );
    const submittedAssignments = mockAssignments.filter((a) => a.status === 'submitted');
    const gradedAssignments = mockAssignments.filter((a) => a.status === 'graded');

    const getCourseName = (courseId: string) => {
        return mockCourses.find((c) => c.id === courseId)?.title || 'Unknown Course';
    };

    const tabs = [
        {
            id: 'active',
            label: `Active (${activeAssignments.length})`,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeAssignments.map((assignment) => (
                        <AssignmentCard
                            key={assignment.id}
                            assignment={assignment}
                            courseName={getCourseName(assignment.courseId)}
                            onClick={(id) => console.log('Assignment clicked:', id)}
                        />
                    ))}
                    {activeAssignments.length === 0 && (
                        <div className="col-span-full text-center py-16 text-black/60">
                            No active assignments
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: 'submitted',
            label: `Submitted (${submittedAssignments.length})`,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {submittedAssignments.map((assignment) => (
                        <AssignmentCard
                            key={assignment.id}
                            assignment={assignment}
                            courseName={getCourseName(assignment.courseId)}
                            onClick={(id) => console.log('Assignment clicked:', id)}
                        />
                    ))}
                    {submittedAssignments.length === 0 && (
                        <div className="col-span-full text-center py-16 text-black/60">
                            No submitted assignments
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: 'graded',
            label: `Graded (${gradedAssignments.length})`,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gradedAssignments.map((assignment) => (
                        <AssignmentCard
                            key={assignment.id}
                            assignment={assignment}
                            courseName={getCourseName(assignment.courseId)}
                            onClick={(id) => console.log('Assignment clicked:', id)}
                        />
                    ))}
                    {gradedAssignments.length === 0 && (
                        <div className="col-span-full text-center py-16 text-black/60">
                            No graded assignments
                        </div>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-2">Assignments</h1>
                    <p className="text-black/60">
                        Manage your assignments and track your progress
                    </p>
                </div>

                {/* Tabs */}
                <Tabs tabs={tabs} defaultTab="active" />
            </div>
        </div>
    );
};
