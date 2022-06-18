import React from 'react';
import {Stack, Box, Button, Typography} from '@mui/material'
import {useStyles} from './Style'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from "react-redux"
import {openBurger} from '../../store/helpers/helpersSlice'
import {Link} from 'react-router-dom'




export default function Navbar() {
    const classes = useStyles() 
    const burger = useSelector((state) => state.helpers.burger)
    const dispatch = useDispatch()
    
    
    const handleClose = () => {
      dispatch(openBurger(!burger))
    }

  return (
    <Box className={classes.navbar}>
     <Box 	className={burger ? classes.logoMenu : classes.logo}>
     <Link  to={'/'} className={classes.linkName}  onClick={handleClose}>
        <Box className={classes.nameBox}>
        <Typography variant="h5" component="h2"  className={classes.nameFirst}>
        Yar
        </Typography>
        <Typography variant="h5" component="h2"  className={classes.nameSecond}>
        oslav
        </Typography>
        </Box>
        <Box className={classes.subname}>
        <Typography variant="h5" component="h2" className={classes.nameSecond}>
        Ver
        </Typography>
        <Typography variant="h5" component="h2" className={classes.nameFirst}>
        bytski
        </Typography>
        </Box>
        </Link>
     </Box>
     <Box className={classes.dtButtons}>
     <Stack spacing={2} direction="row">
     <Link  to={'/about'} className={classes.link}>
      <Button className={classes.btnHover} variant="text">about</Button>
      </Link>
      <Button className={classes.btnHover} variant="text">my skills</Button>
      <Button className={classes.btnHover} variant="text">work</Button>
      <Button className={classes.btnHover} variant="text">contact</Button>
     </Stack>
     </Box>
     <Box className={classes.mbButtons}
     onClick={handleClose}
     >
     
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {burger ? <CloseIcon className={classes.mbIcon} /> : <MenuIcon className={classes.mbIcon} />}
          </IconButton> 
      </Box>
    </Box>
  );
}
