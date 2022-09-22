import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useStyles } from "./Style";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const classes = useStyles();
  const mobile = useSelector((state) => state.helpers.mobile);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Box
      className={mobile ? classes.mobButton : classes.button}
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <ArrowUpwardIcon
        fontSize={"large"}
      />
      <Typography
        variant="h5"
        component="h4"
        color="#868686"
        className={mobile ? classes.mobText : classes.text}
      >
        Back to top
      </Typography>
    </Box>
  );
};

export default ScrollButton;
