import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../../../components/Form/TextInput";
import { useStyles } from "./Style";
import { Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  postWorkExp,
  getWorkExp,
  deleteWorkExp,
  patchWorkExp,
} from "../../../utils/api/workExpApi";
import * as yup from "yup";
import { formsOperations } from "../../../store/forms";
import { DATE_REGEX } from "../Schemes";
import { snackActions } from "../../../utils/costumHooks/useSnack";
import Work from "./data/Work";

export default function SoftSkills() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forms.workExp);
  const touch = useSelector((state) => state.forms.touchWorkExp);
  const changeWorkExp = useSelector((state) => state.forms.changeWorkExp);
  const workExpCurrent = useSelector((state) => state.forms.workExpCurrent);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(6, "Enter  name longer 5 letters")
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
    description: yup
      .string()
      .min(16, "Enter information something about you experience"),
  });

  const fetchWorkExp = async () => {
    const a = await getWorkExp();
    return dispatch(formsOperations.addWorkExp(a.data));
  };
  useEffect(() => {
    fetchWorkExp();
  }, [touch]);

  const hendleDelete = async () => {
    try {
      const a = await deleteWorkExp();
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.setTouchWorkExp(!touch));
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        specialization: "",
        year: "",
        description: "",
      }}
      validateOnBlur
      onSubmit={async (values) => {
        try {
          const a = changeWorkExp
            ? await patchWorkExp(values, workExpCurrent._id)
            : await postWorkExp(values);
          snackActions.warning(a.data);
        } catch (e) {
          snackActions.warning(e.name);
        } finally {
          dispatch(formsOperations.setChangeWorkExp(false));
          dispatch(formsOperations.setTouchWorkExp(!touch));
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
              <Work data={item} key={item._id} />
            ))}
          </Box>
          <Box
            className={
              changeWorkExp === true
                ? classes.inputGroupActive
                : classes.inputGroup
            }
          >
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
            {touched.description && errors.description && (
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
                {errors.description}
              </Typography>
            )}
            <Field
              component={CustomInput}
              data-testid="description"
              name="description"
              type="text"
              label="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {changeWorkExp ? (
              <Button
                variant="outlined"
                className={classes.btn}
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                patch my workExp
              </Button>
            ) : (
              <Button
                variant="outlined"
                className={classes.btn}
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                Add New workExp
              </Button>
            )}
            {!changeWorkExp && (
              <Button
                variant="outlined"
                className={classes.btn}
                onClick={hendleDelete}
              >
                Delete last workExp
              </Button>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
}
