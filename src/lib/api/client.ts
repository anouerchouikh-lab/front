import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';

class ApiClient {
    private client: AxiosInstance;
    private publicClient: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: BASE_URL,
            timeout: 30000,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Public client (same configuration for consistency now)
        this.publicClient = axios.create({
            baseURL: BASE_URL,
            timeout: 30000,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    // Public methods
    async publicPost<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.publicClient.post<T>(url, data, config);
        return response.data;
    }

    async publicGet<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.publicClient.get<T>(url, config);
        return response.data;
    }

    // Authenticated methods
    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.get<T>(url, config);
        return response.data;
    }

    async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.post<T>(url, data, config);
        return response.data;
    }

    async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.put<T>(url, data, config);
        return response.data;
    }

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.delete<T>(url, config);
        return response.data;
    }

    async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.patch<T>(url, data, config);
        return response.data;
    }
}

export const apiClient = new ApiClient();

