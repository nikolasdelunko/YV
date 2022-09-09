import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./../pages/Main/Main";
import About from "./../pages/About/About";
import Login from "./../pages/Login/Login";
import AdminPanel from "./../pages/Admin/AdminPanel";
import Page404 from "./../pages/Page404/Page404";
import { RequireAuth, RequireLogin } from "./../components/hoc/RequireAuth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/Login"
        element={
          <RequireLogin>
            <Login />
          </RequireLogin>
        }
      />
      <Route
        path="/admin"
        element={
          <RequireAuth>
            <AdminPanel />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
