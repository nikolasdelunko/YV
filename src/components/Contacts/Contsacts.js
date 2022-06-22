import React from 'react'
import {Box, Typography} from '@mui/material'
import {useStyles} from "./Style"


export default function Contsacts() {
    const classes = useStyles() 
  return (
    <Box className={classes.father}>
        <Typography variant="h4" component="h4" color="#C8CAD6" className={classes.textHead}>C0ntacts</Typography>
    </Box>
  )
}
