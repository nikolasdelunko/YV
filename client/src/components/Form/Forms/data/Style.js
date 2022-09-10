import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  mainBoxText: {
    cursor: "pointer",
    display: "flex",
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
  btnDel: {
    cursor: "pointer",
    transitionDuration: "500ms",
    "&:hover": {
      color: "red",
    },
  },
}));
