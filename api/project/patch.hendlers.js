const Project = require("../../models/project.model");

exports.updateProjectById = async (req, res) => {
  const projects = await Project.find().exec();
  if (!projects) {
    res.status(404).send(`Project not found`).end();
  } else {
    await Project.findByIdAndUpdate(req.params.id, req.body).exec();
    res.send("Product was updated successfully");
  }
};
