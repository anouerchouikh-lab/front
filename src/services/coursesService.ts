import { db, delay } from '../lib/mock/db';
import type { Course, CourseMaterial } from '../types';
import type { PaginationParams, FilterParams } from '../types/api';

export const coursesService = {
    async getCourses(params?: PaginationParams & FilterParams): Promise<{ success: boolean; data: Course[] }> {
        await delay();
        return { success: true, data: db.courses };
    },

    async getMyCourses(): Promise<{ success: boolean; data: Course[] }> {
        await delay();
        // Return all courses for now, or filter by user enrollment if we implemented enrollment
        return { success: true, data: db.courses };
    },

    async getCourseById(courseId: string): Promise<{ success: boolean; data: Course }> {
        await delay();
        const course = db.courses.find(c => c.id === courseId);
        if (!course) throw { response: { data: { message: 'Course not found' } } };
        return { success: true, data: course };
    },

    async createCourse(data: Partial<Course>): Promise<{ success: boolean; data: Course }> {
        await delay();
        const newCourse: Course = {
            id: Math.random().toString(36).substr(2, 9),
            title: data.title || 'Untitled Course',
            code: data.code || 'UNKNOWN',
            description: data.description || '',
            department: data.department || 'General',
            semester: data.semester || 'Current',
            credits: data.credits || 3,
            capacity: data.capacity || 30,
            progress: 0,
            instructor: data.instructor || 'Instructor',
            isOffline: false,
            isBookmarked: false,
            materials: []
        };
        db.saveCourse(newCourse);
        return { success: true, data: newCourse };
    },

    async enrollCourse(courseId: string): Promise<void> {
        await delay();
        // In validation we'd add user ID to course students list
    },

    async unenrollCourse(courseId: string): Promise<void> {
        await delay();
    },

    async getCourseProgress(courseId: string): Promise<any> {
        await delay();
        return { progress: 0 };
    },

    async markModuleComplete(courseId: string, moduleId: string): Promise<void> {
        await delay();
    },

    async getCourseMaterials(courseId: string): Promise<{ success: boolean; data: CourseMaterial[] }> {
        await delay();
        return { success: true, data: [] };
    },

    async downloadMaterial(courseId: string, fileId: string): Promise<Blob> {
        await delay();
        return new Blob(['mock content']);
    },
};
