import React from 'react'
import {Box} from '@mui/material'
import {useStyles} from './Style'
import Abmme from '../../components/About/Abme'
import Card from "../../components/About/Card"
import Contacts from '../../components/Contacts/Contsacts'
import {useDispatch} from "react-redux"
import {openAbout} from '../../store/helpers/helpersSlice'
import { useEffect } from 'react';
import Certificate from '../../components/About/Certificate'


export default function About() {
  const classes = useStyles() 
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(openAbout(true))
  },[])

  return (
    <Box className={classes.main}>
      <Abmme />
      <Certificate />
      <Card education={true}/>
      <Card education={false}/>
      <Contacts />
    </Box>
  )
}
