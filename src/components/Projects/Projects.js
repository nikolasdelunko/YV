import React from 'react'
import {Box, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Cards from './Cards'
import {useStyles} from './Style'


export default function Projects() {
    const [data, setData] = useState()
    const classes = useStyles() 

    const getInfo = async() => {
        const res =  await axios.get('http://localhost:3009/projects')
        return setData(res.data)
    }

    useEffect(() => {
        getInfo()
    }, [])


  return (
    <Box className={classes.projects}>
    <Typography variant="h4" component="h4" color="#C8CAD6" className={classes.textHead}>Projects</Typography>
    <Box  className={classes.mainSec}>
          {data?.map((item)=><Cards data={item} key={item} onBlur={console.log('sads')} />)}
          </Box>
    </Box>
  )
}
