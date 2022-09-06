import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useStyles } from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/helpers/helpersSlice";
import Spinner from "../../components/Spinner/Spinner";

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [data, setData] = useState();

  const getInfo = async () => {
    const res = await axios.get("http://localhost:3009/users");
    return setData(res.data);
  };

  const findUser = data?.find((i) => i.login === name);

  useEffect(() => {
    getInfo();
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (findUser?.login === name && findUser?.password === password) {
      setLoginError(null);
      dispatch(setLogin(true));
      localStorage.setItem("user", true);
      navigate(fromPage, { replace: true });
    } else {
      setLoginError("Wrong data");
      dispatch(setLogin(false));
    }
  };

  const fromPage = location.state?.from?.pathname || "/admin";

  return (
    <form onSubmit={handleSubmit} className={classes.main}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {loginError && <Box sx={{ color: "red" }}>{loginError}</Box>}
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
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
      {!!data ? (
        <Button
          variant="outlined"
          className={classes.btn}
          type="submit"
          disabled={!!data ? false : true}
        >
          LOGIN
        </Button>
      ) : (
        <Spinner />
      )}
    </form>
  );
}
