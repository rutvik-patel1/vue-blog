import axios from "axios";
import Cookies from "js-cookie";
import { getNewAccessToken } from './auth'
import router from "../router"
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const token = await Cookies.get('idToken')
    if (token) {
      request.params = {
        ...request.params,
        auth: token
      };
    }
    return request
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    try {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const res = await getNewAccessToken()
        Cookies.set('idToken', res.data.id_token, { expires: 1 / 1440 })
        Cookies.set('refreshToken', res.data.refresh_token, { expires: 365 })
        return axiosInstance(originalRequest);
      }
    } catch (error) {
      router.push({ name: 'Login' })
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance