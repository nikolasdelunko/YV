import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStyles } from "./Style";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/helpers/helpersSlice";
import {
  Box,
  Button,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import SoftSkills from "../../components/Form/Forms//SoftSkills";
import HardSkills from "../../components/Form/Forms//HardSkills";
import MyText from "../../components/Form/Forms/MyText";
import Projects from "../../components/Form/Forms//Projects";
import Education from "../../components/Form/Forms/Education";
import WorkExp from "../../components/Form/Forms/WorkExp";
import Certificates from "../../components/Form/Forms/Certificates";

export default function AdminPanel() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const logOut = () => {
    dispatch(setLogin(false));
    localStorage.setItem("user", false);
    localStorage.clear();
  };
  return (
    <Box>
      <Typography
        variant="h4"
        component="h4"
        color="#C8CAD6"
        className={classes.textHead}
      >
        Admin Panel
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            soft skills
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SoftSkills />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            hard skills
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <HardSkills />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>myText</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MyText />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Projects />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            education
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Education />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>workExp</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <WorkExp />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            certificates
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Certificates />
        </AccordionDetails>
      </Accordion>
      <Button
        variant="outlined"
        className={classes.btn}
        onClick={() => logOut()}
      >
        LOG OUT
      </Button>
    </Box>
  );
}