import axios from 'axios';
import { useAuthStore } from '../store/authStore';

// Use a mock API for now, replace with actual API endpoint in production
const BASE_URL = 'https://api.example.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    
    // Handle authentication errors
    if (response && response.status === 401) {
      useAuthStore.getState().logout();
    }
    
    return Promise.reject(
      response?.data?.error || 'Something went wrong. Please try again.'
    );
  }
);

export default api;

// For development/demo purposes when no backend is available
export const mockApi = {
  get: async <T>(url: string): Promise<T> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Match the URL and return mock data
        const data = mockData[url] || null;
        resolve(data as T);
      }, 500);
    });
  },
  
  post: async <T>(url: string, payload: any): Promise<T> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // For demo purposes, just echo back the payload with an ID
        resolve({ 
          id: 'mock-' + Date.now(),
          ...payload
        } as T);
      }, 500);
    });
  }
};

// Mock data for development
const mockData: Record<string, any> = {
  '/widgets': [
    {
      id: 'widget-1',
      title: 'Project Status',
      type: 'chart',
      size: 'medium',
      data: {
        labels: ['Planning', 'In Progress', 'Completed'],
        datasets: [
          {
            data: [3, 5, 2],
            backgroundColor: ['#f97316', '#0ea5e9', '#22c55e'],
          },
        ],
      },
    },
    {
      id: 'widget-2',
      title: 'Latest Updates',
      type: 'list',
      size: 'small',
      data: [
        { id: '1', title: 'New team member joined', date: '2023-11-05' },
        { id: '2', title: 'Project deadline extended', date: '2023-11-03' },
        { id: '3', title: 'Weekly report published', date: '2023-11-01' },
      ],
    },
    {
      id: 'widget-3',
      title: 'Statistics',
      type: 'stats',
      size: 'large',
      data: [
        { name: 'Total Projects', value: 12, icon: 'folder' },
        { name: 'Team Members', value: 8, icon: 'users' },
        { name: 'Completion Rate', value: '68%', icon: 'percent' },
        { name: 'Overdue Tasks', value: 3, icon: 'alert-circle' },
      ],
    },
  ],
  '/projects': [
    {
      id: 'proj-1',
      title: 'Healthcare App',
      description: 'A mobile app for tracking patient health metrics',
      status: 'in-progress',
      progress: 65,
      members: ['user-1', 'user-2', 'user-3'],
      createdAt: '2023-10-15T10:30:00Z',
      updatedAt: '2023-11-02T14:45:00Z',
    },
    {
      id: 'proj-2',
      title: 'Education Platform',
      description: 'Online learning platform with interactive courses',
      status: 'planning',
      progress: 25,
      members: ['user-2', 'user-4'],
      createdAt: '2023-10-20T09:15:00Z',
      updatedAt: '2023-10-31T11:20:00Z',
    },
    {
      id: 'proj-3',
      title: 'Climate Monitor',
      description: 'Dashboard for tracking climate change metrics',
      status: 'completed',
      progress: 100,
      members: ['user-1', 'user-3', 'user-5'],
      createdAt: '2023-09-05T08:00:00Z',
      updatedAt: '2023-10-10T16:30:00Z',
    },
  ],
  '/user/profile': {
    id: 'user-1',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'admin',
    avatar: 'https://i.pravatar.cc/150?u=jane',
    createdAt: '2023-01-15T10:30:00Z',
  },
};