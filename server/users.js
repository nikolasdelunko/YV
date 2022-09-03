const fs = require("fs");

const SEX = { MALE: "MALE", FEMALE: "FEMALE" };
const USER_COUNT = 20;

const names = [
  "kolya",
  "cmoniya",
  "zybr",
  "fyflo",
  "Stepan",
  "gnida",
  "den",
  "artem",
  "ivan",
  "dimon",
  "Mars",
  "Kirill",
  "Stepka",
  "Oleg",
];
const lastnames = [
  "kolya",
  "cmoniya",
  "zybr",
  "pidr",
  "koliaas",
  "pes",
  "dog",
  "cat",
  "Zalp",
  "Korolenko",
  "sternennko",
  "denisenko",
  "padlyka",
  "itd",
];

const getName = () => names[Math.floor(Math.random() * (names.length - 1))];
const getLastName = () =>
  lastnames[Math.floor(Math.random() * (names.length - 1))];
const getAge = () => Math.floor(Math.random() * (40 - 1)) + 1;
const getString = () => (Math.random() + 1).toString(36).substring(7);
const getMale = () => (Math.random() > 0.5 ? SEX.FEMALE : SEX.MALE);
const getMarried = () => Math.random() > 0.5;
const getProfile = () => ({
  username: getString(),
  firstName: getName(),
  lastName: getLastName(),
  date: new Date(),
});
const getUser = (id) => ({
	id,
  age: getAge(),
  profile: getProfile(),
  sex: getMale(),
  isMarried: getMarried(),
  password: getString(),
  email: getString() + "@email.com",
});

module.exports = (userCount) =>
  Array.from({ length: userCount }, (_, i) => getUser(i));
