import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const isAuth = !!localStorage.getItem("authorization_token");
    return isAuth ? <Navigate to="/" replace /> : [children];
};

export default PublicRoute;