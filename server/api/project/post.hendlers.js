const Project = require("../../models/project.model");

const generateId = (data) => {
  const id = Math.floor(Math.random() * (1000 - 1)) + 1;
  return data.find((u) => u.id === id) ? generateId(data) : id;
};

exports.postProject = async (req, res) => {
  const projects = await Project.find().exec();
  if (!projects) {
    res.status(404).send(`projects not found`).end();
  }

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
  const project = new Project([...keys].reduce(
    (acc, el) => ({ ...acc, [el]: req.body[el] }),
    {}
  ));
  project._id = generateId(projects);
  await project.save();
  res.send(`Project name: ${project.name} created! id - ${project._id}`).end();
};
