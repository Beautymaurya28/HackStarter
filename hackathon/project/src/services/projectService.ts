import api, { mockApi } from './api';
import { Project } from '../types';

// For demo/development use mockApi
const projectApi = import.meta.env.DEV ? mockApi : api;

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const data = await projectApi.get<Project[]>('/projects');
    return data;
  } catch (error) {
    throw new Error('Failed to fetch projects');
  }
};

export const createProject = async (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project> => {
  try {
    const data = await projectApi.post<Project>('/projects', project);
    return data;
  } catch (error) {
    throw new Error('Failed to create project');
  }
};

export const updateProject = async (id: string, project: Partial<Project>): Promise<Project> => {
  try {
    if (import.meta.env.DEV) {
      return { ...project, id } as Project;
    }
    const response = await api.put<Project>(`/projects/${id}`, project);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update project');
  }
};

export const deleteProject = async (id: string): Promise<void> => {
  try {
    if (!import.meta.env.DEV) {
      await api.delete(`/projects/${id}`);
    }
  } catch (error) {
    throw new Error('Failed to delete project');
  }
};