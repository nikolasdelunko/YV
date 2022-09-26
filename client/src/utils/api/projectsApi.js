import axios from "axios";

const token = localStorage.getItem("userInfo");

export const getProjects = () => axios.get("/projects");

export const getProjectsById = (id) => {
  const options = {
    method: "get",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`/projects/${id}`, options);
};

export const postProjects = (data) => {
  const options = {
    method: "post",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("/projects", options);
};

export const patchProjects = (data, id) => {
  const options = {
    method: "patch",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios(`/projects/${id}`, options);
};

export const deleteProjectsById = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`/projects/${id}`, options);
};

export const deleteProjects = (data) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("/projects", options);
};
