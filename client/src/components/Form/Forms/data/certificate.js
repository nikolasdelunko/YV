import React from "react";
import { Typography, Box } from "@mui/material";
import { useStyles } from "./Style";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteCertificatesById } from "../../../../utils/api/certificatesApi";
import { snackActions } from "../../../../utils/costumHooks/useSnack";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../../store/forms";

const Certificate = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const touch = useSelector((state) => state.forms.touchCertificates);

  const del = async () => {
    try {
      const a = await deleteCertificatesById(data._id);
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.setTouchCertificates(!touch));
    }
  };

  return (
    <Box className={classes.mainBoxText}>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        {data.title}
      </Typography>
      <Typography
        variant="h9"
        noWrap
        component="div"
        className={classes.textLink}
      >
        {data.link}
      </Typography>
      <ClearIcon className={classes.btnDel} onClick={() => del()} />
    </Box>
  );
};

export default Certificate;
