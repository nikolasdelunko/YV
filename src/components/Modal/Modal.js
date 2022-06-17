import * as React from 'react';
import Box from '@mui/material/Box';
import {useDispatch} from "react-redux"
import {openBurger} from '../../store/helpers/helpersSlice'
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import {useStyles} from './Style'


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
       <Button className={classes.btnHover} size="large">about</Button>
       <Button className={classes.btnHover} size="large">my skills</Button>
       <Button className={classes.btnHover} size="large">works</Button>
       <Button className={classes.btnHover} size="large">contact</Button>
     </Box>
    </Box>
  );
}
