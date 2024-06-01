import axios from 'axios';
import { config, ENDPOINTS } from './urls';

export const apiRequest = () => {
  return axios.create({
    baseURL: config.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};