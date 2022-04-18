import axios from "axios";
import api_url from "./api";
import { toast } from "mdbreact";

const axiosInstance = axios.create({
  baseURL: api_url,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `bearer ${token}`;
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  function (error) {
    // console.log("error>>>", error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    if (
      response.data.error === "token is invalid" ||
      response.data === "error: please provide a token"
    ) {
      setTimeout(() => {
        window.location = "/";
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("exprationDate");
        localStorage.removeItem("sabOs");
      }, 5000);
      toast.error("token is invalid", {
        position: "top-right",
      });
    } else if (response.data.error) {
      toast.error(response.data.error, {
        position: "top-right",
      });
    } else if (response.data.message) {
      const expirationDate = new Date(new Date().getTime() + 30 * 60000)
      localStorage.setItem('exprationDate', expirationDate)
      toast.success(response.data.message, {
        position: "top-right",
      });
    }
    // console.log("response>>>", response);
    return response;
  },
  function (error) {
    // console.log("response error>>>", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
