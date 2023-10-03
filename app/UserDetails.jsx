import React from "react";
import { Link } from "react-router-dom";
import { userSelectedUserService } from "./api/users.service";

export default function UserDetails() {
  const user = userSelectedUserService;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          {user && (
            <ul className="list-unstyled">
              <li>
                <b>ID:</b> {user.id}
              </li>
              <li>
                <b>Nombre:</b> {user.name.firstname}
              </li>
              <li>
                <b>Apellido:</b> {user.name.lastname}
              </li>
              <li>
                <b>Correo Electrónico:</b> {user.email}
              </li>
              <li>
                <b>Número telefónico:</b> {user.phone}
              </li>
              <li>
                <b>Ciudad:</b> {user.address.city}
              </li>
              <li>
                <b>Calle:</b> {user.address.street}
              </li>
              <li>
                <b>Número:</b> {user.address.number}
              </li>
              <li>
                <b>Código postal:</b> {user.address.zipcode}
              </li>
            </ul>
          )}
          <Link to={{ pathname: "/users" }}>
            <button className="btn btn-outline-success">Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
