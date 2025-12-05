import { create } from 'zustand';
import { coursesService } from '../services/coursesService';
import type { Course } from '../types';

interface CoursesState {
    courses: Course[];
    isLoading: boolean;
    error: string | null;
    searchQuery: string;
    selectedDepartment: string;
    selectedSemester: string;
    filteredCourses: Course[];

    setCourses: (courses: Course[]) => void;
    fetchCourses: () => Promise<void>;
    createCourse: (data: Partial<Course>) => Promise<void>;
    enrollCourse: (courseId: string) => Promise<void>;
    unenrollCourse: (courseId: string) => Promise<void>;
    setSearchQuery: (query: string) => void;
    setSelectedDepartment: (department: string) => void;
    setSelectedSemester: (semester: string) => void;
    toggleBookmark: (courseId: string) => void;
    toggleOffline: (courseId: string) => void;
    updateProgress: (courseId: string, progress: number) => void;
    applyFilters: () => void;
}

export const useCoursesStore = create<CoursesState>((set, get) => ({
    courses: [],
    isLoading: false,
    error: null,
    searchQuery: '',
    selectedDepartment: 'all',
    selectedSemester: 'all',
    filteredCourses: [],

    setCourses: (courses: Course[]) => {
        set({ courses });
        get().applyFilters();
    },

    fetchCourses: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await coursesService.getMyCourses();
            set({ courses: response.data, isLoading: false });
            get().applyFilters();
        } catch (error: any) {
            const errorMessage = error.response?.data?.error?.message || error.response?.data?.message || 'Failed to fetch courses';
            set({
                error: errorMessage,
                isLoading: false,
            });
        }
    },

    createCourse: async (data: Partial<Course>) => {
        set({ isLoading: true, error: null });
        try {
            await coursesService.createCourse(data);
            await get().fetchCourses();
        } catch (error: any) {
            const errorMessage = error.response?.data?.error?.message || error.response?.data?.message || 'Failed to create course';
            set({
                error: errorMessage,
                isLoading: false,
            });
            throw new Error(errorMessage);
        }
    },

    enrollCourse: async (courseId: string) => {
        try {
            await coursesService.enrollCourse(courseId);
            await get().fetchCourses();
        } catch (error: any) {
            const errorMessage = error.response?.data?.error?.message || error.response?.data?.message || 'Failed to enroll';
            set({ error: errorMessage });
            throw new Error(errorMessage);
        }
    },

    unenrollCourse: async (courseId: string) => {
        try {
            await coursesService.unenrollCourse(courseId);
            await get().fetchCourses();
        } catch (error: any) {
            const errorMessage = error.response?.data?.error?.message || error.response?.data?.message || 'Failed to unenroll';
            set({ error: errorMessage });
            throw new Error(errorMessage);
        }
    },

    setSearchQuery: (query: string) => {
        set({ searchQuery: query });
        get().applyFilters();
    },

    setSelectedDepartment: (department: string) => {
        set({ selectedDepartment: department });
        get().applyFilters();
    },

    setSelectedSemester: (semester: string) => {
        set({ selectedSemester: semester });
        get().applyFilters();
    },

    toggleBookmark: (courseId: string) => {
        set((state) => ({
            courses: state.courses.map((course) =>
                course.id === courseId
                    ? { ...course, isBookmarked: !course.isBookmarked }
                    : course
            ),
        }));
        get().applyFilters();
    },

    toggleOffline: (courseId: string) => {
        set((state) => ({
            courses: state.courses.map((course) =>
                course.id === courseId
                    ? { ...course, isOffline: !course.isOffline }
                    : course
            ),
        }));
        get().applyFilters();
    },

    updateProgress: (courseId: string, progress: number) => {
        set((state) => ({
            courses: state.courses.map((course) =>
                course.id === courseId ? { ...course, progress } : course
            ),
        }));
        get().applyFilters();
    },

    applyFilters: () => {
        const { courses, searchQuery, selectedDepartment, selectedSemester } = get();

        let filtered = courses;

        // Apply search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (course) =>
                    course.title.toLowerCase().includes(query) ||
                    course.code.toLowerCase().includes(query) ||
                    course.instructor.toLowerCase().includes(query)
            );
        }

        // Apply department filter
        if (selectedDepartment !== 'all') {
            filtered = filtered.filter((course) => course.department === selectedDepartment);
        }

        // Apply semester filter
        if (selectedSemester !== 'all') {
            filtered = filtered.filter((course) => course.semester === selectedSemester);
        }

        set({ filteredCourses: filtered });
    },
}));
