import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useStyles} from './Style'
import {useDispatch} from "react-redux"
import {setLogin} from '../../store/helpers/helpersSlice'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { Box, Button, Grid, Typography } from '@mui/material'
import { CHECKOUT_FORM } from '../../components/Form/Schemes'
import CustomInput from '../../components/Form/TextInput'
import SoftSkills from './Forms/SoftSkills'


export default function AdminPanel() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const logOut = () => {
    dispatch(setLogin(false))
  }
  return (
    <Box>
       <Typography variant="h4" component="h4" color="#C8CAD6"  className={classes.textHead}>
       Admin Panel
        </Typography>
     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          soft skills
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <SoftSkills/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>hard skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Formik
               	initialValues={{
                  skills: '',
				}}
               >
            <Form className={classes.main}>
        <Field
									component={CustomInput}
									data-testid="skills"
									name="skills"
									type="text"
									label="skills"
								/>
<Button variant="outlined" className={classes.btn}>Add skill</Button>
<Button variant="outlined" className={classes.btn}>delete skill</Button>
</Form>
</Formik>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
             myText
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Formik
               	initialValues={{
                  myText: '',
				}}
               >
            <Form className={classes.main}>
        <Field
									component={CustomInput}
									data-testid="myText"
									name="myText"
									type="text"
									label="myText"
								/>
                <Button variant="outlined" className={classes.btn}>Add text</Button>
                <Button variant="outlined" className={classes.btn}>delete text</Button>
                </Form>
                </Formik>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Formik
               	initialValues={{
                  name: '',
                  description: '',
                  photo: '',
                  link: ''
				}}
               >
            <Form className={classes.main}>
        <Field
									component={CustomInput}
									data-testid="name"
									name="name"
									type="text"
									label="name"
								/>
                 <Field
									component={CustomInput}
									data-testid="description"
									name="description"
									type="text"
									label="description"
								/>
                <Field
									component={CustomInput}
									data-testid="photo"
									name="photo"
									type="text"
									label="photo-Link"
								/>
                <Field
									component={CustomInput}
									data-testid="link"
									name="link"
									type="text"
									label="link"
								/>
                <Button variant="outlined" className={classes.btn}>Add New Project</Button>
                <Button variant="outlined" className={classes.btn}>Delete last Project</Button>
                </Form>
                </Formik>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>education</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Formik
               	initialValues={{
                  name: '',
                  specialization: '',
                  year: '',
                  link: ''
				}}
               >
            <Form className={classes.main}>
        <Field
									component={CustomInput}
									data-testid="name"
									name="name"
									type="text"
									label="name"
								/>
                 <Field
									component={CustomInput}
									data-testid="specialization"
									name="specialization"
									type="text"
									label="specialization"
								/>
                <Field
									component={CustomInput}
									data-testid="year"
									name="year"
									type="text"
									label="year"
								/>
                <Field
									component={CustomInput}
									data-testid="link"
									name="link"
									type="text"
									label="link"
								/>
                <Button variant="outlined" className={classes.btn}>Add New education</Button>
                <Button variant="outlined" className={classes.btn}>Delete last education</Button>
                </Form>
                </Formik>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>workExp</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Formik
               	initialValues={{
                  name: '',
                  specialization: '',
                  year: '',
                  description: ''
				}}
               >
            <Form className={classes.main}>
        <Field
									component={CustomInput}
									data-testid="name"
									name="name"
									type="text"
									label="name"
								/>
                 <Field
									component={CustomInput}
									data-testid="specialization"
									name="specialization"
									type="text"
									label="specialization"
								/>
                <Field
									component={CustomInput}
									data-testid="year"
									name="year"
									type="text"
									label="year"
								/>
                <Field
									component={CustomInput}
									data-testid="description"
									name="description"
									type="text"
									label="description"
								/>
                <Button variant="outlined" className={classes.btn}>Add New workExp</Button>
                <Button variant="outlined" className={classes.btn}>Delete last workExp</Button>
                </Form>
                </Formik>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>certificates</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Formik
               	initialValues={{
                  title: '',
                  link: '',
				}}
               >
            <Form className={classes.main}>
        <Field
									component={CustomInput}
									data-testid="title"
									name="title"
									type="text"
									label="title"
								/>
                 <Field
									component={CustomInput}
									data-testid="link"
									name="link"
									type="text"
									label="link"
								/>
                <Button variant="outlined" className={classes.btn}>Add New certificates</Button>
                <Button variant="outlined" className={classes.btn}>Delete last certificates</Button>
                </Form>
                </Formik>
        </AccordionDetails>
      </Accordion>
       <Button variant="outlined" className={classes.btn} onClick={()=>logOut()}>LOG OUT</Button>
    </Box>
  )
}





     