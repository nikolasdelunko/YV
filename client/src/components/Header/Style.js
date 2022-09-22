import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    margin: "10%",
    margin: "128px 20% 0 10%",
  },
  photoBox: {
    position: "absolute",
    visibility: "hidden",
    ["@media (min-width: 768px)"]: {
      position: "relative",
      visibility: "visible",
    },
    marginLeft: "10%",
  },
  photoMob: {
    // position: "relative",
    visibility: "visible",
    marginLeft: "15%",
    width: "251px",
    height: "212px",
    ["@media (min-width: 768px)"]: {
      position: "absolute",
      visibility: "hidden",
    },
    objectFit: "cover",
  },
  textMob: {},
  textEl: {
    padding: "35px 0px",
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "18px",
  },
  headText: {
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "700 !important",
    color: "#C8CAD6",
    position: "absolute",
    width: "263px",
    height: "120px",
    left: "25px",
    top: "208px",
    fontSize: "36px !important",
  },
  text: {
    textAlign: "left",
  },
  photo: {
    width: "457px",
    height: "459px",
    objectFit: "cover",
  },
  btn: {
    padding: "35px 0px",
    color: "#2036FF !important",
    border: "1px solid #2036FF !important",
    "&:hover": {
      color: "#FF2055 !important",
      border: "1px solid #FF2055 !important",
    },
  },
  link: {
    textDecoration: "none",
    textAlign: "center",
  },
}));
