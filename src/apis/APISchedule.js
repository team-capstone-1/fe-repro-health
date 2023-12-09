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
};
