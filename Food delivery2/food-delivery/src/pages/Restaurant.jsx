import RestaurantFilter from "../components/RestaurantFilter";
import RestaurantSort from "../components/RestaurantSort";
import RestaurantList from "../components/RestaurantList";
import RestaurantCart from "../components/ReasturantCart";
import RestaurantSearch from "../components/ReastaurantSearch";

function Restaurant() {
  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">
            🍽 Restaurants
          </h1>

          <p className="text-gray-500 mt-3">
            Find your favourite restaurant and order delicious food.
          </p>
        </div>

        {/* Search */}
        <RestaurantSearch />

        {/* Filter */}
        <RestaurantFilter />

        <RestaurantCart />

        {/* Sort */}
        <RestaurantSort />

        {/* Restaurant List */}
        <RestaurantList />

      </div>
    </section>
  );
}

export default Restaurant;