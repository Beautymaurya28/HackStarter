// Auth types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Dashboard types
export interface DashboardWidget {
  id: string;
  title: string;
  type: 'chart' | 'stats' | 'list' | 'custom';
  size: 'small' | 'medium' | 'large';
  data: any;
  config?: Record<string, any>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed';
  progress: number;
  members: string[];
  createdAt: string;
  updatedAt: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Theme types
export type ThemeMode = 'light' | 'dark';

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}