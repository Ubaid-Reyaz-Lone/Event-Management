import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
