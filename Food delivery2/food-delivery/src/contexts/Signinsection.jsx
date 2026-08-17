import React from "react";
import {
  CheckCircle,
  User,
  ShoppingBag,
  Home,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Signinsection() {
  const navigate = useNavigate();

  // Scroll To Top
  const onClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-orange-50 via-white to-red-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Main Card */}
        <div className="rounded-3xl bg-white p-8 text-center shadow-2xl border border-orange-100">

          {/* Success Icon */}
          <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-500">
            <CheckCircle size={55} strokeWidth={2} />

            <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-orange-500"></span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-black text-gray-900">
            Welcome Back! 🎉
          </h1>

          <p className="mt-3 text-gray-500 leading-relaxed">
            You have successfully signed in to
            <span className="font-bold text-orange-500"> BiteRush </span>
            account.
          </p>

          {/* User Info */}
          <div className="mt-7 flex items-center gap-4 rounded-2xl bg-orange-50 p-4 text-left">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-red-500 text-white">
              <User size={27} />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">
                Welcome, Food Lover!
              </h2>

              <p className="text-sm text-gray-500">
                Ready to order your favorite food?
              </p>
            </div>

          </div>

          {/* Profile Button */}
          <button
            onClick={() => {
              onClickTop();
              navigate("/profile");
            }}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-red-500 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <User size={20} />
            Go to Profile
            <ArrowRight size={18} />
          </button>

          {/* Orders Button */}
          <button
            onClick={() => {
              onClickTop();
              navigate("/orders");
            }}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 py-3.5 font-bold text-orange-600 transition duration-300 hover:bg-orange-100"
          >
            <ShoppingBag size={20} />
            My Orders
          </button>

          {/* Home Button */}
          <button
            onClick={() => {
              onClickTop();
              navigate("/");
            }}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3.5 font-bold text-gray-700 transition duration-300 hover:bg-gray-50"
          >
            <Home size={20} />
            Continue to Home
          </button>

          {/* Bottom Text */}
          <p className="mt-7 text-xs text-gray-400">
             Delicious food •  Fast delivery •  Happy customers
          </p>

        </div>

      </div>

    </section>
  );
}

export default Signinsection;