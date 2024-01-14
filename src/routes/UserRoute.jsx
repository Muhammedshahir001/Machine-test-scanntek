// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../pages/user/loginPage';
import DashBoard from "../pages/user/dashBoardPage";

function UserRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default UserRoute
