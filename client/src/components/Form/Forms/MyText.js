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
  )
}
