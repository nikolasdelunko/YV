import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  mainBoxHidden: {
    margin: "6px 0px",
    cursor: "pointer",
    justifyContent: "space-between",
    alignItems: "center",
    border: "3px solid #ff0000",
    padding: "10px",
    display: "inline-block",
    transitionDuration: "500ms",
    "&:hover": {
      padding: "15px",
      border: "3px solid #ff0000",
    },
  },
  mainBoxText: {
    cursor: "pointer",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid white",
    padding: "10px",
    display: "inline-block",
    transitionDuration: "500ms",
    "&:hover": {
      padding: "15px",
      border: "1px solid white",
    },
  },
  text: {
    whiteSpace: "break-spaces !important",
    fontSize: "12px",
    color: "white",
  },
  textLink: {
    whiteSpace: "break-spaces !important",
    fontSize: "10px",
    color: "#2036FF !important",
  },
  TextDescriptions: {
    whiteSpace: "break-spaces !important",
    fontSize: "8px",
    color: "white",
  },
  btnDel: {
    cursor: "pointer",
    transitionDuration: "500ms",
    "&:hover": {
      color: "red",
    },
  },
}));
