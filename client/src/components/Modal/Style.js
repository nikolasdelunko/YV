import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: "83px",
    flexDirection: "column",
    gap: "25px",
  },
  btnHover: {
    width: "100%",
		color: '#C8C9D6',
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
}));
