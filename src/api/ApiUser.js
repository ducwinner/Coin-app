import axios from "axios";
const api_user = "http://localhost:3000/user";
const axiosUser = axios.create({
  baseURL: api_user,
  headers: { "Content-type": "aplication/json" },
});

axiosUser.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosUser.interceptors.response.use(
  function (response) {
    console.log(response.data);
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosUser;
