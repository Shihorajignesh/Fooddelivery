
import React, { useMemo, useState } from "react";


import {
  Search as SearchIcon,
  MapPin,
  Star,
  Clock3,
  ShoppingBag,
  Store,
  X,
} from "lucide-react";
import { useSearch } from "../contexts/SearchContext";



// Food Data
const foods = [
  {
    id: 1,
    name: "Margherita Pizza",
    restaurant: "Domino's Pizza",
    category: "Pizza",
    price: 249,
    rating: 4.7,
    time: "25 min",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
  },
  {
    id: 2,
    name: "Cheese Burger",
    restaurant: "Burger King",
    category: "Burger",
    price: 199,
    rating: 4.5,
    time: "20 min",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    restaurant: "Domino's Pizza",
    category: "Pizza",
    price: 349,
    rating: 4.8,
    time: "30 min",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800",
  },
  {
    id: 4,
    name: "Classic Veg Burger",
    restaurant: "Burger House",
    category: "Burger",
    price: 149,
    rating: 4.4,
    time: "18 min",
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800",
  },
  {
    id: 5,
    name: "Farmhouse Pizza",
    restaurant: "Domino's Pizza",
    category: "Pizza",
    price: 299,
    rating: 4.6,
    time: "28 min",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
  },
];

// Restaurant Data
const restaurants = [
  {
    id: 1,
    name: "Domino's Pizza",
    cuisine: "Pizza, Italian, Fast Food",
    rating: 4.6,
    time: "25-30 min",
    location: "Near City Center",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800",
  },
  {
    id: 2,
    name: "Burger King",
    cuisine: "Burger, Fast Food",
    rating: 4.5,
    time: "20-25 min",
    location: "Main Road",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
  },
  {
    id: 3,
    name: "Pizza Hut",
    cuisine: "Pizza, Italian",
    rating: 4.4,
    time: "30-35 min",
    location: "Ring Road",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
  },
];

function Searchsection() {
  const {
    searchQuery,
    setSearchQuery,
    clearSearch,
  } = useSearch();

  const [activeTab, setActiveTab] = useState("Foods");

  const search = searchQuery || "";

  // Search Logic
  const filteredFoods = useMemo(() => {
    if (!search.trim()) return foods;

    return foods.filter(
      (food) =>
        food.name.toLowerCase().includes(search.toLowerCase()) ||
        food.restaurant.toLowerCase().includes(search.toLowerCase()) ||
        food.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredRestaurants = useMemo(() => {
    if (!search.trim()) return restaurants;

    return restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSuggestion = (value) => {
    setSearchQuery(value);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-orange-500 via-orange-600 to-red-600 px-4 py-16">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            🍕 Find Your Favourite Food
          </span>

          <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
            Search Anything
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-orange-100">
            Search for your favourite foods, restaurants, pizzas, burgers and
            more.
          </p>

          {/* SEARCH BAR */}
          <div className="mx-auto mt-8 flex max-w-3xl items-center rounded-2xl bg-white p-2 shadow-2xl">
            <SearchIcon className="ml-4 h-6 w-6 text-gray-400" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pizza, burger, Domino's..."
              className="w-full bg-transparent px-4 py-4 text-lg text-gray-800 outline-none"
            />

            {search && (
              <button
                onClick={clearSearch}
                className="mr-2 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            )}

            <button
              onClick={() => setSearchQuery(searchQuery)}
              className="rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Search
            </button>
          </div>

          {/* QUICK SEARCH */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["Pizza", "Burger", "Dominos", "Biryani", "Gujarati"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => handleSuggestion(item)}
                  className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-orange-600"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        {/* RESULT HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Search Result
            </p>

            <h2 className="mt-1 text-3xl font-black text-gray-900">
              {search ? `Results for "${search}"` : "Popular Results"}
            </h2>

            <p className="mt-2 text-gray-500">
              {activeTab === "Foods"
                ? `${filteredFoods.length} foods found`
                : `${filteredRestaurants.length} restaurants found`}
            </p>
          </div>

          {/* TABS */}
          <div className="flex rounded-xl bg-white p-1 shadow-md">
            <button
              onClick={() => setActiveTab("Foods")}
              className={`flex items-center gap-2 rounded-lg px-5 py-3 font-semibold transition ${
                activeTab === "Foods"
                  ? "bg-orange-500 text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ShoppingBag size={18} />
              Foods
            </button>

            <button
              onClick={() => setActiveTab("Restaurants")}
              className={`flex items-center gap-2 rounded-lg px-5 py-3 font-semibold transition ${
                activeTab === "Restaurants"
                  ? "bg-orange-500 text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Store size={18} />
              Restaurants
            </button>
          </div>
        </div>

        {/* FOOD RESULTS */}
        {activeTab === "Foods" && (
          <>
            {filteredFoods.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredFoods.map((food) => (
                  <div
                    key={food.id}
                    className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-bold text-orange-600 shadow">
                        {food.category}
                      </div>

                      <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-lg bg-green-600 px-2 py-1 text-sm font-bold text-white">
                        <Star size={14} fill="currentColor" />
                        {food.rating}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900">
                        {food.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {food.restaurant}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-black text-orange-600">
                          ₹{food.price}
                        </span>

                        <span className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock3 size={15} />
                          {food.time}
                        </span>
                      </div>

                      <button className="mt-5 w-full rounded-xl bg-orange-500 py-3 font-bold text-white transition hover:bg-orange-600">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState search={search} />
            )}
          </>
        )}

        {/* RESTAURANT RESULTS */}
        {activeTab === "Restaurants" && (
          <>
            {filteredRestaurants.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredRestaurants.map((restaurant) => (
                  <div
                    key={restaurant.id}
                    className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute right-4 top-4 flex items-center gap-1 rounded-lg bg-green-600 px-3 py-2 font-bold text-white">
                        <Star size={15} fill="currentColor" />
                        {restaurant.rating}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-black text-gray-900">
                        {restaurant.name}
                      </h3>

                      <p className="mt-2 text-gray-500">
                        {restaurant.cuisine}
                      </p>

                      <div className="mt-4 space-y-2 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <Clock3 size={17} className="text-orange-500" />
                          {restaurant.time}
                        </p>

                        <p className="flex items-center gap-2">
                          <MapPin size={17} className="text-orange-500" />
                          {restaurant.location}
                        </p>
                      </div>

                      <button className="mt-5 w-full rounded-xl bg-orange-500 py-3 font-bold text-white transition hover:bg-orange-600">
                        View Restaurant
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState search={search} />
            )}
          </>
        )}
      </section>
    </div>
  );
}

// EMPTY STATE
function EmptyState({ search }) {
  return (
    <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
        <SearchIcon className="h-10 w-10 text-orange-500" />
      </div>

      <h3 className="mt-6 text-2xl font-black text-gray-900">
        No Results Found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-gray-500">
        We couldn't find anything for{" "}
        <span className="font-bold text-orange-500">
          "{search}"
        </span>
        . Try searching for Pizza, Burger or Domino's.
      </p>
    </div>
  );
}

export default Searchsection;
