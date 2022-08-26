import React from 'react'
import { Field, Form, Formik } from 'formik'
import CustomInput from '../../../components/Form/TextInput'
import {useStyles} from './Style'
import {Button} from '@mui/material'


export default function SoftSkills() {
    const classes = useStyles()

  return (
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
  )
}
