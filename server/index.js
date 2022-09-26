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
const uploads = require("./api/uploads/index");
const fileUpload = require("express-fileupload");
const cv = require("./api/cv/index");
const path = require("path");
const port = process.env.PORT || 3009;

dotenv.config();

const connectionString = process.env.CONNECTION_STRING;

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("static"));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(projectRouter);
app.use(educationRouter);
app.use(aboutRouter);
app.use(workRouter);
app.use(skillsRouter);
app.use(myTextRouter);
app.use(certificatesRouter);
app.use(contacts);
app.use(users);
app.use(uploads);
app.use(cv);


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
  })
  .then(async () => {
    app.listen(port, () => {
      console.log(`app start on port ${port}`);
    });
  });
