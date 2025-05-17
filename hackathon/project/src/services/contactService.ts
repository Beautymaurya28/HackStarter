import api, { mockApi } from './api';
import { ContactFormData } from '../types';

// For demo/development use mockApi
const contactApi = import.meta.env.DEV ? mockApi : api;

export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    if (import.meta.env.DEV) {
      // In development, just return success
      return { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
      };
    }
    
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit contact form. Please try again later.');
  }
};