import React from 'react'
import {Box} from '@mui/material'
import {useStyles} from './Style'
import Header from '../../components/Header/Header'



export default function Main() {
  const classes = useStyles() 

  return (
    <Box className={classes.main}>
      <Header />
    </Box>
  )
}
