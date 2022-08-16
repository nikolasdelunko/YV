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
    console.log(data)
    
    return (
        <Box className={classes.father}>
         <Typography variant="h4" component="h4" color="#C8CAD6"  className={classes.textHead}>
        Certificate
           </Typography>
            {data?.map((item)=><img
                 className={classes.photoMob}
                 src={`${item.link}`}
                 srcSet={`${item.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                 alt={item.title}
                 loading="lazy"
      />)}
        </Box>
    )
}

