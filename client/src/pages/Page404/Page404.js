import React, {useState} from 'react'
import {Box, Button, Typography} from '@mui/material'
import {useStyles} from './Style'
import {Link} from 'react-router-dom'

export default function Page404() {
  const classes = useStyles()
  const [hover, setHover]= useState(false)


 const btnHover = () => {
  setHover(true)
 }

 const of = () => {
  setHover(false)
 }

  return (
    <Box className={hover ?classes.mainHover : classes.main}> 
    <Box className={classes.circle} onMouseMove={btnHover} onMouseLeave={of}>
    <Typography variant="h4" gutterBottom component="div" className={hover ? classes.textHover : classes.text}>oops</Typography>
    <Typography variant="h3" gutterBottom component="div" className={hover ? classes.textHover : classes.text}>404</Typography>
    <Link  to={'/'} className={ hover ?  classes.linkName : classes.btnHover}>
    <Button variant="outlined" className={classes.btn}>GO MAIN</Button>
    </Link>
    <Typography variant="overline" display="block" className={hover ? classes.textHover : classes.text}>the page not fond</Typography>
    </Box>
    {/* <Link  to={'/'} className={ hover ? classes.btnHover : classes.linkName}>
    <Button variant="outlined" className={classes.btn}>GO MAIN</Button>
    </Link> */}
    </Box>
  )
}
