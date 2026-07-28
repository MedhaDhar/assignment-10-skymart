import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/authSlice";
import CartDrawer from "./CartDrawer";

import { BsLightningChargeFill } from "react-icons/bs";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const cartItems = useSelector((state) => state.cart.items);
  console.log("Navbar cart:", cartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-[1500px] mx-auto px-8 h-24 flex items-center justify-between">
        {/* Logo */}

        <Link to="/home" className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-lime-400 flex items-center justify-center">
            <BsLightningChargeFill className="text-black text-xl" />
          </div>

          <h1 className="text-4xl font-bold text-white">
            Sky
            <span className="text-lime-400">Mart</span>
          </h1>
        </Link>

        {/* Navigation */}

        <nav className="hidden lg:flex items-center gap-14">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold text-xl"
                : "text-zinc-400 hover:text-white text-xl"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold text-xl"
                : "text-zinc-400 hover:text-white text-xl"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold text-xl"
                : "text-zinc-400 hover:text-white text-xl"
            }
          >
            About
          </NavLink>
        </nav>

        {/* Right */}

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 border border-zinc-700 rounded-2xl px-4 py-2">
            <div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center text-black font-bold">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <span className="text-lg">{user?.name || "Guest"}</span>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative w-14 h-14 rounded-2xl border border-zinc-700 flex items-center justify-center hover:border-lime-400 transition"
          >
            <FiShoppingCart className="text-2xl" />
<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center z-50">
  {cartItems.reduce((total, item) => total + item.quantity, 0)}
</span>
          </button>

          <button
            onClick={handleLogout}
            className="w-14 h-14 rounded-2xl border border-zinc-700 flex items-center justify-center hover:border-red-500"
          >
            <FiLogOut className="text-2xl" />
          </button>
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}

export default Navbar;
