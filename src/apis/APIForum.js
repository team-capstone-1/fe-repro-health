import { axiosInstance } from "@/configs/AxiosInstance";

export const APIForum = {
  getForumList: async (title) => {
    try {
      const result = await axiosInstance.get("/doctors/forums", {
        params: {
          title,
        },
      });
      return result.data.response;
    } catch (error) {
      console.error(error.response.data.message);
      return error.response.data.message;
    }
  },
  getForumDetail: async (id) => {
    try {
      const result = await axiosInstance.get(`/doctors/forums/details/${id}`);
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
      );
      return result.data.response;
    } catch (error) {
      console.error(error.response.data.message);
      return error.response.data.message;
    }
  },
};
