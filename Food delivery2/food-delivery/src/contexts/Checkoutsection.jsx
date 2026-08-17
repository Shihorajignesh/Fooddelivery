import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Phone,
  User,
  CreditCard,
  Smartphone,
  Banknote,
  ShoppingBag,
  ArrowLeft,
  CheckCircle,
  Tag,
} from "lucide-react";

function Checkoutsection() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  // Demo cart items
  const cartItems = [
    {
      id: 1,
      name: "Cheese Burger",
      quantity: 2,
      price: 199,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      quantity: 1,
      price: 299,
    },
    {
      id: 3,
      name: "Cold Coffee",
      quantity: 2,
      price: 99,
    },
  ];

  // Price calculation
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal >= 499 ? 0 : 40;

  const tax = Math.round(subtotal * 0.05);

  const total = Math.max(
    0,
    subtotal + deliveryFee + tax - discount
  );

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Apply coupon
  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (code === "BITE50") {
      setDiscount(50);
      setCouponMessage("🎉 Coupon applied! ₹50 discount added.");
    } else {
      setDiscount(0);
      setCouponMessage("❌ Invalid coupon code.");
    }
  };

  // Place order
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    const pincodeRegex = /^[0-9]{6}$/;

    if (
      !address.name.trim() ||
      !address.phone.trim() ||
      !address.address.trim() ||
      !address.city.trim() ||
      !address.pincode.trim()
    ) {
      alert("Please fill all delivery details.");
      return;
    }

    if (!phoneRegex.test(address.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!pincodeRegex.test(address.pincode)) {
      alert("Please enter a valid 6-digit pincode.");
      return;
    }

    // Order success page
    navigate("/order-success");
  };

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow hover:bg-orange-50"
          >
            <ArrowLeft size={20} />
          </button>

          <div>
            <h1 className="text-3xl font-black text-gray-900">
              Checkout
            </h1>

            <p className="mt-1 text-gray-500">
              Complete your order and enjoy delicious food 🍔
            </p>
          </div>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid gap-8 lg:grid-cols-3">

            {/* ================= LEFT SIDE ================= */}
            <div className="space-y-6 lg:col-span-2">

              {/* Delivery Address */}
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Delivery Address
                    </h2>

                    <p className="text-sm text-gray-500">
                      Where should we deliver your food?
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                  {/* Full Name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name
                    </label>

                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        name="name"
                        value={address.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={address.phone}
                        onChange={handleChange}
                        maxLength={10}
                        inputMode="numeric"
                        placeholder="10-digit mobile number"
                        className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Complete Address
                    </label>

                    <textarea
                      name="address"
                      value={address.address}
                      onChange={handleChange}
                      rows={3}
                      placeholder="House No, Street, Area..."
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={address.city}
                      onChange={handleChange}
                      placeholder="Ahmedabad"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  {/* Pincode */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Pincode
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      value={address.pincode}
                      onChange={handleChange}
                      maxLength={6}
                      inputMode="numeric"
                      placeholder="380001"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Payment Method
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Choose your preferred payment option
                  </p>
                </div>

                <div className="space-y-3">

                  {/* UPI */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("upi")}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                      paymentMethod === "upi"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                      <Smartphone size={23} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">
                        UPI
                      </h3>

                      <p className="text-sm text-gray-500">
                        Google Pay, PhonePe, Paytm
                      </p>
                    </div>

                    {paymentMethod === "upi" && (
                      <CheckCircle
                        size={22}
                        className="text-orange-500"
                      />
                    )}
                  </button>

                  {/* Card */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                      paymentMethod === "card"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <CreditCard size={23} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">
                        Credit / Debit Card
                      </h3>

                      <p className="text-sm text-gray-500">
                        Visa, Mastercard, RuPay
                      </p>
                    </div>

                    {paymentMethod === "card" && (
                      <CheckCircle
                        size={22}
                        className="text-orange-500"
                      />
                    )}
                  </button>

                  {/* COD */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                      paymentMethod === "cod"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <Banknote size={23} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">
                        Cash on Delivery
                      </h3>

                      <p className="text-sm text-gray-500">
                        Pay when your order arrives
                      </p>
                    </div>

                    {paymentMethod === "cod" && (
                      <CheckCircle
                        size={22}
                        className="text-orange-500"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-sm">

                {/* Order Summary */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                    <ShoppingBag size={22} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Order Summary
                    </h2>

                    <p className="text-sm text-gray-500">
                      {cartItems.length} items
                    </p>
                  </div>
                </div>

                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          ₹{item.price} x {item.quantity}
                        </p>
                      </div>

                      <p className="font-bold text-gray-900">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Coupon */}
                <div className="my-6 border-y border-gray-100 py-5">
                  <label className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                    <Tag
                      size={17}
                      className="text-orange-500"
                    />
                    Coupon Code
                  </label>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      placeholder="BITE50"
                      className="min-w-0 flex-1 rounded-xl border border-gray-200 px-3 py-3 text-sm uppercase outline-none focus:border-orange-500"
                    />

                    <button
                      type="button"
                      onClick={applyCoupon}
                      className="rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white hover:bg-orange-600"
                    >
                      Apply
                    </button>
                  </div>

                  {couponMessage && (
                    <p
                      className={`mt-2 text-xs font-medium ${
                        discount > 0
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {couponMessage}
                    </p>
                  )}
                </div>

                {/* Price Details */}
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>

                    {deliveryFee === 0 ? (
                      <span className="font-semibold text-green-600">
                        FREE
                      </span>
                    ) : (
                      <span>₹{deliveryFee}</span>
                    )}
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Tax (5%)</span>
                    <span>₹{tax}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}

                  <div className="my-4 border-t border-dashed border-gray-200" />

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>

                    <span className="text-2xl font-black text-orange-500">
                      ₹{total}
                    </span>
                  </div>
                </div>

                {/* Place Order */}
                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-orange-500 to-red-500 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <CheckCircle size={21} />
                  Place Order • ₹{total}
                </button>

                <p className="mt-4 text-center text-xs text-gray-400">
                  🔒 Your payment information is secure
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Checkoutsection;