import { FiShoppingBag, FiArrowRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cart/cartSlice";
import toast from "react-hot-toast";

function ProductShowcase({ title, icon, products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = (e, product) => {
    e.stopPropagation(); // Prevent opening product page
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };

  return (
    <div className="bg-[#F8F8F8] rounded-[36px] p-20 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-black flex items-center gap-3">
          <span>{icon}</span>
          {title}
        </h2>

        <button
          onClick={() => navigate("/shop")}
          className="flex items-center gap-2 text-lime-500 hover:gap-3 transition-all"
        >
          See all
          <FiArrowRight />
        </button>
      </div>

      {/* Products */}

      <div className="space-y-6 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="group flex items-center justify-between rounded-3xl border border-zinc-200 p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-16 h-16 object-contain rounded-xl"
              />

              <div>
                <h3 className="font-semibold text-black line-clamp-1">
                  {product.title}
                </h3>

                <p className="text-lime-500 font-bold text-xl">
                  ${product.price}
                </p>
              </div>
            </div>

            <button
              onClick={(e) => handleAdd(e, product)}
              className="w-12 h-12 rounded-2xl bg-lime-100 hover:bg-lime-400 hover:text-black transition flex items-center justify-center"
            >
              <FiShoppingBag />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductShowcase;