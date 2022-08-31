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
  )
}
