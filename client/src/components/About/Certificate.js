import React from 'react'
import {Box, Typography} from '@mui/material'
import { useEffect, useState } from 'react';
import {useStyles} from './Style'
import axios from 'axios'

export default function Certificate() {
    const classes = useStyles() 
    const [data, setData] = useState()

    const getInfo = async() => {
        const res =  await axios.get('http://localhost:3009/certificates')
        return setData(res.data)
    }

    useEffect(() => {
        getInfo()
    }, [])
    
    return (
        <Box className={classes.father}>
         <Typography variant="h4" component="h4" color="#C8CAD6"  className={classes.textHead}>
        Certificate
           </Typography>
            {data?.map((item)=><img
                 className={classes.photo}
                 src={`${item.link}`}
                 srcSet={`${item.link}`}
                 alt={item.title}
                 loading="lazy"
      />)}
        </Box>
    )
}

