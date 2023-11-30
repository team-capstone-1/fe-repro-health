import { axiosInstance } from "@/configs/AxiosInstance";

export const APIProfile = {
  getDoctorProfile: async () => {
    try {
      const result = await axiosInstance.get("/doctors/profile");
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },

  getDoctorWorkHistories: async () => {
    try {
      const result = await axiosInstance.get("/doctors/profile/work-histories");
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },

  getDoctorEducationHistories: async () => {
    try {
      const result = await axiosInstance.get("/doctors/profile/educations");
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },

  getDoctorCertifications: async () => {
    try {
      const result = await axiosInstance.get("/doctors/profile/certifications");
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },
};
