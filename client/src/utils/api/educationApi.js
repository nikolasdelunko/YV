import axios from "axios";

const token = localStorage.getItem("userInfo");

export const getEducation = () => axios.get("/education");

export const getEducationById = (id) => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`/education/${id}`, options);
};

export const postEducation = (data) => {
  const options = {
    method: "post",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("/education", options);
};

export const deleteEducationById = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`/education/${id}`, options);
};

export const deleteEducation = (data) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("/education", options);
};
