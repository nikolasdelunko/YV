import axios from "axios";

const token = localStorage.getItem("userInfo");

export const uploadFile = (data) => {
  const options = {
    method: "post",
    headers: {
      "auth-token": `${JSON.parse(token)}`,
    },
    data: data,
  };
  return axios(`http://localhost:3009/upload`, options);
};

export const getFile = () => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/upload`, options);
};

export const deleteFile = () => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/upload`, options);
};
