import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useStyles } from "./Style";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteAboutById } from "../../../../utils/api/aboutApi";
import { deleteSkillsById } from "../../../../utils/api/hardSkillsApi";
import { snackActions } from "../../../../utils/costumHooks/useSnack";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../../store/forms";

const Skills = ({ data, hard }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const touch = useSelector((state) => state.forms.touch);

  const del = async () => {
    try {
      const a = hard
        ? await deleteSkillsById(data._id)
        : await deleteAboutById(data._id);
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.addTouch(!touch));
    }
  };
  return (
    <Box className={classes.mainBoxText}>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        {data.skill}
      </Typography>
      <ClearIcon className={classes.btnDel} onClick={() => del()} />
    </Box>
  );
};

export default Skills;
