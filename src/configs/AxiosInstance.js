import axios from "axios";
import { CONST } from "@/utils/Constant";

export const axiosInstance = axios.create({
  baseURL: CONST.BASE_URL_API,
});
