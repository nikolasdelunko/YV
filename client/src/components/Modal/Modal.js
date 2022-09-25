import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { openBurger } from "../../store/helpers/helpersSlice";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, Typography } from "@mui/material";
import { useStyles } from "./Style";
import { Link } from "react-scroll";
import useScroll from "../../utils/costumHooks/useScroll";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export default function BasicModal() {
  const classes = useStyles();
  const { scrollHendler } = useScroll();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(openBurger(false));
  };

  const burgerOff = useMediaQuery("(max-width:768px)");
  if (burgerOff === false) {
    handleClose();
  }

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.headBox}>
        <Box className={classes.logoMenu}>
          <NavLink to={"/"} className={classes.linkName} onClick={handleClose}>
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
        <Box className={classes.mbButtons} onClick={handleClose}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CloseIcon className={classes.mbIcon} />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.buttonGroup}>
        <NavLink to={"/about"} className={classes.link}>
          <Button
            className={classes.btnHover}
            size="large"
            onClick={handleClose}
          >
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
            size="large"
            onClick={() => scrollHendler(1500, true)}
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
            size="large"
            onClick={() => scrollHendler(800, true)}
          >
            works
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
          <Button
            className={classes.btnHover}
            size="large"
            onClick={handleClose}
          >
            contact
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
