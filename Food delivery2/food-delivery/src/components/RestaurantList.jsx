import { Star, Clock, MapPin, Bike } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    cuisine: "Pizza • Italian",
    rating: 4.8,
    delivery: "25-30 min",
    location: "Ahmedabad",
    price: "₹250 for one",
    offer: "50% OFF",
  },
  {
    id: 2,
    name: "Burger Hub",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaHVlw-8f4c3WB6Me8Ofeq8Hswi4lzWRtMdJcx-S0MA&s=10",
    cuisine: "Burger • Fast Food",
    rating: 4.6,
    delivery: "20-25 min",
    location: "Satellite",
    price: "₹180 for one",
    offer: "Buy 1 Get 1",
  },
  {
    id: 3,
    name: "Royal Thali",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    cuisine: "Gujarati • Thali",
    rating: 4.9,
    delivery: "30-35 min",
    location: "CG Road",
    price: "₹300 for one",
    offer: "30% OFF",
  },
  {
    id: 4,
    name: "Chinese Express",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    cuisine: "Chinese • Noodles",
    rating: 4.7,
    delivery: "22-28 min",
    location: "Maninagar",
    price: "₹220 for one",
    offer: "Free Delivery",
  },
  {
    id: 5,
    name: "South Spice",
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    cuisine: "South Indian",
    rating: 4.5,
    delivery: "18-24 min",
    location: "Navrangpura",
    price: "₹200 for one",
    offer: "40% OFF",
  },
  {
    id: 6,
    name: "Sweet Heaven",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800",
    cuisine: "Desserts",
    rating: 4.9,
    delivery: "15-20 min",
    location: "Vastrapur",
    price: "₹150 for one",
    offer: "Flat ₹100 OFF",
  },
  {
    id: 7,
    name: "Tandoori Treats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4DIa8FW2nJzzpykhx0nwSZYxvQEsQQxuJNVNLkkH9qQ&s=10",
      cuisine: "North Indian • Tandoori",
      delivery: "28-35 min",
      rating: 4.7,
      location: "Bodakdev",
      price: "₹280 for one",
      offer: "20% OFF",
  },
  {
    id: 8,
    name: "Pasta Paradise",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdRQ8jomV370tV0QEQX4izdINeFv5ep0jMrTjr-AdDw&s=10",
    cuisine: "Italian • Pasta",
    rating: 4.6,
    delivery: "25-30 min",
    location: "Prahlad Nagar",
    price: "₹270 for one",
    offer: "Free Dessert",
  },
  {
    id: 9,
    name: "Sushi World",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFTBY0YOKjitnzICuox_xXO4xZR3YD1rgl_MXTwQ5EQ&s=10",
    cuisine: "Japanese • Sushi",
    rating: 4.8,
    delivery: "30-40 min",
    location: "Bodakdev",
    price: "₹350 for one",
    offer: "15% OFF",
  },
  


];

function RestaurantList() {
  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold">
            🍽 Popular Restaurants
          </h2>

          <p className="text-gray-500 mt-2">
            Discover the best restaurants near you.
          </p>
        </div>

        <div className="hidden lg:flex bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
          {restaurants.length} Restaurants
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 hover:-translate-y-3"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover group-hover:scale-110 duration-500"
              />

              <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                {item.offer}
              </div>

              <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="font-semibold">{item.rating}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">

              <h3 className="text-2xl font-bold mb-2">
                {item.name}
              </h3>

              <p className="text-gray-500 mb-5">
                {item.cuisine}
              </p>

              <div className="space-y-3 text-gray-600">

                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-orange-500" />
                  <span>{item.delivery}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-red-500" />
                  <span>{item.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Bike size={18} className="text-green-500" />
                  <span>{item.price}</span>
                </div>

              </div>

              <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
                View Restaurant
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RestaurantList;