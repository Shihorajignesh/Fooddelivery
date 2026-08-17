import { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa6";
import { RiDrinks2Fill } from "react-icons/ri";
import { PiHamburgerFill } from "react-icons/pi";
import { MdOutlineFoodBank, MdRamenDining } from "react-icons/md";
import { TiSortAlphabetically } from "react-icons/ti";
import { GiNoodles, GiCakeSlice } from "react-icons/gi";

function Category() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { id: 1, name: "All", icon: <TiSortAlphabetically /> },
    { id: 2, name: "Pizza", icon: <FaPizzaSlice /> },
    { id: 3, name: "Burger", icon: <PiHamburgerFill /> },
    { id: 4, name: "Chinese", icon: <GiNoodles /> },
    { id: 5, name: "Gujarati", icon: <MdOutlineFoodBank /> },
    { id: 6, name: "South Indian", icon: <MdRamenDining /> },
    { id: 7, name: "Dessert", icon: <GiCakeSlice /> },
    { id: 8, name: "Drinks", icon: <RiDrinks2Fill /> },
  ];
  const foods = [
    { id: 1, name: "Margherita Pizza", category: "Pizza", price: "₹299", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
    { id: 2, name: "Pepperoni Pizza", category: "Pizza", price: "₹399", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyWkZfaa6u1UlpO8DMsBDRWTN3wXTfFJ4vjL6bhNmiQ&s=10" },
    { id: 3, name: "Cheese Burger", category: "Burger", price: "₹199", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM31BGaiq2A-ztUbGVNdyFwhCCpzYfDMIEVVI8RxaQuA&s=10" },
    { id: 4, name: "Veg Burger", category: "Burger", price: "₹149", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500" },
    { id: 5, name: "Hakka Noodles", category: "Chinese", price: "₹249", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500" },
    { id: 6, name: "Gujarati Thali", category: "Gujarati", price: "₹350", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500" },
    { id: 7, name: "Masala Dosa", category: "South Indian", price: "₹180", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500" },
    { id: 8, name: "Chocolate Cake", category: "Dessert", price: "₹220", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" },
    
  ];

  const [selected, setSelected] = useState("All");

  const filteredFoods =
    selected === "All"
      ? foods
      : foods.filter((food) => food.category === selected);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-10">
          🍽️ Explore Categories
        </h2>

        {/* Horizontal Scroll */}
        <div className="flex gap-12 overflow-x-auto pb-4 scrollbar-hide">

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelected(cat.name)}
              className={`min-w-fit px-6 py-3 rounded-full font-semibold transition-all duration-300
              ${
                selected === cat.name
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-orange-100"
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}

        </div>

        {/* Food Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">

          {filteredFoods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">{food.name}</h3>

                <p className="text-orange-500 font-bold mt-2">
                  {food.price}
                </p>

                <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Category;