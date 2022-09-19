import React, { useRef, useState, useCallback } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useStyles } from "./Style";
import { snackActions } from "../../../utils/costumHooks/useSnack";
import { uploadFile, deleteFile } from "../../../utils/api/uploadApi";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const classes = useStyles();
  const filePiker = useRef(null);

  const handleSelect = () => {
    filePiker.current.click();
  };

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      snackActions.warning("please select a file");
      return;
    } else {
      const formData = new FormData();
      formData.append("file", selectedFile);
      try {
        const a = await uploadFile(formData);
        snackActions.warning(a.data);
      } catch (e) {
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
          onClick={handleUpload}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
}
