import axios from "axios";

const token = localStorage.getItem("userInfo");

export const getContacts = () => axios.get("http://localhost:3009/contacts");

export const getContactsById = (id) => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/contacts/${id}`, options);
};

export const postContacts = (data) => {
  const options = {
    method: "post",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("http://localhost:3009/contacts", options);
};

export const patchContacts = (data, id) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`http://localhost:3009/contacts/${id}`, options);
};

export const deleteContactById = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/contacts/${id}`, options);
};

export const deleteContacts = (data) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("http://localhost:3009/contacts", options);
};
