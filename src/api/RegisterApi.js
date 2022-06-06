import axiosClient from "./AxiosApi";

const RegisterApi = {
  getAll(params) {
    const url = "/";
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/${data.id}`;
    return axiosClient.post(url, data);
  },

  remove(id) {
    const url = `/${id}`;
    return axiosClient.delete(url);
  },
};

export default RegisterApi;
