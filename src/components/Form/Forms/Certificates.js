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
  )
}
