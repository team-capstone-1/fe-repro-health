import Cookies from "js-cookie";
import { axiosInstance } from "@/configs/AxiosInstance";

export const APIProfile = {
  getDoctorProfile: async () => {
    try {
      const token = Cookies.get("token");
      const headers = { Authorization: `Bearer ${token}` };
      const result = await axiosInstance.get("/doctors/profile", { headers });
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },

  getDoctorWorkHistories: async () => {
    try {
      const token = Cookies.get("token");
      const headers = { Authorization: `Bearer ${token}` };
      const result = await axiosInstance.get(
        "/doctors/profile/work-histories",
        {
          headers,
        },
      );
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },

  getDoctorEducationHistories: async () => {
    try {
      const token = Cookies.get("token");
      const headers = { Authorization: `Bearer ${token}` };
      const result = await axiosInstance.get("/doctors/profile/educations", {
        headers,
      });
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },

  getDoctorCertifications: async () => {
    try {
      const token = Cookies.get("token");
      const headers = { Authorization: `Bearer ${token}` };
      const result = await axiosInstance.get(
        "/doctors/profile/certifications",
        {
          headers,
        },
      );
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },
};
