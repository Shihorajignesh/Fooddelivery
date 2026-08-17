import { ArrowUpDown } from "lucide-react";
import { useState } from "react";

function RestaurantSort() {
  const [sort, setSort] = useState("");

  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      {/* Left */}
      <div className="flex items-center gap-2">
        <ArrowUpDown className="text-orange-500" size={22} />
        <h2 className="text-xl font-semibold">
          Sort Restaurants
        </h2>
      </div>

      {/* Right */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="">Sort By</option>
        <option value="rating">⭐ Rating</option>
        <option value="delivery">🚚 Delivery Time</option>
        <option value="lowPrice">💰 Price: Low to High</option>
        <option value="highPrice">💎 Price: High to Low</option>
        <option value="popular">🔥 Most Popular</option>
        <option value="newest">🆕 Newest</option>
      </select>

    </div>
  );
}

export default RestaurantSort;