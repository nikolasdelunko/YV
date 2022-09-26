import React from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useStyles } from "./Style";
import useColors from "../../utils/costumHooks/useColors";
import axios from "axios";

export default function Card({ education }) {
  const [data, setData] = useState();
  const classes = useStyles();
  const { colorsHendler } = useColors();

  const getInfo = async () => {
    const res = await axios.get(education ? "/education" : "/workExp");
    return setData(res.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Box className={classes.boxCard}>
      <Typography
        variant="h4"
        component="h4"
        color="#C8CAD6"
        className={classes.textHead}
      >
        {education ? "education and training" : "work experience"}
      </Typography>
      <Box className={classes.cardItems}>
        {data?.map((item) => (
          <Box className={classes.conteinerCard}>
            <Paper
              elevation={3}
              className={education ? classes.mainCard : classes.mainCardExp}
              sx={{ borderTop: `2px solid ${colorsHendler(10)}` }}
            >
              <Box className={classes.cardTextUp}>
                <Typography
                  variant="h5"
                  component="h4"
                  className={classes.textH}
                >
                  {item.name}
                </Typography>
                {education && (
                  <a href={"/"} className={classes.link}>
                    <Typography
                      variant="h7"
                      component="h5"
                      className={classes.textLink}
                    >
                      {item.link}
                    </Typography>
                  </a>
                )}
              </Box>
              <Box
                className={
                  education ? classes.cardTextDuwn : classes.cardTextDuwnExp
                }
              >
                <Typography
                  variant="h7"
                  component="h5"
                  className={classes.textSpec}
                >
                  {item.specialization}
                </Typography>
                <Typography
                  variant="h5"
                  component="h4"
                  className={
                    education ? classes.textYear : classes.textYearWork
                  }
                >
                  {item.year}
                </Typography>
              </Box>
              {!education && (
                <Box className={classes.textDescriptBox}>
                  <Typography
                    variant="h5"
                    component="h4"
                    className={classes.textDescript}
                  >
                    {" "}
                    {item.description}
                  </Typography>
                </Box>
              )}
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
