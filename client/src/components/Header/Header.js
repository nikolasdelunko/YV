import React from 'react'
import {Box, Typography, Button, Grid, } from '@mui/material'
import {useStyles} from './Style'
import { useEffect, useState } from 'react';
import axios from 'axios'


export default function Main() {
  const classes = useStyles() 
  const [data, setData] = useState()

  const getInfo = async() => {
    const res =  await axios.get('http://localhost:3009/myText')
    return setData(res.data)
}

    useEffect(() => {
     getInfo()
    }, [])

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.text}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
      <Box className={classes.textMob}>
      <Typography variant="h3" component="h3" color="#C8CAD6" className={classes.textEl}>
        BEHOLD! THE ALMIGHTY DEVS
        </Typography>
        <img className={classes.photoMob} src={require('../../utils/photo/photoMain.jpg')} alt={'photo'} />
        </Box>
        <Typography variant="body2" component="h6" color="#CCCCD5" className={classes.textEl}>
        {data}
        </Typography>
        <a className={classes.link} href="tel: +38097497128">
        <Button variant="outlined" className={classes.btn}>contact me</Button>
        </a>
      </Grid>
      <Grid item xs={12} md={6}>
      <Box className={classes.photoBox}>
       <img className={classes.photo} src={require('../../utils/photo/photoMain.jpg')} alt={'photo'} />
       </Box>
      </Grid>
      </Grid>
       </Box>
    </Box>
  )
}
