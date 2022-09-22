import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../../../components/Form/TextInput";
import { useStyles } from "./Style";
import { Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  postCertificates,
  getCertificates,
  deleteCertificates,
} from "../../../utils/api/certificatesApi";
import * as yup from "yup";
import { formsOperations } from "../../../store/forms";
import { snackActions } from "../../../utils/costumHooks/useSnack";
import Certificate from "./data/certificate";

export default function SoftSkills() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forms.certificates);
  const touch = useSelector((state) => state.forms.touchCertificates);

  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .min(5, "Enter  title longer 5 letters")
      .required("No name title."),
    link: yup
      .string()
      .min(10, "Enter Real link for photo you certificate")
      .required(),
  });

  const fetchCertificates = async () => {
    const a = await getCertificates();
    return dispatch(formsOperations.addCertificates(a.data));
  };
  useEffect(() => {
    fetchCertificates();
  }, [touch]);

  const hendleDelete = async () => {
    try {
      const a = await deleteCertificates();
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.setTouchCertificates(!touch));
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        link: "",
      }}
      validateOnBlur
      onSubmit={async (values) => {
        try {
          const a = await postCertificates(values);
          snackActions.warning(a.data);
        } catch (e) {
          snackActions.warning(e.name);
        } finally {
          dispatch(formsOperations.setTouchCertificates(!touch));
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
              <Certificate data={item} />
            ))}
          </Box>
          {touched.title && errors.title && (
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
              {errors.title}
            </Typography>
          )}
          <Field
            component={CustomInput}
            data-testid="title"
            name="title"
            type="text"
            label="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
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
            Add New certificates
          </Button>
          <Button
            variant="outlined"
            className={classes.btn}
            onClick={hendleDelete}
          >
            Delete last certificates
          </Button>
        </Form>
      )}
    </Formik>
  );
}
