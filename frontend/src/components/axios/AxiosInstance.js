import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/";
/* Mechanism enables us to send data from backend to frontend */
const AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000 /* adds latency to request after we press button */,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    },
});
AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("Token");
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    else {
        config.headers.Authorization = ``;
    }
    return config;
});
AxiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        localStorage.removeItem("Token");
        // window.location.href = "/login";
    }
    return Promise.reject(error);
});
export default AxiosInstance;