import axios from "axios";

export const registerUser = (data) =>
  axios.post("http://localhost:3009/users", data);
export const getUserByToken = () => axios("http://localhost:3009/users");

export const loginUser = (data) =>
  axios.post("http://localhost:3009/users/login", data);
