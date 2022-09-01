const express = require("express");
const dotenv = require("dotenv");
let projects = require("./data/project");
const about = require("./data/about");
const education = require("./data/education");
const workExp = require("./data/workExp");
const skills = require("./data/skills");
const myText = require("./data/myText");
const contacts = require("./data/contacts");
const certificates = require("./data/certificates");
const users = require("./data/user");
var cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const generateId = (data) => {
  const id = Math.floor(Math.random() * (1000 - 1)) + 1;
  return data.find((u) => u.id === id) ? generateId(users) : id;
};

app.get("/projects", async (req, res) => {
  res.send(projects).end();
});

app.get("/about", async (req, res) => {
  res.send(about).end();
});

app.get("/education", async (req, res) => {
  res.send(education).end();
});

app.get("/workExp", async (req, res) => {
  res.send(workExp).end();
});

app.get("/skills", async (req, res) => {
  res.send(skills).end();
});

app.get("/myText", async (req, res) => {
  res.send(myText).end();
});

app.get("/contacts", async (req, res) => {
  res.send(contacts).end();
});

app.get("/certificates", async (req, res) => {
  res.send(certificates).end();
});

app.post("/users", async (req, res) => {
  const requiredKeys = ["login", "password"];
  const keys = Object.keys(req.body).filter((i) => requiredKeis.includes(i));
  if (keys.length !== requiredKeys.length) {
    res
      .status(400)
      .send(`keys ${requiredKeys.join(",")} are required`)
      .end();
  }
  keys.forEach((k) => {
    if (requiredKeys.body[k] === null || req.body === undefined) {
      res.status(400).send(`key ${k} is required`).end();
    }
  });
  const user = [...keys].reduce(
    (acc, el) => ({
      ...acc,
      [el]: require.body[el],
    }),
    {}
  );
  users.id = generateId(users);
  users.push(users);
  res
    .send(`User is username ${user.profile.username} created! id - ${user.id}`)
    .end();
});

app.use("/", async (req, res, next) => {
  const b64auth = (req.headers.authorization || "").split(" ")[1] || "";
  const first = Buffer.from(b64auth, "base64");
  const second = first.toString();
  const third = second.split(":");

  const username = third[0];
  const password = third[1];

  const user = users.find((u) => u.login === username);

  const userNotFound = !user;
  const passwordsNotMatch = user && user.password !== password;
  if (userNotFound || passwordsNotMatch) {
    res.status(401).send({
      message: userNotFound ? "User not found" : "Passwords not math",
    });
    return;
  }
  req.currentUser = user;
  next();
});

app.use("/users/:id", async (req, res, nex) => {
  let user = users.find((u) => u.id === +req.params.id);
  if (!user) {
    res.status(404).send(`user not found`).end();
  }
  req.user = user;
  nex();
});

app.get("/users/:id", async (req, res) => {
  res.send(req.currentUser).end();
});

app.delete("/users/:id", async (req, res) => {
  users = users.filter((u) => u.id !== req.user.id);
  res.send(`user with id  ${req.user.id} deleted`).end();
});

// project

app.post("/projects", async (req, res) => {
  const requiredKeys = ["name", "description", "photo", "link"];
  const keys = Object.keys(req.body).filter((k) => requiredKeys.includes(k));
  if (keys.length !== requiredKeys.length) {
    res
      .status(400)
      .send(`keys ${requiredKeys.join(",")} are required!`)
      .end();
  }
  keys.forEach((k) => {
    if (req.body[k] === null || req.body === undefined) {
      res.status(400).send(`key ${k} is required`).end();
    }
  });
  const project = [...keys].reduce(
    (acc, el) => ({ ...acc, [el]: req.body[el] }),
    {}
  );
  project.id = generateId(projects);
  projects.push(project);
  res
    .send(`User is username ${project.name} created! id - ${project.id}`)
    .end();
});

app.delete("/projects", async (req, res) => {
  projects.pop();
  res.send(`Last project deleted`).end();
});

app.delete("/projects/:id", async (req, res) => {
  let usproj = projects.find((u) => u.id === +req.params.id);
  if (!usproj) {
    res.send(`project with id  ${req.params.id} not found`).end();
  }
  if (usproj) {
    projects = projects.filter((u) => u.id != req.params.id);
    res.send(`project with id  ${req.params.id} deleted`).end();
  }
});

/// about

//// education

//// work Exp

/// skills

/// myText

/// contacts

//certificates

/// user
app.get("/user", async (req, res) => {
  res.send(users).end();
});

app.listen(process.env.APP_PORT, () => {
  console.log(`app start on port ${process.env.APP_PORT}`);
});
