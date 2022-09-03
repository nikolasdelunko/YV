const Project = require("../../models/project.model");

exports.getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id).exec();

  if (!project) {
    res.status(404).send(`user not found`).end();
  }

  res.send(project).end();
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find().exec();

  if (!projects) {
    res.status(404).send(`user not found`).end();
  }

  res.send(projects).end();
};
