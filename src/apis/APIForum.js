import { axiosInstance } from "@/configs/AxiosInstance";
import Cookies from "js-cookie";

export const APIForum = {
  getForumList: async () => {
    try {
      const result = await axiosInstance.get("/forums", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      return result.data.response;
    } catch (error) {
      console.error(error.response.data.message);
      return error.response.data.message;
    }
  },
  getForumDetail: async () => {
    try {
      const result = await axiosInstance.get("/doctors/forums", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      return result.data.response;
    } catch (error) {
      console.error(error.response.data.message);
      return error.response.data.message;
    }
  },
  addForumReply: async ({ questionId, data }) => {
    try {
      const result = await axiosInstance.post(
        "/doctors/forum-replies",
        {
          forum_id: questionId,
          content: data,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        },
      );
      return result.data.response;
    } catch (error) {
      console.error(error.response.data.message);
      return error.response.data.message;
    }
  },
};
