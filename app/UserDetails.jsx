import React from "react";
import { Link } from "react-router-dom";
import { userSelectedUserService } from "./api/usersService";
import Header from "./components/header";

export default function UserDetails() {
  const user = userSelectedUserService;

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Header />
          {user && (
            <div className="mx-2">
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
            </div>
          )}
          <div className="mx-2">
            <Link to={{ pathname: "/dashboard" }}>
              <button className="btn btn-outline-success">Regresar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
