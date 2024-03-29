import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Layout"

const PrivateRoute = ({ children }) => {
  const isAuth = !!localStorage.getItem("token");
  return isAuth ? (<Layout>{children}</Layout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;