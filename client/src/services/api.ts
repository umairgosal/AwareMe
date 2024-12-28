import axios from 'axios';

const DEV_ENV = import.meta.env.VITE_APP_DEV_ENV; 

let API_URL = 'http://localhost:5000/api';

if (DEV_ENV == "development") {
  API_URL = 'http://localhost:5000/api';
} else {
  if (DEV_ENV == "production") {
    API_URL = 'https://ruralrise-backend.onrender.com/api';
  }
};

const api = axios.create({
  baseURL: API_URL, 
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (!(config.data instanceof FormData)) {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export const products = {
  getAll: async () => {
    const response = await api.get('/products');
    return response.data;
  },
  create: async (productData: any) => {
    const response = await api.post('/products', productData);
    return response.data;
  },
  delete: async (productId: string) => {
    await api.delete(`/products/${productId}`);
  }  
};

export const resources = {
  getAll: async () => {
    const response = await api.get('/resources');
    return response.data;
  },
};

export default api;