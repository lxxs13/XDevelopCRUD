export let productSelectedProductService = {};

export async function getProductsData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
  
      if (!response.ok) {
        throw new Error("Error al obtener datos.");
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("Error al obtener datos:", error);
      throw error;
    }
}

export function setProductSelected(newProduct) {
    productSelectedProductService = newProduct;
  }
