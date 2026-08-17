import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";

import { IoMdMail } from "react-icons/io";

import {
  ChefHat,
  ArrowRight,
  Clock,
  ShieldCheck,
  Truck,
} from "lucide-react";


// Scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


function Footer() {
  // Newsletter state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  // Subscribe function
  const handleSubscribe = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    // Empty email
    if (!trimmedEmail) {
      setMessage("Please enter your email address.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Success
    setMessage("Subscribed Successfully! 🎉");

    // Clear input
    setEmail("");
  };


  return (
    <footer className="bg-gray-950 text-white">

      {/* ================= Newsletter ================= */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="bg-orange-500 rounded-3xl px-6 md:px-10 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Newsletter Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Get delicious food updates 
              </h2>

              <p className="text-orange-100 mt-2">
                Subscribe and get the latest offers directly in your inbox.
              </p>
            </div>


            {/* Newsletter Form */}
            <div className="w-full lg:w-auto">

              <form
                onSubmit={handleSubscribe}
                className="flex w-full lg:w-auto bg-white rounded-full overflow-hidden p-1"
              >

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage("");
                  }}
                  className="flex-1 lg:w-72 px-5 py-3 text-gray-800 outline-none"
                />

                <button
                  type="submit"
                  className="bg-gray-950 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
                >
                  Subscribe
                </button>

              </form>


              {/* Message */}
              {message && (
                <p className="text-white text-sm mt-2 text-center lg:text-left font-medium">
                  {message}
                </p>
              )}

            </div>

          </div>

        </div>
      </div>


      {/* ================= Main Footer ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* ================= Brand ================= */}
          <div>

            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2"
            >
              <ChefHat
                size={40}
                className="text-orange-500"
              />

              <span className="text-3xl font-bold">
                Bite<span className="text-orange-500">Rush</span>
              </span>
            </Link>


            <p className="text-gray-400 mt-5 leading-7">
              Your favorite food, delivered fast and fresh.
              Discover the best restaurants and enjoy delicious
              meals right at your doorstep.
            </p>


            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <FaFacebookF />
              </a>


              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <FaInstagram />
              </a>


              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>


          {/* ================= Quick Links ================= */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>


            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-orange-500 transition flex items-center gap-2"
                >
                  <ArrowRight size={15} />
                  Home
                </Link>
              </li>


              <li>
                <Link
                  to="/restaurants"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-orange-500 transition flex items-center gap-2"
                >
                  <ArrowRight size={15} />
                  Restaurants
                </Link>
              </li>


              <li>
                <Link
                  to="/offers"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-orange-500 transition flex items-center gap-2"
                >
                  <ArrowRight size={15} />
                  Offers
                </Link>
              </li>


              <li>
                <Link
                  to="/search"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-orange-500 transition flex items-center gap-2"
                >
                  <ArrowRight size={15} />
                  Search Food
                </Link>
              </li>


              <li>
                <Link
                  to="/cart"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-orange-500 transition flex items-center gap-2"
                >
                  <ArrowRight size={15} />
                  My Cart
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= Services ================= */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Our Services
            </h3>


            <div className="space-y-5">

              {/* Fast Delivery */}
              <div className="flex items-start gap-3">

                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Truck
                    size={20}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Fast Delivery
                  </h4>

                  <p className="text-gray-500 text-sm mt-1">
                    Quick doorstep delivery
                  </p>
                </div>

              </div>


              {/* 24/7 Service */}
              <div className="flex items-start gap-3">

                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Clock
                    size={20}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <h4 className="font-semibold">
                    24/7 Service
                  </h4>

                  <p className="text-gray-500 text-sm mt-1">
                    Order anytime you want
                  </p>
                </div>

              </div>


              {/* Secure Payment */}
              <div className="flex items-start gap-3">

                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <ShieldCheck
                    size={20}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Secure Payment
                  </h4>

                  <p className="text-gray-500 text-sm mt-1">
                    Safe and secure checkout
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ================= Contact ================= */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact Us
            </h3>


            <div className="space-y-5">

              {/* Address */}
              <div className="flex gap-3">

                <FaMapMarkerAlt className="text-orange-500 mt-1" />

                <p className="text-gray-400">
                  Ahmedabad, Gujarat,
                  <br />
                  India
                </p>

              </div>


              {/* Phone */}
              <div className="flex gap-3 items-center">

                <FaPhoneAlt className="text-orange-500" />

                <a
                  href="tel:+919773167442"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  +91 9773167442
                </a>

              </div>


              {/* Email */}
              <div className="flex gap-3 items-center">

                <IoMdMail className="text-orange-500" />

                <a
                  href="mailto:shihorasohile@gmail.com"
                  className="text-gray-400 hover:text-orange-500 transition break-all"
                >
                  shihorasohile@gmail.com
                </a>

              </div>

            </div>


            {/* Account Links */}
            <div className="flex gap-4 mt-7">

              <Link
                to="/login"
                onClick={scrollToTop}
                className="text-sm text-gray-400 hover:text-orange-500 transition"
              >
                Login
              </Link>

              <span className="text-gray-700">
                |
              </span>

              <Link
                to="/profile"
                onClick={scrollToTop}
                className="text-sm text-gray-400 hover:text-orange-500 transition"
              >
                Profile
              </Link>

            </div>

          </div>

        </div>


        {/* ================= Bottom Footer ================= */}
        <div className="border-t border-gray-800 mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 FoodRush. All Rights Reserved.
          </p>


          <div className="flex gap-6 text-sm text-gray-500">

            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Privacy Policy
            </a>


            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}


export default Footer;