import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  navbar: {
    margin: "45px 10% 0 10%",
    display: "flex",
    justifyContent: "space-between",
    ["@media (min-width: 768px)"]: {
      margin: "45px 20% 0 10%",
    },
  },
  nameBox: {
    display: "flex",
    textDecoration: "none",
  },
  subname: {
    display: "flex",
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
  dtButtons: {
    display: "flex",
    position: "absolute",
    visibility: "hidden",
    ["@media (min-width: 768px)"]: {
      position: "relative",
      visibility: "visible",
    },
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
  btnHover: {
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "19px",
    "&:hover": {
      color: "#FF2055 !important",
      background: "#00000000 !important",
    },
  },
  link: {
    display: "flex",
    textDecoration: "none",
  },
  linkName: {
    textDecoration: "none",
  },
}));
