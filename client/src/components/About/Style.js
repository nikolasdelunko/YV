import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  textHead: {
		fontFmily: "Gilroy !important",
    display: "flex",
    fontStyle: "normal",
    fontSize: "48px",
    textTransform: "uppercase",
    fontWeight: "700 !important",
    padding: "100px 0px 0px 10%",
    lineHeight: "110%",
    paddingTop: "15px",
    paddingBottom: "50px",
		textAlign: 'left',
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
  },
  conteinerCard: {
    paddingLeft: "10%",
    marginBottom: "30px",
		["@media (max-width:780px)"]: {
			width: "90%",
    },
  },
  text: {
    padding: "15px 5px 0 5px",
		fontFamily: 'Gilroy',
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: " 48px",
    display: "flex",
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
    justifyContent: "space-between",
    margin: "8px 10% 32px",
  },
  cardItems: {
    display: "flex",
    flexWrap: "wrap",
  },
  textH: {
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
    fontSize: "18px !important",
    fontWeight: "500 !important",
  },
  textYear: {
    color: "#FFFFFF",
    fontWeight: "400 !important",
    fontSize: "20px !important",
  },
  textDescriptBox: {
    margin: "0 10%",
  },
  textDescript: {
    textAlign: "left",
    maxWidth: "585px",
    color: "#CCCCD5",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    paddingBottom: "45px",
  },
  photo: {
    width: "70%",
    height: "30%",
    objectFit: "cover",
  },
}));
