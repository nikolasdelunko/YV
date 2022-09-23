import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  mainBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    p: 4,
    width: "100%",
    height: "100%",
    background: "#1D1D1D",
    position: "fixed",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: "83px",
    flexDirection: "column",
    gap: "25px",
  },
  link: {
    display: "flex",
    textDecoration: "none",
  },
  btnHover: {
    width: "100%",
    color: "#C8C9D6",
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "40px !important",
    lineHeight: "47px !important",
    textAlign: "center",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
    "&:hover": {
      color: "#FF2055 !important",
      background: "#212121 !important",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15) !important",
    },
  },
  link: {
    textDecoration: "none",
  },
  logoMenu: {
    order: "2",
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  nameBox: {
    display: "flex",
    textDecoration: "none",
  },
  linkName: {
    textDecoration: "none",
  },
  nameFirst: {
    color: "#2035f8",
    textTransform: "uppercase",
  },
  nameSecond: {
    justifyContent: "center",
    color: "white",
    textTransform: "uppercase",
  },
  subname: {
    display: "flex",
  },
  mbButtons: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    visibility: "visible",
    ["@media (min-width: 768px)"]: {
      position: "absolute",
      visibility: "hidden",
    },
  },
  mbIcon: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      color: "#FF2055 !important",
    },
  },
  headBox: {
    display: "flex",
    margin: "40px",
  },
}));
