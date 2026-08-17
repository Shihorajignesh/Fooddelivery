import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CheckCircle2,
  PackageCheck,
  Clock3,
  MapPin,
  Home,
  ArrowRight,
  Copy,
  Check,
  Bike,
  UtensilsCrossed,
} from "lucide-react";

function Ordersuccess() {
  const location = useLocation();

  const [copied, setCopied] = useState(false);

  // Payment pageમાંથી data આવે તો use થશે
  const paymentData = location.state || {};

  const [orderNumber] = useState(
    paymentData.orderNumber ||
      `FR${Math.floor(100000 + Math.random() * 900000)}`
  );

  const totalAmount = paymentData.totalAmount || 499;
  const estimatedTime = paymentData.estimatedTime || "25 - 35 mins";

  const orderItems = paymentData.items || [
    {
      name: "Cheese Burger",
      quantity: 2,
      price: 199,
    },
    {
      name: "French Fries",
      quantity: 1,
      price: 99,
    },
    {
      name: "Cold Drink",
      quantity: 1,
      price: 49,
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const copyOrderNumber = async () => {
    try {
      await navigator.clipboard.writeText(orderNumber);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log("Copy failed");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-green-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* ================= SUCCESS HERO ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-green-100 bg-white p-6 text-center shadow-xl sm:p-10">

          {/* Background Glow */}
          <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-green-200/40 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-orange-200/40 blur-3xl" />

          <div className="relative z-10">

            {/* Success Icon */}
            <div className="mx-auto mb-6 flex h-24 w-30 items-center justify-center rounded-full bg-green-100 shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-xl shadow-green-500/30">
                <CheckCircle2
                  size={42}
                  className="animate-pulse text-white"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Order Successful! 
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Your delicious food is being prepared. Sit back, relax and get
              ready for a tasty experience!
            </p>

            {/* Order Number */}
            <div className="mx-auto mt-7 flex max-w-md items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Order Number
                </p>

                <p className="mt-1 text-lg font-bold text-gray-900">
                  #{orderNumber}
                </p>
              </div>

              <button
                onClick={copyOrderNumber}
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100"
              >
                {copied ? (
                  <>
                    <Check size={17} className="text-green-500" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={17} />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Delivery Time */}
            <div className="mx-auto mt-5 flex max-w-md items-center justify-center gap-3 rounded-2xl bg-orange-50 px-5 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white">
                <Clock3 size={23} />
              </div>

              <div className="text-left">
                <p className="text-xs font-medium text-gray-500">
                  Estimated Delivery
                </p>

                <p className="text-lg font-bold text-orange-600">
                  {estimatedTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ORDER TRACKING ================= */}
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-lg sm:p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Track Your Order
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Follow your order from restaurant to your doorstep.
            </p>
          </div>

          <div className="relative">

            {/* Desktop Line */}
            <div className="absolute left-0 right-0 top-6 hidden h-1 bg-gray-200 sm:block" />

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-4 sm:gap-3">

              {/* Step 1 */}
              <div className="relative z-10 flex items-center gap-4 sm:flex-col sm:text-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30">
                  <CheckCircle2 size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Order Confirmed
                  </h3>
                  <p className="text-xs text-gray-500">
                    Your order is confirmed
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex items-center gap-4 sm:flex-col sm:text-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/30">
                  <UtensilsCrossed size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Preparing
                  </h3>
                  <p className="text-xs text-gray-500">
                    Restaurant is preparing
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex items-center gap-4 sm:flex-col sm:text-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                  <Bike size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-700">
                    On the Way
                  </h3>
                  <p className="text-xs text-gray-500">
                    Delivery partner picks up
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex items-center gap-4 sm:flex-col sm:text-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                  <MapPin size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-700">
                    Delivered
                  </h3>
                  <p className="text-xs text-gray-500">
                    Enjoy your meal!
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Items */}
          <div className="rounded-3xl bg-white p-6 shadow-lg lg:col-span-2">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Order Summary
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your delicious items
                </p>
              </div>

              <div className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                {orderItems.length} Items
              </div>
            </div>

            <div className="space-y-3">
              {orderItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:border-orange-200 hover:bg-orange-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100">
                      <PackageCheck
                        size={21}
                        className="text-orange-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <p className="font-bold text-gray-900">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Payment */}
          <div className="rounded-3xl bg-gray-900 p-6 text-white shadow-xl">

            <h2 className="text-xl font-bold">
              Payment Details
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between text-sm text-gray-300">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-300">
                <span>Delivery Fee</span>
                <span className="text-green-400">FREE</span>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">
                    Total Paid
                  </span>

                  <span className="text-2xl font-extrabold text-orange-400">
                    ₹{totalAmount}
                  </span>
                </div>
              </div>

            </div>

            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <p className="text-xs text-gray-400">
                Payment Status
              </p>

              <p className="mt-1 flex items-center gap-2 font-bold text-green-400">
                <CheckCircle2 size={18} />
                Payment Successful
              </p>
            </div>

          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            to="/track-order"
            state={{
              orderNumber,
              estimatedTime,
              items: orderItems,
              totalAmount,
            }}
            className="group flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 font-bold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-orange-600"
          >
            <Bike size={21} />

            Track Order

            <ArrowRight
              size={19}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 py-4 font-bold text-gray-700 shadow-md transition hover:-translate-y-1 hover:border-orange-300 hover:text-orange-500"
          >
            <Home size={21} />
            Back to Home
          </Link>

        </div>

        {/* ================= FOOTER MESSAGE ================= */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Thank you for ordering with{" "}
            <span className="font-bold text-orange-500">
              BiteRush
            </span>{" "}
            
          </p>

          <p className="mt-1 text-xs text-gray-600">
            Delicious food • Fast delivery • Happy moments
          </p>
        </div>

      </div>
    </div>
  );
}

export default Ordersuccess;