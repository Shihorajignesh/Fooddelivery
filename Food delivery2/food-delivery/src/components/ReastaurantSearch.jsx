import { Search, MapPin } from "lucide-react";

function RestaurantSearch() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">

        {/* Search Input */}
        <div className="relative flex-1">
          <Search
            size={21}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search restaurants, food..."
            className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Location */}
        <div className="relative md:w-100">
          <MapPin
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Enter your location"
            className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Search Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition duration-300">
          Search
        </button>

      </div>
    </div>
  );
}

export default RestaurantSearch;