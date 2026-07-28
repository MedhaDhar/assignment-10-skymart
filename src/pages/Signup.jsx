import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";
import "../styles/signup.css";

import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";

import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";

import { HiLightningBolt } from "react-icons/hi";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === formData.email
    );

    if (existingUser) {
      alert("User already exists.");
      return;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("isLoggedIn", JSON.stringify(true));

    dispatch(login(newUser));

    navigate("/");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        {/* Logo */}

        <div className="signup-logo">

          <div className="w-14 h-14 rounded-2xl bg-lime-400 flex items-center justify-center">

            <HiLightningBolt size={26} className="text-black" />

          </div>

          <h1 className="text-5xl font-bold text-white">

            Sky<span className="text-lime-400">Mart</span>

          </h1>

        </div>

        {/* Card */}

        <div className="signup-card">

          <h2 className="signup-title">

            Create account

          </h2>

          <p className="signup-subtitle">

            Join SkyMart and start shopping

          </p>

          <form
            onSubmit={handleSubmit}
            className="signup-form"
          >

            {/* Name */}

            <div className="signup-input">

              <HiOutlineUser />

              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            {/* Email */}

            <div className="signup-input">

              <HiOutlineMail />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>            {/* Password */}

            <div className="signup-input">

              <HiOutlineLockClosed />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password (min 6 chars)"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="signup-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff />
                ) : (
                  <FiEye />
                )}
              </button>

            </div>

            {/* Confirm Password */}

            <div className="signup-input">

              <HiOutlineLockClosed />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="signup-eye"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? (
                  <FiEyeOff />
                ) : (
                  <FiEye />
                )}
              </button>

            </div>

            {/* Button */}

            <button
              type="submit"
              className="signup-btn"
            >
              Create Account
              <FiArrowRight />
            </button>

          </form>

          {/* Footer */}

          <div className="signup-footer">

            Already have an account?{" "}

            <Link to="/">

              Sign in

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;