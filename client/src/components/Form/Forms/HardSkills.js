import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../../../components/Form/TextInput";
import { useStyles } from "./Style";
import * as yup from "yup";
import { Button, Typography, Box } from "@mui/material";
import { snackActions } from "../../../utils/costumHooks/useSnack";
import { postSkills, deleteSkills } from "../../../utils/api/hardSkillsApi";
import Skills from "./data/Skills";
import { getSkills } from "../../../utils/api/hardSkillsApi";
import { useDispatch, useSelector } from "react-redux";
import { formsOperations } from "../../../store/forms";

export default function SoftSkills() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forms.hardSkills);
  const touch = useSelector((state) => state.forms.touch);

  const fetchSkill = async () => {
    const res = await getSkills();
    return dispatch(formsOperations.addHardSkills(res.data));
  };

  useEffect(() => {
    fetchSkill();
  }, [touch]);

  const validationSchema = yup.object().shape({
    skill: yup
      .string()
      .min(3, "Enter a soft skill")
      .required("No skill provided."),
  });

  const hendleDelete = async () => {
    try {
      const a = await deleteSkills();
      snackActions.warning(a.data);
    } catch (e) {
      snackActions.warning(e.name);
    } finally {
      dispatch(formsOperations.addTouch(!touch));
    }
  };

  return (
    <Formik
      initialValues={{
        skill: "",
      }}
      validateOnBlur
      onSubmit={async (values) => {
        try {
          const a = await postSkills(values);
          snackActions.warning(a.data);
        } catch (e) {
          snackActions.warning(e.name);
        } finally {
          dispatch(formsOperations.addTouch(!touch));
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
              <Skills data={item}  hard={true} key={item._id}/>
            ))}
          </Box>
          {touched.skill && errors.skill && (
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
              {errors.skill}
            </Typography>
          )}
          <Field
            component={CustomInput}
            data-testid="skill"
            name="skill"
            type="text"
            label="skill"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.skill}
          />
          <Button
            variant="outlined"
            className={classes.btn}
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
          >
            Add skill
          </Button>
          <Button
            variant="outlined"
            className={classes.btn}
            onClick={hendleDelete}
          >
            delete skill
          </Button>
        </Form>
      )}
    </Formik>
  );
}
