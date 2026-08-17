import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";

function Loginsection() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login button clicked!");
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-orange-50 via-white to-red-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 p-6 sm:p-10">

          {/* Header */}
          <div className="text-center mb-12">

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200">
              <LogIn size={30} />
            </div>

            <h1 className="text-3xl font-black text-gray-900">
              Login
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Login to your BiteRush account
            </p>

          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Email
              </label>

              <div className="relative">

                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                />

              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between gap-3">

              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                  className="h-4 w-4 accent-orange-500"
                />

                Remember Me

              </label>

              <button
                type="button"
                className="text-sm font-bold text-orange-500 hover:text-orange-600"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-red-500 py-3.5 font-bold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <LogIn size={19} />
              Login
            </button>

          </form>

          {/* Signup */}
        <p className="mt-7 text-center text-sm text-gray-500">
  Don't have an account?{" "}

      <Link
    to="/signup"
    className="font-bold text-orange-500 hover:text-orange-600"
      >
    Sign Up
    </Link>
     </p>

        </div>

      </div>

    </section>
  );
}

export default Loginsection;