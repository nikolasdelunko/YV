import React from "react";
import { Typography, Box, TextField } from "@mui/material";
import { useStyles } from "./Style";
import ClearIcon from "@mui/icons-material/Clear";
import {
  getProjectsById,
  deleteProjectsById,
  patchProjects,
} from "../../../../utils/api/projectsApi";
import { snackActions } from "../../../../utils/costumHooks/useSnack";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../../store/forms";
import EditIcon from "@mui/icons-material/Edit";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

const Text = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const touch = useSelector((state) => state.forms.touchProjects);
  const [change, setChange] = React.useState(false);

  const del = async () => {
    try {
      const a = await deleteProjectsById(data._id);
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.addTouchProjects(!touch));
    }
  };

  const changeText = () => {
    dispatch(formsOperations.addProject(data));
    dispatch(formsOperations.setChangeProject(true));
    setChange(true);
  };

  return (
    <Box className={classes.mainBoxText}>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        {data.name}
      </Typography>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        {data.description}
      </Typography>
      <Typography variant="h9" noWrap component="div" className={classes.textLink}>
        {data.photo}
      </Typography>
      {change ? null : (
        <EditIcon className={classes.btnDel} onClick={() => changeText()} />
      )}
      {change ? (
        <CloseFullscreenIcon
          className={classes.btnDel}
          onClick={() => {
            setChange(false);
            dispatch(formsOperations.setChangeProject(false));
          }}
        />
      ) : (
        <ClearIcon className={classes.btnDel} onClick={() => del()} />
      )}
    </Box>
  );
};

export default Text;
