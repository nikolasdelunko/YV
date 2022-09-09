import { snackActions } from "./useSnack";
import { registerUser, loginUser } from "../../utils/api/userApi";
import { useDispatch } from "react-redux";
import { userOperations } from "../../store/user";
import { useLocation, useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const login = async (values) => {
    const res = await loginUser(values);
    if (res.status === 200) {
      dispatch(userOperations.setNewData(res.data));
      dispatch(userOperations.setLogin(true));
      navigate(fromPage, { replace: true });
      snackActions.success("You successfully Logged In");
      return true;
    } else {
      snackActions.warning("Wrong login or password");
      return false;
    }
  };

  const fromPage = location.state?.from?.pathname || "/admin";

  const register = async (values) => {
    const res = await registerUser(values);
    const { username, password } = values;
    if (res.status === 200) {
      const loginRes = await login({ username, password });
      snackActions.success("You successfully registered");
      return loginRes;
    }
    snackActions.warning("Troubles with register");
    return false;
  };

  const logOut = async () => {
    dispatch(userOperations.setNewData(""));
    dispatch(userOperations.setLogin(false));
    dispatch(userOperations.logOut());
    snackActions.success("You successfully Log out");
    return true;
  };
  return { logOut, login, register };
};

export default useAuth;
