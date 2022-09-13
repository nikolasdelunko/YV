import React from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../../../components/Form/TextInput";
import { useStyles } from "./Style";
import { Button } from "@mui/material";

export default function Contacts() {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
      }}
    >
      <Form className={classes.main}>
        <Field
          component={CustomInput}
          data-testid="email"
          name="email"
          type="text"
          label="email"
        />
        <Field
          component={CustomInput}
          data-testid="phone"
          name="phone"
          type="text"
          label="phone"
        />
        <Button variant="outlined" className={classes.btn}>
          Add New contact
        </Button>
        <Button variant="outlined" className={classes.btn}>
          Delete last contact
        </Button>
      </Form>
    </Formik>
  );
}
