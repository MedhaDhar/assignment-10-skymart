import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import useProducts from "../hooks/useProducts";
import { addToCart } from "../redux/cart/cartSlice";

import {
  FiArrowLeft,
  FiArrowRight,
  FiHeart,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white">
        Product not found
      </div>
    );
  }

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 5);

  return (
    <>
      <Navbar />

      <div className="bg-[#0A0A0A] text-white min-h-screen">
        <div className="max-w-[1450px] mx-auto px-8 py-12">
          {/* Breadcrumb */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-zinc-400 hover:text-lime-400 mb-12"
          >
            <FiArrowLeft />
            Back to Products
          </button>
          {/* Main */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* LEFT */}

            <div className="bg-white rounded-[32px] p-10 flex items-center justify-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-[520px] object-contain"
              />
            </div>

            {/* RIGHT */}

            <div>
              <span className="inline-block bg-lime-400/10 border border-lime-400/20 text-lime-400 px-5 py-2 rounded-full">
                {product.category}
              </span>
              <h1 className="text-5xl font-bold mt-8">{product.title}</h1>
              <div className="flex items-center gap-3 mt-8">
                <FiStar className="fill-yellow-400 text-yellow-400" />

                <span>{product.rating}</span>

                <span className="text-zinc-500">(120 reviews)</span>
              </div>
              <div className="border-t border-zinc-800 my-8"></div>
              <h2 className="text-6xl font-bold text-lime-400">
                ${product.price}
              </h2>
              <div className="border-t border-zinc-800 my-8"></div>
              <p className="text-zinc-400 text-lg leading-9">
                {product.description}
              </p>{" "}
              {/* Buttons */}
              <div className="flex items-center gap-4 mt-10">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-lime-400 hover:bg-lime-300 transition text-black font-semibold rounded-2xl py-5 flex items-center justify-center gap-3 text-2xl"
                >
                  <FiShoppingCart />
                  Add to Cart
                </button>

                <button className="w-20 h-20 rounded-2xl border border-zinc-700 flex items-center justify-center hover:border-lime-400 transition">
                  <FiHeart className="text-3xl" />
                </button>
              </div>
              {/* Features */}
              <div className="grid grid-cols-3 gap-5 mt-10">
                <div className="border border-zinc-700 rounded-3xl py-8 text-center">
                  <FiTruck className="text-lime-400 text-3xl mx-auto mb-4" />

                  <h3 className="font-semibold">Free Delivery</h3>

                  <p className="text-zinc-500 text-sm mt-2">
                    On orders above ₹999
                  </p>
                </div>

                <div className="border border-zinc-700 rounded-3xl py-8 text-center">
                  <FiShield className="text-lime-400 text-3xl mx-auto mb-4" />

                  <h3 className="font-semibold">Secure Pay</h3>

                  <p className="text-zinc-500 text-sm mt-2">100% encrypted</p>
                </div>

                <div className="border border-zinc-700 rounded-3xl py-8 text-center">
                  <FiRefreshCw className="text-lime-400 text-3xl mx-auto mb-4" />

                  <h3 className="font-semibold">Easy Returns</h3>

                  <p className="text-zinc-500 text-sm mt-2">30-day policy</p>
                </div>
              </div>
              {/* Previous / Next */}
              <div className="grid grid-cols-2 gap-5 mt-12">
                <button
                  onClick={() =>
                    product.id > 1 && navigate(`/product/${product.id - 1}`)
                  }
                  className="border border-zinc-700 rounded-2xl py-5 hover:bg-zinc-900 transition flex items-center justify-center gap-3"
                >
                  <FiArrowLeft />
                  Previous
                </button>

                <button
                  onClick={() =>
                    product.id < products.length &&
                    navigate(`/product/${product.id + 1}`)
                  }
                  className="bg-lime-400 hover:bg-lime-300 transition rounded-2xl py-5 text-black font-semibold flex items-center justify-center gap-3"
                >
                  Next
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>{" "}
          {/* Related Products */}
          <div className="mt-24">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl font-bold">Related Products</h2>

              <button
                onClick={() => navigate("/shop")}
                className="text-lime-400 hover:text-lime-300"
              >
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProductDetails;
