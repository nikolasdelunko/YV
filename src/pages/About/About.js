import React from 'react'
import {Box, Paper, Typography, Button} from '@mui/material'
import {useStyles} from './Style'
import {  useState } from 'react';
import Abmme from '../../components/About/Abme'
import Contacts from '../../components/Contacts/Contsacts'

export default function About() {
  const classes = useStyles() 

  return (
    <Box className={classes.main}>
      <Abmme />
      <Contacts />
    </Box>
  )
}
