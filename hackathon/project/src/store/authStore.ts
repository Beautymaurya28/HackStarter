import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, User } from '../types';
import { loginUser, registerUser, fetchUserProfile, logoutUser } from '../services/authService';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  fetchProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const { token, user } = await loginUser(email, password);
          set({ token, user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false, error: (error as Error).message });
          throw error;
        }
      },

      register: async (name: string, email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const { token, user } = await registerUser(name, email, password);
          set({ token, user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false, error: (error as Error).message });
          throw error;
        }
      },

      logout: () => {
        logoutUser();
        set({ user: null, token: null, isAuthenticated: false, error: null });
      },

      fetchProfile: async () => {
        set({ isLoading: true });
        try {
          const user = await fetchUserProfile();
          set({ user, isLoading: false });
        } catch (error) {
          set({ isLoading: false, error: (error as Error).message });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ token: state.token, user: state.user }),
    }
  )
);