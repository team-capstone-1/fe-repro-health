import { AxiosError } from "axios";
import { axiosInstance } from "@/configs/AxiosInstance";
import { authService } from "@/configs/Auth";
import { globalRoute } from "@/utils/GlobalRoute";

export const APIAuth = {
  login: async (data) => {
    try {
      const result = await axiosInstance.post("/doctors/login", data);
      const { token } = result.data.response;
      authService.storeCredentials({ token });
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err.response.data;
        throw new AxiosError(response);
      }
      throw new Error(err);
    }
  },
  loginWithRememberMe: async (data, isRemembered) => {
    try {
      const result = await axiosInstance.post("/doctors/login", data);
      const { token } = result.data.response;
      authService.storeCredentials({ token, isRemembered, data });
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err.response.data;
        throw new AxiosError(response);
      }
      throw new Error(err);
    }
  },
  logout: () => {
    authService.clearCredentialsFromCookie();
    globalRoute.navigate && globalRoute.navigate("/");
  },
};
