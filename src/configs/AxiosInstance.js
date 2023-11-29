import axios from "axios";
import { CONST } from "@/utils/Constant";
import { authService } from "@/configs/Auth";

export const axiosInstance = axios.create({
  baseURL: CONST.BASE_URL_API,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = authService.getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);