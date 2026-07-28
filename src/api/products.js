const BASE_URL = "https://dummyjson.com";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products?limit=100`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}