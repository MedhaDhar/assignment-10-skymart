import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

import { FiSearch } from "react-icons/fi";

function Shop() {
  const { products, loading } = useProducts();

  const [searchParams] = useSearchParams();

  const categoryFromUrl = decodeURIComponent(
    searchParams.get("category") || "All"
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categoryFromUrl);
  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category)),
  ];

  useEffect(() => {
    setCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    // Search
    if (search.trim()) {
      data = data.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "All") {
      data = data.filter((item) => item.category === category);
    }

    // Sort
    switch (sort) {
      case "low":
        data.sort((a, b) => a.price - b.price);
        break;

      case "high":
        data.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        data.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return data;
  }, [products, search, category, sort]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <div className="max-w-[1500px] mx-auto px-8 py-12">

          {/* Heading */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">
              Our Products
            </h1>

            <p className="text-zinc-500 mt-2">
              Browse all available products
            </p>
          </div>

          {/* Filters */}

          <div className="border border-zinc-700 rounded-[28px] p-5 mb-12">
            <div className="grid lg:grid-cols-[1fr_220px_220px] gap-5">

              {/* Search */}

              <div className="relative">
                <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 text-xl" />

                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-[#1A1A1A] rounded-2xl pl-14 pr-5 py-4 outline-none border border-zinc-700 focus:border-lime-400"
                />
              </div>

              {/* Category */}

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-[#1A1A1A] rounded-2xl px-5 py-4 border border-zinc-700 outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* Sort */}

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-[#1A1A1A] rounded-2xl px-5 py-4 border border-zinc-700 outline-none"
              >
                <option value="default">Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

            </div>
          </div>

          {/* Product Count */}

          <p className="text-zinc-400 mb-8">
            Showing{" "}
            <span className="text-lime-400 font-semibold">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

          {/* Products */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <h2 className="text-3xl font-semibold text-zinc-400">
                  No products found
                </h2>

                <p className="mt-3 text-zinc-500">
                  Try another search or category.
                </p>
              </div>
            )}
          </div>

        </div>

        <Footer />
      </div>
    </>
  );
}

export default Shop;