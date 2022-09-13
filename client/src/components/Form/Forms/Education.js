import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../../../components/Form/TextInput";
import { useStyles } from "./Style";
import { Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { formsOperations } from "../../../store/forms";
import { snackActions } from "../../../utils/costumHooks/useSnack";
import {
  postEducation,
  getEducation,
  deleteEducation,
} from "../../../utils/api/educationApi";
import Edu from "./data/Edu";
import { DATE_REGEX } from "../Schemes";

export default function SoftSkills() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forms.education);
  const touch = useSelector((state) => state.forms.touchEducation);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(5, "Enter  name longer 5 letters")
      .required("No name provided."),
    specialization: yup
      .string()
      .min(6, "Enter specialization longer 6 letters")
      .required(),
    year: yup
      .string()
      .matches(DATE_REGEX, "Enter real  data format: DD/MM/YYYY - DD/MM/YYYY")
      .min(10, "Enter real data format: DD/MM/YYYY")
      .required(),
    link: yup.string().min(10, "Enter reqal link adress for project"),
  });

  const fetchEducation = async () => {
    const a = await getEducation();
    return dispatch(formsOperations.addEducation(a.data));
  };
  useEffect(() => {
    fetchEducation();
  }, [touch]);

  const hendleDelete = async () => {
    try {
      const a = await deleteEducation();
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.setTouchEducation(!touch));
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        specialization: "",
        year: "",
        link: "",
      }}
      validateOnBlur
      onSubmit={async (values) => {
        try {
          const a = await postEducation(values);
          snackActions.warning(a.data);
        } catch (e) {
          snackActions.warning(e.name);
        } finally {
          dispatch(formsOperations.setTouchEducation(!touch));
        }
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <Form className={classes.main}>
          <Box className={classes.educationBox}>
            {data?.map((item) => (
              <Edu data={item} />
            ))}
          </Box>
          {touched.name && errors.name && (
            <Typography
              variant="h9"
              noWrap
              component="div"
              sx={{
                fontSize: "12px",
                cursor: "pointer",
                color: "red",
              }}
            >
              {errors.name}
            </Typography>
          )}
          <Field
            component={CustomInput}
            data-testid="name"
            name="name"
            type="text"
            label="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {touched.specialization && errors.specialization && (
            <Typography
              variant="h9"
              noWrap
              component="div"
              sx={{
                fontSize: "12px",
                cursor: "pointer",
                color: "red",
              }}
            >
              {errors.specialization}
            </Typography>
          )}
          <Field
            component={CustomInput}
            data-testid="specialization"
            name="specialization"
            type="text"
            label="specialization"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.specialization}
          />
          {touched.year && errors.year && (
            <Typography
              variant="h9"
              noWrap
              component="div"
              sx={{
                fontSize: "12px",
                cursor: "pointer",
                color: "red",
              }}
            >
              {errors.year}
            </Typography>
          )}
          <Field
            component={CustomInput}
            data-testid="year"
            name="year"
            type="text"
            label="year"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.year}
          />
          {touched.link && errors.link && (
            <Typography
              variant="h9"
              noWrap
              component="div"
              sx={{
                fontSize: "12px",
                cursor: "pointer",
                color: "red",
              }}
            >
              {errors.link}
            </Typography>
          )}
          <Field
            component={CustomInput}
            data-testid="link"
            name="link"
            type="text"
            label="link"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.link}
          />
          <Button
            variant="outlined"
            className={classes.btn}
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
          >
            Add New education
          </Button>
          <Button
            variant="outlined"
            className={classes.btn}
            onClick={hendleDelete}
          >
            Delete last education
          </Button>
        </Form>
      )}
    </Formik>
  );
}
