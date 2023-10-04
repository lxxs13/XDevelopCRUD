"use client";
import React, { useEffect, useState } from "react";
import ProductTable from "../productTable";
import { getProductsData, setProductSelected } from "../api/productsService";

export default function Product() {
  const [tempProductList, setTempProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("Token");

    if (!storedToken) {
      window.location.href = "/";
    } else {
      getProductsData()
        .then((data) => {
          setTempProductList(data);
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

  const handleGetUserSelected = (user) => {
    setProductSelected(user);
  };

  return (
    <>
      <div className="d-flex justify-content-end align-items-center">
        <button
          type="button"
          className="btn btn-warning mx-2"
          onClick={() => onResetList()}
        >
          Agregar Producto
        </button>
      </div>

      <ProductTable products={tempProductList} />
    </>
  );
}
