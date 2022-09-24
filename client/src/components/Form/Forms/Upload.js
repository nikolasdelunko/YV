import React, { useRef, useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "../../../components/Form/TextInput";
import * as yup from "yup";
import { Box, Button, Typography } from "@mui/material";
import { useStyles } from "./Style";
import { snackActions } from "../../../utils/costumHooks/useSnack";
import { uploadFile, deleteFile } from "../../../utils/api/uploadApi";
import { patchCv, getCv } from "../../../utils/api/cvApi";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [cv, setCv] = useState();
  const classes = useStyles();
  const filePiker = useRef(null);
  const id = cv?._id;

  const getCV = async () => {
    const res = await getCv();
    return setCv(res.data[0]);
  };

  useEffect(() => {
    getCV();
  }, []);

  const handleSelect = () => {
    filePiker.current.click();
  };

  const validationSchema = yup.object().shape({
    link: yup
      .string()
      .url()
      .min(3, "Enter a real Link")
      .required("No Link provided."),
  });

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (data) => {
    if (!data) {
      snackActions.warning("please select a file");
      return;
    } else {
      const formData = new FormData();
      formData.append("file", data);
      try {
        const a = await uploadFile(formData);
        snackActions.warning(a.data);
      } catch (e) {
        await deleteFile();
        snackActions.error(e.name);
      } finally {
        await deleteFile();
      }
    }
  };

  return (
    <Box className={classes.boxUpload}>
      <Box className={classes.mainUpload}>
        <Typography
          variant="h9"
          noWrap
          component="div"
          className={classes.text}
        >
          Upload photo to main page
        </Typography>
        <input
          ref={filePiker}
          type="file"
          className={classes.btnUpload}
          onChange={handleChange}
          accept="image/*, .png, .jpg, .gif, .web,"
        />
        <Button
          variant="outlined"
          className={classes.btn}
          onClick={handleSelect}
        >
          Select photo
        </Button>
        <Button
          variant="outlined"
          className={classes.btn}
          onClick={() => handleUpload(selectedFile)}
        >
          Upload
        </Button>
      </Box>
      <Box className={classes.mainUpload}>
        <Typography
          variant="h9"
          noWrap
          component="div"
          className={classes.text}
        >
          Upload CV
        </Typography>
        <Formik
          initialValues={{
            link: "",
          }}
          validateOnBlur
          onSubmit={async (values) => {
            try {
              const a = await patchCv(values, id);
              snackActions.warning(a.data);
            } catch (e) {
              snackActions.warning(e.name);
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
                change you cv
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
