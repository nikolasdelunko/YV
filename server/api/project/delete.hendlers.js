const Project = require("../../models/project.model");

exports.deleteProjectById = async (req, res) => {
  const projects = await Project.find().exec();
  if (!projects) {
    res.status(404).send(`project not found`).end();
  } else {
    await Project.findByIdAndDelete(req.params.id).exec();
    res.send(`project with id  ${req.params.id} deleted`).end();
  }
};
exports.deleteProject = async (req, res) => {
  const projects = await Project.find().exec();
  if (!projects) {
    res.status(404).send(`project not found`).end();
  } else {
    const lastProject = projects.slice(-1);
    await Project.findByIdAndDelete(
      lastProject.length ? lastProject[0]._id : null
    ).exec();
    res
      .send(lastProject.length ? "Last project deleted" : "no project found")
      .end();
  }
};
