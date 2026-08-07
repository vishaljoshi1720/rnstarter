import Env from '@env';
import axios from 'axios';

import { getAuthToken, signOut } from '@/shared/auth';

export const client = axios.create({
  baseURL: Env.API_URL,
  timeout: 30_000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token?.access) {
    config.headers.Authorization = `Bearer ${token.access}`;
  }
  return config;
});

client.interceptors.response.use(
  response => response,
  async (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      await signOut();
    }
    return Promise.reject(error);
  },
);
