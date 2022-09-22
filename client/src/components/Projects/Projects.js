import React from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import { useStyles } from "./Style";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

export default function Projects() {
  const [data, setData] = useState();
  const [project, setProject] = useState(2);
  const [showSpinner, setShowSpinner] = useState(false);
  const classes = useStyles();
  const mobile = useSelector((state) => state.helpers.mobile);


  const getInfo = async () => {
    const res = await axios.get("http://localhost:3009/projects");
    return setData(res.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const handleOpen = () => {
    const timer = setTimeout(() => {
      setProject(Infinity);
      setShowSpinner(false);
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <Box className={classes.projects}>
      <Typography
        variant="h4"
        component="h4"
        color="#C8CAD6"
        className={classes.textHead}
        id={"project"}
      >
        Projects
      </Typography>
      <Box className={classes.mainSec}>
        {mobile
          ? data
              ?.slice(0, project)
              .map((item) => <Cards data={item} key={item._id} />)
          : data?.map((item) => <Cards data={item} key={item._id} />)}
      </Box>
      <Box sx={{display: "flex"}}>
        {project != Infinity && mobile && (
          <Button
            variant="outlined"
            className={classes.btnProjects}
            onClick={() => {
              setShowSpinner(true);
              handleOpen();
            }}
          >
            view all projects
          </Button>
        )}
        {showSpinner && <Spinner data={true} />}
      </Box>
    </Box>
  );
}
