import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../../../components/Form/TextInput";
import { useStyles } from "./Style";
import { Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  postContacts,
  getContacts,
  deleteContacts,
  patchContacts,
} from "../../../utils/api/contactsApi";
import * as yup from "yup";
import { formsOperations } from "../../../store/forms";
import { snackActions } from "../../../utils/costumHooks/useSnack";
import { isRequiredError, isNotTrimmedError, PHONE_REGEX } from "../Schemes";
import Contact from "./data/Contact";

export default function Contacts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forms.contacts);
  const touch = useSelector((state) => state.forms.touchContacts);
  const changeContacts = useSelector((state) => state.forms.changeContacts);
  const findContact = useSelector((state) => state.forms.contact);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .strict(true)
      .trim(isNotTrimmedError)
      .required(isRequiredError)
      .email("Enter correct email"),
    phone: yup.string().matches(PHONE_REGEX, "Enter real  phone").required(),
  });

  const fetchContacts = async () => {
    const a = await getContacts();
    return dispatch(formsOperations.addContacts(a.data));
  };
  useEffect(() => {
    fetchContacts();
  }, [touch]);

  const hendleDelete = async () => {
    try {
      const a = await deleteContacts();
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.setTouchContacts(!touch));
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
      }}
      validateOnBlur
      onSubmit={async (values) => {
        try {
          const a = changeContacts
            ? await patchContacts(values, findContact._id)
            : await postContacts(values);
          snackActions.warning(a.data);
        } catch (e) {
          snackActions.warning(e.name);
        } finally {
          dispatch(formsOperations.setTouchContacts(!touch));
          dispatch(formsOperations.setChangeContacts(false));
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
              <Contact data={item} key={item._id} />
            ))}
          </Box>
          <Box
            className={
              changeContacts === true
                ? classes.inputGroupActive
                : classes.inputGroup
            }
          >
            {touched.email && errors.email && (
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
                {errors.email}
              </Typography>
            )}
            <Field
              component={CustomInput}
              data-testid="email"
              name="email"
              type="text"
              label="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.phone && errors.phone && (
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
                {errors.phone}
              </Typography>
            )}
            <Field
              component={CustomInput}
              data-testid="phone"
              name="phone"
              type="text"
              label="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {changeContacts ? (
              <Button
                variant="outlined"
                className={classes.btn}
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                patch my Contact
              </Button>
            ) : (
              <Button
                variant="outlined"
                className={classes.btn}
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                Add New contact
              </Button>
            )}
            {!changeContacts && (
              <Button
                variant="outlined"
                className={classes.btn}
                onClick={hendleDelete}
              >
                Delete last contact
              </Button>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
}
