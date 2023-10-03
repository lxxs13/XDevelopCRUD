"use client";
import React, { useEffect, useState } from "react";
import UserTable from "../userTable";
import { getUsersData, setUserSelectedUser } from "../api/users.service";

export default function User() {
  const [tempUsersList, setTempUsersList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("Token");

    if (!storedToken) {
      window.location.href = "/";
    } else {
      getUsersData()
        .then((filteredData) => {
          setTempUsersList(filteredData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al obtener datos:", error);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  const handleDeleteUser = (userId) => {
    const filteredUsers = tempUsersList.filter((user) => user.id !== userId);
    setTempUsersList(filteredUsers);
  };

  const onResetList = () => {
    getUsersData()
      .then((filteredData) => {
        setTempUsersList(filteredData);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  };

  const handleGetUserSelected = (user) => {
    setUserSelectedUser(user);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mx-4">
        <h1>Usuarios</h1>
        <div>
          <button
            type="button"
            className="btn btn-warning mx-2"
            onClick={() => onResetList()}
          >
            Agregar usuario
          </button>
          {tempUsersList.length < 10 && (
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => onResetList()}
            >
              Reiniciar tabla
            </button>
          )}
        </div>
      </div>

      <UserTable
        users={tempUsersList}
        onDeleteUser={handleDeleteUser}
        onUserSelected={handleGetUserSelected}
      />
    </>
  );
}
