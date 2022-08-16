import React from 'react'
import {Box, Button} from '@mui/material'
import {useStyles} from './Style'
import {useDispatch} from "react-redux"
import {setLogin} from '../../store/helpers/helpersSlice'


export default function AdminPanel() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(setLogin(false))
  }
  return (
    <Box>
        <h1>AdminPanel</h1>
           <form  className={classes.main}>       
              <Button variant="outlined" className={classes.btn} onClick={()=>logOut()}>LOG OUT</Button>
            </form>
    </Box>
  )
}
