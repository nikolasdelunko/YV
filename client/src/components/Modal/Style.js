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
