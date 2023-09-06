import axios from 'axios';
import { BASE_URL } from './endpoints';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
axiosInstance.interceptors.response.use(
  response => {
    if (response.data?.Request === 'Error') {
      window.location.pathname = '/error';
    } else {
      return response.data;
    }
  },
  reject => {
    if (reject.resopnse) {
      window.location.pathname = `/error/?status=${response?.status}&data=${response?.data}`;
    } else {
      window.location.pathname = '/error';
    }
  },
);

export { axiosInstance };
