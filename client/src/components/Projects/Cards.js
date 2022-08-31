import React from 'react'
import {Box, Paper, Typography, Button} from '@mui/material'
import {useStyles} from './Style'
import {  useState } from 'react';
import useColors from '../../utils/costumHooks/useColors'

export default function Projects(data) {
    const classes = useStyles() 
    const [btnOn, setBtnOn]= useState(false)
    const { colorsHendler } = useColors()

  
   const btnHover = () => {
    setBtnOn(true)
   }

   const of = () => {
    setBtnOn(false)
   }

return (
    <Box> 
     <Box className={classes.father} >
      <Paper elevation={3} className={classes.mainBox} sx={{ borderTop: `2px solid ${colorsHendler(10)}`}} onMouseMove={btnHover} onMouseLeave={of}>
        <Typography variant="h5" component="h4" color="#CCCCD5" className={classes.textH}>
        {data.data.name}
        </Typography>
        <Typography variant="h7" component="h5" color="#CCCCD5" className={classes.textEl}>
        {data.data.description}
        </Typography>
        <a href={data.data.link} className={classes.link}>
        <Button variant="outlined" className={btnOn ? classes.btn : classes.btnHover}>view project</Button>
        </a>
        <img  className={classes.photo} src={data.data.photo} alt={'photo'} />
      </Paper>
    
    </Box>
    </Box>
  )
}
