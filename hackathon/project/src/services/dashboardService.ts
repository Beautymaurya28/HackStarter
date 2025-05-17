import api, { mockApi } from './api';
import { DashboardWidget } from '../types';

// For demo/development use mockApi
const dashboardApi = import.meta.env.DEV ? mockApi : api;

export const fetchWidgets = async (): Promise<DashboardWidget[]> => {
  try {
    const data = await dashboardApi.get<DashboardWidget[]>('/widgets');
    return data;
  } catch (error) {
    throw new Error('Failed to fetch widgets');
  }
};

export const updateWidgetLayout = async (widgets: DashboardWidget[]): Promise<void> => {
  try {
    if (!import.meta.env.DEV) {
      await api.put('/widgets/layout', { widgets });
    }
  } catch (error) {
    throw new Error('Failed to update widget layout');
  }
};