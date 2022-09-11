import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../../../components/Form/TextInput";
import { useStyles } from "./Style";
import { Button, Typography, Box } from "@mui/material";
import * as yup from "yup";
import { snackActions } from "../../../utils/costumHooks/useSnack";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../store/forms";
import {
  postProjects,
  getProjects,
  deleteProjects,
  patchProjects,
} from "../../../utils/api/projectsApi";
import Project from "./data/Project";

export default function SoftSkills() {
  const classes = useStyles();
  const data = useSelector((state) => state.forms.projects);
  const chengeProject = useSelector((state) => state.forms.project);
  const touch = useSelector((state) => state.forms.touchProjects);
  const changeProject = useSelector((state) => state.forms.changeProject);
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(5, "Enter  name longer 5 letters")
      .required("No name provided."),
    description: yup
      .string()
      .min(12, "Enter description longer 12 letters")
      .required(),
    photo: yup.string().min(10, "Enter real  link for Photo").required(),
    link: yup.string().min(10, "Enter reqal link adress for project"),
  });

  const fetchProjects = async () => {
    const a = await getProjects();
    return dispatch(formsOperations.addProjects(a.data));
  };
  useEffect(() => {
    fetchProjects();
  }, [touch]);

  const hendleDelete = async () => {
    try {
      const a = await deleteProjects();
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.addTouchProjects(!touch));
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        photo: "",
        link: "",
      }}
      validateOnBlur
      onSubmit={async (values) => {
        try {
          const a = changeProject
            ? await patchProjects(values, chengeProject._id)
            : await postProjects(values);
          snackActions.warning(a.data);
        } catch (e) {
          snackActions.warning(e.name);
        } finally {
          dispatch(formsOperations.addTouchProjects(!touch));
          dispatch(formsOperations.setChangeProject(false));
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
          <Box className={classes.boxProjects}>
            {data?.map((item) => (
              <Project data={item} />
            ))}
          </Box>
          <Box
            className={
              changeProject === true
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
            {touched.photo && errors.photo && (
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
                {errors.photo}
              </Typography>
            )}
            <Field
              component={CustomInput}
              data-testid="photo"
              name="photo"
              type="text"
              label="photo-Link"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.photo}
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
            {changeProject ? (
              <Button
                variant="outlined"
                className={classes.btn}
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                patch my project
              </Button>
            ) : (
              <Button
                variant="outlined"
                className={classes.btn}
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                Add New Project
              </Button>
            )}
            {!changeProject && (
              <Button
                variant="outlined"
                className={classes.btn}
                onClick={hendleDelete}
              >
                Delete last Project
              </Button>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
}
