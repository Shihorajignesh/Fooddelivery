import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  LogIn,
  Store,
  Tag,
  ChefHat,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [threeMenuOpen, setThreeMenuOpen] = useState(false);

  // Mobile menu close + scroll top
  const handleMobileClick = () => {
    setOpen(false);
    setThreeMenuOpen(false);
    scrollToTop();
  };

  // More dropdown close
  const handleMoreClick = () => {
    setThreeMenuOpen(false);
    scrollToTop();
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={scrollToTop}
          className="flex items-center gap-2 text-2xl font-bold text-orange-500"
        >
          <ChefHat size={34} />
          <span>BiteRush</span>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden items-center gap-7 font-medium lg:flex">

          {/* Home */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-1 transition hover:text-orange-500"
          >
            Home
          </Link>

          {/* Restaurants */}
          <Link
            to="/restaurants"
            onClick={scrollToTop}
            className="flex items-center gap-1 transition hover:text-orange-500"
          >
            <Store size={18} />
            Restaurants
          </Link>

          {/* Offers */}
          <Link
            to="/offers"
            onClick={scrollToTop}
            className="flex items-center gap-1 transition hover:text-orange-500"
          >
            <Tag size={18} />
            Offers
          </Link>

          {/* Search */}
          <Link
            to="/search"
            onClick={scrollToTop}
            className="flex items-center gap-1 transition hover:text-orange-500"
          >
            <Search size={18} />
            Search
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            onClick={scrollToTop}
            className="relative flex items-center gap-1 transition hover:text-orange-500"
          >
            <ShoppingCart size={20} />
            Cart

            {/* Cart Badge */}
            <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              2
            </span>
          </Link>

          {/* ================= MORE DROPDOWN ================= */}
          <div className="relative">

            <button
              type="button"
              onClick={() => setThreeMenuOpen(!threeMenuOpen)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 font-medium transition hover:bg-orange-50 hover:text-orange-500"
            >
              {threeMenuOpen ? <X size={20} /> : <Menu size={20} />}
              More
            </button>

            {/* Dropdown */}
            {threeMenuOpen && (
              <div className="absolute right-0 top-12 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">

                {/* Checkout */}
                <Link
                  to="/checkout"
                  onClick={handleMoreClick}
                  className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 transition hover:bg-orange-50 hover:text-orange-500"
                >
                  <CreditCard size={18} />
                  Checkout
                </Link>

                {/* Payment */}
                <Link
                  to="/payment"
                  onClick={handleMoreClick}
                  className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 transition hover:bg-orange-50 hover:text-orange-500"
                >
                  <CreditCard size={18} />
                  Payment
                </Link>

                {/* Order Success */}
                <Link
                  to="/order-success"
                  onClick={handleMoreClick}
                  className="flex items-center gap-3 px-4 py-3 transition hover:bg-green-50 hover:text-green-600"
                >
                  <CheckCircle2 size={18} />
                  Order Success
                </Link>

                <Link
                  to="/Orders"
                  onClick={handleMoreClick}       
                  className="flex items-center gap-3 border-t border-gray-100 px-4 py-3 transition hover:bg-orange-50 hover:text-orange-500"
                >
                  <LogIn size={18} />
                  Orders
                </Link>

              </div>
            )}
          </div>
        </nav>

        {/* ================= RIGHT BUTTONS ================= */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Login */}
          <Link
            to="/login"
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <LogIn size={18} />
            Login
          </Link>

          {/* Profile */}
          <Link
            to="/profile"
            onClick={scrollToTop}
            className="rounded-full bg-orange-500 p-3 text-white transition hover:bg-orange-600"
          >
            <User size={20} />
          </Link>

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          className="rounded-lg p-2 transition hover:bg-orange-50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="border-t bg-white shadow-lg lg:hidden">

          {/* Home */}
          <Link
            to="/"
            onClick={handleMobileClick}
            className="flex items-center gap-3 border-b border-gray-100 px-6 py-4 transition hover:bg-orange-50 hover:text-orange-500"
          >
            Home
          </Link>

          {/* Restaurants */}
          <Link
            to="/restaurants"
            onClick={handleMobileClick}
            className="flex items-center gap-3 border-b border-gray-100 px-6 py-4 transition hover:bg-orange-50 hover:text-orange-500"
          >
            <Store size={18} />
            Restaurants
          </Link>

          {/* Offers */}
          <Link
            to="/offers"
            onClick={handleMobileClick}
            className="flex items-center gap-3 border-b border-gray-100 px-6 py-4 transition hover:bg-orange-50 hover:text-orange-500"
          >
            <Tag size={18} />
            Offers
          </Link>

          {/* Search */}
          <Link
            to="/search"
            onClick={handleMobileClick}
            className="flex items-center gap-3 border-b border-gray-100 px-6 py-4 transition hover:bg-orange-50 hover:text-orange-500"
          >
            <Search size={18} />
            Search
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            onClick={handleMobileClick}
            className="flex items-center gap-3 border-b border-gray-100 px-6 py-4 transition hover:bg-orange-50 hover:text-orange-500"
          >
            <ShoppingCart size={18} />
            Cart

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              2
            </span>
          </Link>

          {/* Checkout */}
          <Link
            to="/checkout"
            onClick={handleMobileClick}
            className="flex items-center gap-3 border-b border-gray-100 px-6 py-4 transition hover:bg-orange-50 hover:text-orange-500"
          >
            <CreditCard size={18} />
            Checkout
          </Link>

          {/* Payment */}
          <Link
            to="/payment"
            onClick={handleMobileClick}
            className="flex items-center gap-3 border-b border-gray-100 px-6 py-4 transition hover:bg-orange-50 hover:text-orange-500"
          >
            <CreditCard size={18} />
            Payment
          </Link>

          {/* Order Success */}
          <Link
            to="/order-success"
            onClick={handleMobileClick}
            className="flex items-center gap-3 border-b border-gray-100 px-6 py-4 transition hover:bg-green-50 hover:text-green-600"
          >
            <CheckCircle2 size={18} />
            Order Success
          </Link>

          {/* Login */}
          <Link
            to="/login"
            onClick={handleMobileClick}
            className="flex items-center gap-3 border-b border-gray-100 px-6 py-4 transition hover:bg-orange-50 hover:text-orange-500"
          >
            <LogIn size={18} />
            Login
          </Link>

          {/* Profile */}
          <Link
            to="/profile"
            onClick={handleMobileClick}
            className="flex items-center gap-3 px-6 py-4 transition hover:bg-orange-50 hover:text-orange-500"
          >
            <User size={18} />
            Profile
          </Link>

        </div>
      )}
    </header>
  );
}

export default Navbar;