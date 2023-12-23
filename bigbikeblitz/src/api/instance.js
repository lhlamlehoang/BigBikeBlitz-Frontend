import axios from "axios";
export const Base_URL = "https://localhost:7028";
export const instance = axios.create({
  Base_URL,
    data: {},
    headers: {
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.response.use(
    function (response) {
      if (response.data) {
        return response.data;
      }
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  export const instanceFile = axios.create({
    Base_URL,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    params: {},
  });
  instanceFile.interceptors.response.use(
    function (response) {
      if (response.data) {
        return response.data;
      }
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );