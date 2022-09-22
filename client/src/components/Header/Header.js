import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useStyles } from "./Style";
import { useEffect } from "react";
import { getMyText } from "../../utils/api/myTextApi";
import { getFile } from "../../utils/api/uploadApi";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../store/forms";
import Spinner from "../Spinner/Spinner";

export default function Main() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forms.text);
  const [avatar, setAvatar] = useState("");
  const mobile = useSelector((state) => state.helpers.mobile);

  const getInfo = async () => {
    const res = await getMyText();
    return dispatch(formsOperations.addText(res.data));
  };

  const getImage = async () => {
    const res = await getFile();
    return setAvatar(res.data[0].fileName);
  };

  useEffect(() => {
    getImage();
  }, []);

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.text}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box className={classes.textMob}>
              <Typography
                variant="h3"
                component="h3"
                color="#C8CAD6"
                className={mobile ? classes.headText : classes.textEl}
              >
                BEHOLD! THE ALMIGHTY DEV
              </Typography>
              {avatar ? (
                <img
                  className={classes.photoMob}
                  src={require(`../../images/${avatar}`)}
                  alt={`mobile-${avatar}`}
                />
              ) : (
                <Spinner data={true} />
              )}
            </Box>
            <Typography
              variant="body2"
              component="h6"
              color="#CCCCD5"
              className={classes.textEl}
            >
              {data?.map((item) => item.text)}
            </Typography>
            <a className={classes.link} href="tel: +38097497128">
              <Button variant="outlined" className={classes.btn}>
                contact me
              </Button>
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.photoBox}>
              {avatar ? (
                <img
                  className={classes.photo}
                  src={require(`../../images/${avatar}`)}
                  alt={`desktop${avatar}`}
                />
              ) : (
                <Spinner data={true} />
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
