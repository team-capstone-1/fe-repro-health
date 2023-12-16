import { AxiosError } from "axios";
import { axiosInstance } from "@/configs/AxiosInstance";

export const APIAppointment = {
  getListAppointments: async (name, status) => {
    try {
      const result = await axiosInstance.get(
        "/doctors/appointments/details-consultation",
        {
          params: {
            name,
            status,
          },
        },
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

  getAppointmentById: async (id) => {
    try {
      const result = await axiosInstance.get(
        `/doctors/appointments/details-consultation/${id}`,
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

  getDetailTransaction: async (transaction_id) => {
    try {
      const result = await axiosInstance.get(
        `/doctors/appointments/details-transaction/${transaction_id}`,
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

  confirmConsultation: async (id) => {
    try {
      const result = await axiosInstance.put(
        "/doctors/appointments/confirm-consultation",
        {
          consultation_id: id,
        },
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

  finishConsultation: async (id) => {
    try {
      const result = await axiosInstance.put(
        "/doctors/appointments/finish-consultation",
        {
          consultation_id: id,
        },
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
