import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../../../components/Form/TextInput";
import { useStyles } from "./Style";
import * as yup from "yup";
import { Button, Typography, Box } from "@mui/material";
import { snackActions } from "../../../utils/costumHooks/useSnack";
import {
  postMyText,
  deleteMyText,
  getMyText,
} from "../../../utils/api/myTextApi";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../store/forms";
import Text from "./data/Text";

export default function MyText() {
  const classes = useStyles();
  const data = useSelector((state) => state.forms.text);
  const touch = useSelector((state) => state.forms.touchText);
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    text: yup
      .string()
      .min(3, "Enter  text longer 3 letters")
      .required("No text provided."),
  });

  const getText = async () => {
    const a = await getMyText();
    return dispatch(formsOperations.addText(a.data));
  };
  useEffect(() => {
    getText();
  }, [touch]);

  const hendleDelete = async () => {
    try {
      const a = await deleteMyText();
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.addTouchText(!touch));
    }
  };
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      validateOnBlur
      onSubmit={async (values) => {
        try {
          const a = await postMyText(values);
          snackActions.warning(a.data);
        } catch (e) {
          snackActions.warning(e.name);
        } finally {
          dispatch(formsOperations.addTouchText(!touch));
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
          <Box className={classes.boxSkills}>
            {data?.map((item) => (
              <Text data={item} />
            ))}
          </Box>
          {touched.text && errors.text && (
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
              {errors.text}
            </Typography>
          )}
          <Field
            component={CustomInput}
            data-testid="text"
            name="text"
            type="text"
            label="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />
          <Button
            variant="outlined"
            className={classes.btn}
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
          >
            Add text
          </Button>
          <Button
            variant="outlined"
            className={classes.btn}
            onClick={hendleDelete}
          >
            delete text
          </Button>
        </Form>
      )}
    </Formik>
  );
}
