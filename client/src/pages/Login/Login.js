import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useStyles } from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { userOperations } from "../../store/user";
import Spinner from "../../components/Spinner/Spinner";
import useAuth from "../../utils/costumHooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [data, setData] = useState();

  const test = [
    {
      email: "test@email.com",
      password: "Nastya123"
    }
  ];
  const getInfo = async () => {
    // const res = await axios.get("http://localhost:3009/users");
    // return setData(res.data);
    setData(test);
  };

  const findUser = data?.find((i) => i.email === email);

  useEffect(() => {
    getInfo();
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };
  const value = {
    "email": email,
    "password": password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (findUser?.email === email && findUser?.password === password) {
      await login(value);
      setLoginError(null);
      dispatch(userOperations.setLogin(true));
      localStorage.setItem("user", true);
      navigate(fromPage, { replace: true });
    } else {
      setLoginError("Wrong data");
      dispatch(userOperations.setLogin(true));
    }
  };

  const fromPage = location.state?.from?.pathname || "/admin";

  return (
    <form onSubmit={handleSubmit} className={classes.main}>
      <Box
        component="form"
        className={classes.mainBox}
        noValidate
        autoComplete="off"
      >
        {loginError && <Box sx={{ color: "red" }}>{loginError}</Box>}
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
