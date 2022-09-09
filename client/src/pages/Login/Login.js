import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useStyles } from "./Style";
import useAuth from "../../utils/costumHooks/useAuth";
import { snackActions } from "../../utils/costumHooks/useSnack";

export default function Login() {
  const { login } = useAuth();
  const classes = useStyles();

  const [email, setName] = useState(null);
  const [password, setPassword] = useState(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };
  const value = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
		try{
	    await login(value);
    } catch (e) {
      snackActions.warning(e.name);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.main}>
      <Box
        component="form"
        className={classes.mainBox}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          value={email}
          required
          onChange={handleChange}
        />
        <TextField
          type="password"
          id="Password"
          label="Password"
          value={password}
          required
          onChange={handleChangePass}
        />
      </Box>
      <Button
        variant="outlined"
        className={classes.btn}
        type="submit"
        disabled={false}
      >
        LOGIN
      </Button>
    </form>
  );
}
