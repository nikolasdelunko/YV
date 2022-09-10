import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useStyles } from "./Style";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteMyTextById } from "../../../../utils/api/myTextApi";
import { snackActions } from "../../../../utils/costumHooks/useSnack";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../../store/forms";

const Text = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
	const touch = useSelector((state) => state.forms.touchText);

  const del = async () => {
    try {
      const a = await deleteMyTextById(data._id)
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.addTouchText(!touch));
    }
  };
  return (
    <Box className={classes.mainBoxText}>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        {data.text}
      </Typography>
      <ClearIcon className={classes.btnDel} onClick={() => del()} />
    </Box>
  );
};

export default Text;
