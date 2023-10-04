import React from "react";
import { Link } from "react-router-dom";
import { setProductSelected } from "./api/productsService";

export default function ProductTable({ products }) {
  const handleReassign = (product) => {
    setProductSelected(product);
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Precio</th>
            <th>Titulo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{"$" + product.price}</td>
              <td>{product.title}</td>
              <td>
                  <Link to={"/product/info"}>
                    <button
                      className="btn btn-outline-info"
                      onClick={() => handleReassign(product)}
                    >
                      Ver m&aacute;s
                    </button>
                  </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
