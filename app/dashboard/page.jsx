"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import User from "../users/page";
import Product from "../products/page";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  // const navigate = useNavigate();
  const [showUser, setShowUser] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("Token");

  //   if (!storedToken) {
  //     navigate("/");
  //   }
  // }, [navigate]);

  const toggleUserDetails = () => {
    setShowUser(false);
  };

  const toggleUser = () => {
    setShowUser(true);
    setShowProduct(false);
  };

  const toggleProduct = () => {
    setShowProduct(true);
    setShowUser(false);
  };

  return (
    <>
      <Header />
      <div className="p-2 d-flex justify-content-center align-items-center pt-2">
        <button className="btn btn-primary m-2" onClick={toggleUser}>
          Ir a Usuarios
        </button>

        <button className="btn btn-primary" onClick={toggleProduct}>
          Ir a Productos
        </button>
      </div>
      {showUser && <User />}
      {showProduct && <Product />}
    </>
  );
}
