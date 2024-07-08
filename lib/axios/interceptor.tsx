import axios from "axios";
import promise from "promise";

var axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  withCredentials: false,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const accessToken = localStorage.getItem("token");
    // const accessToken = "token";
    // if (accessToken) {
    //   config.headers.authorization = "Bearer " + accessToken;
    // }
    return config;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("An error occurred while logging in to the application.");
    } else {
      return promise.reject(error);
    }
  }
);

export default axiosInstance;
