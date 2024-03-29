import axios from "axios";

const token = localStorage.getItem("userInfo");

export const postAbout = (data) => {
  const options = {
    method: "POST",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("/soft", options);
};

export const deleteAbout = () => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios("/soft", options);
};

export const deleteAboutById = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`/soft/${id}`, options);
};

export const getAbout = () => axios("/soft");
