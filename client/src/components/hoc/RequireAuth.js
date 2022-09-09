import { useLocation, Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

function RequireAuth({ children }) {
  const location = useLocation();
  const auth = useSelector((state) => state.user.isLogin);

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

function RequireLogin({ children }) {
  const location = useLocation();
  const login = useSelector((state) => state.user.isLogin);

  if (login) {
    return <Navigate to="/admin" state={{ from: location }} />;
  }
  return children;
}

export { RequireAuth, RequireLogin };
