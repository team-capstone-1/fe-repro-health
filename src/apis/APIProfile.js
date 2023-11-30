import { AxiosError } from "axios";
import { axiosInstance } from "@/configs/AxiosInstance";

export const APIProfile = {
  getDoctorProfile: async () => {
    try {
      const result = await axiosInstance.get("/doctors/profile");
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },

  getDoctorWorkHistories: async () => {
    try {
      const result = await axiosInstance.get("/doctors/profile/work-histories");
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },

  getDoctorEducationHistories: async () => {
    try {
      const result = await axiosInstance.get("/doctors/profile/educations");
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },

  getDoctorCertifications: async () => {
    try {
      const result = await axiosInstance.get("/doctors/profile/certifications");
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
