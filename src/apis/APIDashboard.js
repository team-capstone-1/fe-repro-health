import { AxiosError } from "axios";
import { axiosInstance } from "@/configs/AxiosInstance";

export const APIDashboard = {
  getListAllConsultationSchedules: async () => {
    try {
      const result = await axiosInstance.get(
        "/doctors/consultations-dashboard",
      );
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },

  getListAllPatients: async () => {
    try {
      const result = await axiosInstance.get("/doctors/patients-dashboard");
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },

  getListAllTransactions: async () => {
    try {
      const result = await axiosInstance.get("/doctors/transactions-dashboard");
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },

  getListAllArticles: async () => {
    try {
      const result = await axiosInstance.get("/doctors/articles-dashboard");
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
