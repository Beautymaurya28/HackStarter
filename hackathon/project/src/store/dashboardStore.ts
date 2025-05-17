import { create } from 'zustand';
import { DashboardWidget, Project } from '../types';
import { fetchWidgets, updateWidgetLayout } from '../services/dashboardService';
import { fetchProjects } from '../services/projectService';

interface DashboardState {
  widgets: DashboardWidget[];
  projects: Project[];
  isLoading: boolean;
  error: string | null;
}

interface DashboardStore extends DashboardState {
  loadWidgets: () => Promise<void>;
  loadProjects: () => Promise<void>;
  updateLayout: (widgets: DashboardWidget[]) => Promise<void>;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  widgets: [],
  projects: [],
  isLoading: false,
  error: null,

  loadWidgets: async () => {
    set({ isLoading: true, error: null });
    try {
      const widgets = await fetchWidgets();
      set({ widgets, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },

  loadProjects: async () => {
    set({ isLoading: true, error: null });
    try {
      const projects = await fetchProjects();
      set({ projects, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },

  updateLayout: async (widgets: DashboardWidget[]) => {
    try {
      await updateWidgetLayout(widgets);
      set({ widgets });
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },
}));