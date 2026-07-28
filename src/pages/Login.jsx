import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";
import "../styles/login.css";

import {
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";

import {
  FiArrowRight,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import { BsLightningChargeFill } from "react-icons/bs";

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {

    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    dispatch(login(user));

    navigate("/home");
  };

  return (

    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">

      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* LEFT */}

        <div className="login-left relative border-r border-zinc-800">

          <div className="login-glow"></div>

          <div className="relative z-10">

            <div className="login-logo">

              <div className="logo-box">

                <BsLightningChargeFill className="text-black text-2xl"/>

              </div>

              <h1 className="logo-text">

                Sky

                <span>Mart</span>

              </h1>

            </div>

            <p className="welcome-text">

              WELCOME BACK

            </p>

            <h2 className="hero-title">

              Shop the future.

              <br />

              <span>

                Today.

              </span>

            </h2>

            <p className="hero-description">

              Thousands of products, lightning-fast delivery
              and prices that make your wallet happy.

            </p>

            <div className="stats">

              <div className="stat-card">

                <h3>

                  20K+

                </h3>

                <p>

                  Products

                </p>

              </div>

              <div className="stat-card">

                <h3>

                  50K+

                </h3>

                <p>

                  Users

                </p>

              </div>

              <div className="stat-card">

                <h3>

                  4.9★

                </h3>

                <p>

                  Rating

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="login-right">

          <form
            onSubmit={handleLogin}
            className="login-card"
          >

            <h2 className="login-title">

              Sign in

            </h2>

            <p className="login-subtitle">

              Enter your credentials to continue

            </p>

            {/* Email */}

            <div className="login-input">

              <HiOutlineMail className="text-2xl text-zinc-500"/>

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />

            </div>            {/* Password */}

            <div className="login-input">

              <HiOutlineLockClosed className="text-2xl text-zinc-500" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff className="text-2xl" />
                ) : (
                  <FiEye className="text-2xl" />
                )}
              </button>

            </div>

            <button
              type="submit"
              className="login-btn"
            >
              Sign in

              <FiArrowRight />

            </button>

            <p className="login-footer">

              Don't have an account?

              <Link
                to="/signup"
                className="signup-link"
              >
                Create one
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>

  );
}

export default Login;