import React from "react";
import { Link } from "react-router-dom";
import { setUserSelectedUser } from "./api/usersService";

export default function UserTable({ users, onDeleteUser }) {
  const handleDeleteClick = (userId) => {
    onDeleteUser(userId);
  };

  const handleReassign = (user) => {
    setUserSelectedUser(user);
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Usuario</th>
            <th>Correo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name.firstname}</td>
              <td>{user.name.lastname}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={"/users/info"}>
                  <button
                    className="btn btn-outline-info"
                    onClick={() => handleReassign(user)}
                  >
                    Ver m&aacute;s
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleDeleteClick(user.id)}
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
