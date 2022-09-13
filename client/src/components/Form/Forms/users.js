import React from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../../../components/Form/TextInput";
import { useStyles } from "./Style";
import { Button } from "@mui/material";

export default function Users() {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
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
          data-testid="email"
          name="email"
          type="text"
          label="email"
        />
        <Field
          component={CustomInput}
          data-testid="password"
          name="password"
          type="text"
          label="password"
        />
        <Button variant="outlined" className={classes.btn}>
          Add New user
        </Button>
        <Button variant="outlined" className={classes.btn}>
          Delete last user
        </Button>
      </Form>
    </Formik>
  );
}
