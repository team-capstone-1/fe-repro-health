import { axiosInstance } from "@/configs/AxiosInstance";
import { AxiosError } from "axios";

export const APIChatbot = {
  getChatbotHistory: async (id) => {
    try {
      const result = await axiosInstance.get(`/doctors/chatbot/health-recommendation/${id}`);
      return result.data.response;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err.response.data;
        throw new AxiosError(response);
      }
      throw new Error(err);
    }
  },

  getChatbotRecommendation: async (data) => {
    try {
      const result = await axiosInstance.post(`/doctors/chatbot/health-recommendation`, data);
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err.response.data;
        throw new AxiosError(response);
      }
      throw new Error(err);
    }
  },
};
