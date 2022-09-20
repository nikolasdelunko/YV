import React, { useRef, useState, useCallback } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useStyles } from "./Style";
import { snackActions } from "../../../utils/costumHooks/useSnack";
import { uploadFile, deleteFile } from "../../../utils/api/uploadApi";
import { uploadCv, deleteCv } from "../../../utils/api/cvApi";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCV, setSelectedCv] = useState(null);
  const classes = useStyles();
  const filePiker = useRef(null);
  const cvPiker = useRef(null);

  const handleSelect = () => {
    filePiker.current.click();
  };

  const handleSelectCv = () => {
    cvPiker.current.click();
  };

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleChangeCv = (e) => {
    setSelectedCv(e.target.files[0]);
  };

  const handleUpload = async (data, image) => {
    if (!data) {
      snackActions.warning("please select a file");
      return;
    } else {
      const formData = new FormData();
      formData.append("file", data);
      try {
        const a = image ? await uploadFile(formData) : await uploadCv(formData);
        snackActions.warning(a.data);
      } catch (e) {
        await deleteFile();
        snackActions.error(e.name);
      } finally {
        image ? await deleteFile() : await deleteCv();
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
          onClick={() => handleUpload(selectedFile, true)}
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
        <input
          ref={cvPiker}
          type="file"
          className={classes.btnUpload}
          onChange={handleChangeCv}
          accept=".pdf"
        />
        <Button
          variant="outlined"
          className={classes.btn}
          onClick={handleSelectCv}
        >
          Select CV
        </Button>
        <Button
          variant="outlined"
          className={classes.btn}
          onClick={() => handleUpload(selectedCV, false)}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
}
