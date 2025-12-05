import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authService } from '../services/authService';
import type { User } from '../types';

interface AuthState {
    user: User | null;
    token: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string, department: string) => Promise<void>;
    logout: () => Promise<void>;
    setTokens: (accessToken: string, refreshToken: string) => void;
    fetchUser: () => Promise<void>;
    clearError: () => void;
    setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            refreshToken: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            login: async (email: string, password: string) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await authService.login({ email, password });
                    set({
                        user: response.data.user,
                        token: response.data.accessToken,
                        refreshToken: response.data.refreshToken,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (error: any) {
                    const errorMessage = error.response?.data?.error?.message || error.response?.data?.message || 'Login failed';
                    set({
                        error: errorMessage,
                        isLoading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            signup: async (name: string, email: string, password: string, department: string) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await authService.register({ name, email, password, department });
                    set({
                        user: response.data.user,
                        token: response.data.accessToken,
                        refreshToken: response.data.refreshToken,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (error: any) {
                    const errorMessage = error.response?.data?.error?.message || error.response?.data?.message || 'Signup failed';
                    set({
                        error: errorMessage,
                        isLoading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            logout: async () => {
                try {
                    await authService.logout();
                } catch (error) {
                    console.error('Logout error:', error);
                } finally {
                    set({
                        user: null,
                        token: null,
                        refreshToken: null,
                        isAuthenticated: false,
                    });
                }
            },

            setTokens: (accessToken: string, refreshToken: string) => {
                set({ token: accessToken, refreshToken });
            },

            fetchUser: async () => {
                try {
                    const response = await authService.getMe();
                    set({ user: response.data });
                } catch (error) {
                    console.error('Fetch user error:', error);
                }
            },

            clearError: () => set({ error: null }),

            setUser: (user: User) => set({ user, isAuthenticated: true }),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                token: state.token,
                refreshToken: state.refreshToken,
                user: state.user,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);
