import { motion } from "framer-motion";
import {
  Star,
  Clock3,
  MapPin,
  Bike,
  Heart,
  ArrowRight,
} from "lucide-react";

function RestaurantCart({ restaurant }) {
  // Prevent error if restaurant is undefined
  if (!restaurant) {
    return null;
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl duration-300"
    >
      {/* Offer Badge */}
      <div className="absolute left-4 top-4 z-20 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
        {restaurant.offer}
      </div>

      {/* Favourite */}
      <button className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2 shadow-lg transition hover:bg-red-500 hover:text-white">
        <Heart size={18} />
      </button>

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-md">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="font-bold">{restaurant.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {restaurant.name}
          </h2>

          <p className="mt-1 text-gray-500">
            {restaurant.cuisine}
          </p>
        </div>

        <div className="grid gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock3 size={18} className="text-orange-500" />
            <span>{restaurant.delivery}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-red-500" />
            <span>{restaurant.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Bike size={18} className="text-green-500" />
            <span>{restaurant.price}</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t pt-5">
          <div>
            <p className="text-sm text-gray-500">Delivery</p>

            <p className="font-bold text-orange-500">
              {restaurant.delivery}
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
            View Menu
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default RestaurantCart;