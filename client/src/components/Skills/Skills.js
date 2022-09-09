import React from 'react'
import { useEffect, useState } from 'react';
import {Box, Typography } from '@mui/material'
import {useStyles} from "./Style"
import useColors from '../../utils/costumHooks/useColors'
import axios from 'axios'




export default function Skills() {
  const [data, setData] = useState()
  const classes = useStyles() 
  const { colorsHendler } = useColors()


  const getInfo = async() => {
    const res =  await axios.get('http://localhost:3009/skills')
    return setData(res.data)
}

    useEffect(() => {
     getInfo()
    }, [])


  return (
    <Box className={classes.main} id={'skills'}>
    <Typography variant="h4" component="h4" color="#C8CAD6" className={classes.textHead}>knowlrdge and skills</Typography>
      <Box className={classes.textBlock}>
       {data?.map((item)=> <Typography variant="h5" component="h5" color="#C8CAD6" sx={{ color: `${colorsHendler(10)}`}} className={classes.textSkl}>{item.skill}</Typography>)}
      </Box>
    </Box>
  )
}
