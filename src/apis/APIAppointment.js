import { AxiosError } from "axios";
import { axiosInstance } from "@/configs/AxiosInstance";

export const APIAppointment = {
  getListAppointments: async () => {
    try {
      const result = await axiosInstance.get(
        "/doctors/appointments/details-consultation",
      );
      return result.data.response;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },

  getAppointmentById: async (id) => {
    try {
      const result = await axiosInstance.get(
        `/doctors/appointments/details-consultation/${id}`,
      );
      return result.data.response;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },
};
