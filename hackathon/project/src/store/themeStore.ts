import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeMode } from '../types';

interface ThemeStore {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: 'light',
      
      toggleTheme: () => 
        set((state) => {
          const newMode = state.mode === 'light' ? 'dark' : 'light';
          updateDocumentClass(newMode);
          return { mode: newMode };
        }),
        
      setTheme: (mode: ThemeMode) => {
        updateDocumentClass(mode);
        set({ mode });
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);

// Helper to update document class for theme
const updateDocumentClass = (mode: ThemeMode) => {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Initialize theme on page load
export const initializeTheme = () => {
  const { mode } = useThemeStore.getState();
  updateDocumentClass(mode);
};