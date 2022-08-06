import React from 'react'
import { useEffect, useState } from 'react';
import {Box, Typography} from '@mui/material'
import {useStyles} from './Style'
import useColors from '../../utils/costumHooks/useColors'
import axios from 'axios'


export default function About() {
    const [data, setData] = useState()
    const { colorsHendler } = useColors()
    const classes = useStyles() 

    const getInfo = async() => {
        const res =  await axios.get('http://localhost:3009/about')
        return setData(res.data)
    }

    useEffect(() => {
        getInfo()
    }, [])

    console.log(data)

  return (
    <Box className={classes.father}>
     <Typography variant="h4" component="h4" color="#C8CAD6"  className={classes.textHead}>
     about me
        </Typography>

    <Box className={classes.textBlock}>
        <Box className={classes.box}>
        {data?.map((item)=>
        <Box className={classes.textBox}>
            <Typography variant="h5" component="h4" color="#C8CAD6" className={classes.text}>{item}</Typography>
            <Typography variant="h5" component="h4" color={`${colorsHendler(10)}`} className={classes.text}>/</Typography> 
        </Box>
            )}      
     </Box>
    </Box>
    </Box>
  )
}
