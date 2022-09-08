// import {snackActions} from './useSnackBarUtils'
import { registerUser, loginUser, logout } from "../../utils/api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { userOperations, userSelectors } from "../../store/user";

const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector(userSelectors.getToken());

  const login = async (values) => {
    const res = await loginUser(values);
    if (res.status === 200) {
      dispatch(userOperations.setToken(res.data));
      dispatch(userOperations.setNewData(res.data));
      // snackActions.success('You successfully Logged In')
      return true;
    }
    // snackActions.warning('Wrong login or password')
    return false;
  };

  const register = async (values) => {
    const res = await registerUser(values);
    const { username, password } = values;
    if (res.status === 200) {
      const loginRes = await login({ username, password });
      // snackActions.success('You successfully registered')
      return loginRes;
    }
    // snackActions.warning('Troubles with register')
    return false;
  };

  const logOut = async () => {
    // await logout(token);
    dispatch(userOperations.setNewData(""));
    dispatch(userOperations.setLogin(false));
    localStorage.removeItem("userInfo");

    // snackActions.success('You successfully Log out')
    return true;
    // const res = await logout(token);
    // if (res.status === 200) {
    //   await dispatch(userOperations.setToken({ data: "" }));
    //   localStorage.clear();
    //   // snackActions.success('You successfully Log out')
    //   return true;
    // } else {
    //   await dispatch(userOperations.setToken({ token: "" }));
    // }
    // // snackActions.warning('Error')
    // return false;
  };
  return { logOut, login, register };
};

export default useAuth;
