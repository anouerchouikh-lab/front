import React, { useEffect, useState } from 'react';
import { CourseSearch } from '../components/courses/CourseSearch';
import { CourseFilters } from '../components/courses/CourseFilters';
import { CourseGrid } from '../components/courses/CourseGrid';
import { CreateCourseModal } from '../components/courses/CreateCourseModal';
import { useCoursesStore } from '../store/coursesStore';
import { Button } from '../components/ui/Button';

export const CoursesPage: React.FC = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const {
        courses,
        filteredCourses,
        selectedDepartment,
        selectedSemester,
        isLoading,
        error,
        fetchCourses,
        setSearchQuery,
        setSelectedDepartment,
        setSelectedSemester,
        toggleBookmark,
        toggleOffline,
    } = useCoursesStore();

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    // Get unique departments and semesters from fetched courses
    const departments = Array.from(new Set(courses.map((c) => c.department)));
    const semesters = Array.from(new Set(courses.map((c) => c.semester)));

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">My Courses</h1>
                            <p className="text-black/60">
                                Browse and manage your enrolled courses
                            </p>
                        </div>
                        <Button
                            variant="solid-brutal"
                            onClick={() => setIsCreateModalOpen(true)}
                        >
                            + Create Course
                        </Button>
                    </div>
                </div>

                {/* Error State */}
                {error && (
                    <div className="bg-red-100 border-2 border-red-600 rounded-lg p-4">
                        <p className="text-red-600 font-bold">{error}</p>
                    </div>
                )}

                {/* Search and Filters */}
                <div className="space-y-4">
                    <CourseSearch onSearch={setSearchQuery} />
                    <CourseFilters
                        departments={departments}
                        semesters={semesters}
                        selectedDepartment={selectedDepartment}
                        selectedSemester={selectedSemester}
                        onDepartmentChange={setSelectedDepartment}
                        onSemesterChange={setSelectedSemester}
                    />
                </div>

                {/* Results Count */}
                {!isLoading && (
                    <div className="text-sm text-black/60">
                        Showing <span className="font-bold text-black">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''}
                    </div>
                )}

                {/* Course Grid */}
                <CourseGrid
                    courses={filteredCourses}
                    isLoading={isLoading}
                    onCourseClick={(id) => console.log('Course clicked:', id)}
                    onBookmark={toggleBookmark}
                    onToggleOffline={toggleOffline}
                />
            </div>

            <CreateCourseModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
            />
        </div>
    );
};
