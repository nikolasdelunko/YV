import React from 'react'
import {Box, Typography, Button, Grid, } from '@mui/material'
import {useStyles} from './Style'



export default function Main() {
  const classes = useStyles() 

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
        I love the work done in a quality and on time, a fan of what I do,
        there are always
        many requirements for myself as a performer. As a colleague very
          easy and
        sociable in communication
        </Typography>
        <Button variant="outlined" className={classes.btn}>contact me</Button>
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
