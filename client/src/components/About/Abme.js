import React from "react";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./Style";
import useColors from "../../utils/costumHooks/useColors";
import { getAbout } from "../../utils/api/aboutApi";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../store/forms";

export default function About() {
  const { colorsHendler } = useColors();
	const dispatch = useDispatch();
  const data = useSelector((state) => state.forms.skills);
  const classes = useStyles();

  const getInfo = async () => {
    const res =  await getAbout();
    return dispatch(formsOperations.addSkills(res.data));
  };


  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Box className={classes.fatherAbme}>
      <Typography
        variant="h4"
        component="h4"
        color="#C8CAD6"
        className={classes.textHead}
      >
        about me
      </Typography>

      <Box className={classes.textBlock}>
        <Box className={classes.box}>
          {data?.map((item) => (
            <Box className={classes.textBox} key={item._id}>
              <Typography
                variant="h5"
                component="h4"
                color="#C8CAD6"
                className={classes.textSoft}
              >
                {item.skill}
              </Typography>
              <Typography
                variant="h5"
                component="h4"
                color={`${colorsHendler(10)}`}
                className={classes.text}
              >
                /
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
