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

  getCountDataForOneDay: async () => {
    try {
      const result = await axiosInstance.get(
        "/doctors/dashboard/data-count-one-day",
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

};
