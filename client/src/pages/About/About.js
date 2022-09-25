import React from 'react'
import {Box} from '@mui/material'
import {useStyles} from './Style'
import Abmme from '../../components/About/Abme'
import Card from "../../components/About/Card"
import Contacts from '../../components/Contacts/Contsacts'
import {useDispatch} from "react-redux"
import {openAbout} from '../../store/helpers/helpersSlice'
import { useEffect } from 'react';
import Certificate from '../../components/About/Certificate'
import UseSeo from "../../utils/costumHooks/useSeo"


export default function About() {
  const classes = useStyles() 
  const dispatch = useDispatch()
	const seoWords = "experience with JavaScript,experience with HTML, experience with CSS, experience with React.js, React.js Hooks, Redux, Node.js, Responsive Web Design, Preprocessor SCSS, Preprocessor SASS,work with Gulp, Experience with MongoDB,Experience with Figma,Experience with SEO,Experience with control systems Git"

  useEffect(()=>{
    dispatch(openAbout(true))
  },[])

  return (
    <Box className={classes.main}>
			<UseSeo 
			title={ 'Yaroslav Verbytskyi' }
				description={ 'React developer'}
				keywords={ seoWords }
		 />
      <Abmme />
      <Certificate />
      <Card education={true}/>
      <Card education={false}/>
      <Contacts />
    </Box>
  )
}
