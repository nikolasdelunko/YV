const express = require("express");
const dotenv = require("dotenv");
// let myText = require("./data/myText");
let contacts = require("./data/contacts");
const certificates = require("./data/certificates");
const users = require("./data/user");
let cors = require("cors");
const mongoose = require("mongoose");
const projectRouter = require("./api/project/index");
const educationRouter = require("./api/education/index");
const aboutRouter = require("./api/about/index");
const workRouter = require("./api/workExp/index");
const skillsRouter = require("./api/skills/index");
const myTextRouter = require("./api/myText/index")

dotenv.config();

const connectionString = process.env.CONNECTION_STRING;

const app = express();

app.use(cors());

app.use(express.json());

app.use(projectRouter);
app.use(educationRouter);
app.use(aboutRouter);
app.use(workRouter);
app.use(skillsRouter)
app.use(myTextRouter)

const generateId = (data) => {
  const id = Math.floor(Math.random() * (1000 - 1)) + 1;
  return data.find((u) => u.id === id) ? generateId(data) : id;
};


app.get("/contacts", async (req, res) => {
  res.send(contacts).end();
});

app.get("/certificates", async (req, res) => {
  res.send(certificates).end();
});

app.use("/users/:id", async (req, res, nex) => {
  let user = users.find((u) => u.id === +req.params.id);
  if (!user) {
    res.status(404).send(`user not found`).end();
  }
  req.user = user;
  nex();
});

//* users

app.get("/users", async (req, res) => {
  res.send(users).end();
});

app.post("/users", async (req, res) => {
  const requiredKeys = ["login", "password"];
  const keys = Object.keys(req.body).filter((i) => requiredKeys.includes(i));
  if (keys.length !== requiredKeys.length) {
    res
      .status(400)
      .send(`keys ${requiredKeys.join(",")} are required`)
      .end();
  }
  keys.forEach((k) => {
    if (req.body[k] === null || req.body === undefined) {
      res.status(400).send(`key ${k} is required`).end();
    }
  });
  const user = [...keys].reduce(
    (acc, el) => ({ ...acc, [el]: req.body[el] }),
    {}
  );
  user.id = generateId(users);
  users.push(user);
  res.send(`User is username ${user.login} created! id - ${user.id}`).end();
});

app.get("/users/:id", async (req, res) => {
  res.send(req.user).end();
});

app.delete("/users", async (req, res) => {
  if (users.length === 1) {
    res.send(`no optional users found`).end();
  }
  if (users.length > 1) {
    let lastUser = users.slice(-1);
    users.pop();
    res
      .send(`user ${lastUser[0].login} with id  ${lastUser[0].id} deleted`)
      .end();
  }
});

///* about

//! post need { "skill" : "here skill"} send


//! skills { "skill" : "here skill"} send


//! myText     { "text" : "Here text"}


//! contacts   { "email": "@gmail.com", "phone": "000 000 "}

app.patch("/contacts", async (req, res) => {
  if (
    req.body.email === undefined ||
    req.body.email === null ||
    req.body.email.trim() === ""
  ) {
    res.send("please write email").end();
  } else if (
    req.body.phone === undefined ||
    req.body.phone === null ||
    req.body.phone.trim() === ""
  ) {
    res.send("please write Phone").end();
  } else {
    contacts[0].email = req.body.email;
    contacts[0].phone = req.body.phone;
    res.send(`Contacts successfuly change`).end();
  }
});

//* certificates

app.post("/certificates", async (req, res) => {
  const requiredKeys = ["title", "link"];
  const keys = Object.keys(req.body).filter((i) => requiredKeys.includes(i));
  if (keys.length !== requiredKeys.length) {
    res
      .status(400)
      .send(`keys ${requiredKeys.join(",")} are required`)
      .end();
  } else {
    const certificate = [...keys].reduce(
      (acc, el) => ({ ...acc, [el]: req.body[el] }),
      {}
    );
    certificate.id = generateId(certificates);
    certificates.push(certificate);
    res
      .send(
        `User is username ${certificate.title} created! id - ${certificate.id}`
      )
      .end();
  }
});

app.delete("/certificates", async (req, res) => {
  let last = certificates.slice(-1);
  certificates.pop();
  res.send(`user ${last[0].title} with id  ${last[0].id} deleted`).end();
});

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
  })
  .then(async () => {
    app.listen(process.env.APP_PORT, () => {
      console.log(`app start on port ${process.env.APP_PORT}`);
    });
  });

// app.listen(process.env.APP_PORT, () => {
//   console.log(`app start on port ${process.env.APP_PORT}`);
// });
