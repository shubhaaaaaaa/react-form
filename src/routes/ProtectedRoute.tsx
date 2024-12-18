import React from "react";
import {useSelector} from "react-redux"
import {Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const username = useSelector((state) => state.user.username);

  if (username === "admin") {
    return <Outlet />;
  } 

    return <Navigate to="/login" replace />;

};

export default ProtectedRoute