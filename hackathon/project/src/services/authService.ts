import api, { mockApi } from './api';
import { User } from '../types';

// For demo/development use mockApi
const authApi = import.meta.env.DEV ? mockApi : api;

interface AuthResponse {
  token: string;
  user: User;
}

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    // In development/demo, return mock data
    if (import.meta.env.DEV) {
      return {
        token: 'mock-jwt-token',
        user: {
          id: 'user-1',
          name: 'Jane Doe',
          email,
          role: 'admin',
          avatar: 'https://i.pravatar.cc/150?u=jane',
          createdAt: new Date().toISOString(),
        },
      };
    }
    
    // In production, call real API
    const response = await api.post<AuthResponse>('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Invalid email or password');
  }
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    // In development/demo, return mock data
    if (import.meta.env.DEV) {
      return {
        token: 'mock-jwt-token',
        user: {
          id: 'user-' + Date.now(),
          name,
          email,
          role: 'user',
          createdAt: new Date().toISOString(),
        },
      };
    }
    
    // In production, call real API
    const response = await api.post<AuthResponse>('/auth/register', {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Registration failed. Email might already be in use.');
  }
};

export const fetchUserProfile = async (): Promise<User> => {
  try {
    // In development/demo, return mock data
    if (import.meta.env.DEV) {
      return mockApi.get<User>('/user/profile');
    }
    
    // In production, call real API
    const response = await api.get<User>('/user/profile');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user profile');
  }
};

export const logoutUser = async (): Promise<void> => {
  // In production, you might want to call an API endpoint to invalidate the token
  if (!import.meta.env.DEV) {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }
};