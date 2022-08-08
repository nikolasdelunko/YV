import React from 'react'
import {Box} from '@mui/material'
import {useStyles} from './Style'
import Abmme from '../../components/About/Abme'
import Card from "../../components/About/Card"
import Contacts from '../../components/Contacts/Contsacts'


export default function About() {
  const classes = useStyles() 

  return (
    <Box className={classes.main}>
      <Abmme />
      <Card education={true}/>
      <Card education={false}/>
      <Contacts />
    </Box>
  )
}
