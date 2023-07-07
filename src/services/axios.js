import axios from 'axios';

let httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000,
});

export default {httpClient};