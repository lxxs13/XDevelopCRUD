"use client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/page";
import Dashboard from "./dashboard/page";
import UserDetails from "./userDetails";
import ProductDetails from "./productDetails";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users/*" element={<UserDetails />} />
          <Route path="/product/*" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
