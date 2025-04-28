
import React from "react";
import { Navigate } from "react-router-dom";
import { getUserFromToken } from "../services/Auth";

const RouteAdmin = ({ children }) => {
  const user = getUserFromToken();
  if (!user || !user.isAdmin) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};


export default RouteAdmin;
