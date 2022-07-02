import React from 'react'
import {Box, Typography, Button, Stack, Grid} from '@mui/material'
import {useStyles} from "./Style"
import useColors from '../../utils/costumHooks/useColors'


export default function Contsacts() {
    const { colorsHendler } = useColors()
    const classes = useStyles() 
  return (
    <Box className={classes.father}>
        <Box className={classes.textBlock}>
        <Typography variant="h4" component="h4" color="#C8CAD6" className={classes.textHead}>Contacts</Typography>
        <Typography variant="h5" component="h4" color="#C8CAD6" className={classes.text}>verbytski@ukr.net</Typography>
        <Typography variant="h5" component="h2" color="#C8CAD6" className={classes.text}>(+380) 974 97 128</Typography>
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
             <Button variant="text" className={classes.btn} sx={{ borderTop: `2px solid ${colorsHendler(10)}`}}>download cv</Button>
            </Grid>
             </Grid>
         </Stack>
        </Box>
    </Box>
  )
}
