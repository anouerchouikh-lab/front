import React from 'react';
import { Filter } from 'lucide-react';
import { Select } from '../ui/Select';

interface CourseFiltersProps {
    departments: string[];
    semesters: string[];
    selectedDepartment: string;
    selectedSemester: string;
    onDepartmentChange: (department: string) => void;
    onSemesterChange: (semester: string) => void;
}

export const CourseFilters: React.FC<CourseFiltersProps> = ({
    departments,
    semesters,
    selectedDepartment,
    selectedSemester,
    onDepartmentChange,
    onSemesterChange,
}) => {
    const departmentOptions = [
        { value: 'all', label: 'All Departments' },
        ...departments.map((dept) => ({ value: dept, label: dept })),
    ];

    const semesterOptions = [
        { value: 'all', label: 'All Semesters' },
        ...semesters.map((sem) => ({ value: sem, label: sem })),
    ];

    return (
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center gap-2 font-bold">
                <Filter className="w-5 h-5" />
                <span>Filters:</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-1">
                <div className="w-full sm:w-48">
                    <Select
                        options={departmentOptions}
                        value={selectedDepartment}
                        onChange={(e) => onDepartmentChange(e.target.value)}
                        aria-label="Filter by department"
                    />
                </div>

                <div className="w-full sm:w-48">
                    <Select
                        options={semesterOptions}
                        value={selectedSemester}
                        onChange={(e) => onSemesterChange(e.target.value)}
                        aria-label="Filter by semester"
                    />
                </div>
            </div>
        </div>
    );
};
