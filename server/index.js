const express = require("express");
const dotenv = require("dotenv");
let projects = require("./data/project");
const about = require("./data/about");
let education = require("./data/education");
let workExp = require("./data/workExp");
const skills = require("./data/skills");
let myText = require("./data/myText");
let contacts = require("./data/contacts");
const certificates = require("./data/certificates");
const users = require("./data/user");
var cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const generateId = (data) => {
  const id = Math.floor(Math.random() * (1000 - 1)) + 1;
  return data.find((u) => u.id === id) ? generateId(data) : id;
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

// users

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
  res.send(`Project name: ${project.name} created! id - ${project.id}`).end();
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

//// post need { "skill" : "here skill"} send
app.post("/about", async (req, res) => {
  if (
    req.body.skill === undefined ||
    req.body.skill === null ||
    req.body.skill.length < 3 ||
    req.body.skill.trim() === ""
  ) {
    res.send("please write 1 you soft skill").end();
  } else {
    about.push(req.body.skill);
    res.send(` you succes added  skill: ${req.body.skill} `).end();
  }
});

app.delete("/about", async (req, res) => {
  const lastSkill = about.slice(-1);
  about.pop();
  res.send(`${lastSkill} soft skill deleted`).end();
});

//// education

app.post("/education", async (req, res) => {
  const requiredKeys = ["name", "specialization", "year"];
  const keys = Object.keys(req.body).filter((k) => requiredKeys.includes(k));
  if (keys.length !== requiredKeys.length) {
    res
      .status(400)
      .send(`keys ${requiredKeys.join(",")} are required!`)
      .end();
  } else {
    keys.forEach((k) => {
      if (req.body[k] === null || req.body === undefined) {
        res.status(400).send(`key ${k} is required`).end();
      }
    });
    const edu = [...keys].reduce(
      (acc, el) => ({ ...acc, [el]: req.body[el] }),
      {}
    );
    edu.id = generateId(education);
    education.push(edu);
    res.send(`Education name: ${edu.name} created! id - ${edu.id}`).end();
  }
});

app.delete("/education", async (req, res) => {
  const lastEdu = education.slice(-1);
  education.pop();
  res.send(`Last education with name: ${lastEdu[0].name} deleted`).end();
});

app.delete("/education/:id", async (req, res) => {
  let usproj = education.find((u) => u.id === +req.params.id);
  if (!usproj) {
    res.send(`education with id  ${req.params.id} not found`).end();
  }
  if (usproj) {
    education = education.filter((u) => u.id != req.params.id);
    res.send(`education with id  ${req.params.id} deleted`).end();
  }
});

//// work Exp

app.post("/workExp", async (req, res) => {
  const requiredKeys = ["name", "specialization", "year", "description"];
  const keys = Object.keys(req.body).filter((k) => requiredKeys.includes(k));
  if (keys.length !== requiredKeys.length) {
    res
      .status(400)
      .send(`keys ${requiredKeys.join(",")} are required!`)
      .end();
  } else {
    keys.forEach((k) => {
      if (req.body[k] === null || req.body === undefined) {
        res.status(400).send(`key ${k} is required`).end();
      }
    });
    const wrkExp = [...keys].reduce(
      (acc, el) => ({ ...acc, [el]: req.body[el] }),
      {}
    );
    wrkExp.id = generateId(workExp);
    workExp.push(wrkExp);
    res.send(`Education name: ${wrkExp.name} created! id - ${wrkExp.id}`).end();
  }
});

app.delete("/workExp", async (req, res) => {
  const lastworkExp = workExp.slice(-1);
  workExp.pop();
  res.send(`Last education with name: ${lastworkExp[0].name} deleted`).end();
});

app.delete("/workExp/:id", async (req, res) => {
  let usproj = workExp.find((u) => u.id === +req.params.id);
  if (!usproj) {
    res.send(`education with id  ${req.params.id} not found`).end();
  }
  if (usproj) {
    workExp = workExp.filter((u) => u.id != req.params.id);
    res.send(`education with id  ${req.params.id} deleted`).end();
  }
});

/// skills { "skill" : "here skill"} send

app.post("/skills", async (req, res) => {
  if (
    req.body.skill === undefined ||
    req.body.skill === null ||
    req.body.skill.length < 3 ||
    req.body.skill.trim() === ""
  ) {
    res.send("please write 1 you hard skill").end();
  } else {
    skills.push(req.body.skill);
    res.send(` you succes added  skill: ${req.body.skill} `).end();
  }
});

app.delete("/skills", async (req, res) => {
  const lastSkill = skills.slice(-1);
  skills.pop();
  res.send(`${lastSkill} soft skill deleted`).end();
});

/// myText     { "text" : "Here text"}

app.patch("/myText", async (req, res) => {
  if (
    req.body.text === undefined ||
    req.body.text === null ||
    req.body.text.trim() === ""
  ) {
    res.send("please write you text").end();
  } else if (req.body.text.length < 25) {
    res.send("please write 25 and more characters").end();
  } else {
    myText = req.body.text;
    res.send(`Text successfuly change`).end();
  }
});

/// contacts   { "email": "@gmail.com", "phone": "000 000 "}

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

//certificates

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

app.listen(process.env.APP_PORT, () => {
  console.log(`app start on port ${process.env.APP_PORT}`);
});
