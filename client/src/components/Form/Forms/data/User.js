import React from "react";
import { Typography, Box } from "@mui/material";
import { useStyles } from "./Style";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteUserById } from "../../../../utils/api/userApi";
import { snackActions } from "../../../../utils/costumHooks/useSnack";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../../store/forms";
import EditIcon from "@mui/icons-material/Edit";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

const User = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const touch = useSelector((state) => state.forms.touchUsers);
  const changeUser = useSelector((state) => state.forms.changeUser);
  const findUser = useSelector((state) => state.forms.findUser);

  const del = async () => {
    try {
      const a = await deleteUserById(data._id);
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.error(e.name);
    } finally {
      dispatch(formsOperations.setTouchUsers(!touch));
    }
  };

  const changeUserData = () => {
    dispatch(formsOperations.addFindUser(data));
    dispatch(formsOperations.setChangeUser(true));
  };


  return (
    <Box
      className={
        changeUser === true && data?._id === findUser?._id
          ? classes.mainBoxHidden
          : classes.mainBoxText
      }
    >
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        email : {data.email}
      </Typography>
      <Typography variant="h9" noWrap component="div" className={classes.text}>
        name : {data.name}
      </Typography>
      <Typography
        variant="h9"
        noWrap
        component="div"
        className={classes.textLink}
      >
        Date created: {data.date.slice(0, 10)}
      </Typography>
      {changeUser ? null : (
        <EditIcon className={classes.btnDel} onClick={() => changeUserData()} />
      )}
      {changeUser ? (
        <CloseFullscreenIcon
          className={classes.btnDel}
          onClick={() => {
            dispatch(formsOperations.setChangeUser(false));
          }}
        />
      ) : (
        <ClearIcon className={classes.btnDel} onClick={() => del()} />
      )}
    </Box>
  );
};

export default User;
