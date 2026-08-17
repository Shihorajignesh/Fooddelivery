import React, { useMemo, useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 299,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: 199,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 3,
    name: "Veg Noodles",
    price: 249,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500",
  },
  {
    id: 4,
    name: "Paneer Pizza",
    price: 349,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500",
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  // ================= INCREASE =================

  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  //  DECREASE 

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  //  DELETE 

  const deleteItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  //CLEAR CART 

  const clearCart = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to clear your cart?"
    );

    if (confirmDelete) {
      setCartItems([]);
    }
  };

  // SEARCH + SORT 

  const filteredItems = useMemo(() => {
    let result = cartItems.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (sort === "name-asc") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sort === "name-desc") {
      result.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "quantity-high") {
      result.sort((a, b) => b.quantity - a.quantity);
    }

    return result;
  }, [cartItems, search, sort]);

  // SUBTOTAL 

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // DELIVERY 

  const delivery =
    subtotal === 0 || subtotal >= 500 ? 0 : 40;

  // GST 

  const gst = Math.round(subtotal * 0.05);

  //  TOTAL

  const total = subtotal + delivery + gst;

  //  CHECKOUT 

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }

    alert(
      `🎉 Order placed successfully!\n\nTotal Amount: ₹${total}`
    );
  };

  // BROWSE FOOD 

  const browseFood = () => {
    alert("🍕 Opening Food Menu...");
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-orange-50 via-white to-red-50 px-4 py-10 sm:px-6 lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/*  HEADER */}

        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[4px] text-orange-500">
              Food Delivery
            </p>

            <h1 className="text-4xl font-black text-gray-900 sm:text-5xl">

              My{" "}

              <span className="bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Cart
              </span>{" "}

              🛒

            </h1>

            <p className="mt-2 text-gray-500">
              Search and sort your favorite food items.
            </p>
          </div>

          <div className="rounded-2xl bg-white px-5 py-3 font-bold text-gray-700 shadow-xl shadow-orange-100">
            🛒 {cartItems.length} Items
          </div>

        </div>

        {/*  EMPTY CART  */}

        {cartItems.length === 0 ? (

          <div className="mx-auto max-w-2xl rounded-[35px] border border-orange-100 bg-white p-10 text-center shadow-2xl shadow-orange-100 sm:p-16">

            <div className="mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-3xl bg-linear-to-br from-orange-500 to-red-500 text-6xl shadow-2xl shadow-orange-200">
              🛒
            </div>

            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">

              Your{" "}

              <span className="text-orange-500">
                Cart
              </span>{" "}

              is Empty

            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Add some delicious food to your cart.
            </p>

            <button
              onClick={browseFood}
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-orange-500 to-red-500 px-8 py-4 font-black text-white shadow-xl shadow-orange-200 transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              🍕 Browse Food
              <span className="text-xl transition group-hover:translate-x-2">
                →
              </span>
            </button>

          </div>

        ) : (

          <>
            {/*  SEARCH + SORT  */}

            <div className="mb-7 rounded-3xl border border-orange-100 bg-white/90 p-4 shadow-xl shadow-orange-100/50 backdrop-blur">

              <div className="flex flex-col gap-4 lg:flex-row">

                {/* SEARCH */}

                <div className="relative flex-1">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                    🔍
                  </span>

                  <input
                    type="text"
                    placeholder="Search food in your cart..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-12 text-sm font-medium outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />

                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-red-500"
                    >
                      ✕
                    </button>
                  )}

                </div>

                {/* SORT */}

                <div className="flex items-center gap-3">

                  <span className="hidden text-sm font-bold text-gray-500 sm:block">
                    Sort:
                  </span>

                  <select
                    value={sort}
                    onChange={(e) =>
                      setSort(e.target.value)
                    }
                    className="w-full cursor-pointer rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-bold text-gray-700 outline-none transition hover:border-orange-300 focus:border-orange-400 lg:w-64"
                  >
                    <option value="default">
                      Default
                    </option>

                    <option value="name-asc">
                      Name A → Z
                    </option>

                    <option value="name-desc">
                      Name Z → A
                    </option>

                    <option value="price-low">
                      Price Low → High
                    </option>

                    <option value="price-high">
                      Price High → Low
                    </option>

                    <option value="quantity-high">
                      Most Quantity
                    </option>

                  </select>

                </div>

                {/* CLEAR CART */}

                <button
                  onClick={clearCart}
                  className="rounded-2xl bg-red-50 px-5 py-4 font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
                >
                  🗑️ Clear Cart
                </button>

              </div>

            </div>

            {/* ================= MAIN ================= */}

            <div className="grid gap-7 lg:grid-cols-[1.6fr_0.8fr]">

              {/* ================= CART ITEMS ================= */}

              <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl shadow-gray-200/70 sm:p-6">

                <div className="mb-6 flex items-center justify-between">

                  <div>
                    <h2 className="text-2xl font-black text-gray-900">
                      Your Items
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      {filteredItems.length} items found
                    </p>
                  </div>

                  <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-black text-orange-500">
                    Fresh Food 🍕
                  </span>

                </div>

                {/* ITEMS */}

                <div className="space-y-4">

                  {filteredItems.length === 0 ? (

                    <div className="rounded-3xl bg-gray-50 px-5 py-16 text-center">

                      <div className="mb-4 text-6xl">
                        🔍
                      </div>

                      <h3 className="text-xl font-black text-gray-800">
                        No Food Found
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        Try another food name.
                      </p>

                      <button
                        onClick={() => setSearch("")}
                        className="mt-5 rounded-xl bg-orange-500 px-5 py-3 font-bold text-white transition hover:bg-orange-600"
                      >
                        Show All Food
                      </button>

                    </div>

                  ) : (

                    filteredItems.map((item) => (

                      <div
                        key={item.id}
                        className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100 sm:flex-row sm:items-center"
                      >

                        {/* IMAGE */}

                        <div className="h-24 w-full overflow-hidden rounded-2xl sm:h-24 sm:w-24">

                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                          />

                        </div>

                        {/* DETAILS */}

                        <div className="flex-1">

                          <h3 className="text-lg font-black text-gray-900">
                            {item.name}
                          </h3>

                          <p className="mt-1 text-sm text-gray-400">
                            Fresh & Delicious
                          </p>

                          <p className="mt-2 font-black text-orange-500">
                            ₹{item.price}
                          </p>

                        </div>

                        {/* CONTROLS */}

                        <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">

                          {/* QUANTITY */}

                          <div className="flex items-center gap-3 rounded-xl bg-gray-100 p-1">

                            <button
                              onClick={() =>
                                decreaseQty(item.id)
                              }
                              className="h-9 w-9 rounded-lg bg-white font-black text-orange-500 shadow transition hover:bg-orange-500 hover:text-white"
                            >
                              −
                            </button>

                            <span className="w-5 text-center font-black">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQty(item.id)
                              }
                              className="h-9 w-9 rounded-lg bg-white font-black text-orange-500 shadow transition hover:bg-orange-500 hover:text-white"
                            >
                              +
                            </button>

                          </div>

                          {/* TOTAL + DELETE */}

                          <div className="flex items-center gap-3">

                            <strong className="text-lg text-gray-900">
                              ₹{item.price * item.quantity}
                            </strong>

                            <button
                              onClick={() =>
                                deleteItem(item.id)
                              }
                              className="h-9 w-9 rounded-xl bg-red-50 text-red-500 transition hover:scale-110 hover:bg-red-500 hover:text-white"
                              title="Delete item"
                            >
                              🗑️
                            </button>

                          </div>

                        </div>

                      </div>

                    ))

                  )}

                </div>

              </div>

              {/* ================= SUMMARY ================= */}

              <div className="lg:sticky lg:top-6 lg:h-fit">

                <div className="rounded-3xl bg-gray-950 p-6 text-white shadow-2xl shadow-gray-300 sm:p-7">

                  <p className="text-xs font-black uppercase tracking-[3px] text-orange-400">
                    Checkout
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    Order Summary
                  </h2>

                  <div className="mt-7 space-y-5">

                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>

                      <strong className="text-white">
                        ₹{subtotal}
                      </strong>
                    </div>

                    <div className="flex justify-between text-gray-400">

                      <span>
                        Delivery
                      </span>

                      <strong
                        className={
                          delivery === 0
                            ? "text-green-400"
                            : "text-white"
                        }
                      >
                        {delivery === 0
                          ? "FREE"
                          : `₹${delivery}`}
                      </strong>

                    </div>

                    <div className="flex justify-between text-gray-400">

                      <span>
                        GST 5%
                      </span>

                      <strong className="text-white">
                        ₹{gst}
                      </strong>

                    </div>

                  </div>

                  <div className="my-6 border-t border-white/10"></div>

                  <div className="flex items-end justify-between">

                    <span className="text-gray-400">
                      Total
                    </span>

                    <strong className="text-4xl font-black text-orange-400">
                      ₹{total}
                    </strong>

                  </div>

                  {/* CHECKOUT BUTTON */}

                  <button
                    onClick={handleCheckout}
                    className="group mt-7 flex w-full items-center justify-between rounded-2xl bg-linear-to-r from-orange-500 to-red-500 px-6 py-4 font-black shadow-xl shadow-orange-900/30 transition hover:-translate-y-1 hover:shadow-orange-900/50"
                  >

                    <span>
                      Checkout
                    </span>

                    <span className="text-xl transition group-hover:translate-x-2">
                      →
                    </span>

                  </button>

                  {/* CONTINUE */}

                  <button
                    onClick={browseFood}
                    className="mt-3 w-full rounded-2xl border border-white/10 px-6 py-3 font-bold text-gray-400 transition hover:border-orange-500 hover:text-orange-400"
                  >
                    ← Continue Shopping
                  </button>

                  <p className="mt-5 text-center text-xs text-gray-500">
                    🔒 Secure & Safe Payment
                  </p>

                </div>

              </div>

            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default Cart;