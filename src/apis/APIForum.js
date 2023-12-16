import { axiosInstance } from "@/configs/AxiosInstance";
import { AxiosError } from "axios";

export const APIForum = {
  getForumList: async (title) => {
    try {
      const result = await axiosInstance.get("/doctors/forums", {
        params: {
          title,
        },
      });
      return result.data.response;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err.response.data;
        throw new AxiosError(response);
      }
      throw new Error(err);
    }
  },
  getForumDetail: async (id) => {
    try {
      const result = await axiosInstance.get(`/doctors/forums/details/${id}`);
      return result.data.response;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err.response.data;
        throw new AxiosError(response);
      }
      throw new Error(err);
    }
  },
  addForumReply: async ({ questionId, data }) => {
    try {
      const result = await axiosInstance.post("/doctors/forum-replies", {
        forum_id: questionId,
        content: data,
      });
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
