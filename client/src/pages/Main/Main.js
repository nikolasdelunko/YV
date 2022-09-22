import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./Style";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Contacts from "../../components/Contacts/Contsacts";
import { useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { addMobile } from "../../store/helpers/helpersSlice";

export default function Main() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const mobileControl = useMediaQuery("(max-width:768px)");
  const desktopControl = useMediaQuery("(min-width:730px)");
  if (mobileControl === false) {
    dispatch(addMobile(false));
  } else if (desktopControl === false) {
    dispatch(addMobile(true));
  }

  return (
    <Box className={classes.main}>
      <Header />
      <Projects />
      <Skills />
      <Contacts />
    </Box>
  );
}
