const express = require("express");
const router = express.Router();
// const { authorization } = require("../../data/authorization");

const { getProjectById, getProjects } = require("./get.hendlers");
const { postProject } = require("./post.hendlers");
const { updateProjectById } = require("./patch.hendlers");
const { deleteProject, deleteProjectById } = require("./delete.hendlers");

router.get("/projects/:id", getProjectById);
router.get("/projects", getProjects);
router.post("/projects",  postProject);
router.patch("/projects/:id",  updateProjectById);
router.delete("/projects/:id",  deleteProjectById);
router.delete("/projects",  deleteProject);

module.exports = router;
