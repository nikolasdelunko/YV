import axios from "axios";

const token = localStorage.getItem("userInfo");

export const registerUser = (data) => {
  const options = {
    method: "post",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`/users`, options);
};

export const getUserByToken = () => axios("//users");

export const getUsers = () => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`/users`, options);
};

export const getUserById = (id) => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`/users/${id}`, options);
};

export const patchUser = (data, id) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`/users/${id}`, options);
};

export const deleteUserById = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`/users/${id}`, options);
};

export const deleteUser = (data) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("/users", options);
};

export const loginUser = (data) => axios.post("/users/login", data);
