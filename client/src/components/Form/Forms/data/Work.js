import React from "react";
import { Typography, Box } from "@mui/material";
import { useStyles } from "./Style";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteWorkExpById } from "../../../../utils/api/workExpApi";
import { snackActions } from "../../../../utils/costumHooks/useSnack";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../../store/forms";

const Work = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const touch = useSelector((state) => state.forms.touchWorkExp);

  const del = async () => {
    try {
      const a = await deleteWorkExpById(data._id);
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.setTouchWorkExp(!touch));
    }
  };

  return (
    <Box className={classes.mainBoxText}>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        {data.name}
      </Typography>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        {data.specialization}
      </Typography>
      <Typography
        variant="h9"
        noWrap
        component="div"
        className={classes.textLink}
      >
        {data.year}
      </Typography>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        {data.description}
      </Typography>
      <ClearIcon className={classes.btnDel} onClick={() => del()} />
    </Box>
  );
};

export default Work;
