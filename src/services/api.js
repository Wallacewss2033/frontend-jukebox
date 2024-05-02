import axios from 'axios';
import cookies from './cookies';

const api = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL
});

api.interceptors.request.use((config) => {
    config.headers.Accept = "application/json";
    config.headers["Content-Type"] = "application/json";

    if (config.url !== 'login') {
        config.headers.Authorization = `Bearer ${cookies.get('auth-token')}`;

    }
    return config;
})

export default api;
