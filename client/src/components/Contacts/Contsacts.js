import React from 'react'
import {Box, Typography, Button, Stack, Grid} from '@mui/material'
import {useStyles} from "./Style"
import useColors from '../../utils/costumHooks/useColors'
import { useEffect, useState } from 'react';
import axios from 'axios'


export default function Contsacts() {
    const { colorsHendler } = useColors()
    const classes = useStyles() 
    const [data, setData] = useState()

    const getInfo = async() => {
      const res =  await axios.get('http://localhost:3009/contacts')
      return setData(res.data[0])
  }
  
      useEffect(() => {
       getInfo()
      }, [])

  return (
    <Box className={classes.father}>
        <Box className={classes.textBlock} id="contact">
        <Typography variant="h4" component="h4" color="#C8CAD6" className={classes.textHead}>Contacts</Typography>
        <Typography variant="h5" component="h4" color="#C8CAD6" className={classes.text}>{data?.email}</Typography>
        <Typography variant="h5" component="h2" color="#C8CAD6" className={classes.text}>{data?.phone}</Typography>
        </Box>
        <Box>
        <Stack spacing={2} direction="row" className={classes.btnBox}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item md={3} sm={12}>
            <a href={'https://www.linkedin.com/in/yaroslav-verbytski/'} className={classes.link}>
           <Button variant="text" className={classes.btn} sx={{ borderTop: `2px solid ${colorsHendler(10)}`}}>linkedin</Button>
           </a>
            </Grid>
            <Grid item md={3} sm={12}>
             <a href={'https://github.com/nikolasdelunko'} className={classes.link}>
                 <Button variant="text" className={classes.btn} sx={{ borderTop: `2px solid ${colorsHendler(10)}`}}>githab</Button>
             </a>
            </Grid>
            <Grid item md={3} sm={12}>
            <a href={'https://t.me/verbytskiYar'} className={classes.link}>
            <Button variant="text" className={classes.btn} sx={{ borderTop: `2px solid ${colorsHendler(10)}`}}>telegram</Button>
            </a>
            </Grid>
            <Grid item md={3} sm={12}>    
            <a href={'https://drive.google.com/file/d/1hpWK3nrI9KZjoeHhwR1mDeEy7nbgXOlV/view?usp=sharing'} className={classes.link}>
             <Button variant="text" className={classes.btn} sx={{ borderTop: `2px solid ${colorsHendler(10)}`}}>download cv</Button>
             </a>
            </Grid>
             </Grid>
         </Stack>
        </Box>
    </Box>
  )
}
