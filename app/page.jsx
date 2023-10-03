"use client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/page";
import Dashboard from "./dashboard/page";
import User from "./users/page";
import UserDetails from "./UserDetails";

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default Home;
