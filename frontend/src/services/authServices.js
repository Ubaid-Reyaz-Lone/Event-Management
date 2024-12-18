import axios from "axios";

// Create an axios instance with base URL
const axiosInstance = axios.create({
  baseURL:
    "https://4341-2409-40d5-1009-93b4-fc74-862f-2446-9e8c.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
  },
});
// Add an interceptor to include the token from localStorage
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

export const authService = {
  login: async (username, password) => {
    try {
      const response = await axiosInstance.post("/api/auth/login", {
        username,
        password,
      });

      // Assuming API response contains an access token, user ID, and role
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access_token);
        return {
          access_token: response.data.access_token,
          user_id: response.data.userId,
          role: response.data.role,
        };
      }

      throw new Error("Invalid login response");
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Unable to log in. Please try again."
      );
    }
  },

  // Register function
  register: async (payload) => {
    try {
      const response = await axiosInstance.post("/api/auth/register", payload);

      // Assuming API response contains a success message or user info
      if (response.status === 201) {
        return { message: "Registration successful" };
      }

      throw new Error("Invalid registration response");
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Unable to register. Please try again."
      );
    }
  },
};
