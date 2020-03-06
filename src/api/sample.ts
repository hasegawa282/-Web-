import axios from "./base";

export const sampleGet = (data1: string, data2: string) => {
  const params = {
    data1: data1,
    data2: data2
  };
  return axios
    .get("/sample", { params: params })
    .then(res => res)
    .catch(res => res);
};

export const sampleJsonPost = (data1: string, data2: string) => {
  const formData = new FormData();
  formData.append("data1", data1);
  formData.append("data2", data2);
  return axios
    .post("/sample", formData)
    .then(res => res)
    .catch(res => res);
};

export const sampleFormPost = (data1: string, data2: string) => {
  const jsonData = {
    data1: data1,
    data2: data2
  };
  return axios
    .post("/sample", jsonData)
    .then(res => res)
    .catch(res => res);
};
