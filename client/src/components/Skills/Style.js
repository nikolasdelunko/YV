import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    margin: "0 0 0 10%",
  },
  textHead: {
    paddingTop: "100px",
    fontFamily: "Gilroy",
    display: "flex",
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "48px",
    textTransform: "uppercase",
    ["@media (max-width:780px)"]: {
      textAlign: "left",
      width: "80%",
      fontSize: "36px",
    },
  },
  boxText: {
    background: "#212121",
  },
  textSkl: {
    boxShadow: " 0px 3px 3px 3px rgb(0 0 0 / 15%)",
    padding: "25px 32px",
    fontSize: "20px",
    color: "#20FF94",
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "20px !important",
    lineHeight: "121.2% !important",
    ["@media (max-width:780px)"]: {
			fontSize: '12px',
			lineHeight: '133.7%',
    },

  },
  textBlock: {
    marginTop: "76px",
    width: "80%",
    display: "flex",
    // justifyContent: 'space-around',
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "32px",
  },
}));
