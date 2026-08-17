import { useState } from "react";
import {
  Leaf,
  Drumstick,
  Star,
  MapPin,
  Tag,
  X,
} from "lucide-react";

function RestaurantFilter() {
  const [activeFilters, setActiveFilters] = useState([]);

  const filters = [
    { 
      id: "veg",
      name: "Veg",
      icon: <Leaf size={18} />,
    },
    {
      id: "nonveg",
      name: "Non Veg",
      icon: <Drumstick size={18} />,
    },
    {
      id: "rating",
      name: "4★+ Rating",
      icon: <Star size={18}  />,
    },
    {
      id: "nearby",
      name: "Nearby",
      icon: <MapPin size={18} />,
    },
    {
      id: "offers",
      name: "Offers",
      icon: <Tag size={18} />,
    },
  ];

  const toggleFilter = (id) => {
    if (activeFilters.includes(id)) {
      setActiveFilters(activeFilters.filter((item) => item !== id));
    } else {
      setActiveFilters([...activeFilters, id]);
    }
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 mb-8 ">
      <div className="flex flex-wrap items-center gap-35">

        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300
            ${
              activeFilters.includes(filter.id)
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-orange-100"
            }`}
          >
            {filter.icon}
            {filter.name}
          </button>
        ))}

        {activeFilters.length > 0 && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
          >
            <X size={18} />
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default RestaurantFilter;