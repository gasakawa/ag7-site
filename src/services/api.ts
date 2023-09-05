import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:1338/api',
  headers: {
    authorization: `Bearer ${process.env.TOKEN}`
  }
});

export default api;
