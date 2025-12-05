import { db, delay } from '../lib/mock/db';
import type { User } from '../types';

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    department: string;
}

export interface AuthResponse {
    status: string;
    data: {
        user: User;
        accessToken: string;
        refreshToken: string;
    };
    message?: string;
}

export const authService = {
    async login(credentials: LoginRequest): Promise<AuthResponse> {
        await delay();
        const user = db.findUserByEmail(credentials.email);

        if (!user) {
            throw { response: { data: { message: 'Invalid credentials' } } };
        }

        // In a real app we'd check password, here we just allow it for demo or check against a mock password if we stored it
        // For simple mock, if user exists, login succeeds

        return {
            status: 'success',
            data: {
                user,
                accessToken: 'mock-jwt-token-' + user.id,
                refreshToken: 'mock-refresh-token-' + user.id
            }
        };
    },

    async register(data: RegisterRequest): Promise<AuthResponse> {
        await delay();

        if (db.findUserByEmail(data.email)) {
            throw { response: { data: { message: 'Email already exists' } } };
        }

        const newUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            name: data.name,
            email: data.email,
            department: data.department,
            role: 'student',
            points: 0,
            rank: 0,
            badges: [],
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}`
        };

        db.saveUser(newUser);

        return {
            status: 'success',
            data: {
                user: newUser,
                accessToken: 'mock-jwt-token-' + newUser.id,
                refreshToken: 'mock-refresh-token-' + newUser.id
            }
        };
    },

    async logout(): Promise<void> {
        await delay(200);
        // Clear local session if any
    },

    async refreshToken(): Promise<AuthResponse> {
        await delay(200);
        return {
            status: 'success',
            data: {
                user: db.users[0], // simplified
                accessToken: 'new-mock-token',
                refreshToken: 'new-mock-refresh'
            }
        };
    },

    async getMe(): Promise<{ success: boolean; data: User }> {
        await delay();
        // In a real app we'd parse the token. Here we just return the first user (Admin) or the one from localStorage if we had a proper session manager.
        // For simplicity, let's assume the previous login set the user in the store, and this calls verifies it.
        // Or we can return the Admin user as default if not found.
        return { success: true, data: db.users[0] };
    },

    async updateProfile(data: Partial<User>): Promise<{ success: boolean; data: User }> {
        await delay();
        const user = db.users[0]; // Simplification
        const updated = { ...user, ...data };
        db.saveUser(updated);
        return { success: true, data: updated };
    },

    async changePassword(): Promise<void> {
        await delay();
    },

    async forgotPassword(): Promise<void> {
        await delay();
    },

    async resetPassword(): Promise<void> {
        await delay();
    },
};
