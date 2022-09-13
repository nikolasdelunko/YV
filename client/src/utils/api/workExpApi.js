import axios from "axios";

const token = localStorage.getItem("userInfo");

export const getWorkExp = () => axios.get("http://localhost:3009/WorkExp");

export const getWorkExpById = (id) => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/WorkExp/${id}`, options);
};

export const postWorkExp = (data) => {
  const options = {
    method: "post",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("http://localhost:3009/WorkExp", options);
};

export const deleteWorkExpById = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/WorkExp/${id}`, options);
};

export const deleteWorkExp = (data) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("http://localhost:3009/WorkExp", options);
};

export const patchWorkExp = (data, id) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`http://localhost:3009/WorkExp/${id}`, options);
};
