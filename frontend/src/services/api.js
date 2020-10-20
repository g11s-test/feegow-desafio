import axios from 'axios';

// Config
import { API_BASE_URL } from '../config/app';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
