import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    position: "fixed",
    left: "80%",
    bottom: "150px",
    padding: "0 6px",
    fontSize: "2.8rem",
    zIndex: 20,
    cursor: "pointer",
    color: "#868686",
  },
  text: {
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px !important",
    textAlign: "center",
    "&:after": {
      content: '" "',
      display: "block",
      height: "1px",
      background: "#868686",
    },
  },
  mobButton: {
    right: "40%",
    color: "#868686",
    bottom: "calc(20% + 10px)",
    cursor: "pointer",
    padding: "0 6px",
    zIndex: "20",
    position: "fixed",
    fontSize: "1.8rem",
    background: "rgb(29 29 29 / 92%)",
  },
  mobText: {
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px !important",
    textAlign: "center",
    "&:after": {
      content: '" "',
      display: "block",
      height: "1px",
      background: "#868686",
    },
  },
}));
