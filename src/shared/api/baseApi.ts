/* eslint-disable */
// @ts-ignore
import axios from "axios";
import { BASE_URL } from "./endpoints";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data?.Request === "Error") {
      window.location.pathname = "/error";
    }
    return response;
  },
  reject => {
    if (reject.resopnse) {
      window.location.pathname =
        `/error/?status=${reject.response?.status || ""}&data=${reject.response?.data || ""}`;
    }
    else {
      window.location.pathname = "/error";
    }
  },
);

export { axiosInstance };
