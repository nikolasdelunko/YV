import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    textAlign: "center",
    ["@media (max-width:780px)"]: {
      textDecorationColor: "#2036FF",
      textAlign: "left",
      textDecoration: "underline",
    },
  },
  mainSec: {
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  father: {
    transition: "1s",
    overflow: "hidden",
    marginTop: "96px",
    width: "440px",
    height: "336px",
    padding: "0 25px 0 0",
    "&:hover": {
      width: "541px",
      height: "424px",
      padding: "0",
      margin: "35px 0 0 -25px",
			boxShadow: "0px 3px 3px 3px rgba(0, 0, 0, 0.15)"
    },
  },
  fatherMob: {
    transition: "1s",
    overflow: "hidden",
    marginTop: "96px",
    width: "320px",
    height: "335px",
		boxShadow: "0px 3px 3px 3px rgba(0, 0, 0, 0.15)"
  },
  textH: {
    padding: "35px 0px 0px 8px",
  },
  textEl: {
    padding: "35px 0px 35px 16px",
  },
  text: {
    textAlign: "left",
  },
  photo: {
    maxWidth: "100%",
    height: "100%",
    objectFit: "cover",
  },
  mainBox: {
    position: "relative",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
  },
  btn: {
    position: "absolute",
    padding: "35px 0px",
    backgroundColor: "#1d1d1d",
    transformOrigin: "center",
    color: "#2036FF !important",
    border: "1px solid #2036FF !important",
    "&:hover": {
      color: "#FF2055 !important",
      border: "1px solid #FF2055 !important",
    },
    ["@media (max-width:780px)"]: {
      border: "none !important",
    },
  },
  btnProjects: {
    position: "absolute",
    margin: "36px 0px !important",
    padding: "35px 0px",
    backgroundColor: "#1d1d1d",
    transformOrigin: "center",
    color: "#2036FF !important",
    border: "1px solid #2036FF !important",
    ["@media (min-width:590px)"]: {
      display: "none",
      visable: "hidden",
    },
  },
  textHead: {
		fontFamily: "Gilroy",
    paddingTop: "100px",
    display: "flex",
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "48px",
    textTransform: "uppercase",
  },
  projects: {
    margin: "0 0 0 10%",
  },
  btnHover: {
    zIndex: "-1",
    position: "absolute",
    visable: "hidden",
  },
}));
