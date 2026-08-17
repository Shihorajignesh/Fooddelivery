import { useState } from "react";

function PopularFoods() {
  const foods = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 299,
      rating: 5,
      restaurant: "Pizza Hut",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
    {
      id: 2,
      name: "Cheese Burger",
      price: 199,
      rating: 4.8,
      restaurant: "Burger King",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxSv76_3d4__bXrCFLvkIdkPVCuFVB0q3pSsvkLJSaQ&s=10",
    },
    {
      id: 3,
      name: "Veg Biryani",
      price: 249,
      rating: 4.9,
      restaurant: "Biryani House",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    },
    {
      id: 4,
      name: "Masala Dosa",
      price: 179,
      rating: 4.7,
      restaurant: "South Express",
      image:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600",
    },
    {
      id: 5,
      name: "Paneer Tikka",
      price: 279,
      rating: 4.9,
      restaurant: "Punjab Grill",
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600",
    },
    {
      id: 6,
      name: "Cold Coffee",
      price: 149,
      rating: 4.6,
      restaurant: "Cafe Coffee Day",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
    alert(`${food.name} added to cart`);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            🔥 Popular Foods
          </h2>

          <p className="text-orange-500 font-semibold">
            Cart: {cart.length}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold">
                  {food.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  {food.restaurant}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-orange-500">
                    ₹{food.price}
                  </span>

                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
                    ⭐ {food.rating}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(food)}
                  className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition duration-300"
                >
                  🛒 Add to Cart
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularFoods;