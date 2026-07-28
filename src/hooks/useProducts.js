import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return {
    products,
    loading,
  };
}