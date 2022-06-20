import * as React from 'react';
import Box from '@mui/material/Box';
import {useDispatch} from "react-redux"
import {openBurger} from '../../store/helpers/helpersSlice'
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import {useStyles} from './Style'
import {Link} from 'react-router-dom'


export default function BasicModal() {
  const classes = useStyles() 
  const dispatch = useDispatch()
  const handleClose = () => dispatch(openBurger(false));


  const burgerOff = useMediaQuery('(max-width:768px)');
	if (burgerOff === false) {
		handleClose()
	}

  return (
    <Box>
      <Box className={classes.buttonGroup}>
      <Link  to={'/about'} className={classes.link}>
       <Button className={classes.btnHover} size="large" onClick={handleClose}>about</Button>
       </Link>
       <Button className={classes.btnHover} size="large" onClick={handleClose}>my skills</Button>
       <Button className={classes.btnHover} size="large" onClick={handleClose}>works</Button>
       <Button className={classes.btnHover} size="large" onClick={handleClose}>contact</Button>
     </Box>
    </Box>
  );
}
