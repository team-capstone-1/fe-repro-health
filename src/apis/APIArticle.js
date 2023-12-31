import { AxiosError } from "axios";
import { axiosInstance } from "@/configs/AxiosInstance";
import { showSuccessToast } from "@/components/shared-components/Toast";

export const APIArticle = {
  getListArticle: async () => {
    try {
      const result = await axiosInstance.get("/doctors/articles");
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },

  getDetailArticle: async (id) => {
    try {
      const result = await axiosInstance.get(`/doctors/articles/${id}`);
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { message } = err;
        throw new AxiosError(message);
      }
      throw new Error(err);
    }
  },

  addArticle: async (data) => {
    try {
      const result = await axiosInstance.post("/doctors/articles", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      showSuccessToast("Artikel berhasil ditambahkan", "top-center", "large");
      return result.data.response;
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err.response.data;
        throw new AxiosError(response);
      }
      throw new Error(err);
    }
  },

  deleteArticle: async (articleId) => {
    try {
      const result = await axiosInstance.delete(
        `/doctors/articles/${articleId}`,
      );
      showSuccessToast("Artikel berhasil dihapus", "top-center", "large");
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error.response.data;
        throw new AxiosError(response);
      }
      throw new Error(error);
    }
  },
};
