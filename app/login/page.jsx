"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("Token", token);
        navigate("/dashboard");
      } else {
        setError("Inicio de sesión fallido. Verifica tus credenciales.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container col-md-6">
        <div className="row">
          <div className="d-flex flex-column flex-nowrap">
            <label>Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className="text-danger">{error}</div>}

            <div className="col-md-12 mt-2 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleLogin}
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
