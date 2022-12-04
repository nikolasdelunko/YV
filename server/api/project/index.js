const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");

const { getProjectById, getProjects } = require("./get.hendlers");
const { postProject } = require("./post.hendlers");
const { updateProjectById } = require("./patch.hendlers");
const { deleteProject, deleteProjectById } = require("./delete.hendlers");

router.get("/projects/:id", getProjectById);
router.get("/projects", getProjects);
router.post("/projects", verify, postProject);
router.patch("/projects/:id", verify, updateProjectById);
router.delete("/projects/:id", verify, deleteProjectById);
router.delete("/projects", verify, deleteProject);

module.exports = router;