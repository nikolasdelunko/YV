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
  )
}
