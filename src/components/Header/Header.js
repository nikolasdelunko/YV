import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import {useStyles} from './Style'



export default function Main() {
  const classes = useStyles() 

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.text}>
        <Typography variant="h3" component="h1" color="#C8CAD6" className={classes.textEl}>
        BEHOLD! THE ALMIGHTY DEVS
        </Typography>
        <Typography variant="body2" component="h6" color="#CCCCD5" className={classes.textEl}>
        I love the work done in a quality and on time, a fan of what I do,
        there are always
        many requirements for myself as a performer. As a colleague very
          easy and
        sociable in communication
        </Typography>
        <Button variant="outlined" className={classes.btn}>contact me</Button>
       </Box>
       <Box className={classes.photoBox}>
       <img className={classes.photo} src={require('../../utils/photo/photoMain.jpg')} alt={'photo'} />
       </Box>
    </Box>
  )
}
