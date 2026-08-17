import { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter a food name!");
      return;
    }

    alert(`Searching for: ${search}`);
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('/photo-1504674900247-0877df9cc836.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white w-full">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Delicious Food <br />
          <span className="text-orange-500">
            Delivered Fast
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl">
          Order your favorite meals from the best restaurants near you.
          Fresh, hot, and delivered to your doorstep in minutes.
        </p>

        {/* Search Box */}
        <div className="mt-10 flex w-full max-w-2xl overflow-hidden rounded-full bg-white/95 backdrop-blur-lg shadow-2xl border border-white/30">

          <input
            type="text"
            placeholder="Search Burger, Pizza, Pasta..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="flex-1 min-w-0 px-6 py-4 text-gray-800 outline-none text-lg"
          />

          <button
            type="button"
            onClick={handleSearch}
            className="bg-orange-500 hover:bg-orange-600 px-6 md:px-8 text-white font-bold transition-all duration-300"
          >
            🔍 Search
          </button>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">

          {/* Order Now */}
          <Link
            to="/cart"
            className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Order Now
          </Link>

          {/* View Menu */}
          <Link
            to="/restaurants"
            className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            View Menu
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;