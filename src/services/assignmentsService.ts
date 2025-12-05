import { apiClient } from '../lib/api/client';
import type { Assignment, Submission } from '../types';

export const assignmentsService = {
    async getAssignments(courseId?: string): Promise<{ success: boolean; data: Assignment[] }> {
        const url = courseId ? `/assignments/course/${courseId}` : '/assignments';
        return apiClient.get(url);
    },

    async getUpcoming(): Promise<{ success: boolean; data: Assignment[] }> {
        return apiClient.get('/assignments/upcoming');
    },

    async getSubmitted(): Promise<{ success: boolean; data: Assignment[] }> {
        return apiClient.get('/assignments/submitted');
    },

    async getPending(): Promise<{ success: boolean; data: Assignment[] }> {
        return apiClient.get('/assignments/pending');
    },

    async getGraded(): Promise<{ success: boolean; data: Assignment[] }> {
        return apiClient.get('/assignments/graded');
    },

    async getAssignmentById(assignmentId: string): Promise<{ success: boolean; data: Assignment }> {
        return apiClient.get(`/assignments/${assignmentId}`);
    },

    async submitAssignment(assignmentId: string, data: FormData): Promise<{ success: boolean; data: Submission }> {
        return apiClient.post(`/assignments/${assignmentId}/submit`, data, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    },

    async getMySubmission(assignmentId: string): Promise<{ success: boolean; data: Submission }> {
        return apiClient.get(`/assignments/${assignmentId}/submissions/me`);
    },

    async updateSubmission(assignmentId: string, data: FormData): Promise<{ success: boolean; data: Submission }> {
        return apiClient.put(`/assignments/${assignmentId}/submit`, data, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    },
};
