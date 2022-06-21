import React from 'react'
import {Box, Paper, Typography, Button} from '@mui/material'
import {useStyles} from './Style'


export default function Projects(data) {
    const classes = useStyles() 

    const fnk = (max) => {
      const color =  Math.floor(Math.random()*max)
      const colors = ['#20FF94','#FFE920', '#20D7FF', '#FF2055', '#FF20E9', '#7520FF', '#20FFD7', '#20D7FF', '#7520FF', '#FF2D20']
      return colors[color]
      }

return (
    <Box> 
     <Box className={classes.father}>
      <Paper elevation={3} className={classes.mainBox} sx={{ borderTop: `2px solid ${fnk(10)}`}}>
        <Typography variant="h5" component="h4" color="#CCCCD5" className={classes.textEl}>
        {data.data.name}
        </Typography>
        <Typography variant="h7" component="h5" color="#CCCCD5" className={classes.textEl}>
        {data.data.description}
        </Typography>
        <a href={data.data.link} className={classes.link}>
        <Button variant="outlined" className={classes.btn} onClick={()=>{}}>view project</Button>
        </a>
        <img  className={classes.photo} src={data.data.photo} alt={'photo'} />
      </Paper>
    
    </Box>
    </Box>
  )
}
