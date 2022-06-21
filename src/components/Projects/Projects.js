import React from 'react'
import {Box, Grid } from '@mui/material'
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
    <Box>

    <h1>Projects</h1>
    <Box  className={classes.mainSec}>
          {data?.map((item)=><Cards data={item} key={item} />)}
          </Box>
    </Box>
  )
}
