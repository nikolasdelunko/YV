import axios from "axios";

const token = localStorage.getItem("userInfo");

export const uploadCv = (data) => {
  const options = {
    method: "post",
    headers: {
      "auth-token": `${JSON.parse(token)}`,
    },
    data: data,
  };
  return axios(`/cv`, options);
};

export const getCv = () => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`/cv`, options);
};

export const deleteCv = () => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`/cv`, options);
};

export const patchCv = (data, id) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`/cv/${id}`, options);
};
