import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  father: {
    margin: "0 0 0 10%",
    display: "flex",
    flexDirection: "column",
  },
  textHead: {
    fontFamily: "Gilroy",
    fontWeight: "700 !important",
    paddingTop: "15px",
    display: "flex",
    fontStyle: "normal",
    // fontSize: '48px',
    paddingBottom: "50px",
    textTransform: "uppercase",
  },
  text: {
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "400 !important",
    paddingTop: "15px",
    lineHeight: "133.7% !important",
    display: "flex",
    textTransform: "uppercase",
  },
  textBlock: {
    padding: "150px 0 102px 0",
  },
  btn: {
    padding: "15px 65px !important",
    boxShadow: " 0px 3px 3px 3px rgb(0 0 0 / 15%)",
    fontFamily: "Gilroy !important",
    fontWeight: "500 !important",
    fontStyle: "normal",
    lineHeight: "133.7% !important",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#FF2055 !important",
    },
    ["@media (max-width:780px)"]: {
      width: "255px",
      margin: "36px 0px 0px 0px !important",
    },
  },
  btnBox: {
    marginLeft: "auto",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "63px",
    paddingBottom: "225px",
    ["@media (max-width:780px)"]: {
      paddingBottom: "100%",
    },
  },
  link: {
    textDecoration: "none",
    textAlign: "center",
  },
}));
