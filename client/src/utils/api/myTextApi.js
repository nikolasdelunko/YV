import axios from "axios";

const token = localStorage.getItem("userInfo");

export const getMyText = () => axios.get("http://localhost:3009/myText");

export const postMyText = (data) => {
  const options = {
    method: "post",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("http://localhost:3009/myText", options);
};

export const patchMyText = (data, id) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: {"text" : data},
  };
  return axios(`http://localhost:3009/myText/${id}`, options);
};

export const deleteMyTextById = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/myText/${id}`, options);
};

export const deleteMyText = (data) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("http://localhost:3009/myText", options);
};
