"use client";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  useEffect(() => {
    const storedToken = localStorage.getItem("Token");

    if (!storedToken) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <h1>Bienvenido!</h1>
      <Link
        to={{
          pathname: `/users`,
        }}
      >
        <button className="btn btn-outline-info">Usuarios</button>
      </Link>
    </>
  );
}
