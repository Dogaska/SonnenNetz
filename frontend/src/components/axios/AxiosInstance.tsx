import axios from "axios";
import Cookies from "js-cookie";

const isDevelopment = import.meta.env.MODE === "development";
const baseUrl = isDevelopment
  ? import.meta.env.VITE_API_BASE_URL_LOCAL
  : import.meta.env.VITE_API_BASE_URL_PROD;

const AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Adds CSRF to communication
//AxiosInstance.interceptors.request.use((config) => {
//  const csrfToken = Cookies.get("csrftoken");
//  if (csrfToken) {
//    config.headers["X-CSRFToken"] = csrfToken;
//  }
//  return config; // Ensure to return the config object
//});

AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("Token");
  config.headers.Authorization = token ? `Token ${token}` : "";
  console.log(baseUrl);
  return config;
});

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("Token");
      // Uncomment and adjust if navigation needed: window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
