import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Smartphone,
  CreditCard,
  Building2,
  Banknote,
  CheckCircle,
  ArrowLeft,
  Lock,
} from "lucide-react";

function Paymentmethod() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [selectedBank, setSelectedBank] = useState("");

  const [error, setError] = useState("");

  // Demo Order Amount
  const orderAmount = 499;
  const deliveryFee = 40;
  const tax = 25;
  const totalAmount = orderAmount + deliveryFee + tax;

  // =========================
  // VALIDATION
  // =========================

  const validatePayment = () => {
    setError("");

    // UPI Validation
    if (paymentMethod === "upi") {
      if (!upiId.trim()) {
        setError("Please enter your UPI ID.");
        return false;
      }

      if (!upiId.includes("@")) {
        setError("Please enter a valid UPI ID. Example: name@upi");
        return false;
      }
    }

    // Card Validation
    if (paymentMethod === "card") {
      if (
        !cardNumber.trim() ||
        !cardName.trim() ||
        !expiry.trim() ||
        !cvv.trim()
      ) {
        setError("Please fill all card details.");
        return false;
      }

      if (cardNumber.length !== 16) {
        setError("Card number must contain 16 digits.");
        return false;
      }

      if (cvv.length !== 3) {
        setError("CVV must contain 3 digits.");
        return false;
      }

      if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        setError("Please enter expiry date in MM/YY format.");
        return false;
      }
    }

    // Net Banking Validation
    if (paymentMethod === "netbanking") {
      if (!selectedBank) {
        setError("Please select your bank.");
        return false;
      }
    }

    return true;
  };

  // =========================
  // PAYMENT
  // =========================

  const handlePayment = (e) => {
    e.preventDefault();

    if (!validatePayment()) {
      return;
    }

    setLoading(true);

    // Demo Payment Processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      localStorage.setItem(
        "lastOrder",
        JSON.stringify({
          amount: totalAmount,
          paymentMethod: paymentMethod,
          date: new Date().toLocaleString(),
        })
      );
    }, 2000);
  };

  // =========================
  // PAYMENT METHOD NAME
  // =========================

  const getPaymentMethodName = () => {
    if (paymentMethod === "upi") {
      return "UPI";
    }

    if (paymentMethod === "card") {
      return "Credit / Debit Card";
    }

    if (paymentMethod === "netbanking") {
      return "Net Banking";
    }

    return "Cash on Delivery";
  };

  // =========================
  // SUCCESS SCREEN
  // =========================

  if (success) {
    return (
      <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">

        <div className="w-full max-w-lg rounded-3xl bg-white p-8 sm:p-10 text-center shadow-xl">

          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <CheckCircle
                size={70}
                className="text-green-500"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900">
            Payment Successful!
          </h1>

          <p className="mt-3 text-gray-500">
            Your order has been placed successfully.
          </p>

          {/* Success Details */}
          <div className="mt-7 rounded-2xl bg-gray-50 p-5 text-left">

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="text-gray-500">
                Order Amount
              </span>

              <strong className="text-lg text-gray-900">
                ₹{totalAmount}
              </strong>
            </div>

            <div className="flex items-center justify-between pt-4">
              <span className="text-gray-500">
                Payment Method
              </span>

              <strong className="text-gray-900">
                {getPaymentMethodName()}
              </strong>
            </div>

          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-7 w-full rounded-xl bg-orange-500 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-orange-600 active:scale-[0.98]"
          >
            Continue Shopping
          </button>

        </div>
      </div>
    );
  }

  // =========================
  // MAIN PAYMENT PAGE
  // =========================

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="flex w-fit items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            <ArrowLeft size={20} />
            Back to Cart
          </button>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Secure Payment
          </h1>

          {/* Secure */}
          <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
            <Lock size={18} />
            Secure Checkout
          </div>

        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* ================= LEFT PAYMENT BOX ================= */}

          <div className="rounded-2xl bg-white p-5 shadow-lg sm:p-7 lg:col-span-2">

            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Select Payment Method
            </h2>

            {/* ================= PAYMENT OPTIONS ================= */}

            <div className="grid gap-3">

              {/* UPI */}
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod("upi");
                  setError("");
                }}
                className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                  paymentMethod === "upi"
                    ? "border-2 border-orange-500 bg-orange-50"
                    : "border-gray-200 bg-white hover:border-orange-300"
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <Smartphone
                    size={23}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    UPI
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Google Pay, PhonePe, Paytm
                  </p>
                </div>
              </button>

              {/* CARD */}
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod("card");
                  setError("");
                }}
                className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                  paymentMethod === "card"
                    ? "border-2 border-orange-500 bg-orange-50"
                    : "border-gray-200 bg-white hover:border-orange-300"
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <CreditCard
                    size={23}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Credit / Debit Card
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Visa, Mastercard, RuPay
                  </p>
                </div>
              </button>

              {/* NET BANKING */}
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod("netbanking");
                  setError("");
                }}
                className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                  paymentMethod === "netbanking"
                    ? "border-2 border-orange-500 bg-orange-50"
                    : "border-gray-200 bg-white hover:border-orange-300"
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <Building2
                    size={23}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Net Banking
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    All major banks supported
                  </p>
                </div>
              </button>

              {/* COD */}
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod("cod");
                  setError("");
                }}
                className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                  paymentMethod === "cod"
                    ? "border-2 border-orange-500 bg-orange-50"
                    : "border-gray-200 bg-white hover:border-orange-300"
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <Banknote
                    size={23}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Cash on Delivery
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Pay when your order arrives
                  </p>
                </div>
              </button>

            </div>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handlePayment}
              className="mt-6"
            >

              {/* ================= UPI ================= */}

              {paymentMethod === "upi" && (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">

                  <label className="block text-sm font-semibold text-gray-700">
                    UPI ID
                  </label>

                  <input
                    type="text"
                    placeholder="example@upi"
                    value={upiId}
                    onChange={(e) => {
                      setUpiId(e.target.value);
                      setError("");
                    }}
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Example: 9876543210@ybl
                  </p>

                </div>
              )}

              {/* ================= CARD ================= */}

              {paymentMethod === "card" && (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">

                  {/* Card Number */}
                  <label className="block text-sm font-semibold text-gray-700">
                    Card Number
                  </label>

                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="1234567890123456"
                    maxLength="16"
                    value={cardNumber}
                    onChange={(e) => {
                      setCardNumber(
                        e.target.value.replace(/\D/g, "")
                      );
                      setError("");
                    }}
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                  {/* Card Holder */}
                  <label className="mt-5 block text-sm font-semibold text-gray-700">
                    Card Holder Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter card holder name"
                    value={cardName}
                    onChange={(e) => {
                      setCardName(e.target.value);
                      setError("");
                    }}
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                  {/* Expiry + CVV */}
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>
                      <label className="block text-sm font-semibold text-gray-700">
                        Expiry Date
                      </label>

                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength="5"
                        value={expiry}
                        onChange={(e) => {
                          let value = e.target.value.replace(
                            /\D/g,
                            ""
                          );

                          if (value.length > 2) {
                            value =
                              value.slice(0, 2) +
                              "/" +
                              value.slice(2, 4);
                          }

                          setExpiry(value);
                          setError("");
                        }}
                        className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700">
                        CVV
                      </label>

                      <input
                        type="password"
                        inputMode="numeric"
                        placeholder="123"
                        maxLength="3"
                        value={cvv}
                        onChange={(e) => {
                          setCvv(
                            e.target.value.replace(/\D/g, "")
                          );
                          setError("");
                        }}
                        className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                      />
                    </div>

                  </div>

                </div>
              )}

              {/* ================= NET BANKING ================= */}

              {paymentMethod === "netbanking" && (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">

                  <label className="block text-sm font-semibold text-gray-700">
                    Select Bank
                  </label>

                  <select
                    value={selectedBank}
                    onChange={(e) => {
                      setSelectedBank(e.target.value);
                      setError("");
                    }}
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  >
                    <option value="">
                      Select your bank
                    </option>

                    <option value="SBI">
                      State Bank of India
                    </option>

                    <option value="HDFC">
                      HDFC Bank
                    </option>

                    <option value="ICICI">
                      ICICI Bank
                    </option>

                    <option value="AXIS">
                      Axis Bank
                    </option>

                    <option value="KOTAK">
                      Kotak Mahindra Bank
                    </option>

                    <option value="BOB">
                      Bank of Baroda
                    </option>
                  </select>

                </div>
              )}

              {/* ================= COD ================= */}

              {paymentMethod === "cod" && (
                <div className="flex items-center gap-4 rounded-xl border border-green-200 bg-green-50 p-5">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Banknote
                      size={30}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Cash on Delivery
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Pay ₹{totalAmount} in cash when your
                      order is delivered.
                    </p>
                  </div>

                </div>
              )}

              {/* ================= ERROR ================= */}

              {error && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              {/* ================= PAY BUTTON ================= */}

              <button
                type="submit"
                disabled={loading}
                className={`mt-6 flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-base font-bold text-white transition ${
                  loading
                    ? "cursor-not-allowed bg-orange-300"
                    : "bg-orange-500 hover:bg-orange-600 active:scale-[0.99]"
                }`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    Processing Payment...
                  </span>
                ) : paymentMethod === "cod" ? (
                  `Place Order • ₹${totalAmount}`
                ) : (
                  `Pay ₹${totalAmount}`
                )}
              </button>

            </form>

          </div>

          {/* ================= RIGHT ORDER SUMMARY ================= */}

          <div className="h-fit rounded-2xl bg-white p-5 shadow-lg sm:p-7">

            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            {/* Food */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <span className="text-sm text-gray-500">
                Food Items
              </span>

              <strong className="text-gray-900">
                ₹{orderAmount}
              </strong>
            </div>

            {/* Delivery */}
            <div className="flex items-center justify-between border-b border-gray-100 py-4">
              <span className="text-sm text-gray-500">
                Delivery Fee
              </span>

              <strong className="text-gray-900">
                ₹{deliveryFee}
              </strong>
            </div>

            {/* Tax */}
            <div className="flex items-center justify-between border-b border-gray-100 py-4">
              <span className="text-sm text-gray-500">
                Taxes & Charges
              </span>

              <strong className="text-gray-900">
                ₹{tax}
              </strong>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-5">
              <span className="text-lg font-bold text-gray-900">
                Total Amount
              </span>

              <strong className="text-2xl font-bold text-orange-500">
                ₹{totalAmount}
              </strong>
            </div>

            {/* Secure Box */}
            <div className="mt-6 flex gap-3 rounded-xl bg-green-50 p-4">

              <Lock
                size={22}
                className="mt-0.5 shrink-0 text-green-600"
              />

              <div>
                <strong className="text-sm text-gray-900">
                  100% Secure Payment
                </strong>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Your payment information is protected
                  with secure encryption.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Paymentmethod;