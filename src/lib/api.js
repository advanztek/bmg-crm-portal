import { useAuthStore } from "@/store/auth";
import axios from "axios";
import { notification } from "./notification";

export const api = axios.create({
  baseURL: "https://bmg-crm.onrender.com/V1/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (error?.code === "ERR_NETWORK") {
      notification.info("Connection error, please try again!");
      return Promise.reject(error);
    }

    if (status === 401) {
      notification.error("Session expired. Please login again.");

      const { clearAuth } = useAuthStore.getState();
      clearAuth();

      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    if (status === 403) {
      const message = error?.response?.data?.message || "Access denied";
      notification.error(message);
    }

    return Promise.reject(error);
  },
);
