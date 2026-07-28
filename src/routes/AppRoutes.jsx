import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";
import About from "../pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/home" element={<Home />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;