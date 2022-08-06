import React from 'react'
import {Box, Typography } from '@mui/material'
import {useStyles} from "./Style"
import useColors from '../../utils/costumHooks/useColors'



export default function Skills() {
  const classes = useStyles() 
  const { colorsHendler } = useColors()

  const arr = ['Experience with Figma', 'React, Hooks, Redux', 'Preprocessor SCSS (SASS)', 'Basic knowledge Node.js', 'Experience with versions control systems (Git',
   'Experience with MongoDB', 'Gulp', 'Understanding of OOP', 'Experience with Postman', 'Responsive Web Design']

  return (
    <Box className={classes.main} id={'#faq-1'}>
    <Typography variant="h4" component="h4" color="#C8CAD6" className={classes.textHead}>knowlrdge and skills</Typography>
      <Box className={classes.textBlock}>
       {arr?.map((item)=> <Typography variant="h5" component="h5" color="#C8CAD6" sx={{ color: `${colorsHendler(10)}`}} className={classes.textSkl}>{item}</Typography>)}
      </Box>
    </Box>
  )
}
