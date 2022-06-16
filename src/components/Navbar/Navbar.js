import * as React from 'react';
import {Stack, Box, Button, Typography} from '@mui/material'
import {useStyles} from './Style'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export default function Navbar() {
    const classes = useStyles() 

  return (
    <Box className={classes.navbar}>
     <Box 	className={classes.logo}>
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
     </Box>
     <Box className={classes.dtButtons}>
     <Stack spacing={2} direction="row">
      <Button variant="text">about</Button>
      <Button variant="text">my skills</Button>
      <Button variant="text">work</Button>
      <Button variant="text">contact</Button>
     </Stack>
     </Box>
     <Box className={classes.mbButtons}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon className={classes.mbIcon} />
          </IconButton>
      </Box>
    </Box>
  );
}
