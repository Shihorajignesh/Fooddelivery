import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bike,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MapPin,
  Package,
  RefreshCw,
  ShoppingBag,
  Store,
  XCircle,
  CircleDot,
} from "lucide-react";

function Orders() {
  const [activeTab, setActiveTab] = useState("current");
  const [orders, setOrders] = useState([
    {
      id: "BR102458",
      restaurant: "Burger King",
      restaurantLocation: "Ahmedabad",
      date: "13 Aug 2026",
      time: "03:10 PM",
      items: [
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
      ],
      amount: 497,
      status: "Preparing",
      statusType: "current",
    },
    {
      id: "BR102457",
      restaurant: "Pizza Hut",
      restaurantLocation: "Ahmedabad",
      date: "12 Aug 2026",
      time: "08:25 PM",
      items: [
        {
          name: "Farmhouse Pizza",
          quantity: 1,
          price: 349,
        },
        {
          name: "Garlic Bread",
          quantity: 1,
          price: 129,
        },
      ],
      amount: 478,
      status: "Out For Delivery",
      statusType: "current",
    },
    {
      id: "BR102451",
      restaurant: "Domino's Pizza",
      restaurantLocation: "Ahmedabad",
      date: "10 Aug 2026",
      time: "07:45 PM",
      items: [
        {
          name: "Margherita Pizza",
          quantity: 1,
          price: 299,
        },
        {
          name: "Coke",
          quantity: 2,
          price: 80,
        },
      ],
      amount: 379,
      status: "Delivered",
      statusType: "completed",
    },
    {
      id: "BR102449",
      restaurant: "Subway",
      restaurantLocation: "Ahmedabad",
      date: "08 Aug 2026",
      time: "01:30 PM",
      items: [
        {
          name: "Veggie Sandwich",
          quantity: 1,
          price: 189,
        },
        {
          name: "Cold Drink",
          quantity: 1,
          price: 49,
        },
      ],
      amount: 238,
      status: "Delivered",
      statusType: "completed",
    },
    {
      id: "BR102441",
      restaurant: "La Pino's Pizza",
      restaurantLocation: "Ahmedabad",
      date: "05 Aug 2026",
      time: "09:10 PM",
      items: [
        {
          name: "Cheese Burst Pizza",
          quantity: 1,
          price: 399,
        },
      ],
      amount: 449,
      status: "Cancelled",
      statusType: "cancelled",
    },
  ]);

  const tabs = [
    {
      id: "current",
      label: "Current Orders",
      icon: Clock3,
    },
    {
      id: "completed",
      label: "Completed Orders",
      icon: CheckCircle2,
    },
    {
      id: "cancelled",
      label: "Cancelled Orders",
      icon: XCircle,
    },
  ];

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      if (activeTab === "current") {
        return order.statusType === "current";
      }

      if (activeTab === "completed") {
        return order.statusType === "completed";
      }

      if (activeTab === "cancelled") {
        return order.statusType === "cancelled";
      }

      return true;
    });
  }, [orders, activeTab]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Preparing":
        return {
          bg: "bg-orange-100",
          text: "text-orange-600",
          icon: <Clock3 size={16} />,
        };

      case "Out For Delivery":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          icon: <Bike size={16} />,
        };

      case "Delivered":
        return {
          bg: "bg-green-100",
          text: "text-green-600",
          icon: <CheckCircle2 size={16} />,
        };

      case "Cancelled":
        return {
          bg: "bg-red-100",
          text: "text-red-600",
          icon: <XCircle size={16} />,
        };

      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-600",
          icon: <CircleDot size={16} />,
        };
    }
  };

  const cancelOrder = (orderId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!confirmCancel) return;

    setOrders((previousOrders) =>
      previousOrders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: "Cancelled",
              statusType: "cancelled",
            }
          : order
      )
    );

    setActiveTab("cancelled");
  };

  const reorder = (order) => {
    alert(
      `Reordering from ${order.restaurant}.\n\n${order.items
        .map((item) => `${item.name} x${item.quantity}`)
        .join("\n")}`
    );
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-red-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <section className="mb-8 overflow-hidden rounded-3xl bg-linear-to-r from-orange-500 via-orange-600 to-red-500 p-6 text-white shadow-xl sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <ShoppingBag size={24} />
                </div>

                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                  BiteRush Orders
                </span>
              </div>

              <h1 className="text-3xl font-extrabold sm:text-4xl">
                My Orders
              </h1>

              <p className="mt-2 max-w-xl text-sm text-orange-100 sm:text-base">
                Track your current orders and check your complete food
                ordering history.
              </p>
            </div>

            <div className="hidden h-24 w-24 items-center justify-center rounded-full bg-white/10 sm:flex">
              <Package size={48} />
            </div>

          </div>
        </section>

        {/* =====================================================
            TABS
        ====================================================== */}
        <section className="mb-7 rounded-2xl border border-gray-100 bg-white p-2 shadow-md">

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">

            {tabs.map((tab) => {
              const Icon = tab.icon;

              const count = orders.filter((order) => {
                if (tab.id === "current") {
                  return order.statusType === "current";
                }

                if (tab.id === "completed") {
                  return order.statusType === "completed";
                }

                return order.statusType === "cancelled";
              }).length;

              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${
                    isActive
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                >
                  <Icon size={18} />

                  {tab.label}

                  <span
                    className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs ${
                      isActive
                        ? "bg-white text-orange-500"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}

          </div>
        </section>

        {/* =====================================================
            ORDER LIST
        ====================================================== */}
        <section className="space-y-6">

          {filteredOrders.length === 0 ? (
            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-lg">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <ShoppingBag
                  size={35}
                  className="text-orange-500"
                />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                No Orders Found
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                You don't have any orders in this section yet.
              </p>

              <Link
                to="/restaurants"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                Order Food
                <ChevronRight size={18} />
              </Link>

            </div>
          ) : (
            filteredOrders.map((order) => {
              const statusStyle = getStatusStyle(order.status);

              return (
                <article
                  key={order.id}
                  className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* =================================================
                      ORDER TOP
                  ================================================== */}
                  <div className="border-b border-gray-100 p-5 sm:p-6">

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                      {/* Restaurant */}
                      <div className="flex items-start gap-4">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-100">
                          <Store
                            size={27}
                            className="text-orange-500"
                          />
                        </div>

                        <div>
                          <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                            {order.restaurant}
                          </h2>

                          <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                            <MapPin size={14} />
                            {order.restaurantLocation}
                          </div>

                          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <CalendarDays size={13} />
                              {order.date}
                            </span>

                            <span>•</span>

                            <span>{order.time}</span>
                          </div>
                        </div>

                      </div>

                      {/* Status */}
                      <div
                        className={`flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${statusStyle.bg} ${statusStyle.text}`}
                      >
                        {statusStyle.icon}
                        {order.status}
                      </div>

                    </div>

                    {/* Order Number */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3">

                      <div>
                        <span className="text-xs text-gray-400">
                          ORDER ID
                        </span>

                        <p className="font-bold text-gray-800">
                          #{order.id}
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-gray-400">
                          TOTAL AMOUNT
                        </span>

                        <p className="text-lg font-extrabold text-gray-900">
                          ₹{order.amount}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* 
                      ITEMS
                   */}
                  <div className="p-5 sm:p-6">

                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">
                        Order Items
                      </h3>

                      <span className="text-xs font-medium text-gray-400">
                        {order.items.length} items
                      </span>
                    </div>

                    <div className="space-y-3">

                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-3 transition hover:border-orange-200 hover:bg-orange-50"
                        >

                          <div className="flex min-w-0 items-center gap-3">

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100">
                              <Package
                                size={18}
                                className="text-orange-500"
                              />
                            </div>

                            <div className="min-w-0">
                              <p className="truncate font-semibold text-gray-800">
                                {item.name}
                              </p>

                              <p className="text-xs text-gray-500">
                                Quantity: {item.quantity}
                              </p>
                            </div>

                          </div>

                          <p className="ml-3 font-bold text-gray-800">
                            ₹{item.price * item.quantity}
                          </p>

                        </div>
                      ))}

                    </div>

                    {/* 
                        STATUS PROGRESS
                  */}
                    {order.statusType === "current" && (
                      <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-4">

                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-sm font-bold text-gray-800">
                            Delivery Progress
                          </span>

                          <span className="text-xs font-semibold text-orange-500">
                            {order.status}
                          </span>
                        </div>

                        <div className="flex items-center">

                          {/* Confirmed */}
                          <div className="flex flex-1 items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                              <CheckCircle2 size={16} />
                            </div>

                            <div className="h-1 flex-1 bg-green-500" />
                          </div>

                          {/* Preparing */}
                          <div className="flex flex-1 items-center">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                order.status === "Preparing" ||
                                order.status === "Out For Delivery"
                                  ? "bg-orange-500 text-white"
                                  : "bg-gray-200 text-gray-400"
                              }`}
                            >
                              <Clock3 size={16} />
                            </div>

                            <div
                              className={`h-1 flex-1 ${
                                order.status === "Out For Delivery"
                                  ? "bg-orange-500"
                                  : "bg-gray-200"
                              }`}
                            />
                          </div>

                          {/* Delivery */}
                          <div className="flex flex-1 items-center">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                order.status === "Out For Delivery"
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-400"
                              }`}
                            >
                              <Bike size={16} />
                            </div>

                            <div
                              className={`h-1 flex-1 ${
                                order.status === "Out For Delivery"
                                  ? "bg-blue-500"
                                  : "bg-gray-200"
                              }`}
                            />
                          </div>

                          {/* Delivered */}
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              order.status === "Delivered"
                                ? "bg-green-500 text-white"
                                : "bg-gray-200 text-gray-400"
                            }`}
                          >
                            <MapPin size={16} />
                          </div>

                        </div>

                        <div className="mt-2 flex justify-between text-[10px] font-medium text-gray-400 sm:text-xs">
                          <span>Confirmed</span>
                          <span>Preparing</span>
                          <span>On Way</span>
                          <span>Delivered</span>
                        </div>

                      </div>
                    )}

                    {/* 
                        ACTION BUTTONS
                   */}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">

                      {/* Current */}
                      {order.statusType === "current" && (
                        <>
                          <Link
                            to="/track-order"
                            state={{
                              orderNumber: order.id,
                              estimatedTime: "20 - 30 mins",
                              status: order.status,
                              restaurant: order.restaurant,
                            }}
                            className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                          >
                            <Bike size={17} />
                            Track Order
                            <ChevronRight size={16} />
                          </Link>

                          <button
                            type="button"
                            onClick={() => cancelOrder(order.id)}
                            className="flex items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-3 text-sm font-bold text-red-500 transition hover:bg-red-50"
                          >
                            <XCircle size={17} />
                            Cancel Order
                          </button>
                        </>
                      )}

                      {/* Completed */}
                      {order.statusType === "completed" && (
                        <>
                          <button
                            type="button"
                            onClick={() => reorder(order)}
                            className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                          >
                            <RefreshCw size={17} />
                            Reorder
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              alert(
                                `Order #${order.id}\nRestaurant: ${order.restaurant}\nAmount: ₹${order.amount}`
                              )
                            }
                            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-orange-300 hover:text-orange-500"
                          >
                            View Details
                            <ChevronRight size={16} />
                          </button>
                        </>
                      )}

                      {/* Cancelled */}
                      {order.statusType === "cancelled" && (
                        <>
                          <button
                            type="button"
                            onClick={() => reorder(order)}
                            className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                          >
                            <RefreshCw size={17} />
                            Order Again
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              alert(
                                `Cancelled Order #${order.id}`
                              )
                            }
                            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                          >
                            View Details
                          </button>
                        </>
                      )}

                    </div>

                  </div>
                </article>
              );
            })
          )}

        </section>

        {/* 
            BOTTOM CTA
         */}
        <section className="mt-10 rounded-3xl bg-gray-900 p-6 text-white shadow-xl sm:p-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <div className="flex items-center gap-2">
                <ShoppingBag
                  size={20}
                  className="text-orange-400"
                />

                <span className="font-bold text-orange-400">
                  Hungry Again?
                </span>
              </div>

              <h2 className="mt-2 text-2xl font-extrabold">
                Discover something delicious.
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Explore restaurants and order your favourite food.
              </p>
            </div>

            <Link
              to="/restaurants"
              className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-bold transition hover:bg-orange-600"
            >
              Explore Restaurants
              <ChevronRight size={18} />
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}

export default Orders;