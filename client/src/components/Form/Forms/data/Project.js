import React from "react";
import { Typography, Box } from "@mui/material";
import { useStyles } from "./Style";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteProjectsById } from "../../../../utils/api/projectsApi";
import { snackActions } from "../../../../utils/costumHooks/useSnack";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../../store/forms";
import EditIcon from "@mui/icons-material/Edit";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

const Text = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const touch = useSelector((state) => state.forms.touchProjects);
  const cngPrg = useSelector((state) => state.forms.changeProject);
  const project = useSelector((state) => state.forms.project);


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
  };

  return (
    <Box className={cngPrg === true && data?._id === project?._id ? classes.mainBoxHidden : classes.mainBoxText}>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        {data.name}
      </Typography>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        {data.description}
      </Typography>
      <Typography
        variant="h9"
        noWrap
        component="div"
        className={classes.textLink}
      >
        {data.photo}
      </Typography>
      {cngPrg ? null : (
        <EditIcon className={classes.btnDel} onClick={() => changeText()} />
      )}
      {cngPrg ? (
        <CloseFullscreenIcon
          className={classes.btnDel}
          onClick={() => {
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
