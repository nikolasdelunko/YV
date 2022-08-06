import React from 'react'
import {Box, Paper, Typography} from '@mui/material'
import { useEffect, useState } from 'react'
import {useStyles} from './Style'
import useColors from '../../utils/costumHooks/useColors'
import axios from 'axios'

export default function Projects() {
    const [data, setData] = useState()
    const classes = useStyles() 
    const { colorsHendler } = useColors()

    const getInfo = async() => {
        const res =  await axios.get('http://localhost:3009/education')
        return setData(res.data)
    }

    useEffect(() => {
        getInfo()
    }, [])

    console.log(data)
  
return (
    <Box className={classes.boxCard}> 
         <Typography variant="h4" component="h4" color="#C8CAD6"  className={classes.textHead}>
         education and training
        </Typography>
        <Box className={classes.cardItems}>
        {data?.map((item)=>
            <Box className={classes.conteinerCard}>
             <Paper elevation={3} className={classes.mainCard} sx={{ borderTop: `2px solid ${colorsHendler(10)}`}}>
                 <Box className={classes.cardTextUp}>
                     <Typography variant="h5" component="h4"  className={classes.textH}>
                     {item.name}
                     </Typography>
                  <a href={'/'} className={classes.link}>
                     <Typography variant="h7" component="h5" className={classes.textLink}>
                     {item.link}
                    </Typography>
                  </a>
              </Box>  
              <Box className={classes.cardTextDuwn}>
              <Typography variant="h7" component="h5"  className={classes.textSpec}>
                 {item.specialization}
              </Typography>
              <Typography variant="h5" component="h4"  className={classes.textYear}>
              {item.year}
              </Typography>
              </Box>    
      </Paper>
    </Box>
        )}
        </Box>
    </Box>
  )
}
