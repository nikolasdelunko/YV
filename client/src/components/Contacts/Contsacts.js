import React from "react";
import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import { useStyles } from "./Style";
import useColors from "../../utils/costumHooks/useColors";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCv } from "../../utils/api/cvApi";

export default function Contsacts() {
  const { colorsHendler } = useColors();
  const classes = useStyles();
  const [data, setData] = useState();
  const [cv, setCv] = useState();

  const getInfo = async () => {
    const res = await axios.get("/contacts");
    return setData(res.data[0]);
  };

  const getCV = async () => {
    const res = await getCv();
    return setCv(res.data[0]);
  };

  useEffect(() => {
    getInfo();
    getCV();
  }, []);

  return (
    <Box className={classes.father}>
      <Box className={classes.textBlock} id="contact">
        <Typography
          variant="h4"
          component="h4"
          color="#C8CAD6"
          className={classes.textHead}
        >
          Contacts
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          color="#C8CAD6"
          className={classes.text}
        >
          {data?.email}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="#C8CAD6"
          className={classes.text}
        >
          {data?.phone}
        </Typography>
      </Box>
      <Box>
        <Stack spacing={2} direction="row" className={classes.btnBox}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={3} sm={12}>
              <a
                href={"https://www.linkedin.com/in/yaroslav-verbytski/"}
                target="blanc"
                className={classes.link}
              >
                <Button
                  variant="text"
                  className={classes.btn}
                  sx={{ borderTop: `2px solid ${colorsHendler(10)}` }}
                >
                  linkedin
                </Button>
              </a>
            </Grid>
            <Grid item md={3} sm={12}>
              <a
                href={"https://github.com/nikolasdelunko"}
                target="blanc"
                className={classes.link}
              >
                <Button
                  variant="text"
                  className={classes.btn}
                  sx={{ borderTop: `2px solid ${colorsHendler(10)}` }}
                >
                  githab
                </Button>
              </a>
            </Grid>
            <Grid item md={3} sm={12}>
              <a
                href={"https://t.me/verbytskiYar"}
                target="blanc"
                className={classes.link}
              >
                <Button
                  variant="text"
                  className={classes.btn}
                  sx={{ borderTop: `2px solid ${colorsHendler(10)}` }}
                >
                  telegram
                </Button>
              </a>
            </Grid>
            <Grid item md={3} sm={12}>
              <a href={cv?.link} target="blanc" className={classes.link}>
                <Button
                  variant="text"
                  className={classes.btn}
                  sx={{ borderTop: `2px solid ${colorsHendler(10)}` }}
                >
                  download cv
                </Button>
              </a>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}
