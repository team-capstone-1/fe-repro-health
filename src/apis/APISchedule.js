import { AxiosError } from "axios";
import { axiosInstance } from "@/configs/AxiosInstance";

export const APISchedule = {
  getAllSchedule: async () => {
    try {
      const result = await axiosInstance.get("/doctors/schedule");
      return result.data.response;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err.response.data;
        throw new AxiosError(response);
      }
      throw new Error(err);
    }
  },

  updateInactiveSchedule: async ({ date, session }) => {
    try {
      const result = await axiosInstance.put(
        `/doctors/schedule/inactive?date=${date}&session=${session}`,
      );
      return result.data.response;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err.response.data;
        throw new AxiosError(response);
      }
      throw new Error(err);
    }
  },

  updateActiveSchedule: async ({ date, session }) => {
    try {
      const result = await axiosInstance.put(
        `/doctors/schedule/active?date=${date}&session=${session}`,
      );
      return result.data.response;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err.response.data;
        throw new AxiosError(response);
      }
      throw new Error(err);
    }
  },
};
