import React from 'react'
import { useEffect } from 'react';
import {Box, Typography } from '@mui/material'
import {useStyles} from "./Style"
import useColors from '../../utils/costumHooks/useColors'
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../store/forms";
import { getSkills } from "../../utils/api/hardSkillsApi";




export default function Skills() {
  const classes = useStyles() 
  const { colorsHendler } = useColors()
	const dispatch = useDispatch();
	const data = useSelector((state) => state.forms.hardSkills);


  const getInfo = async() => {
    const res = await getSkills();
    return dispatch(formsOperations.addHardSkills(res.data));
}

    useEffect(() => {
     getInfo()
    }, [])


  return (
    <Box className={classes.main} id={'skills'}>
    <Typography variant="h4" component="h4" color="#C8CAD6" className={classes.textHead}>knowlrdge and skills</Typography>
      <Box className={classes.textBlock}>
       {data?.map((item)=> <Typography variant="h5" component="h5" color="#C8CAD6" sx={{ color: `${colorsHendler(10)}`}} className={classes.textSkl} key={item._id}>{item.skill}</Typography>)}
      </Box>
    </Box>
  )
}
