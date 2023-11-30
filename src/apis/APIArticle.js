import { AxiosError } from "axios";
import { axiosInstance } from "@/configs/AxiosInstance";

export const APIArticle = {
  getListArticle: async () => {
    try {
      const result = await axiosInstance.get("/doctors/articles");
      console.log("result list artikel", result.data);
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },

  getAllArticle: async () => {
    try {
      const result = await axiosInstance.get("/doctors/articles");
      console.log("result detail artikel", result.data);
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },
};
