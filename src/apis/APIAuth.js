import { axiosInstance } from "@/configs/AxiosInstance";
import { authService } from "@/configs/Auth";

export const APIAuth = {
  login: async (data) => {
    try {
      const result = await axiosInstance.post("/doctors/login", data);
      const { token } = result.data.response;
      authService.storeCredentials({ token });
      return result.data;
    } catch (error) {
      console.error(error.response?.data);
      return error.response?.data;
    }
  },
  loginWithRememberMe: async (data, isRemembered) => {
    try {
      const result = await axiosInstance.post("/doctors/login", data);
      const { token } = result.data.response;
      authService.storeCredentials({ token, isRemembered, data });
      return result.data;
    } catch (error) {
      console.error(error.response?.data);
      return error.response?.data;
    }
  },
  logout: () => {
    authService.clearCredentialsFromCookie();
  },
};
