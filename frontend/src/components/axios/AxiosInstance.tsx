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

export default AxiosInstance;
