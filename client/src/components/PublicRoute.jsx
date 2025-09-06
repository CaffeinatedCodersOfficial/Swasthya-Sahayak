import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AppContext);

  if (isLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicRoute;
