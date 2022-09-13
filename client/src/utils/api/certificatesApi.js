import axios from "axios";

const token = localStorage.getItem("userInfo");

export const getCertificates = () => axios.get("http://localhost:3009/certificates");

export const getCertificatesById = (id) => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/certificates/${id}`, options);
};

export const postCertificates = (data) => {
  const options = {
    method: "post",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("http://localhost:3009/certificates", options);
};

export const patchCertificates = (data, id) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`http://localhost:3009/certificates/${id}`, options);
};

export const deleteCertificatesById = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/certificates/${id}`, options);
};

export const deleteCertificates = (data) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("http://localhost:3009/certificates", options);
};
