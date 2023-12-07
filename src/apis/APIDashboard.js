import { AxiosError } from "axios";
import { axiosInstance } from "@/configs/AxiosInstance";

export const APIDashboard = {
  getCountDataForOneMonth: async () => {
    try {
      const result = await axiosInstance.get(
        "/doctors/dashboard/data-count-one-month",
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

  getCountDataForOneWeek: async () => {
    try {
      const result = await axiosInstance.get(
        "/doctors/dashboard/data-count-one-week",
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

  getDashboardIncome: async () => {
    try {
      const response = await axiosInstance.get("/doctors/dashboard/graph");
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error;
        throw new AxiosError(message);
      }
      throw new Error(error);
    }
  },
};
