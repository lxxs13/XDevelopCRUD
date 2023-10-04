"use client";
import React, { useEffect, useState } from "react";
import UserTable from "../userTable";
import {
  getUsersData,
  setUserSelectedUser,
  tempUsersListAPI,
} from "../api/usersService";

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
    setTempUsersList(tempUsersListAPI);
  };

  const handleGetUserSelected = (user) => {
    setUserSelectedUser(user);
  };

  return (
    <>
      <div className="d-flex justify-content-end align-items-center">
        {tempUsersList.length < 10 && (
          <button
            type="button"
            className="btn btn-outline-success mx-2"
            onClick={() => onResetList()}
          >
            Reiniciar tabla
          </button>
        )}
        <button
          type="button"
          className="btn btn-warning mx-2"
          onClick={() => onResetList()}
        >
          Agregar Usuario
        </button>
      </div>

      <UserTable
        users={tempUsersList}
        onDeleteUser={handleDeleteUser}
        onUserSelected={handleGetUserSelected}
      />
    </>
  );
}
