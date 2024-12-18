import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../store/slices/userSlice";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(clearUser());
    localStorage.removeItem("username");
    navigate("/login");
  };

  const username = localStorage.getItem("username");

  return (
    <>
    <div className="main-container px-8 py-4">
      <Box className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-[2.5rem] text-primary font-bold tracking-tight">Admin Dashboard</h1>
        <button
          onClick={handleLogOut}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2 shadow-md"
        >
          <LogoutIcon fontSize="small" />
          Logout
        </button>
      </Box>

      <Box className="text-center mb-6">
        <p className="text-xl font-semibold">Welcome back, <span className="text-primary">{username}</span>!</p>
      </Box>

      <Box className="mb-10">
        <h2 className="text-xl font-bold mb-4">Tasks Overview</h2>
        <ul className="list-disc list-inside">
          <li>Review new user registrations</li>
          <li>Update site settings</li>
          <li>Monitor system performance</li>
          <li>Respond to support tickets</li>
        </ul>
      </Box>

      <Box className="flex flex-col items-center mt-10">
        <h2 className="text-xl font-bold mb-4">Activity Overview</h2>
        <img
          src="/assets/img/piechart.png"
          alt="Placeholder Pie Chart"
          className="max-w-[800px] rounded-md shadow-md border border-gray-300 my-6"
        />
      </Box>
    </div>
      <Box className="mt-10">
        <Breadcrumbs />
      </Box>
    </>
  );
};

export default AdminDashboard;
