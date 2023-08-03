import axios from 'axios';
import auth from "@/modules/auth";

let httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000,
});

httpClient.interceptors.request.use((config) => {
    let token = auth.state.accessToken;

    if (!config.headers.Authorization && token) {
        config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
});

httpClient.interceptors.response.use(
    (res) => {
        return Promise.resolve(res.data);
    },
    (err) => {
        if (err.response && err.response.status === 401) {
            window.location.href = '/#/login';
        }

        return Promise.reject(err);
    }
);

export default {httpClient};