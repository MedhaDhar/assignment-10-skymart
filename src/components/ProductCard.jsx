import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { addToCart } from "../redux/cart/cartSlice";
import toast from "react-hot-toast";


function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };

  return (
    <div className="group bg-[#111111] border border-zinc-800 rounded-[28px] overflow-hidden transition-all duration-300 hover:border-lime-400/70 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(163,230,53,0.12)]">
      {/* Image */}

      <Link to={`/product/${product.id}`}>
        <div className="relative bg-white h-64 flex items-center justify-center overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[75%] h-[75%] object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}

      <div className="p-5">
        <span className="text-xs uppercase tracking-wider text-zinc-500">
          {product.category}
        </span>

        <h2 className="mt-2 text-[24px] leading-8 font-bold text-white line-clamp-2 min-h-[64px]">
          {product.title}
        </h2>

        <div className="flex items-center gap-2 mt-3">
          <FaStar className="text-yellow-400 text-sm" />

          <span className="text-sm text-zinc-400">
            {product.rating}
          </span>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-4xl font-bold text-lime-400">
              ${product.price}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-black font-semibold transition hover:bg-lime-300"
          >
            <FiShoppingCart />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;