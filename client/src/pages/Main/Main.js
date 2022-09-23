import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Contacts from "../../components/Contacts/Contsacts";


export default function Main() {
  return (
    <Box>
      <Header />
      <Projects />
      <Skills />
      <Contacts />
    </Box>
  );
}
