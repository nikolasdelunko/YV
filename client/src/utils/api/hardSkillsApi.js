import axios from "axios";

const token = localStorage.getItem("userInfo");

export const postSkills = (data) => {
  const options = {
    method: "POST",
    headers: { "auth-token": `${JSON.parse(token)}` },
    data: data,
  };
  return axios("http://localhost:3009/skills", options);
};

export const deleteSkills = () => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios("http://localhost:3009/skills", options);
};

export const deleteSkillsById = (id) => {
  const options = {
    method: "delete",
    headers: { "auth-token": `${JSON.parse(token)}` },
  };
  return axios(`http://localhost:3009/skills/${id}`, options);
};

export const getSkills = () => axios("http://localhost:3009/skills");
