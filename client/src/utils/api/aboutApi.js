import axios from "axios";

const token = localStorage.getItem("userInfo");

export const postAbout = (data) => {
  const options = {
    method: "POST",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("http://localhost:3009/about", options);
};

export const deleteAbout = () => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios("http://localhost:3009/about", options);
};
