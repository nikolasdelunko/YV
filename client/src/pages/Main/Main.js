import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Contacts from "../../components/Contacts/Contsacts";
import UseSeo from "../../utils/costumHooks/useSeo";

export default function Main() {
  const seoWords =
    "React developer, Js developer, front-end development, full-stack developer";
  return (
    <Box>
		 <UseSeo
      title={"Yaroslav Verbytskyi"}
      description={"React developer"}
      keywords={seoWords}
    />;
      <Header />
      <Projects />
      <Skills />
      <Contacts />
    </Box>
  );
}
