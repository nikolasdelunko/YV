import axios from "axios";

const token = localStorage.getItem("userInfo");

export const registerUser = (data) => {
  const options = {
    method: "post",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`http://localhost:3009/users`, options);
};

export const getUserByToken = () => axios("http://localhost:3009/users");

export const getUsers = () => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/users`, options);
};

export const getUserById = (id) => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/users/${id}`, options);
};

export const patchUser = (data, id) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`http://localhost:3009/users/${id}`, options);
};

export const deleteUserById = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/users/${id}`, options);
};

export const deleteUser = (data) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("http://localhost:3009/users", options);
};

export const loginUser = (data) =>
  axios.post("http://localhost:3009/users/login", data);
