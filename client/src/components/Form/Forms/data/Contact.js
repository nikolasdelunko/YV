import React from "react";
import { Typography, Box } from "@mui/material";
import { useStyles } from "./Style";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteContactById } from "../../../../utils/api/contactsApi";
import { snackActions } from "../../../../utils/costumHooks/useSnack";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../../store/forms";
import EditIcon from "@mui/icons-material/Edit";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

const Contact = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const touch = useSelector((state) => state.forms.touchContacts);
  const change = useSelector((state) => state.forms.changeContacts);
  const findContact = useSelector((state) => state.forms.contact);

  const del = async () => {
    try {
      const a = await deleteContactById(data._id);
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.setTouchContacts(!touch));
    }
  };

  const changeContact = () => {
		console.log('adasd')
    dispatch(formsOperations.addContact(data));
    // dispatch(formsOperations.addContacts(data));
    dispatch(formsOperations.setChangeContacts(true));
  };

  return (
    <Box
      className={
        change === true && data?._id === findContact?._id
          ? classes.mainBoxHidden
          : classes.mainBoxText
      }
    >
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        email : {data.email}
      </Typography>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        phone : {data.phone}
      </Typography>
      {change ? null : (
        <EditIcon className={classes.btnDel} onClick={() => changeContact()} />
      )}
      {change ? (
        <CloseFullscreenIcon
          className={classes.btnDel}
          onClick={() => {
            dispatch(formsOperations.setChangeContacts(false));
          }}
        />
      ) : (
        <ClearIcon className={classes.btnDel} onClick={() => del()} />
      )}
    </Box>
  );
};

export default Contact;
