import { FiX, FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cart/cartSlice";

function CartDrawer({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    toast.success("Order placed successfully!");
    dispatch(clearCart());
    onClose();
  };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div>

      {/* Drawer */}

      <div
        className={`fixed top-0 right-0 h-screen w-[430px] bg-[#101010] border-l border-zinc-800 z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">

          <div className="flex items-center gap-3">

            <h2 className="text-3xl font-bold text-white">

              Cart

            </h2>

            <span className="bg-lime-400/20 text-lime-400 text-sm px-3 py-1 rounded-full">

              {cartItems.reduce((total, item) => total + item.quantity, 0)} Items

            </span>

          </div>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition"
          >
            <FiX size={28} />
          </button>

        </div>

        {/* Products */}

        <div className="flex-1 overflow-y-auto p-6 space-y-5">

          {cartItems.length === 0 ? (

            <div className="h-full flex items-center justify-center">

              <p className="text-zinc-500 text-lg">

                Your cart is empty

              </p>

            </div>

          ) : (

            cartItems.map((item) => (

              <div
                key={item.id}
                className="border border-zinc-700 rounded-3xl p-4 flex gap-4"
              >

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-xl bg-white p-2"
                />

                <div className="flex-1">

                  <h3 className="text-white font-semibold line-clamp-2">

                    {item.title}

                  </h3>

                  <p className="text-lime-400 text-2xl font-bold mt-2">

                    ${item.price}

                  </p>                  <div className="flex items-center justify-between mt-4">

                    {/* Quantity Controls */}

                    <div className="flex items-center gap-3">

                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                        className="w-10 h-10 rounded-xl border border-zinc-700 flex items-center justify-center text-white hover:border-lime-400 transition"
                      >
                        <FiMinus />
                      </button>

                      <span className="text-white text-lg font-semibold w-6 text-center">

                        {item.quantity}

                      </span>

                      <button
                        onClick={() =>
                          dispatch(increaseQuantity(item.id))
                        }
                        className="w-10 h-10 rounded-xl border border-zinc-700 flex items-center justify-center text-white hover:border-lime-400 transition"
                      >
                        <FiPlus />
                      </button>

                    </div>

                    {/* Remove */}

                    <button
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                      className="text-red-500 hover:text-red-400 transition"
                    >
                      <FiTrash2 size={20} />
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

        {/* Footer */}

        <div className="border-t border-zinc-800 p-6">

          <div className="flex items-center justify-between mb-6">

            <span className="text-zinc-400 text-lg">

              Total

            </span>

            <span className="text-3xl font-bold text-white">

              ${total.toFixed(2)}

            </span>

          </div>

          <button
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
            className="w-full bg-lime-400 text-black font-bold py-4 rounded-2xl hover:bg-lime-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Checkout
          </button>

          <button
            onClick={() => dispatch(clearCart())}
            className="w-full mt-4 text-zinc-400 hover:text-red-400 transition"
          >
            Clear Cart
          </button>

        </div>

      </div>

    </>  );
}

export default CartDrawer;