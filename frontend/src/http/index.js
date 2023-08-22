import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/v1/",
    timeout: 3000,
});

api.interceptors.request.use((config) => {
    if (localStorage.getItem("bearer")) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("bearer")}`;
    }
    return config;
});

export default api;