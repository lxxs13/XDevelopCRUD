import React from "react";
import { Link } from "react-router-dom";
import { productSelectedProductService } from "./api/productsService";
import Header from "./components/header";

export default function ProductDetails() {
  const product = productSelectedProductService;

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Header />
          {product && (
            <div className="mx-2">
              <figure className="d-flex flex-column justify-content-end align-items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="figure-img img-fluid rounded"
                  style={{ width: "10%" }}
                />
                <figcaption className="figure-caption text-center">
                  <h3>{product.id + ": " + product.title}</h3>
                </figcaption>
              </figure>

              <ul className="list-unstyled">
                <li>
                  <b>Descripci&oacute;n:</b> {product.description}
                </li>
                <li>
                  <b>Precio:</b> ${product.price}
                </li>
                <li>
                  <b>Categor&iacute;a:</b> {product.category}
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
