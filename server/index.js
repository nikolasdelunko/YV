const express = require("express");
const dotenv = require("dotenv");
const users = require("./api/user/index");
let cors = require("cors");
const mongoose = require("mongoose");
const projectRouter = require("./api/project/index");
const educationRouter = require("./api/education/index");
const aboutRouter = require("./api/about/index");
const workRouter = require("./api/workExp/index");
const skillsRouter = require("./api/skills/index");
const myTextRouter = require("./api/myText/index");
const certificatesRouter = require("./api/certificates/index");
const contacts = require("./api/contacts/index");

dotenv.config();

const connectionString = process.env.CONNECTION_STRING;

const app = express();

app.use(cors());

app.use(express.json());

app.use(projectRouter);
app.use(educationRouter);
app.use(aboutRouter);
app.use(workRouter);
app.use(skillsRouter);
app.use(myTextRouter);
app.use(certificatesRouter);
app.use(contacts);
app.use(users);

const generateId = (data) => {
  const id = Math.floor(Math.random() * (1000 - 1)) + 1;
  return data.find((u) => u.id === id) ? generateId(data) : id;
};

//! post need { "skill" : "here skill"} send

//! skills { "skill" : "here skill"} send

//! myText     { "text" : "Here text"}

//! contacts   { "email": "@gmail.com", "phone": "000 000 "}

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
  })
  .then(async () => {
    app.listen(process.env.APP_PORT, () => {
      console.log(`app start on port ${process.env.APP_PORT}`);
    });
  });
