import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../TextInput";
import { useStyles } from "./Style";
import { Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import {
  registerUser,
  getUsers,
  deleteUser,
  patchUser,
} from "../../../utils/api/userApi";
import { formsOperations } from "../../../store/forms";
import { snackActions } from "../../../utils/costumHooks/useSnack";
import User from "./data/User";

export default function Users() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forms.users);
  const touch = useSelector((state) => state.forms.touchUsers);
  const changeUser = useSelector((state) => state.forms.changeUser);
  const findUser = useSelector((state) => state.forms.findUser);

  const fetchUsers = async () => {
    const a = await getUsers();
    return dispatch(formsOperations.addUsers(a.data));
  };
  useEffect(() => {
    fetchUsers();
  }, [touch]);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(6, "Enter  name longer 6 letters")
      .required("No name provided."),
    email: yup
      .string()
      .required("no Email Provided")
      .email("Enter correct email"),
    password: yup
      .string()
      .min(7, "Enter minimum longer 7 letters")
      .max(30, "Password must be 30 digits maximum")
      .required("no pass Provided"),
  });

  const hendleDelete = async () => {
    try {
      const a = await deleteUser();
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.error(e.name);
    } finally {
      dispatch(formsOperations.setTouchUsers(!touch));
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={async (values) => {
        try {
          const a = changeUser
            ? await patchUser(values, findUser._id)
            : await registerUser(values);
          snackActions.warning(a.data);
        } catch (e) {
          snackActions.error(e.name);
        } finally {
          dispatch(formsOperations.setTouchUsers(!touch));
          dispatch(formsOperations.setChangeUser(false));
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
              <User data={item} />
            ))}
          </Box>
          <Box
            className={
              changeUser === true
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
            {touched.password && errors.password && (
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
                {errors.password}
              </Typography>
            )}
            <Field
              component={CustomInput}
              data-testid="password"
              name="password"
              type="text"
              label="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {changeUser ? (
              <Button
                variant="outlined"
                className={classes.btn}
                disabled={!isValid && !dirty}
                type="submit"
                onClick={handleSubmit}
              >
                patch User
              </Button>
            ) : (
              <Button
                variant="outlined"
                className={classes.btn}
                type="submit"
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                Add New user
              </Button>
            )}
            {!changeUser && (
              <Button
                variant="outlined"
                className={classes.btn}
                onClick={hendleDelete}
              >
                Delete last user
              </Button>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
}
