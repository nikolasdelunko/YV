import React from "react";
import { Typography, Box } from "@mui/material";
import { useStyles } from "./Style";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteMyTextById, patchMyText } from "../../../../utils/api/myTextApi";
import { snackActions } from "../../../../utils/costumHooks/useSnack";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../../store/forms";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

const Text = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const touch = useSelector((state) => state.forms.touchText);
  const [value, setValue] = React.useState("");
  const [change, setChange] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const del = async () => {
    try {
      const a = await deleteMyTextById(data._id);
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.addTouchText(!touch));
    }
  };

  const changeText = () => {
    setValue(data.text);
    setChange(true);
  };

  const sendNewText = async (data, id) => {
    try {
      const a = await patchMyText(value, id);
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.addTouchText(!touch));
      setChange(false);
    }
  };
  return (
    <Box className={classes.mainBoxText}>
      {change ? (
        <TextareaAutosize
          name="comment"
          cols="40"
          rows="3"
          onChange={handleChange}
          value={value}
        />
      ) : (
        <Typography
          variant="h9"
          noWrap
          component="div"
          className={classes.text}
        >
          {data.text}
        </Typography>
      )}
      {change ? (
        <CheckIcon
          className={classes.btnDel}
          onClick={() => sendNewText(data._id)}
        />
      ) : (
        <EditIcon className={classes.btnDel} onClick={() => changeText()} />
      )}
      {change ? (
        <CloseFullscreenIcon
          className={classes.btnDel}
          onClick={() => setChange(false)}
        />
      ) : (
        <ClearIcon className={classes.btnDel} onClick={() => del()} />
      )}
    </Box>
  );
};

export default Text;
