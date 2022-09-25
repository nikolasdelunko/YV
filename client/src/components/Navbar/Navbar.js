import React from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import { useStyles } from "./Style";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { openBurger } from "../../store/helpers/helpersSlice";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import useScroll from "../../utils/costumHooks/useScroll";

export default function Navbar() {
  const classes = useStyles();
  const burger = useSelector((state) => state.helpers.burger);
  const dispatch = useDispatch();
  const { scrollHendler } = useScroll();

  const handleOpen = () => {
    dispatch(openBurger(!burger));
  };

  return (
    <Box className={classes.navbar}>
      <Box className={classes.logo}>
        <NavLink to={"/"} className={classes.linkName}>
          <Box className={classes.nameBox}>
            <Typography
              variant="h5"
              component="h2"
              className={classes.nameFirst}
            >
              Yar
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              className={classes.nameSecond}
            >
              oslav
            </Typography>
          </Box>
          <Box className={classes.subname}>
            <Typography
              variant="h5"
              component="h2"
              className={classes.nameSecond}
            >
              Ver
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              className={classes.nameFirst}
            >
              bytski
            </Typography>
          </Box>
        </NavLink>
      </Box>
      <Box className={classes.dtButtons}>
        <Stack spacing={2} direction="row">
          <NavLink to={"/about"} className={classes.link}>
            <Button className={classes.btnHover} variant="text">
              about
            </Button>
          </NavLink>
          <Link
            className={classes.link}
            to="skills"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1000}
          >
            <Button
              className={classes.btnHover}
              variant="text"
              onClick={() => scrollHendler(2200)}
            >
              my skills
            </Button>
          </Link>
          <Link
            className={classes.link}
            to="project"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Button
              className={classes.btnHover}
              variant="text"
              onClick={() => scrollHendler(800)}
            >
              work
            </Button>
          </Link>
          <Link
            className={classes.link}
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1500}
          >
            <Button className={classes.btnHover} variant="text">
              contact
            </Button>
          </Link>
        </Stack>
      </Box>
      <Box className={classes.mbButtons} onClick={handleOpen}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon className={classes.mbIcon} />
        </IconButton>
      </Box>
    </Box>
  );
}
