import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  textHead: {
    fontFamily: "Gilroy !important",
    display: "flex",
    fontStyle: "normal",
    fontSize: "48px !important",
    textTransform: "uppercase",
    fontWeight: "700 !important",
    padding: "100px 0px 0px 10%",
    lineHeight: "110%",
    paddingTop: "15px",
    paddingBottom: "50px",
    textAlign: "left",
    ["@media (max-width:780px)"]: {
      fontSize: "36px",
    },
  },
  father: {
    paddingTop: "200px",
    ["@media (max-width:780px)"]: {
      paddingTop: "70px",
    },
  },
  box: {
    width: "50%",
    padding: "10px ",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    ["@media (max-width:780px)"]: {
      width: "100%",
    },
  },
  link: {
    textDecoration: "none",
    textAlign: "center",
  },
  boxCard: {
    paddingTop: "200px",
    ["@media (max-width:780px)"]: {
      paddingTop: "70px",
    },
  },
  conteinerCard: {
    paddingLeft: "10%",
    marginBottom: "30px",
    ["@media (max-width:780px)"]: {
      width: "90%",
    },
  },
  text: {
    padding: "10px 5px 0 5px",
		["@media (max-width:780px)"]: {
      padding: "10px 1.5px 0 1.5px",
    },
  },
  textSoft: {
    padding: "10px 5px 0 5px",
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "500 !important",
    lineHeight: "133.7% !important",
    fontSize: " 32px !important",
    display: "flex",
    ["@media (max-width:780px)"]: {
      padding: "20px 3px 0 3px",
      fontSize: " 17px !important",
    },
  },
  textBox: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  textBlock: {
    display: "flex",
    justifyContent: "center",
  },
  mainCard: {
    width: "460px",
    height: "238px",
    left: "100px",
    top: "850px",
    background: "#1D1D1D",
    boxShadow: "0px 3px 3px 3px rg",
    ["@media (max-width:780px)"]: {
      width: "97%",
    },
  },
  mainCardExp: {
    maxWidth: "685px",
    background: "#1D1D1D",
    boxShadow: " 0px 3px 3px 3px rgba(0, 0, 0, 0.15)",
    ["@media (max-height:820px)"]: {
      maxWidth: "485px",
    },
    ["@media (max-width:780px)"]: {
      width: "97%",
    },
  },
  cardTextUp: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 10% 0",
  },
  cardTextDuwn: {
    margin: "26px 0 0 10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardTextDuwnExp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "8px 10% 32px",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  cardItems: {
    display: "flex",
    flexWrap: "wrap",
  },
  textH: {
    fontFamily: "Gilroy",
    fontSize: "40px",
    lineHeight: "110% !important",
    fontStyle: "normal",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
    color: "#C8CAD6",
    fontWeight: "500 !important",
  },
  textLink: {
    color: "#AFA9A9",
    textDecorationLine: "underline",
    fontSize: "16px",
  },
  textSpec: {
    color: "#787878",
    fontFamily: "Gilroy",
    fontStyle: "normal",
    lineHeight: "135% !important",
    fontSize: "18px !important",
    fontWeight: "500 !important",
    ["@media (max-width:780px)"]: {
      lineHeight: "150% !important",
    },
  },
  textYear: {
    color: "#FFFFFF",
    fontFamily: "Gilroy",
    fontStyle: "normal",
    lineHeight: "150% !important",
    fontWeight: "400 !important",
    fontSize: "20px !important",
  },
  textYearWork: {
    color: "#FFFFFF",
    fontFamily: "Gilroy",
    fontStyle: "normal",
    lineHeight: "110% !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
  },
  textDescriptBox: {
    margin: "0 10%",
  },
  textDescript: {
    textAlign: "left",
    maxWidth: "585px",
    color: "#CCCCD5",
    paddingBottom: "45px",
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "135% !important",
    ["@media (max-width:780px)"]: {
      fontWeight: "400 !important",
      lineHeight: "150% !important",
    },
  },
  photo: {
    width: "70%",
    height: "30%",
    objectFit: "cover",
    ["@media (max-width:780px)"]: {
      width: "97%",
    },
  },
}));
